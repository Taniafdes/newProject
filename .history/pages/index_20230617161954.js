import React from 'react'
import MyFirst from '../components/MyFirst'
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_PATH}/development`)
  const data = await res.json()
  return { props: { data } }
}
const index = ({}) => {
  return (
    <div>
    <MyFirst />
    </div>
  )
}

export default index