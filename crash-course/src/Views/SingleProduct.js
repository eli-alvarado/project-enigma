import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import { Link } from 'react-router-dom'

function Product(){
    const { id } = useParams()
    // Create your own Mock API: https://mockapi.io/
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        content = 
        <div className="min-h-screen">
            <h1 className="text-2xl font-bold mb-3 text-white">
                {product.data.name}
            </h1>
            <div>
                <img 
                src={product.data.images[0].imageUrl}
                alt={product.data.title}
                />
            </div>
            <div className="font-bold text-xl mb-3 text-white">
                $ {product.data.price}
            </div>
            <div className="text-white">
                {product.data.description}
            </div>
            <Link to="/products" className="text-center rounded mt-3 text-white p-3 block" style={{'background': '#5c748c'}}>
             Go back to all products
            </Link>
        </div>
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-xl font-bold text-white border-b text-center m-8">now viewing more information on a single product</h1>
            {content}
        </div>
    )
}

export default Product