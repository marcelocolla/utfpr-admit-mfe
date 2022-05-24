type PessoaProps = {
  nome_pessoa: string
}

type AlunoProps = {
  id_aluno: number
  id_pessoa: number
  ra_aluno: string
  Pessoa: PessoaProps
}

export type LiberacaoProps = {
  id_liberacao: number
  data_inicio: string
  data_fim: string
  Aluno: AlunoProps
  pessoaCadastro?: PessoaProps
}
