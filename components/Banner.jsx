import Image from "next/image";
import styled from "styled-components";
import LogoDrogerZen from "../public/logodrogerz.png";

export function Banner() {
  const Banner_img = styled.div`
    width: 100%;
    min-height: 25vh;
    background-color: #fcfcfc;
    color: #000;
    h1,
    h2,
    h3,
    p {
      margin: 0;
      padding: 0;
    }
    p {
      font-weight: 500;
    }
  `;

  const Banner_background = styled.div`
    width: 100%;
    min-height: 25vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
  `;

  const Banner_info = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding-left: 20px;
  `;

  const Banner_text = styled.div`
    display: flex;
    align-items: baseline;
  `;

  return (
    <Banner_img>
      <Banner_background>
        <Image src={LogoDrogerZen} alt="Logo" width={200} height={200} />
        <Banner_info>
          <Banner_text>
            <h1>C</h1>
            <h3>onstruyo cosas para la web</h3>
          </Banner_text>
          <Banner_text>
          <h1>P</h1>
          <h2>ortafolio DevRogerZen Colecciones</h2>
          </Banner_text>
          <p>
            Soy un Desarrollador Web FullStack que se especializa en crear (y
            ocasionalmente diseñar) experiencias digitales excepcionales.
            Actualmente, estoy centrado en la creación de productos accesibles
            centrados en mejorar la facilidad comercial ser humano.
          </p>
        </Banner_info>
      </Banner_background>
    </Banner_img>
  );
}
