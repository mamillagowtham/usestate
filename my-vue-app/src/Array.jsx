import React, { useState } from 'react'
import Box from './Box.jsx'
import data from './data.js'

const Array = () => {
    const [box,setBox] = useState(data)

    const BoxElements = box.map((e)=>{
        return  (
           <Box key={e.id} data={e} />
        )
    })
  return (

    <div>
        {BoxElements}
    </div>
  )
}


export default Array


