import React from 'react'
import MyFirst from '../components/MyFirst'

export async function getServerSideProps() {
  // Fetch data from external API
  const cDataQuery = await fetch(`${process.env.WP_API_PATH}pages?slug=${context.query.uri}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
  return { props: { data } }
}
const index = ({data}) => {
  console.log('datafrom api',data)
  return (
    <div>
    <MyFirst />
    </div>
  )
}

export default index