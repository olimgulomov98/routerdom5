import React from "react";
import { Container, NavItems, NavItem, Login, Logos } from "./style";


export const Navbar = () => {
  return (
    <Container>
        <NavItem  activeStyle={{color: 'green'}} exact to='/'>
            <Logos />
        </NavItem>
        <NavItems>
            <NavItem activeStyle={{color: 'green'}} to='/home'>Home</NavItem>
            <NavItem activeStyle={{color: 'green'}} to='/shop'>Shop</NavItem>
        </NavItems>
        <NavItem  activeStyle={{color: 'green'}} to='/login'>
            <Login >Login</Login>
        </NavItem>
    </Container>
  )
}
