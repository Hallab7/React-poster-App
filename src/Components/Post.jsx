import React from 'react'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'

 const Post = ({ id, author, body }) => {
  return (
    <li id='body' className={classes.post}>
      <Link to={id}>
        <p id='author' color="yellow" className={classes.author}>{author}</p>
        <p id='text' className={classes.text}>{body}</p>
        </Link>
    </li>
  )
}
export default Post
