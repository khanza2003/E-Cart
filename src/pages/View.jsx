import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/Wishlistslice'

const View = () => {
  const dispatch=useDispatch()
  const userwishlist=useSelector(state=>state.wishlistReducer)
  const [Product,Setproduct]=useState({})
  const {id}=useParams()
  //console.log(id);
  //console.log(Product);
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
      Setproduct(allProducts.find(item=>item.id==id))
    }
  },[])

  const handlewishlist=()=>{
    const existingProduct=userwishlist?.find(item=>item.id==id)
    if(existingProduct){
      alert(`Product already added to your Wishlist`)
    }else{
      //alert(`added`)
      dispatch(addToWishlist(Product))
    }
  }

  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
        <div className="grid grid-cols-2 items-center h-screen">
           <div> <img className='ms-40' width={`350px`} height={`250px`} src={Product?.thumbnail} alt="" />
           <div className='flex justify-between mt-5'>
                  <button onClick={handlewishlist} className='bg-blue-600 rounded text-white p-2'>ADD TO WISHLIST</button>
                  <button className='bg-green-600 rounded text-white p-2'>ADD TO CART</button>
                </div>
           </div>
            
            <div>
                <h3 className='font-bold'>PID:{Product?.id}</h3>
                <h1 className='text-5xl font-bold'>{Product?.title}</h1>
                <h4 className='font-bold text-red-600 text-2xl'>${Product?.price}</h4>
                <h4>Brand : {Product?.brand}</h4>
                <h4>Category : {Product?.category}</h4>
                <p>
                  <span className='font-bold'>Description</span>:{Product?.description}
                </p>
                

                <h3 className='font-bold mt-4'>Client Reviews</h3>{
                  Product?.reviews?.length>0?
                  Product?.reviews?.map(item=>(
                    <div className="shadow border rounded p-2 mb-2">
                      <h5>
                        <span className='font-bold'>
                          {item?.reviewerName}
                        </span>: <span>{item?.comment}</span>
                      </h5>
                      <p>Ratings: {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i> </p>
                    </div>
                    ))
                    :
                    <div className='text-red-600 font-bold'>No Review Yet!!!</div>
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default View