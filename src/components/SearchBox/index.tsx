import {
  Quantity,
  SearchBoxContainer,
  SearchBoxForm,
  SearchBoxHeader,
  Title,
} from './styles'

export function SearchBox() {
  return (
    <SearchBoxContainer>
      <SearchBoxHeader>
        <Title>Publicação</Title>
        <Quantity>6 publicações</Quantity>
      </SearchBoxHeader>
      <SearchBoxForm>
        <div>
          <input type="text" placeholder="Buscar conteúdo" />
        </div>
      </SearchBoxForm>
    </SearchBoxContainer>
  )
}
