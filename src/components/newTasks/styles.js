import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  position: absolute;
  display: ${(props) => props.display};
  transition: all 0.4s;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background-color: #172534;
  position:absolute;
  height:auto;
  max-height: 500px;
  width:100%;
  max-width:700px;
  padding: 10px;
  border-radius:10px;
  padding:15px;
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items:center;


  textarea {
    height:80px;
    background-color: transparent;
    color: #32c870;
    border-radius: 10px;
    border:1px solid #32c98840 ;
    width: 100%;
    padding: 10px;
    resize: none;

    &:focus{
      outline: none;
      border: none;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Step = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 gap: 10px;

 textarea {
    height:120px;
    background-color: transparent;
    color: #32c870;
    border-radius: 10px;
    border:1px solid #32c98840 ;
    width: 100%;
    padding: 10px;
    height: 40px;

    &:focus{
      outline: none; 
      border: none;
    }
  }
  
`;

export const ContainerSubTasks = styled.div`
  display:flex;
  align-self: flex-start;
  gap:10px;
  width:100%;
  max-width: 650px;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-y: auto;

  
`;

export const SubTasks = styled.label`
  display:flex;
  align-items: center;
  justify-content: space-between;
  gap:10px;
  width:100%;
  border-bottom: 1px solid #32c98840;

  
  p{
   width: 100%;
  }
`;