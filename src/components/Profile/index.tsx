import {
  ProfileContainer,
  Avatar,
  ProfileInfo,
  ProfileInfoLinks,
  ProfileInfoLinksItem,
} from './styles'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { ProfileContext } from '../../context/ProfileContex'
import { useContext } from 'react'

export function Profile() {
  const { user } = useContext(ProfileContext)
  return (
    <ProfileContainer>
      <Avatar>
        <img src={user.avatarURL} alt="" />
      </Avatar>
      <ProfileInfo>
        <header>
          <h2>{user.name}</h2>
          <a href={user.githubLink}>
            <span>GITHUB</span>
            <BsBoxArrowUpRight />
          </a>
        </header>

        <p>{user.bio}</p>

        <ProfileInfoLinks>
          <ProfileInfoLinksItem>
            <FaGithub />
            <span>{user.username}</span>
          </ProfileInfoLinksItem>
          <ProfileInfoLinksItem>
            <FaBuilding />
            <span>{user.company}</span>
          </ProfileInfoLinksItem>
          <ProfileInfoLinksItem>
            <FaUserFriends />
            <span>{user.followers} Seguidores</span>
          </ProfileInfoLinksItem>
        </ProfileInfoLinks>
      </ProfileInfo>
    </ProfileContainer>
  )
}
