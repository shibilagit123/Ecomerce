import React, { useEffect, useState } from 'react'
import  { Col,Row} from 'react-bootstrap'
import { SingleProduct } from './SingleProduct'


export const LatestProducts = () => {
    // const products = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}];
    //useState - store information in a component
    const [products, setProducts] = useState([]);


    //hooks useeffect life cycle event management
    useEffect(()=>{
    //mounting portion


    fetch("./products.json")
    .then((data) => data.json())
    .then((res)=>setProducts(res.products));
    // return(
    //     //un mounting 

    // )

},[]); //dependancy array
console.log(products);
  return (
   <>
   <Row>
    <Col className='my-3'>
        <h2>Latest Products</h2>
    </Col>
   </Row>
   <Row>
     {/* list an key */}
    {products && products.map((product,index)=>(
     <SingleProduct key={index} product={product} /> //props is parent to child component passing argument
    ))}
   
    
   </Row>
   </>
  )
}
