import React from "react";
import {Container, Head, Title, Input, Button, Paragraph,} from './style'


export const Login = () => {
    return(
        <Container>
                <Head>
                    <Head.Header style={{color: 'green'}}>Login</Head.Header>
                </Head>
                <Title>Enter your username and password to login.</Title>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password"/>
                <Button type="primary">Login</Button>

                <Paragraph>
                    <Paragraph.Border></Paragraph.Border>
                    <Paragraph.P>Or login with</Paragraph.P>
                    <Paragraph.Border></Paragraph.Border>
                </Paragraph>
        </Container>
    )
}
