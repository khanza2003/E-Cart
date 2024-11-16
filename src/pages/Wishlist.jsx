import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/Wishlistslice'



const Wishlist = () => {
  const dispatch=useDispatch()
  const userwishlist=useSelector(state=>state.wishlistReducer)
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
       {
        userwishlist?.length>0?
        <>
        <h1 className='text-4xl text-red-600 font-bold'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4 mt-5'>
        {
          userwishlist?.map(product=>(
            <div key={product?.id} className='rounded border  p-2 shadow'>
            <img width={`100%`} height={`200px`} src={product?.thumbnail} alt="no" />
            <div className='text-center'>
                <h3 className='text-xl font-bold'>{product?.title}</h3>
                <div className='flex justify-evenly mt-3'>
                    <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                    <button className='text-xl'><i className='fa-solid fa-cart-plus text-green-600'></i></button>
                </div>
            </div>
        </div>
          ))
        }
       </div> 
        </>
        :
        <div className='flex flex-col justify-center  items-center'>
          <img width={600} src="https://krosfitsports.com/public/empty-cart.gif" alt="" />
          <h1 className='text-3xl text-red-600'>Your Wishlist is empty!!!</h1>
        </div>
       }
    </div>
    </>
  )
}

export default Wishlist