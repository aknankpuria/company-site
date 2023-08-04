import React from 'react'
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <div class="wrapper">
        
        <section class="contact" id="contact">
       



        <form action="#contact">
        <h2 className="heading slide-right">Contact <span> Us</span></h2>
            <div class="input-box slide-left">
                <input type="text" placeholder="Full-Name" />&nbsp;&nbsp;
                <input type="email" placeholder="Email Address"/>

            </div>
            <div class="input-box slide-right">
                <input type="number" placeholder="Mobile Number"/>&nbsp;&nbsp;
                <input type="text" placeholder="Email Subject"/>
                    
            </div>
            <div className='slide-left'>
            <textarea name="" id="" cols="30" placeholder="Your Message"></textarea>
            </div>
            <div >
            <input type="submit" value="Send Message" class="btn  fade-in"/>
            </div>
        </form>
        </section>


        </div>
        
      
   
    
    


  )
}

export default Testimonial;