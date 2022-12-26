import React, { useRef } from "react";
import Router from "next/router";
import emailjs from "@emailjs/browser";
import { MainLayout } from "../components/layouts/MainLayout";
import Swal from "sweetalert2";
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
            text: `Recibido 
            ${usuarioform.name} Gracias por tu mensaje te respondere a
            ${usuarioform.email} en la brevedad posible`,
            icon: "success",
            confirmButtonText: "Aceptar",
          });

          Router.push(redirectTo)

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

  return (
    <MainLayout>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </MainLayout>
  );
};

export default ContactUs