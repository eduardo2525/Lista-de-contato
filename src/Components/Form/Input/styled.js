import styled from 'styled-components'
import variaveis from '../../../Styles/variaveis'

const StyleInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${variaveis.BackgroundIntpu};
  font-size: 24px;
  color: #fff;
  margin-left: 10px;

  &::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`

export default StyleInput
