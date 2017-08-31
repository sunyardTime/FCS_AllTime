/**
 * Created by Run on 2017/8/28.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ThirdPartPage extends Component {
    onPress = (item) => {
        let { navigate } = this.props.navigation;
        navigate(item);
    }

    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity style={ styles.touch } onPress={ () => this.onPress('ShopingCart') }>
                    <Text>原生购物车</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.touch } onPress={ () => this.onPress('MobxShop') }>
                    <Text>Mobx购物车</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    touch : {
        height : 44,
        justifyContent : 'center'
    }
});
