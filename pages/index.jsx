import Image from "next/image";
import styled from "styled-components";
import NightLife from "../public/img/nightlife.gif";
import { Navbar } from "../components/Navbar";
import { TypedCursor } from "../components/assets/TypedCursor";

const BgMain = styled.div`
  img {
    height: 100vh;
    width: 100%;
    z-index: -1000;
    position: absolute;
    object-fit: cover;
  }
`;

const TitleTypedCursor = styled.div`
  width: 100%;
  padding-left: 4vw;
  margin-top: 30vh;

  h1 {
    color: #fff;
    margin: 0;
  }
`;

export default function Home() {
  return (
    <BgMain>
      <Image src={NightLife} alt="bg" />
      <Navbar />
      <TitleTypedCursor>
        <h1>Roger Jiménez</h1>
        <TypedCursor />
      </TitleTypedCursor>
    </BgMain>
  );
}
