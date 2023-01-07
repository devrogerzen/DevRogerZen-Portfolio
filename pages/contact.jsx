import React, { useRef } from "react";
import Router from "next/router";
import emailjs from "@emailjs/browser";
import { MainLayout } from "../components/layouts/MainLayout";
import Swal from "sweetalert2";
import styled from "styled-components";
const redirectTo = "/";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ysh1e6l",
        "template_tsrzecv",
        form.current,
        "F4qdV9AuCwVIQHSza"
      )
      .then(
        (result) => {
          console.log(result.text);

          Swal.fire({
            title: "Enviado!",
            text: `Recibido ${usuarioform.name} Gracias por tu mensaje te respondere a ${usuarioform.email} en la brevedad posible`,
            icon: "success",
            confirmButtonText: "Aceptar",
          });

          Router.push(redirectTo);

          /* accion
          swall con animacion 
          link a inicio o a alguna pagina  */
        },
        (error) => {
          console.log(error.text);
        }
      );

    let usuarioform = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      message: e.target.message.value,
    };

    console.log(usuarioform);
  };

  const ContainerForm = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cfcfcf;
    display: flex;
    justify-content: center;
    padding-top: 10vh;

    form {
      background-color: cadetblue;
      width: 400px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 0.4rem solid;
      border-radius: 25px;
      input {
        width: 80%;
        border: 2px solid;
        margin-bottom: 30px;
        padding: 10px;
        border-radius: 10px;
      }
      textarea {
        width: 80%;
        padding: 10px;
        border: 2px solid;
        margin-bottom: 30px;
        border-radius: 10px;
      }
      button {
        border-radius: 25px;
        width: 50%;
        height: 40px;
        transition: 1s;
        &:hover {
          background-color: #339cff;
          transition: 1s;
          scale: 1.1;
        }
      }
    }
  `;

  return (
    <MainLayout>
      <ContainerForm>
        <form ref={form} onSubmit={sendEmail}>
          <input required placeholder="Nombre" type="text" name="user_name" />
          <input required placeholder="Email" type="email" name="user_email" />
          <textarea
            required
            placeholder="Escribeme tu mensaje Aquí"
            name="message"
            rows="7"
          />
          <button type="submit" value="Send">
            <strong>Enviar</strong>
          </button>
        </form>
      </ContainerForm>
    </MainLayout>
  );
};

export default ContactUs;
