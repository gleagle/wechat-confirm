// This file does not include Gliding Eagle backend system API credentials

import Taro, { Component, Config } from '@tarojs/taro';
import {
  View,
  Text,
  Block,
  Swiper,
  SwiperItem,
} from '@tarojs/components';
import { AtIcon, AtActivityIndicator, AtFab } from 'taro-ui';
import warehouseSVG from '@/assets/css/icon/warehouse.svg';
import tagSVG from '@/assets/css/icon/tag.svg';
import cubeSVG from '@/assets/css/icon/cube.svg';
import barcodeSVG from '@/assets/css/icon/barcode.svg';
import truckSVG from '@/assets/css/icon/truck.svg';
import planeDepartureSVG from '@/assets/css/icon/plane-departure.svg';
import signInAltSVG from '@/assets/css/icon/sign-in-alt.svg';
import clipboardCheckSVG from '@/assets/css/icon/clipboard-check.svg';
import hospitalAltSVG from '@/assets/css/icon/hospital-alt.svg';
import userMdSVG from '@/assets/css/icon/user-md.svg';
import userCheckSVG from '@/assets/css/icon/user-check.svg';
import exclamationCircleSVG from '@/assets/css/icon/exclamation-circle.svg';
import './index.scss';

// activityCode - icon 的映射关系
const iconMap = {
  124: warehouseSVG,
  125: warehouseSVG,
  460: warehouseSVG,
  461: warehouseSVG,
  462: warehouseSVG,
  140: tagSVG,
  200: cubeSVG,
  310: barcodeSVG,
  320: truckSVG,
  410: planeDepartureSVG,
  500: signInAltSVG,
  600: clipboardCheckSVG,
  930: truckSVG,
  1030: hospitalAltSVG,
  1035: userMdSVG,
  1040: userCheckSVG,
  1010: userCheckSVG,
};

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      productInfo: { images: [] },
      logisticsData: [],
      isShowMore: false,
    };
  }

  componentWillMount() {
    this.setData();
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '翔鹰验收',
  };

  setData() {
    const { code } = this.$router.params;
    // 获取货物信息
    const promise1 = Taro.request({
      url: `https://us.eagleid.io/api/v4.0/clusters/${code}?locale=zh`,
      header: {
        'content-type': 'application/json',
        authorization:
          'Bearer hidden',
      },
    })
      .then(resp => {
        const [unitId] = resp.data.data.contents;
        return Taro.request({
          url: `https://us.eagleid.io/api/v4.0/units/${unitId}?locale=zh`,
          header: {
            'content-type': 'application/json',
            authorization:
              'Bearer hidden',
          },
        });
      })
      .then(resp => {
        const { productInfo } = resp.data.data;
        this.setState({
          productInfo,
        });
      });

    // 获取物流信息
    const promise2 = Taro.request({
      url: `https://us.eagleid.io/api/v4.0/transactions?eid=${code}&locale=zh`,
      header: {
        'content-type': 'application/json',
        authorization:
          'Bearer hidden',
      },
    }).then(resp => {
      this.setState({
        logisticsData: resp.data.data,
      });
    });

    this.setState({
      isLoading: true,
    });
    Promise.all([promise1, promise2]).finally(() => {
      this.setState({
        isLoading: false,
      });
    });
  }

  handleNext() {
    Taro.navigateTo({
      url: '/pages/confirm/index',
    });
  }

  render() {
    const { isLoading, productInfo, logisticsData, isShowMore } = this.state;

    return (
      <View className='logistics-page'>
        {isLoading && (
          <AtActivityIndicator
            mode='center'
            content='正在加载，请稍后...'
          ></AtActivityIndicator>
        )}

        {!isLoading && (
          <Block>
            <View className='product-info'>
              <View className='subtitle'>
                <Text>产品信息</Text>
              </View>
              <View className='product-content'>
                <Swiper
                  className='product-images'
                  indicatorColor='#999'
                  indicatorActiveColor='#333'
                  circular
                  indicatorDots
                >
                  {productInfo.images.map(url => (
                    <SwiperItem key={url}>
                      <View className='product-image' style={{ backgroundImage: `url(https://us.eagleid.io${url})` }}></View>
                    </SwiperItem>
                  ))}
                </Swiper>
                <View
                  className='product-attrs'
                  style={{ height: isShowMore ? 'auto' : '250PX' }}
                >
                  <View className='product-item'>
                    <View className='label'>名称：</View>
                    <View className='value'>{productInfo.name || ''}</View>
                  </View>
                  {productInfo.mfr && (
                    <View className='product-item'>
                      <View className='label'>生产商名字：</View>
                      <View className='value'>
                        {productInfo.mfr.name || ''}
                      </View>
                    </View>
                  )}
                  <View className='product-item' style='white-space:pre-wrap'>
                    <View className='label'>描述：</View>
                    <View className='value'>
                      {productInfo.description || ''}
                    </View>
                  </View>

                  {isShowMore ? (
                    <View className='fold-btn-wrap'>
                      <View
                        onClick={() => this.setState({ isShowMore: false })}
                        style={{ display: 'inline-block' }}
                      >
                        <Text>收起</Text>
                        <AtIcon value='chevron-up' size='12'></AtIcon>
                      </View>
                    </View>
                  ) : (
                      <View className='expand-btn-wrap'>
                        <View
                          onClick={() => this.setState({ isShowMore: true })}
                          style={{ display: 'inline-block' }}
                        >
                          <Text>更多信息</Text>
                          <AtIcon value='chevron-down' size='12'></AtIcon>
                        </View>
                      </View>
                    )}
                </View>
              </View>
            </View>

            <View className='logistics-info'>
              <View className='subtitle'>
                <Text>全球溯源</Text>
              </View>
              <View className='logistics-content'>
                {logisticsData.map(item => (
                  <View key={item.date} className='logistics-item'>
                    <View className='logistics-item--content'>
                      <View className='logistics-item--description'>
                        <View className='img-wrap'>
                          <View className='icon' style={{ backgroundImage: `url(${iconMap[item.activityCode] || exclamationCircleSVG})` }}></View>
                        </View>
                        {item.description}
                      </View>
                      <View className='logistics-item--notes'>
                        {item.notes}
                      </View>
                    </View>
                    <View className='logistics-item--footer'>
                      <Text>{`${item.country} ${item.location}`}</Text>
                      <Text>{item.date}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </Block>
        )}

        <View className='fab-wrap'>
          <AtFab onClick={this.handleNext}>下一步</AtFab>
        </View>
      </View>
    );
  }
}
