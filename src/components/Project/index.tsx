import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, ButtonLink } from './styles'

const Project = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefas</Title>
      <Paragraph type="secondary">Lista de tarefas feita com VueJS</Paragraph>
      <ButtonLink>Visualizar</ButtonLink>
    </Card>
  )
}

export default Project
