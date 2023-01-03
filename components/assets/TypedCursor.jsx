import styled from "styled-components";

export const TypedCursor = () => {
  const TypedCursorOn = styled.h1`
    display: block;
    white-space: nowrap;
    border-right: 8px solid;
    width: 13ch;
    animation: typing 3s steps(11), blink .5s infinite step-end alternate;
    overflow: hidden;
    @keyframes typing {
      from {
        width: 0;
      }
    }
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  `;

  return(
  
    <TypedCursorOn>&nbsp;&nbsp;Desarrollador</TypedCursorOn>
  
  )
};
