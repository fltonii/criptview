import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import { api } from '../Api';

export default class TopList extends Component {
    constructor(props){
        super(props);
        this.state = { data: null }
    }
    
    async componentWillMount(){
        await api.getTop().then(data =>{
            this.setState({ data });
            console.log('data >>>>', data);
        });
    }

    render(){
        return(
            <View>
                <Spinner />
            </View>
        )
    }
}