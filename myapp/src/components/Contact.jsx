import React from 'react'


export default function Contact() {
  return (
    <div className='contact'>
        
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>name</label>
                    <input type='text' placeholder='name' required/>
                </div>
                <div>
                    <label>email</label>
                    <input type='email' placeholder='xyz@email.com' required/>
                </div>
                <div>
                    <label>Message</label>
                    <input type='text' placeholder='Tell us about your query..' required/>
                </div>

                <button type='submit'>Send</button>
            </form>
        </main>
        
    </div>
  )
}
