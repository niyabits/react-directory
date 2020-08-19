import React from 'react'
import { NextPage } from 'next'

export default function PostTemplate: NextPage<props> (props) {
  return (
    <div>
      Here we'll load "{props.slug}"
    </div>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const {slug} = context.query 

  return {slug}
}
