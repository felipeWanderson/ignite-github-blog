import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { REPOSITORY, USERNAME } from '../../constants'
import { api } from '../../lib/axios'
import { PostHeader } from './PostHeader'
import { PostContainer } from './styles'

interface PostData {
  id: number
  title: string
  createdAt: string
  comments: number
  postGithubUrl: string
  body: string
  owner: string
}

export function Post() {
  const [post, setPost] = useState({} as PostData)
  const { id: postId } = useParams()
  const getPost = useCallback(async () => {
    const response = await api.get(
      `/repos/${USERNAME}/${REPOSITORY}/issues/${postId}`,
    )

    setPost({
      id: response?.data?.number,
      createdAt: response?.data?.created_at,
      comments: response?.data?.comments,
      postGithubUrl: response?.data?.html_url,
      title: response?.data?.title,
      body: response?.data?.body,
      owner: response?.data?.user?.login,
    })
  }, [postId])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <PostContainer>
      <PostHeader post={post} />
      <section>
        <ReactMarkdown>{post?.body}</ReactMarkdown>
      </section>
    </PostContainer>
  )
}
