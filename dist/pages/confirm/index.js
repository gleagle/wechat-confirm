(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/confirm/index"],{

/***/ "./src/assets/takephoto-example.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/takephoto-example.jpeg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/takephoto-example.jpeg";

/***/ }),

/***/ "./src/pages/confirm/index.scss":
/*!**************************************!*\
  !*** ./src/pages/confirm/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/confirm/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/confirm/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _takephotoExample = __webpack_require__(/*! @/assets/takephoto-example.jpeg */ "./src/assets/takephoto-example.jpeg");

var _takephotoExample2 = _interopRequireDefault(_takephotoExample);

var _qiniuUploader = __webpack_require__(/*! ../../utils/qiniuUploader */ "./src/utils/qiniuUploader.ts");

var _globalData = __webpack_require__(/*! ../../utils/globalData */ "./src/utils/globalData.ts");

var _generateFile = __webpack_require__(/*! ../../utils/generateFile */ "./src/utils/generateFile.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/confirm/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.$usedState = ["_$anonymousState__temp", "loopArray2", "$compid__9", "$compid__10", "$compid__11", "$compid__12", "$compid__13", "isShowSuccess", "imgUrls", "currentSwiperIndex", "exampleUrl", "isSubmitting", "isShowErrorToast"];
    _this.config = {
      navigationBarTitleText: '翔鹰验收'
    };
    _this.customComponents = ["AtButton", "AtToast", "AtIcon"];
    return _this;
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */
      this.state = {
        isSubmitting: false,
        isShowErrorToast: false,
        imgUrls: [],
        isShowSuccess: false,
        currentSwiperIndex: 0
      };
      this.handleConfirm = this.handleConfirm.bind(this);
      this.takePhoto = this.takePhoto.bind(this);
      this.onDeleteImage = this.onDeleteImage.bind(this);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "takePhoto",
    value: function takePhoto() {
      var _this2 = this;

      _taroWeapp2.default.chooseImage({
        // count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(resp) {
          // tempFilePath可以作为img标签的src属性显示图片
          _this2.setState(function (prevState) {
            return {
              imgUrls: [].concat(_toConsumableArray(resp.tempFilePaths), _toConsumableArray(prevState.imgUrls)),
              currentSwiperIndex: 0
            };
          });
        }
      });
    }
  }, {
    key: "handleUpload",
    value: function handleUpload(filePath) {
      var _this3 = this;

      var path = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");
      var extname = path.extname(filePath);

      var _getGlobalData = (0, _globalData.get)(),
          barCode = _getGlobalData.barCode;

      var fileName = barCode + '-' + new Date().format('yyyyMMddhhmmss') + '-' + path.basename(filePath, extname).slice(-6) + extname;
      return _taroWeapp2.default.request({
        url: 'https://1769980134108495.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/hash-service/hash/pei3uuX5/',
        method: 'POST',
        header: {
          'content-type': 'application/json'
        }
      }).then(function (resp) {
        return new Promise(function (resolve, reject) {
          (0, _qiniuUploader.upload)({
            filePath: filePath,
            options: {
              key: fileName,
              region: 'ECN',
              domain: 'https://wuhan-wechat-mini.s3-cn-east-1.qiniucs.com',
              uptoken: resp.data,
              shouldUseQiniuFileName: false
            },
            before: function before() {},
            success: function success(resp) {
              if (resp.error) {
                _this3.setState({ isShowErrorToast: true });
                setTimeout(function () {
                  _this3.setState({ isShowErrorToast: false });
                }, 3000);
                reject(resp.error);
                return;
              }
              resolve(resp);
            },
            fail: function fail(err) {
              reject(err);
            },
            progress: function progress() {}
          });
        });
      });
    }
  }, {
    key: "submitCSVFile",
    value: function submitCSVFile() {
      var _this4 = this;

      var timestamp = new Date().format('yyyy-MM-dd hh:mm:ss');

      var _getGlobalData2 = (0, _globalData.get)(),
          nickName = _getGlobalData2.nickName,
          barCode = _getGlobalData2.barCode,
          latitude = _getGlobalData2.latitude,
          longitude = _getGlobalData2.longitude;

      var data = (0, _generateFile.generateCSVFile)([['条形码ID', 'wechat nickname', 'timestamp', '经度', '纬度'], [barCode, nickName, timestamp, longitude, latitude]]);
      var fs = _taroWeapp2.default.getFileSystemManager();
      var filePath = _taroWeapp2.default.env.USER_DATA_PATH + "/" + new Date().valueOf() + ".csv";
      fs.writeFileSync(filePath, data, 'utf8');
      this.handleUpload(filePath).then(function () {
        _this4.setState({
          isShowSuccess: true
        });
      });
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      var _this5 = this;

      this.setState({ isSubmitting: true });
      var getLocationPromise = _taroWeapp2.default.getLocation().then(function (resp) {
        var latitude = resp.latitude,
            longitude = resp.longitude;

        (0, _globalData.set)('latitude', latitude);
        (0, _globalData.set)('longitude', longitude);
      }).catch(function () {
        return Promise.resolve();
      });
      var imgUrls = this.state.imgUrls;

      var imgPromiseList = imgUrls.map(function (url) {
        return _this5.handleUpload(url);
      });
      Promise.all([getLocationPromise].concat(_toConsumableArray(imgPromiseList))).then(function () {
        _this5.submitCSVFile();
      }).finally(function () {
        return _this5.setState({ isSubmitting: false });
      });
    }
  }, {
    key: "onDeleteImage",
    value: function onDeleteImage() {
      var _state = this.state,
          imgUrls = _state.imgUrls,
          currentSwiperIndex = _state.currentSwiperIndex;

      imgUrls.splice(currentSwiperIndex, 1);
      if (currentSwiperIndex > imgUrls.length - 1) {
        currentSwiperIndex = Math.max(imgUrls.length - 1, 0);
      }
      this.setState({ imgUrls: imgUrls, currentSwiperIndex: currentSwiperIndex });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this6 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__9"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__9 = _genCompid2[0],
          $compid__9 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__10"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__10 = _genCompid4[0],
          $compid__10 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__11 = _genCompid6[0],
          $compid__11 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__12 = _genCompid8[0],
          $compid__12 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__13 = _genCompid10[0],
          $compid__13 = _genCompid10[1];

      var _$anonymousState__temp;
      var _state2 = this.__state,
          isSubmitting = _state2.isSubmitting,
          isShowErrorToast = _state2.isShowErrorToast,
          imgUrls = _state2.imgUrls,
          isShowSuccess = _state2.isShowSuccess,
          currentSwiperIndex = _state2.currentSwiperIndex;

      if (isShowSuccess) {
        _$anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ marginTop: '20PX' });
        this.anonymousFunc0 = function () {
          // isScanCode 为 true 时，代表返回首页后直接调用 ScanCode。
          (0, _globalData.set)('isScanCode', true);
          _taroWeapp2.default.navigateBack({
            delta: 2
          });
        };
        _taroWeapp.propsManager.set({
          "type": "primary",
          "onClick": this.anonymousFunc0
        }, $compid__9, $prevCompid__9);
      }
      this.anonymousFunc1 = function (e) {
        return _this6.setState({ currentSwiperIndex: e.detail.current });
      };
      var loopArray2 = imgUrls.length > 0 ? imgUrls.map(function (url, _anonIdx) {
        url = {
          $original: (0, _taroWeapp.internal_get_original)(url)
        };

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "azzzzzzzzz" + _anonIdx, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__8 = _genCompid12[0],
            $compid__8 = _genCompid12[1];

        imgUrls.length > 0 && _taroWeapp.propsManager.set({
          "onClick": _this6.onDeleteImage,
          "value": "close",
          "size": "20",
          "color": "#F00"
        }, $compid__8, $prevCompid__8);
        return {
          $compid__8: $compid__8,
          $original: url.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "isOpened": isShowErrorToast,
        "text": "\u4E0A\u4F20\u5931\u8D25"
      }, $compid__10, $prevCompid__10);
      imgUrls.length > 0 && _taroWeapp.propsManager.set({
        "onClick": this.takePhoto
      }, $compid__11, $prevCompid__11);
      imgUrls.length > 0 && _taroWeapp.propsManager.set({
        "type": "primary",
        "onClick": this.handleConfirm,
        "loading": isSubmitting
      }, $compid__12, $prevCompid__12);
      !(imgUrls.length > 0) && _taroWeapp.propsManager.set({
        "className": "at-col",
        "type": "primary",
        "onClick": this.takePhoto
      }, $compid__13, $prevCompid__13);
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        loopArray2: loopArray2,
        $compid__9: $compid__9,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        exampleUrl: _takephotoExample2.default
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp.Component);

Index.$$events = ["anonymousFunc1"];
Index.$$componentPath = "pages/confirm/index";
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/utils/generateFile.ts":
/*!***********************************!*\
  !*** ./src/utils/generateFile.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCSVFile = generateCSVFile;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// data：第一个值为表头
// eslint-disable-next-line import/prefer-default-export
function generateCSVFile(data) {
  var _data = _toArray(data),
      head = _data[0],
      otherData = _data.slice(1);

  var dataStr = '\uFEFF';
  dataStr += head.join();
  dataStr += '\n';
  dataStr += otherData.map(function (item) {
    return item.join();
  }).join('\n');
  return dataStr;
  // const blob = new Blob([dataStr], { type: 'text/csv,charset=UTF-8' })
  // const csvUrl = URL.createObjectURL(blob)
  // return csvUrl
}

/***/ }),

/***/ "./src/utils/qiniuUploader.ts":
/*!************************************!*\
  !*** ./src/utils/qiniuUploader.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.upload = upload;
var config = {};
// 在整个程序生命周期中，只需要 init 一次即可
// 如果需要变更参数，再调用 init 即可
function init(options) {
  config = {};
  updateConfigWithOptions(options);
}
function updateConfigWithOptions(options) {
  if (options.region) {
    config.qiniuRegion = options.region;
  } else {
    console.error('qiniu uploader need your bucket region');
  }
  if (options.uptoken) {
    config.qiniuUploadToken = options.uptoken;
  } else if (options.uptokenURL) {
    config.qiniuUploadTokenURL = options.uptokenURL;
  } else if (options.uptokenFunc) {
    config.qiniuUploadTokenFunction = options.uptokenFunc;
  }
  if (options.domain) {
    config.qiniuImageURLPrefix = options.domain;
  }
  if (options.shouldUseQiniuFileName) {
    config.qiniuShouldUseQiniuFileName = options.shouldUseQiniuFileName;
  }
}
function upload(args) {
  var filePath = args.filePath,
      options = args.options;

  if (!filePath) {
    console.error('qiniu uploader need filePath to upload');
    return;
  }
  if (options) {
    updateConfigWithOptions(options);
  }
  if (config.qiniuUploadToken) {
    doUpload(args);
  } else if (config.qiniuUploadTokenURL) {
    getQiniuToken(function () {
      doUpload(args);
    });
  } else if (config.qiniuUploadTokenFunction) {
    config.qiniuUploadToken = config.qiniuUploadTokenFunction();
    if (!config.qiniuUploadToken) {
      console.error('qiniu UploadTokenFunction result is null, please check the return value');
      return;
    }
    doUpload(args);
  } else {
    console.error('qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]');
    return;
  }
}
function doUpload(_ref) {
  var filePath = _ref.filePath,
      _success = _ref.success,
      _fail = _ref.fail,
      options = _ref.options,
      progress = _ref.progress,
      cancelTask = _ref.cancelTask,
      before = _ref.before,
      _complete = _ref.complete;

  if (!config.qiniuUploadToken) {
    console.error('qiniu UploadToken is null, please check the init config or networking');
    return;
  }
  var url = uploadURLFromRegionCode(config.qiniuRegion || 'ECN');
  var fileName = filePath.split('//')[1];
  if (options && options.key) {
    fileName = options.key;
  }
  var formData = {
    token: config.qiniuUploadToken
  };
  if (!config.qiniuShouldUseQiniuFileName) {
    formData['key'] = fileName;
  }
  before && before();
  var uploadTask = wx.uploadFile({
    url: url || '',
    filePath: filePath,
    name: 'file',
    formData: formData,
    success: function success(res) {
      var dataString = res.data;
      //   // this if case is a compatibility with wechat server returned a charcode, but was fixed
      //   if(res.data.hasOwnProperty('type') && res.data.type === 'Buffer'){
      //     dataString = String.fromCharCode.apply(null, res.data.data)
      //   }
      try {
        var dataObject = JSON.parse(dataString);
        //do something
        var fileUrl = config.qiniuImageURLPrefix + '/' + dataObject.key;
        dataObject.fileUrl = fileUrl;
        dataObject.imageURL = fileUrl;
        console.log(dataObject);
        _success && _success(dataObject);
      } catch (e) {
        console.log('parse JSON failed, origin String is: ' + dataString);
        _fail && _fail(e);
      }
    },
    fail: function fail(error) {
      console.error(error);
      _fail && _fail(error);
    },
    complete: function complete(err) {
      _complete && _complete(err);
    }
  });
  uploadTask.onProgressUpdate(function (res) {
    progress && progress(res);
  });
  cancelTask && cancelTask(function () {
    uploadTask.abort();
  });
}
function getQiniuToken(callback) {
  wx.request({
    url: config.qiniuUploadTokenURL || '',
    success: function success(res) {
      var token = res.data.uptoken;
      if (token && token.length > 0) {
        config.qiniuUploadToken = token;
        callback && callback();
      } else {
        console.error('qiniuUploader cannot get your token, please check the uptokenURL or server');
      }
    },
    fail: function fail(error) {
      console.error('qiniu UploadToken is null, please check the init config or networking: ' + error);
    }
  });
}
function uploadURLFromRegionCode(code) {
  var uploadURL = null;
  switch (code) {
    case 'ECN':
      uploadURL = 'https://up.qiniup.com';
      break;
    case 'NCN':
      uploadURL = 'https://up-z1.qiniup.com';
      break;
    case 'SCN':
      uploadURL = 'https://up-z2.qiniup.com';
      break;
    case 'NA':
      uploadURL = 'https://up-na0.qiniup.com';
      break;
    case 'ASG':
      uploadURL = 'https://up-as0.qiniup.com';
      break;
    default:
      console.error('please make the region is with one of [ECN, SCN, NCN, NA, ASG]');
  }
  return uploadURL;
}

/***/ })

},[["./src/pages/confirm/index.tsx","runtime","vendors"]]]);