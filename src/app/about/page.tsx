import Link from "next/link"
import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link className="btn btn-accent" href={"/about/info"}>Get Started</Link>
    </div>
  )
}

export default About