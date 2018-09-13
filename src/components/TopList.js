import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Spinner, Thumbnail, View, Text } from 'native-base';
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
    
    renderTop() {
        let { data } = this.state;

        let ret = [];

        data.Data.map((coin, i) => {
            ret.push(
                <TouchableOpacity key={i} style={styles.item}>
                    <View>
                        <Thumbnail small source={{ uri: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}} />
                    </View>
                    <View>
                        <Text>{coin.CoinInfo.Name}</Text>
                    </View>
                </TouchableOpacity>
            );
        });
        return ret;
    }

    render(){
        let { data } = this.state;

        return(
            <View>
                { data ? this.renderTop() : <Spinner /> }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#dddd',
        paddingVertical: 8, 
        alignItems: 'center',
        marginBottom: 4,
        justifyContent: 'center',
    }
});