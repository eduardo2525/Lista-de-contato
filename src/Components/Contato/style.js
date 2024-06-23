import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

const StyleContainer = styled.div`
  padding: 40px;
  margin: 20px 80px;
  background-color: ${variaveis.FormBackground};
  max-width: 80%;
  height: 300px;
  border-radius: 8px;

  ul {
    width: 100%;
    height: 200px;
    list-style: none;
    gap: 5px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  li {
    width: 90%;
    height: 100%;
    border: 1px solid;
    font-size: 24px;
    padding: 10px;
    gap: 10px;
    color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .lista__contato {
    width: 400px;
    display: flex;
    flex-direction: column;
  }

  .lista__delete {
    width: 100px;
    display: flex;
    align-items: center;
  }
`

export default StyleContainer
