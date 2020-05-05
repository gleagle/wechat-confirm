import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

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

  render () {
    return (
      <View className='about-page'>
        <View style='white-space:pre-wrap'>
          翔鹰理念
          \n
          国际贸易透明化
          \n
          \n
          美国加州翔鹰2010年在硅谷成立，是一家专注于全球贸易的云系统与数据科技公司。我们的系统全程跟踪每一件产品从生产商到最终用户，一物一码、有据可查，来确保产品真实性与渠道的可靠性。
          \n
          \n
          我们是美国IBM官网2018年报道的优秀技术创新企业，并在2017年获得美国国会和美国商业部的嘉奖。公司创始团队有在世界100强企业资深工作经验，包括美国科技、零售及医药行业中的技术开发和企业管理。
          \n
          \n
          现在专注于两个高度受监管的行业应用场景：高端葡萄酒直达国际消费者，及美国最新特效处方药直达中国患者。
        </View>
      </View>
    )
  }
}
