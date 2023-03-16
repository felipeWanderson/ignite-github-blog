import { createContext, ReactNode, useEffect, useState } from 'react'
import { USERNAME } from '../../constants'
import { api } from '../../lib/axios'

interface User {
  id: string
  name: string
  bio: string
  avatarURL: string
  followers: number
  company: string
  githubLink: string
  username: string
}

interface ProfileContextType {
  user: User
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [user, setUser] = useState({} as User)
  const fecthUser = async () => {
    const response = await api.get(`/users/${USERNAME}`)

    const user = {
      id: response.data?.id,
      name: response.data?.name,
      bio: response.data?.bio,
      avatarURL: response.data?.avatar_url,
      followers: response.data?.followers,
      company: response.data?.company,
      githubLink: response.data?.html_url,
      username: response.data?.login,
    }

    setUser(user)
  }

  useEffect(() => {
    fecthUser()
  }, [])

  return (
    <ProfileContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
