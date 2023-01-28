import {
  ProfileContainer,
  Avatar,
  ProfileInfo,
  ProfileInfoLinks,
  ProfileInfoLinksItem,
} from './styles'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar>
        <img
          src="https://avatars.githubusercontent.com/u/18500523?v=4"
          alt=""
        />
      </Avatar>
      <ProfileInfo>
        <header>
          <h2>Felipe Leal</h2>
          <a href="https://github.com/felipeWanderson">
            <span>GITHUB</span>
            <BsBoxArrowUpRight />
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileInfoLinks>
          <ProfileInfoLinksItem>
            <FaGithub />
            <span>felipeWanderson</span>
          </ProfileInfoLinksItem>
          <ProfileInfoLinksItem>
            <FaBuilding />
            <span>Compass UOL</span>
          </ProfileInfoLinksItem>
          <ProfileInfoLinksItem>
            <FaUserFriends />
            <span>32 Seguidores</span>
          </ProfileInfoLinksItem>
        </ProfileInfoLinks>
      </ProfileInfo>
    </ProfileContainer>
  )
}
