import React from 'react'
import Error from '../assets/images/error.png'
import { Container, Errorr } from './style'

export const NotFound = () => {
  return (
    <Container>
        <Errorr src={Error} alt="Error" />
    </Container>
  )
}