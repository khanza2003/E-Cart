import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch=useDispatch()
  const userwishlist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  return (
    <nav className='flex bg-violet-600 p-5 fixed w-full text-white font-bold'>
        <Link className='text-2xl font-bold' to={`/`}><i className="fa-solid fa-truck-fast me-1"></i>Daily Cart</Link>
       <ul className='flex-1 text-right'>

          {insideHome&&<li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px'}} className='rounded p-1 text-black' type="text" placeholder='Search Product Here!!!'/></li>}
  
           <li className='list-none inline-block px-5'><Link to={`/Wishlist`}><i className='fa-solid fa-heart text-red-600'></i>Wishlist <span className='bg-black text-white rounded p-1'>{userwishlist?.length}</span></Link></li>
            <li className='list-none inline-block px-5'><Link to={`/Cart`}><i className='fa-solid fa-cart-plus text-green-600'></i>Cart <span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link></li>
       </ul>

    </nav>
  )
}

export default Header