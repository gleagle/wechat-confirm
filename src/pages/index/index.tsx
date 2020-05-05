import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtToast } from 'taro-ui'
import eagleSignUrl from '@/assets/eagle-sign.png'
import { set as setGlobalData, get as getGlobalData } from '@/utils/globalData'
import '@/utils/dateExtend'
import './index.scss'

export default class Index extends Component {

  constructor(props) {
    super(props);

    const { isIphoneX } = getGlobalData();
    this.state = {
      isShowErrorToast: false,
      isIphoneX: isIphoneX,
    }
  }

  componentWillMount () {}

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    const { isScanCode } = getGlobalData();
    if (isScanCode) {
      this.handleScanCode();
      setGlobalData('isScanCode', false);
    }
  }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '翔鹰验收'
  }

  // 用户授权操作后按钮回调
  onGotUserInfo = resp => {
    if(resp.detail.userInfo){ // 返回的信息中包含用户信息则证明用户允许获取信息授权
      const { nickName } = resp.detail.userInfo 
      setGlobalData('nickName', nickName)
    }
    this.handleScanCode()
  }

  handleScanCode() {
    Taro.scanCode({
      scanType: ['barCode'],
      success(resp) {
        const barCode = resp.result;
        setGlobalData('barCode', barCode);
        Taro.navigateTo({
          url: `/pages/logistics/index?code=${barCode}`
        });
      },
      fail: () => {
        this.setState({ isShowErrorToast: true });
        setTimeout(() => this.setState({ isShowErrorToast: false }), 3000);
      }
    })
  }

  pushAboutPage() {
    Taro.navigateTo({
      url: '/pages/about/index',
    });
  }

  render () {
    const { isShowErrorToast, isIphoneX } = this.state;

    return (
      <View className='index'>
        <AtToast isOpened={isShowErrorToast} text='请重新扫描'></AtToast>
        <View className='banner'>
          <View>
            <Text>武汉疫情，刻不容缓，全国上下，众志成城。</Text>
          </View>
          <View>
            <Text>我们想用这个工具，帮助武汉乃至全国任何城市快速追踪并运输急缺物资。</Text>
          </View>
        </View>
        <View className='center'>
          
          <View className='eagleSignImg'>
            <Image src={eagleSignUrl} />
          </View>
          <View className='button'>
            <AtButton type='primary' openType='getUserInfo' onGetUserInfo={this.onGotUserInfo}>找到箱子上的“鹰码”扫描确认!</AtButton>
          </View>
        </View>  

        <View className={isIphoneX ? 'footer fix-iphonex-button' : 'footer'} >
          <View>
            <Text className='link-btn' onClick={this.pushAboutPage}>关于翔鹰</Text>
          </View>
          <View style={{ marginTop: '10px' }}><Text className='copywrite'>© 2020 </Text>  Gliding Eagle Inc.</View>
        </View>
      
      </View>
    )
  }
}
