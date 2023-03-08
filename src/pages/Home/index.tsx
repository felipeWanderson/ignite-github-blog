import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBox } from '../../components/SearchBox'
import { HomeContainer } from './styled'

export function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <Profile />
        <SearchBox />
      </HomeContainer>
    </div>
  )
}
