import React, { Component } from "react";
import { View, Text, Image, Icon } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class Index extends Component {
  state: object = {
    userInfo: {
      nickName: "",
      avatarUrl: ""
    }
  };
  componentWillMount() {}

  componentDidMount() {
    Taro.getUserInfo({
      complete: res => {
        console.log("complete", res);
      },
      success: res => {
        console.log("success", res);
        this.setState({
          userInfo: res.userInfo
        });
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
    const { userInfo } = this.state;
    return (
      <View className="page">
        <View className="personal-card">
          <Image className="avatar" src={userInfo.avatarUrl} />
          <Text className="nick-name">{userInfo.nickName}</Text>
        </View>
        <View className="menu">
          <View className="menu-item">
            <View className="menu-icon-content">
              <View className="menu-icon">申</View>
            </View>
            <Text className="menu-label">添加申请</Text>
          </View>
          <View className="menu-item">
            <View className="menu-icon-content">
              <View className="menu-icon">申</View>
            </View>
            <Text className="menu-label">我的申请</Text>
          </View>
          <View className="menu-item">
            <View className="menu-icon-content">
              <View className="menu-icon">申</View>
            </View>
            <Text className="menu-label">申请汇总</Text>
          </View>
          <View className="menu-item">
            <View className="menu-icon-content">
              <View className="menu-icon">申</View>
            </View>
            <Text className="menu-label">申请统计</Text>
          </View>
        </View>
      </View>
    );
  }
}
