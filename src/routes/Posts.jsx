import React from 'react'
import { Outlet } from 'react-router-dom'
import { PostList } from '../Components/PostList'

export const Posts = () => {
  return (
    <>
    <Outlet />
    <main>
 <PostList />
    </main>
    </>
  )
}

export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
    const resData = await response.json();
    return resData.posts;
}