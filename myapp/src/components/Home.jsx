import React from 'react'
import vg from '../assets/2.webp';

export default function Home() {
  return (
    <>
    <div className="home">
        <main>
            <h1>MyApp</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="graphics"/>
        <div>
            <p>
                We are your one stop solution to the tech problems you face. We provide you with the best solutions to your problems. We have a team of experts who are always ready to help you.
            </p>
        </div>
    </div>
    </>
  )
}
