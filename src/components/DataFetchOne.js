import React, { useState, useEffect } from "react"
import axios from 'axios'
 

function DataFetchOne() {
    const [loading, setLoading] = useState(true)
    const [post, setpost] = useState({})
    const [error, seterror] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then ( response => {
            setLoading(false)
            setpost(response.data)
            seterror('')
        })
        .catch(error =>
            {
           setLoading(false)
           setpost({})
           seterror('something went wrong')
            })
    
    
            },[])
        
        return (
        <div>
           {loading? 'Loading' : post.title }
          {error? error : null } 
          {/* <ul>
              {
              loading? 'loading' :
              post.map(pos => <li>{pos.title}</li>)}
              {error? error : null}
          </ul> */}
          
        </div>
    )
}

export default DataFetchOne
