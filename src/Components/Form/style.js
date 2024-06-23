import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

const StyleForm = styled.form`
  padding: 40px;
  margin: 20px 80px;
  background-color: ${variaveis.FormBackground};
  max-width: 80%;
  height: 150px;
  border-radius: 8px;

  .container__form {
    width: 60%;
    display: flex;
    justify-content: space-around;
  }

  h2 {
    color: ${variaveis.Title};
  }

  .container__search {
    display: flex;
    max-width: 80%;
    height: 40px;
    background: ${variaveis.BackgroundIntpu};
    border-radius: 8px;
  }
`

export default StyleForm
