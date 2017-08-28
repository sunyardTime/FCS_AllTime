/**
 * Created by Run on 2017/8/28.
 */

import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

const { ScreenWidth, ScreenHeight }=Dimensions.get("window");

export default class GuideComponent extends Component {
    static propTypes = {
        source : PropTypes.array.isRequired,
        btnStyle : PropTypes.object,
        btnTitleStyle : PropTypes.object,
        btnTitle : PropTypes.string,
        btnEvent : PropTypes.func,
    }

    static defaultProps = {
        btnStyle : {
            position:'absolute',
            bottom:100,
            height : 40,
            width : 150,
            borderColor : 'white',
            borderWidth : 1,
            borderRadius : 10,
            alignItems : 'center',
            justifyContent : 'center',
        },
        btnTitleStyle : {
            fontSize : 17,
            color : 'white',
        },
        btnEvent : () => null,
    }

    onPress = () => {
        if (this.props.btnEvent) {
            this.props.btnEvent();
        }
    }

    swiperItem = (item, index) => {
        let { btnStyle, btnTitleStyle, btnTitle } = this.props;
        return (
            <View  key={ index } style={styles.container} >
                <Image style={styles.item} resizeMode={'stretch'} source={ item }>
                    {
                        index == this.props.source.length - 1 && <TouchableOpacity style={btnStyle} onPress={ this.onPress }>
                            <Text style={btnTitleStyle}>{btnTitle}</Text>
                        </TouchableOpacity>
                    }
                </Image>
            </View>
        )
    }

    render() {
        let { source } = this.props;
        return (
            <Swiper autoplay={false} loop={false}>
                {
                    source.map((item, index) => this.swiperItem(item, index))
                }
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    item : {
        flex:1,
        width : ScreenWidth,
        height : ScreenHeight,
        alignItems : 'center',
    },
});
