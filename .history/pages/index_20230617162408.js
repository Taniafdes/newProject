import React from 'react'
import MyFirst from '../components/MyFirst'

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetch(`${process.env.WP_API_PATH}pages?slug=${context.query.uri}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
  const result = await data.json()
  return { props: { result } }
}
const index = ({result}) => {
  console.log('datafrom api',result)
  return (
    <div>
    <MyFirst />
    </div>
  )
}

export default index