import styled from "styled-components";

export const ContainerTasks = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 460px) {
    padding: 0px 0px;
  }
`;

export const SubContainerTasks = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
`;

export const StyledTasks = styled.div`
  border-radius: 5px;
  display: flex;
  width: 100%;
  box-shadow: 1px 1px 3px #32c98840;
  border: 1px solid #32c98840;
  transition: all 0.4s;
  align-items: center;
  padding: 0px 4px;
  background-color: ${(props) => props.background};

  &:hover {
    box-shadow: 1px 1px 3px #32c980;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 5px;
  width: 100%;
  padding: 0px 5px;

  p {
    width: 100%;
    text-align: left;
    text-decoration: ${(props) => props.textstyle};
  }
`;

export const StyledMsg = styled.div`
  border-radius: 5px;
  display: flex;
  width: 100%;
  box-shadow: 1px 1px 3px #32c98840;
  border: 1px solid #32c98840;
  transition: all 0.4s;
  align-items: center;
  padding: 0px 4px;

  p {
    text-align: center;
    width: 100%;
  }
`;

export const ModalDelete = styled.div`
  width: 300px;
  height: 120px;
  background-color: #172534;
  position: absolute;
  top: 130px;
  display: ${(props) => props.display};

  p {
    color: #fff;
    text-align: center;
  }
`;

export const ContainerButtonsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;


export const ModalContainerSyled = styled.div`
  background-color: #172534;
  position:absolute;
  border-radius:10px;

  top:100px;
  height:150px;
  width:380px;
  padding:5px;
  display:${(props) => props.display};
  flex-direction:column;
  gap:10px;
  align-items:center;
  


  textarea{
    height:120px;
    background-color: transparent;
    color: #32c870;
    border-radius: 10px;
    border:1px solid #32c98840 ;
    width: 100%;
  }
  
`;