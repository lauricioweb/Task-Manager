import { createContext, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import { setCookie } from "nookies";

const Context = createContext();
/*eslint-disable */
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [modalOn, setModalOn] = useState(false);

  async function handleLogin(event, email, password) {
    event.preventDefault();
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      if (response) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 12 * 60 * 60 * 1000);

        setCookie(undefined, "userToken", response.data.token, {
          expires: expirationDate,
          path: "/",
        });

        setCookie(undefined, "userId", response.data.id, {
          expires: expirationDate,
          path: "/",
        });

        setCookie(undefined, "userNome", response.data.nome, {
          expires: expirationDate,
          path: "/",
        });

        setCookie(undefined, "userEmail", response.data.email, {
          expires: expirationDate,
          path: "/",
        });

        window.location.href = "/";
        toast.success(`seja bem vindo(a) ${response.data.nome}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      position: "top-center",
        toast.error("Email ou senha incorretos", {
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
    <Context.Provider
      value={{ handleLogin, user, setUser, modalOn, setModalOn }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
