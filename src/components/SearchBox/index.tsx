import { FocusEvent } from 'react'
import { Input } from '../Input'

import {
  Quantity,
  SearchBoxContainer,
  SearchBoxForm,
  SearchBoxHeader,
  Title,
} from './styles'

interface SearchBoxProps {
  searchPosts: (event: FocusEvent<HTMLInputElement>) => void
  numberItens: number
}
export function SearchBox({ searchPosts, numberItens }: SearchBoxProps) {
  return (
    <SearchBoxContainer>
      <SearchBoxHeader>
        <Title>Publicação</Title>
        <Quantity>{numberItens || 0} publicações</Quantity>
      </SearchBoxHeader>
      <SearchBoxForm>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          name="repo"
          handleOnBlur={searchPosts}
        />
      </SearchBoxForm>
    </SearchBoxContainer>
  )
}
