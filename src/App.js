import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [resourceType, setResourceType] = useState('posts')

useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
}, [resourceType])

  return (
    <>
    <div>
    <button onClick={() => { setResourceType('posts')}}>Posts</button>
    <button onClick={() => { setResourceType('users')}}>Users</button>
    <button onClick={() => { setResourceType('comments')}}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
  )
}

export default App
