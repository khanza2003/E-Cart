import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px'}} className='mt-5 container w-100 bg-violet-600 text-white p-8'>
    <div className="flex justify-between">
      {/*introduction*/}
      <div style={{width:'400px'}}>
        <h5 className='font-bold text-xl'><i className="fa-solid fa-truck-fast me-2"></i>E cart</h5>
        <p>Designed and built with all the love in the world by Luminar team with the help of our contributors.</p>
        <p>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.2.</p>
      </div>
      {/*links*/}
      <div className=''>
          <h5 className='font-bold text-xl'>Links</h5>
          <ul>
           <li> <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link></li>
           <li> <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link></li>
            <li><Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link></li>
          </ul>
      </div>
      {/*guides*/}
      <div className=''>
        <h5 className='font-bold text-xl'>Guides</h5>
       <ul>
       <li><Link to={`https://react.dev/`} style={{textDecoration:'none',color:'white'}} >React</Link></li>
       <li><Link to={`https://reactrouter.com/en/main`} style={{textDecoration:'none',color:'white'}} >React Router</Link></li>
       <li><Link to={`https://react-bootstrap.github.io/`} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link></li>
       </ul>
      </div>      
      {/*contact*/}
      <div className=''>
          <h5 className='font-bold text-xl'>Contact Us</h5>
          <div className='d-flex'>
            <input placeholder='Enter your Email Here!!!' type="text" className="form-control p-2 rounded-md text-black me-2"/>
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='d-flex justify-between mt-3 space-x-3'>
            <Link to={`https://x.com/?lang=en-in&mx=2`} style={{textDecoration:'none',color:'white'}} target='_blank'><i><i className="fa-brands fa-twitter" ></i></i></Link>
            <Link to={`https://www.instagram.com/`} style={{textDecoration:'none',color:'white'}} target='_blank'><i><i className="fa-brands fa-instagram" ></i></i></Link>
            <Link to={`https://www.facebook.com/`} style={{textDecoration:'none',color:'white'}} target='_blank'><i><i className="fa-brands fa-facebook" ></i></i></Link>
            <Link to={`https://www.linkedin.com/feed/`} style={{textDecoration:'none',color:'white'}} target='_blank'><i><i className="fa-brands fa-linkedin" ></i></i></Link>
            <Link to={`https://github.com/dashboard`} style={{textDecoration:'none',color:'white'}} target='_blank'><i><i className="fa-brands fa-github" ></i></i></Link>
            <Link to={`https://github.com/dashboard`} style={{textDecoration:'none',color:'white'}} target='_blank'><i><i className="fa-solid fa-phone"></i></i></Link>
            
          </div>
      </div>
    </div>
    <p className='text-center mt-3'>Copyright &copy; July 2024 Batch, Media Player App. Built with React</p>
  </div>
  )
}

export default Footer