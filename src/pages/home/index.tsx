import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUsersData } from '../../redux/actions/users'
import { getPostById, getUserById } from '../../services'
import ExamplePage from '../example'

const Home = () => {
  const dispatch = useDispatch()
  const { data, isLoading, error } = getUserById()
  const { data: post, isLoading: loading, error: err } = getPostById(1)

  useEffect(() => {
    dispatch(setUsersData(data))
  }, [data])

  if (isLoading || loading) {
    return <div className="text-center">Loading...</div>
  }

  if (error || err) return <>An error has occurred</>

  return (
    <div className="text-center font-bold">
      <p className="py-5">HOME PAGE</p>
      <p>#{data[0]?.id}</p>
      <p>User name: {data[0]?.name}</p>
      <h1>Post title: {post?.title}</h1>
      <ExamplePage />
    </div>
  )
}

export default Home
