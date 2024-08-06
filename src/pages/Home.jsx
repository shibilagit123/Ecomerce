import React from 'react'
import { HomeBanner } from './HomeBanner'
import  Container  from 'react-bootstrap/esm/Container'
import { LatestProducts } from './LatestProducts'

export const Home = () => {
  return (
    <div>
    <HomeBanner/>
    <Container>
      
        
        <LatestProducts/>
        
    </Container>
    </div>
  )
}
