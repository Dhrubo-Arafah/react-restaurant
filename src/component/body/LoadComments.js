import dateFormat from 'dateformat'
import React from 'react'

function LoadComments(props) {
  return (
    props.comments.map(comment => {
      return (
        <div>
          <h5>{comment.author}</h5>
          <p>{comment.comment}</p>
          <p>{dateFormat(comment.date, "dddd, mmmm ds, yyyy, h:MM:ss TT")}</p>
        </div>
      )
    })
  )
}

export default LoadComments
