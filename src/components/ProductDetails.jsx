import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row,Col, ListGroup, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {

 const [product ,setProduct] = useState([]);
 const {id} =useParams();
 const getProductDetails = async () =>{
    const res = await axios.get('/products.json');
    const products =res.data.products;
    // console.log(products);
   const currentProd = products.find((prod)=> prod.id === Number(id));
    setProduct(currentProd);
 }

useEffect(()=>{
getProductDetails();
},[id]);
console.log(product);

    return (
        <Container>
   <Row className='my-3'>
    <Col md={5}>
        <img src={product?.image ?? ''} alt="" className='width-100' />
    </Col>
    <Col>
    <ListGroup className='pt-45'> 
      <ListGroup.Item>Item : {product.name}</ListGroup.Item>
      <ListGroup.Item>Brand : {product.brand}</ListGroup.Item>
      <ListGroup.Item>Price : {product.price}</ListGroup.Item>
      <ListGroup.Item>Category : {product.category}</ListGroup.Item>
      <ListGroup.Item>{product.description}</ListGroup.Item>
      <ListGroup.Item>Stock :{product.stock}</ListGroup.Item>
    </ListGroup>
    </Col>
   </Row>
   </Container>
  )
}
