import { useContext, useState } from "react";
import { StyledButtons } from "../../global/styles";
import { ContainerButtons, ContainerSubTasks, ModalContainer, Step, StyledModal, SubTasks } from "./styles";
import { Context } from "../../context/context";
import api from "../../api/api";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function NewTasks({ getData }) {
  const navigate = useNavigate();
  const { modalOn, setModalOn } = useContext(Context);
  const { ["userId"]: id } = parseCookies();
  const [task, setTask] = useState("");
  const [subTasks, setSubtasks] = useState([]);
  const [valueSubTask, setValueSubTask] = useState("");

  function insertSubTask(subTask){
    const newSubTask = [...subTasks];
    newSubTask.unshift({"subtask":subTask, "checked":true});
    setSubtasks(newSubTask);
    setValueSubTask("");
  }

  async function handleNewTask() {
    try {
      const { data } = await api.post("/task", {
        tarefa: task,
        checked: false,
        userId: Number(id),
      });

      const requests = subTasks.map( task => {
        return api.post("/subtask", {
          subtarefa: task.subtask,
          checked: task.checked,
          taskId: Number(id),  
        });
      });

      await Promise.all(requests);

      toast.success("Tarefa criada com sucesso", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTask("");
      getData();
      setModalOn(false);
    } catch (error) {
      navigate("/login");
      toast.error("Erro desconhecido", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <StyledModal display={modalOn ? "flex" : "none"}>
      <ModalContainer>
        <textarea
          placeholder="Insira nova tarefa"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        ></textarea>
        <p>Defina subtarefas</p>
     
         <Step>
          <textarea placeholder="Passo 1" onChange={(e) => setValueSubTask(e.target.value)} value={valueSubTask}></textarea> 
          <StyledButtons>
           <FaPlus onClick={() => insertSubTask(valueSubTask)} />
          </StyledButtons>
         </Step>

         <ContainerSubTasks>
          {
            subTasks.map((task, index) => (
              <SubTasks key={index}>
                <input type="checkbox"  name="" id="" />
                <p>{task.subtask}</p>
                <StyledButtons><FaPlus/></StyledButtons>
              </SubTasks>
            ))
          }
         </ContainerSubTasks>

        <ContainerButtons>
          <StyledButtons onClick={() => setModalOn(false)}>
            Cancelar
          </StyledButtons>
          {task && <StyledButtons onClick={handleNewTask}>Criar</StyledButtons>}
        </ContainerButtons>
      </ModalContainer>
    </StyledModal>
  );
}

export default NewTasks;
