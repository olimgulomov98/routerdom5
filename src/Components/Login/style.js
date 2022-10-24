import styled, {css} from 'styled-components';

const getType = (type) => {
    switch(type) {
        case 'primary' : 
        return {
            height: '45px',
            background: '#46A358',
            fontSize: '16px',
            fontWeight: '700',
            color: '#FFFFFF',
            border: 'none',
        };
        case 'secondary' :
        return {
            height: '40px',
            background: 'none',
            fontSize: '13px',
            fontWeight: '500',
            color: '#727272',
            position: 'relative',
            paddingLeft: '15px'
        };
        default: 
        return {
                display: 'none'
        };
    };

}

const flex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
const font = css`
    font-family: sans-serif;
    font-style: normal;
`
const black = css`
    color: #3D3D3D;
`
const block = css`
    display: block;
    margin: auto;
    margin-top: 20px;
`
const inputs = css`
    width: 300px;
    height: 40px;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
`

const Container = styled.div`
    ${font}
    width: 500px;
    height: 400px;
    background-color: #fff;
    margin: auto;
    margin-top: 50px;
`
const Head = styled.div`
    ${flex}
    padding-top: 50px;
    margin-bottom: 53px;
`
Head.Header = styled.h1`
    ${black}
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    padding-right: 11px;
    cursor: pointer;
`
Head.Border = styled.div`
    width: 2px;
    height: 16px;
    background-color: #3D3D3D;
    margin-right: 11px;
`

const Title = styled.h3`
    ${black}
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    padding-left: 102px;
`

const Input = styled.input`
    ${block}
    ${inputs}
    padding-left: 15px;
    outline: none;
    
    :hover {
        border-color: green;
    }
`
const Button = styled.button`
    ${block}
    ${inputs}
    text-align: center;
    line-height: 16px;
    ${({type}) => getType(type)}
`

const Paragraph = styled.div`
    ${flex}
    margin: 46px 0 27px 0;
`
Paragraph.Border = styled.div`
    width: 101px;
    height: 0px;
    border: 1px solid #EAEAEA;
`
Paragraph.P = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #3D3D3D;
    padding: 0 10px;
`
export {Container, Head, Title, Input, Button, Paragraph}