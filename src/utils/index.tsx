import { formatDistanceToNowStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDistanceToNow = (data: string) => {
  return formatDistanceToNowStrict(new Date(data), {
    addSuffix: true,
    locale: ptBR,
  })
}
