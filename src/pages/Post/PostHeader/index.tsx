import { Link } from 'react-router-dom'
import {
  FaAngleLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa'

import {
  PostHeaderContainer,
  PostHeaderInfo,
  PostHeaderLinks,
  PostHeaderTitle,
  PostHeaderInfoItem,
} from './styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to="/">
          <FaAngleLeft size={20} />
          Voltar
        </Link>
        <Link to="/">
          VER NO GITHUB
          <FaExternalLinkAlt size={15} />
        </Link>
      </PostHeaderLinks>
      <PostHeaderTitle>
        JavaScript data types and data structures
      </PostHeaderTitle>
      <PostHeaderInfo>
        <PostHeaderInfoItem>
          <FaGithub size={18} color="#3A536B" />
          <span>felipeWanderson</span>
        </PostHeaderInfoItem>
        <PostHeaderInfoItem>
          <FaCalendarDay size={18} color="#3A536B" />
          <span>Há 1 dia</span>
        </PostHeaderInfoItem>
        <PostHeaderInfoItem>
          <FaComment size={18} color="#3A536B" />
          <span>5 comentários</span>
        </PostHeaderInfoItem>
      </PostHeaderInfo>
    </PostHeaderContainer>
  )
}
