import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from "../../Components/Card"
import React from 'react'
import ProductDetail from '../../Components/ProductDetail'


const Home = () =>{
    //así se crean variables en react, dentro del useState va el valor o el dato :v
    const [items, setItems] = useState(null) 
    // eso es como: const items = null
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => setItems(data))
    })

    return (
        
        <Layout>
            Home 
            <div className='flex flex-wrap items-center justify-center'>
                
                { 
                    items?.map(item => (
                        <Card key={item.id} data = {item}/>
                    ))
                }
                
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Home