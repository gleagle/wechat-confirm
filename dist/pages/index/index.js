(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/assets/eagle-sign.png":
/*!***********************************!*\
  !*** ./src/assets/eagle-sign.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/eagle-sign.png";

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
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

var _eagleSign = __webpack_require__(/*! @/assets/eagle-sign.png */ "./src/assets/eagle-sign.png");

var _eagleSign2 = _interopRequireDefault(_eagleSign);

var _globalData = __webpack_require__(/*! ../../utils/globalData */ "./src/utils/globalData.ts");

__webpack_require__(/*! ../../utils/dateExtend */ "./src/utils/dateExtend.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "$compid__0", "$compid__1", "eagleSignUrl", "isIphoneX", "isShowErrorToast"];
    _this.config = {
      navigationBarTitleText: '翔鹰验收'
    };
    _this.onGotUserInfo = function (resp) {
      if (resp.detail.userInfo) {
        // 返回的信息中包含用户信息则证明用户允许获取信息授权
        var nickName = resp.detail.userInfo.nickName;

        (0, _globalData.set)('nickName', nickName);
      }
      _this.handleScanCode();
    };
    _this.customComponents = ["AtToast", "AtButton"];
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

      var _getGlobalData = (0, _globalData.get)(),
          isIphoneX = _getGlobalData.isIphoneX;

      this.state = {
        isShowErrorToast: false,
        isIphoneX: isIphoneX
      };
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
    value: function componentDidShow() {
      var _getGlobalData2 = (0, _globalData.get)(),
          isScanCode = _getGlobalData2.isScanCode;

      if (isScanCode) {
        this.handleScanCode();
        (0, _globalData.set)('isScanCode', false);
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "handleScanCode",
    value: function handleScanCode() {
      var _this2 = this;

      _taroWeapp2.default.scanCode({
        scanType: ['barCode'],
        success: function success(resp) {
          var barCode = resp.result;
          (0, _globalData.set)('barCode', barCode);
          _taroWeapp2.default.navigateTo({
            url: "/pages/logistics/index?code=" + barCode
          });
        },

        fail: function fail() {
          _this2.setState({ isShowErrorToast: true });
          setTimeout(function () {
            return _this2.setState({ isShowErrorToast: false });
          }, 3000);
        }
      });
    }
  }, {
    key: "pushAboutPage",
    value: function pushAboutPage() {
      _taroWeapp2.default.navigateTo({
        url: '/pages/about/index'
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__0"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__0 = _genCompid2[0],
          $compid__0 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1 = _genCompid4[0],
          $compid__1 = _genCompid4[1];

      var _state = this.__state,
          isShowErrorToast = _state.isShowErrorToast,
          isIphoneX = _state.isIphoneX;

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ marginTop: '10px' });
      _taroWeapp.propsManager.set({
        "isOpened": isShowErrorToast,
        "text": "\u8BF7\u91CD\u65B0\u626B\u63CF"
      }, $compid__0, $prevCompid__0);
      _taroWeapp.propsManager.set({
        "type": "primary",
        "openType": "getUserInfo",
        "onGetUserInfo": this.onGotUserInfo
      }, $compid__1, $prevCompid__1);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__0: $compid__0,
        $compid__1: $compid__1,
        eagleSignUrl: _eagleSign2.default
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component);

Index.$$events = ["pushAboutPage"];
Index.$$componentPath = "pages/index/index";
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/utils/dateExtend.ts":
/*!*********************************!*\
  !*** ./src/utils/dateExtend.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }return fmt;
};

/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors"]]]);