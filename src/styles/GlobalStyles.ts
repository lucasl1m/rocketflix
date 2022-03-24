import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;

        @media (max-width: 1024px) {
            font-size: 14px;
        }

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }
    
    html {
        width: 100vw;
        height: 100%;
        background: var(--background);
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Poppins', sans-serif;
      }

    :root {
      --title: #fffcf9;
      --subtitle: #b3b3b3;
        
      --background: linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%);
    }
`;
