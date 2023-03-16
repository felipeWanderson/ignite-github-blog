import { formatDistanceToNowStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  CardBody,
  CardContainer,
  CardHeader,
  CardTitle,
  PublishedAt,
} from './styles'

type Data = {
  id: number
  title: string
  body: string
  createdAt: string
}
interface CardProps {
  data: Data
}
export function Card({ data }: CardProps) {
  const body = data?.body.slice(0, 147) + '...'

  const formatDistanceToNow = (data: string) => {
    return formatDistanceToNowStrict(new Date(data), {
      addSuffix: true,
      locale: ptBR,
    })
  }
  return (
    <CardContainer to={`/post/${data.id}`}>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <PublishedAt>{formatDistanceToNow(data.createdAt)}</PublishedAt>
      </CardHeader>
      <CardBody>{body}</CardBody>
    </CardContainer>
  )
}
