import { FormEvent, useState } from 'react'

import { FormEstilo, BtnPesquisarEstilo, CampoEstilo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormEstilo onSubmit={aoEnviarForm}>
      <CampoEstilo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisarEstilo type="submit">Pesquisar</BtnPesquisarEstilo>
    </FormEstilo>
  )
}
export default FormVagas
