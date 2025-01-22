import React from 'react'
import { useData } from '../context/api'

function ApiDataDisplay() {
  const data = useData()
  return (
    <div>
        {
            data?.map((data) => (
                <h1 key={data.id}>{data.name}</h1>
            ))
        }
    </div>
  )
}

export default ApiDataDisplay