import React from 'react'
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillTwitterCircle} from 'react-icons/ai';

export default function Home() {
  return (
    <>
    <div className="home" id='home'>
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
    <div className="home3" id='about'>
        <div>
        <h1>Who we are</h1>
        <p>
            We are a team of experts who are always ready to help you. We provide you with the best solutions to your problems. We have a team of experts who are always ready to help you.
        </p>
        </div>
    </div>
    <div className="home4" id = 'brands'>
        <div>
        <h1>Brands</h1>
         <article>
            <div style={{
                animationDelay:"0.3s",
                }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>

            <div style={{
                animationDelay:"0.5s",
                }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>

            <div style={{
                animationDelay:"0.7s",
                }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"0.9s",
                }}>
                <AiFillTwitterCircle/>
                <p>Twitter</p>
            </div>
         </article>
        </div>
    </div>
    </>
  )
}
