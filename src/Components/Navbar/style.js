import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/icons/Logo.svg'


const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 130px;
    border-bottom: 2px solid rgba(70, 163, 88, 0.5);
`

const Logos = styled(Logo)`
   
`

const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

const NavItem = styled(NavLink)`
    font-size: 24px;
    font-weight: 700;
    color: #222;
    list-style-type: none;
    text-decoration: none;
`

const Login = styled.div`
    width: 130px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: green;
    font-size: 20px;
`

export {Container, Logos, NavItems, NavItem, Login}