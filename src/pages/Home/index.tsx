import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBox } from '../../components/SearchBox'
import { CardList, HomeContainer } from './styled'

export function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <Profile />
        <SearchBox />
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </HomeContainer>
    </div>
  )
}
