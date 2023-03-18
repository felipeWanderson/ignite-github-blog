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
import { formatDistanceToNow } from '../../../utils'

interface PostData {
  id: number
  title: string
  createdAt: string
  comments: number
  postGithubUrl: string
  body: string
  owner: string
}

interface PostHeaderProps {
  post: PostData
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to="/">
          <FaAngleLeft size={20} />
          Voltar
        </Link>
        <Link to={post?.postGithubUrl}>
          VER NO GITHUB
          <FaExternalLinkAlt size={15} />
        </Link>
      </PostHeaderLinks>
      <PostHeaderTitle>{post?.title}</PostHeaderTitle>
      <PostHeaderInfo>
        <PostHeaderInfoItem>
          <FaGithub size={18} color="#3A536B" />
          <span>{post?.owner}</span>
        </PostHeaderInfoItem>
        <PostHeaderInfoItem>
          <FaCalendarDay size={18} color="#3A536B" />
          <span>{post?.createdAt && formatDistanceToNow(post?.createdAt)}</span>
        </PostHeaderInfoItem>
        <PostHeaderInfoItem>
          <FaComment size={18} color="#3A536B" />
          <span>{post?.comments} comentários</span>
        </PostHeaderInfoItem>
      </PostHeaderInfo>
    </PostHeaderContainer>
  )
}
