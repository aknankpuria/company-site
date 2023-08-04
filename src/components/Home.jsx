import React from 'react'
import "./Home.css"

export const Home = () => {
  return (
<section>
  <div className='main-section'>
    <h1 className='slide-right'>Select your Category</h1>
    <div className="container">
    <div className="card slide-right">

      <div className="image">
      <img src="loan.png" width="200px"></img>
      <h3>Loan</h3>
      </div>
      <div className="content ">
      <p aign="justify">At Udhaar Finance, we understand that financial needs can arise anytime. We're here to assist you with quick, convenient, and flexible loan options . Break free from financial constraints and turn your aspirations into reality</p>
        <button>Read More {">>"}</button>
      </div>
     </div>
     
      <div className="card slide-left">
        <div className="image">
        <img src="insurance.png" width="250px"></img>
        <h3>Insurance</h3>
        </div>
       
        <div className="content">
        <p aign="justify">Welcome to "udhar Finance", where your safety and security are our utmost priority. We provide comprehensive insurance plans designed to provide you with the financial protection you need to live your life with complete peace of mind.</p>
        <button>Read More {">>"}</button>
      </div>
     
      </div>


     <div className="card slide-right">
        <div className="image">
        <img src="bgg.png" width="200px"></img>
        <h3>Credit Card</h3>
        </div>
        <div className="content ">
        <p aign="justify">We believe that everyone should have quick and easy access to financial services and solutions like credit cards. We're Udhaar Finance, and we've set out to simplify the often daunting process of credit card application and to bring financial freedom to you.</p>
        <button>Read More {">>"}</button>
        </div>
        
      </div>


      <div className="card slide-left">
        <div className="image">
        <img src="abroad.png" width="200"></img>
        <h3>Study Abroad</h3>
        </div>
        <div className="content">
        <p aign="justify">At Udhaar Finance, we believe in the power of education a reality.Udhaar make overseas education accessible to ambitious students like you by
           Providing customized study loan solutions and stand as your dependable financial partner in your journey </p>
        <button>Read More {">>"}</button>
        </div>
       
      </div>

    
  
  
   
   </div>
   </div>
</section>

  );
};
export default Home;
