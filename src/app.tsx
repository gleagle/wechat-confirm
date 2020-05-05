import Taro, { Component, Config } from '@tarojs/taro'
import './taro-ui-custom.scss'
import { set as setGlobalData } from '@/utils/globalData'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  constructor(props) {
    super(props)
    
    Promise.prototype.finally = function(callback: () => void) {
      let P = this.constructor
      return this.then(
       value => P.resolve(callback()).then(() => value),
          reason => P.resolve(callback()).then(() => {throw reason })
      )
    }
  }

  componentWillMount () {
    wx.getSystemInfo({
      success: res => { 
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          setGlobalData('isIphoneX', true)
        }
      }
    })
    
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/logistics/index',
      'pages/confirm/index',
      'pages/about/index',
    ],
    permission: {
      'scope.userLocation': {
        desc: '您的位置信息用于记录您收货时候的位置'
      }
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
