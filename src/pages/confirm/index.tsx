import Taro, { Component, Config } from '@tarojs/taro';
import {
  View,
  Text,
  Image,
  Block,
  Swiper,
  SwiperItem,
} from '@tarojs/components';
import { AtButton, AtToast, AtIcon } from 'taro-ui';
import exampleUrl from '@/assets/takephoto-example.jpeg';
import { upload } from '@/utils/qiniuUploader';
import { set as setGlobalData, get as getGlobalData } from '@/utils/globalData';
import { generateCSVFile } from '@/utils/generateFile';
import './index.scss';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitting: false,
      isShowErrorToast: false,
      imgUrls: [],
      isShowSuccess: false,
      currentSwiperIndex: 0,
    };

    this.handleConfirm = this.handleConfirm.bind(this);
    this.takePhoto = this.takePhoto.bind(this);
    this.onDeleteImage = this.onDeleteImage.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

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

  takePhoto() {
    Taro.chooseImage({
      // count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: resp => {
        // tempFilePath可以作为img标签的src属性显示图片
        this.setState(prevState => ({
          imgUrls: [...resp.tempFilePaths, ...prevState.imgUrls],
          currentSwiperIndex: 0,
        }));
      },
    });
  }

  handleUpload(filePath) {
    const path = require('path');
    const extname = path.extname(filePath);

    const { barCode } = getGlobalData();
    const fileName =
      barCode +
      '-' +
      new Date().format('yyyyMMddhhmmss') +
      '-' +
      path.basename(filePath, extname).slice(-6) +
      extname;

    return Taro.request({
      url:
        'https://example.com/fake-url',
      method: 'POST',
      header: {
        'content-type': 'application/json',
      },
    }).then(resp => {
      return new Promise((resolve, reject) => {
        upload({
          filePath: filePath,
          options: {
            key: fileName, // 可选
            region: 'ECN', // 可选(默认为'ECN')
            domain: 'https://qiniu.example.com/fake-url',
            uptoken: resp.data, // 以下三选一
            shouldUseQiniuFileName: false, // 默认false
          },
          before: () => {},
          success: resp => {
            if (resp.error) {
              this.setState({ isShowErrorToast: true });
              setTimeout(() => {
                this.setState({ isShowErrorToast: false });
              }, 3000);

              reject(resp.error);
              return;
            }

            resolve(resp);
          },
          fail: err => {
            reject(err);
          },
          progress: () => {},
        });
      });
    });
  }

  submitCSVFile() {
    const timestamp = new Date().format('yyyy-MM-dd hh:mm:ss');
    const { nickName, barCode, latitude, longitude } = getGlobalData();
    const data = generateCSVFile([
      ['条形码ID', 'wechat nickname', 'timestamp', '经度', '纬度'],
      [barCode, nickName, timestamp, longitude, latitude],
    ]);

    const fs = Taro.getFileSystemManager();
    const filePath = `${Taro.env.USER_DATA_PATH}/${new Date().valueOf()}.csv`;
    fs.writeFileSync(filePath, data, 'utf8');

    this.handleUpload(filePath).then(() => {
      this.setState({
        isShowSuccess: true,
      });
    });
  }

  handleConfirm() {
    this.setState({ isSubmitting: true });

    const getLocationPromise = Taro.getLocation()
      .then(resp => {
        const { latitude, longitude } = resp;
        setGlobalData('latitude', latitude);
        setGlobalData('longitude', longitude);
      })
      .catch(() => Promise.resolve());

    const { imgUrls } = this.state;
    const imgPromiseList = imgUrls.map(url => this.handleUpload(url));

    Promise.all([getLocationPromise, ...imgPromiseList])
      .then(() => {
        this.submitCSVFile();
      })
      .finally(() => this.setState({ isSubmitting: false }));
  }

  onDeleteImage() {
    let { imgUrls, currentSwiperIndex } = this.state;
    imgUrls.splice(currentSwiperIndex, 1);
    if (currentSwiperIndex > imgUrls.length - 1) {
      currentSwiperIndex = Math.max(imgUrls.length - 1, 0);
    }
    this.setState({ imgUrls, currentSwiperIndex });
  }

  render() {
    const {
      isSubmitting,
      isShowErrorToast,
      imgUrls,
      isShowSuccess,
      currentSwiperIndex,
    } = this.state;

    if (isShowSuccess) {
      return (
        <View className='confirm-page'>
          <View>谢谢确认收货，信息已经成功上传!</View>
          <View className='actions at-row at-row__justify--center' style={{ marginTop: '20PX' }}>
            <View className='at-col at-col-5'>
              <AtButton
                type='primary'
                onClick={() => {
                  // isScanCode 为 true 时，代表返回首页后直接调用 ScanCode。
                  setGlobalData('isScanCode', true);
                  Taro.navigateBack({
                    delta: 2,
                  })
                }}
              >
                继续扫描?
              </AtButton>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View className='confirm-page'>
        <AtToast isOpened={isShowErrorToast} text='上传失败'></AtToast>

        <View className='prompt-text'>
          <Text>请参照下图拍照</Text>
        </View>
        {imgUrls.length > 0 ? (
          <Block>
            <Swiper
              current={currentSwiperIndex}
              onChange={e =>
                this.setState({ currentSwiperIndex: e.detail.current })
              }
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
            >
              {imgUrls.map(url => (
                <SwiperItem key={url}>
                  <AtIcon
                    onClick={this.onDeleteImage}
                    value='close'
                    size='20'
                    color='#F00'
                  ></AtIcon>
                  <Image className='upload-image' mode='aspectFit' src={url} />
                </SwiperItem>
              ))}
            </Swiper>

            <View className='actions at-row at-row__justify--around'>
              <View className='at-col at-col-5'>
                <AtButton onClick={this.takePhoto}>继续拍照</AtButton>
              </View>
              <View className='at-col at-col-5'>
                <AtButton
                  type='primary'
                  onClick={this.handleConfirm}
                  loading={isSubmitting}
                >
                  确认收货
                </AtButton>
              </View>
            </View>
          </Block>
        ) : (
          <Block>
            <Image className='upload-image-placeholder' src={exampleUrl} />

            <View className='actions at-row at-row__justify--around'>
              <AtButton
                className='at-col'
                type='primary'
                onClick={this.takePhoto}
              >
                点击拍照
              </AtButton>
            </View>
          </Block>
        )}
      </View>
    );
  }
}
