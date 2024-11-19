import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../Components/MainHeader'
import { PostList } from '../Components/PostList'

export const RootLayout = () => {
  
  return (
    <>
    <MainHeader />
    <Outlet />
    </>
  )
}
