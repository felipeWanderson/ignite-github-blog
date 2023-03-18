import { formatDistanceToNow } from '../../utils'
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
