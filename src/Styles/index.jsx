import { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${variaveis.Background};
    }

    main {
      margin: 0 auto;
      max-width: 1366px;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .container {
      width: 80%;
      height: 70%;
      border-radius: 50px;
      background-color: ${variaveis.Container};
    }
`
export default EstiloGlobal
