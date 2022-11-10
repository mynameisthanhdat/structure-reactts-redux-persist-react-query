import { useQuery } from 'react-query'
import { BASE_URL } from '../constants/urls'
import axiosService from './axiosServices'
import { API_ENDPOINTS } from './urlApi'

export const getUserById = () => {
  const url = BASE_URL + API_ENDPOINTS.users.getUserById
  return useQuery(['users'], async () => {
    const { data }: any = await axiosService.getAll('', url)
    return data
  })
}

export const getPostById = (id: number) => {
  const url = BASE_URL + API_ENDPOINTS.posts.getPostById + id
  return useQuery(['posts'], async () => {
    const { data }: any = await axiosService.getById(1, url)
    return data
  })
}
