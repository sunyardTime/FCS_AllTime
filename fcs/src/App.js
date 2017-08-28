/**
 * Created by Run on 2017/8/28.
 */

import React, { Component } from 'react';
import {
    Image
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import ComponentPage from './ComponentPage';
import GestureAnimatePage from './GestureAnimatePage';
import ThirdPartPage from './ThirdPartPage';
import NativePage from './NativePage';
import GuidePage from './GuidePage';

const ComponentIcon = require('./imgs/ic_tab_cart.png')
const ComponentPressIcon = require('./imgs/ic_tab_cart_press.png')
const GestureIcon = require('./imgs/ic_tab_center.png')
const GesturePressIcon = require('./imgs/ic_tab_center_press.png')
const ThirdIcon = require('./imgs/ic_tab_home.png')
const ThirdPressIcon = require('./imgs/ic_tab_home_press.png')
const NativeIcon = require('./imgs/ic_tab_order.png')
const NativePressIcon = require('./imgs/ic_tab_order_press.png')

const Tab = TabNavigator({
        Component : {
            screen : ComponentPage,
            navigationOptions : () => TabOptions('组件', ComponentIcon, ComponentPressIcon, '组件')

        },
        GestureAnimate : {
            screen : GestureAnimatePage,
            navigationOptions : () => TabOptions('手势', GestureIcon, GesturePressIcon, '动画与手势')

        },
        ThirdPart : {
            screen : ThirdPartPage,
            navigationOptions : () => TabOptions('第三方', ThirdIcon, ThirdPressIcon, '第三方')
        },
        Native : {
            screen : NativePage,
            navigationOptions : () => TabOptions('原生', NativeIcon, NativePressIcon, '原生')
        }
        ,
    })
    ;

const TabOptions = (tabTitle, normalImage, selectedImage, title) => {
    const tabBarLabel = tabTitle;
    const tabBarIcon = (({ tintColor, focused }) => {
        return (
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{height:35,width:35 }, {tintColor: tintColor}]}
            />
        )
    });
    const headerTitle = title;
    return { tabBarLabel, tabBarIcon, headerTitle }
}

const App = StackNavigator({
    Guide : { screen : GuidePage,navigationOptions:{header:null} },
    Tab : { screen : Tab }
})

export default App;