import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, FocusEvent, useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Card } from '../../components/Card'
import { Profile } from '../../components/Profile'
import { SearchBox } from '../../components/SearchBox'
import { REPOSITORY, USERNAME } from '../../constants'
import { api } from '../../lib/axios'
import { CardList } from './styled'

const searchFormValidationSchema = zod.object({
  repo: zod.string(),
})

type SearchFormData = zod.infer<typeof searchFormValidationSchema>

interface Post {
  id: number
  title: string
  body: string
  createdAt: string
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(searchFormValidationSchema),
    mode: 'onBlur',
  })

  const getPosts = useCallback(async (value: string) => {
    const response = await api.get(
      `/search/issues?q=${value || ''}%20repo:${USERNAME}/${REPOSITORY}`,
    )

    const list = response.data?.items?.map((item) => ({
      id: item?.number,
      title: item?.title,
      body: item?.body,
      createdAt: item?.created_at,
    }))
    setPosts(list)
  }, [])
  const searchPosts = useCallback(
    async (event: FocusEvent<HTMLInputElement>) => {
      const { value } = event.target
      await getPosts(value)
    },
    [getPosts],
  )

  useEffect(() => {
    if (posts.length === 0) {
      getPosts('')
    }
  }, [getPosts, posts.length])

  return (
    <>
      <Profile />
      <FormProvider {...searchForm}>
        <SearchBox searchPosts={searchPosts} numberItens={posts.length} />
      </FormProvider>
      <CardList>
        {posts.map((post) => (
          <Card key={post.id} data={post} />
        ))}
      </CardList>
    </>
  )
}
