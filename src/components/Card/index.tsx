import {
  CardBody,
  CardContainer,
  CardHeader,
  CardTitle,
  PublishedAt,
} from './styles'

export function Card() {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>JavaScript data types and data structures</CardTitle>
        <PublishedAt>Há 1 dia</PublishedAt>
      </CardHeader>
      <CardBody>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </CardBody>
    </CardContainer>
  )
}
