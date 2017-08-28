/**
 * Created by Run on 2017/8/28.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    InteractionManager
} from 'react-native';
import {NavigationActions} from "react-navigation";
import GuideComponent from './GuideComponent';

/**
 *  引导页
 *       图片数组
 *       最后一页按钮样式
 *       按钮文字
 *
 * */

let sources = [ require('./imgs/guid_1.jpg'),
    require('./imgs/guid_2.jpg'),
    require('./imgs/guid_3.jpg'),
    require('./imgs/guid_4.jpg')]

export default class GuidePage extends Component {

    press = () => {
        InteractionManager.runAfterInteractions(()=>{
            const resetAction = NavigationActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'Tab'})
                ]
            })
            this.props.navigation.dispatch(resetAction)
        })
    }

    render() {
        return (
            <GuideComponent source={sources} btnTitle={'进入APP'} btnEvent={this.press}/>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    swiperItem : {

    },
});
