import React from 'react'
import notes from '../assets/data'

import {Link} from 'react-router-dom'

function NotePage({match}) {
  let noteId = match.params.id

  let note = notes.find(noted => noted.id == noteId)


  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            ⬅
          </Link>
        </h3>
      </div>

      <textarea value={note?.body}>

      </textarea>

    </div>
  )
}

export default NotePage
