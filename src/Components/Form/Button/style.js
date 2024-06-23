import styled from 'styled-components'
import { Link } from 'react-router-dom'

import variaveis from '../../../Styles/variaveis'

const StyleButton = styled(Link)`
  color: ${variaveis.ColorButtons};
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;
`
export default StyleButton
