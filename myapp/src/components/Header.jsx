import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

export default function Header() {
  return (
    <nav>
        <h1>My App</h1>
        <main>
         <HashLink to={"/#home"}>Home</HashLink>
         <Link to={"/contact"}>contact</Link>
         <HashLink to={"/#about"}>About</HashLink>
         <HashLink to={"/#brands"}>Brands</HashLink>
         <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}


//h1 and main tag ko flax kr denge jisse barabar ho jayega aur main box me sare nav items aa jayenge

// # use isliye kiya kyuki agar koi id hai toh uspe scroll krne ke liye use krte hai