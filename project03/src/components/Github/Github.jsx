import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function  Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         setData(data)
//       })
//   }, [])
    
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-2xl '>Github followers: {data.followers}
    <img src={data.avatar_url} alt="profile picture" width={200} height={200} className='' />
    </div>

  )
}

export default  Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
      
}