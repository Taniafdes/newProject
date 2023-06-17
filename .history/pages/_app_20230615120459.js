import React from 'react'

const app = ({Component,pageProps}) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default app
