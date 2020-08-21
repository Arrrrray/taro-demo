import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class Index extends Component {
  state = {
    userInfo: {}
  };
  componentWillMount() {}

  componentDidMount() {
    Taro.getUserInfo({
      complete: res => {
        console.log("complete", res);
      },
      success: res => {
        console.log("success", res);
      },
      fail: res => {
        console.log("fail", res);
      }
    });
  }

  componentWillUnmount() {}

  // 对应 onShow
  componentDidShow() {}

  // 对应 onHide
  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className="personal-card">个人信息卡片</View>
        {/* <Text>这里是首页</Text>
        <Text>Hello world!</Text>
        <Text>Hello world!</Text>
        <Text>Hello world!</Text>
        <Text>Hello world!</Text>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton> */}
      </View>
    );
  }
}
