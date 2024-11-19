import React, {Children} from 'react'
import PostDetails from './routes/PostDetails'
import { loader as postDetailsLoader} from './routes/PostDetails'
import ReactDOM from 'react-dom/client'
import { Posts } from './routes/Posts'
import { loader as postsLoader } from './routes/Posts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost, { action as newPostAction } from './routes/NewPost'
import { RootLayout } from './routes/RootLayout'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />,
    children: [
      { path: '/', element: <Posts />, 
        loader: postsLoader,
        children: [
          { path: '/Create-post', element: <NewPost />, action: newPostAction}, 
          {path: '/:postId', element: <PostDetails />, loader: postDetailsLoader},
        ]
       },
      
    ] 
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
