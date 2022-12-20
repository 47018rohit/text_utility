import React from 'react'

export default function About(props) {
  return (
    <div>
      <h1 className={`heading text-${props.mode==='light'?'dark':'light'} my-5`} >About Us </h1>
      <p className={`about-us text-${props.mode==='light'?'dark':'light'} my-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, iure saepe amet, cum aliquam, id alias eius quidem exercitationem error deserunt et! Iste, laudantium. Accusamus incidunt nostrum velit maiores quisquam?</p>
    </div>
  )
}
