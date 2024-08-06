import React from 'react'
import {Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const SingleProduct = ({product}) => {
  return (
    <Col md={3} className='mb-4' >
    <Card >
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         {product.description}
        </Card.Text>
        <Link to={`/product/${product.id}`} className="btn btn-primary" variant="primary">More Info</Link>
      </Card.Body>
    </Card>
    </Col>
  )
}
