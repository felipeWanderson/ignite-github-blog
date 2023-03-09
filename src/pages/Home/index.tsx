import { Card } from '../../components/Card'
import { Profile } from '../../components/Profile'
import { SearchBox } from '../../components/SearchBox'
import { CardList } from './styled'

export function Home() {
  return (
    <>
      <Profile />
      <SearchBox />
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </>
  )
}
