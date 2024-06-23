import styled from 'styled-components'

import variaveis from '../../Styles/variaveis'

const StyloForm = styled.form`
  padding: 40px;
  margin: 20px 80px;
  background-color: ${variaveis.FormBackground};
  max-width: 60%;
  height: 400px;
  border-radius: 8px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
  }

  label {
    color: #fff;
    font-size: 24px;
  }

  input {
    margin: 8px 0;
    max-width: 300px;
    height: 30px;
    font-size: 20px;
  }

  button {
    width: 200px;
    height: 30px;
    font-size: 24px;
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    cursor: pointer;

    &:hover {
      background: green;
      color: #fff;
      border: none;
      border-radius: 8px;
    }
  }
`
export default StyloForm
