import React, { Component } from 'react';
import {
    Text,
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    Title,
} from 'native-base';
import TopList from '../components/TopList';

export default class Home extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>
                            CriptView
                        </Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <TopList/>
                </Content>
                
            </Container>
        );
    }
}