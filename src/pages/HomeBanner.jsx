import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

export const HomeBanner = () => {
  return (
    <Carousel>
    
    <Carousel.Item>
    <img src={"https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651"} alt=""className='width-100' />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDug18JT8HRbsKpcPLzAZSp3TZ9du0JKEz7Q&usqp=CAU"} alt="" className='width-100'/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpg4c_lt7t67cr-qmhqHteCfqGqRqYXQ9eQ&usqp=CAU"} alt="" className='width-100'/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
