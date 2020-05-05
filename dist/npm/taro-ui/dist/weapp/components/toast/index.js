(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/toast/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/toast/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/toast/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

var _img = __webpack_require__(/*! ./img.json */ "./node_modules/taro-ui/dist/weapp/components/toast/img.json");

var _img2 = _interopRequireDefault(_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtToast = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtToast, _AtComponent);

  function AtToast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtToast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtToast.__proto__ || Object.getPrototypeOf(AtToast)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "_isOpened", "hasMask", "bodyClass", "realImg", "isRenderIcon", "iconClass", "text", "status", "customStyle", "icon", "image", "className", "isOpened", "duration"], _this.handleClick = function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          status = _this$props.status;

      if (status === 'loading') {
        return;
      }
      if (onClick) {
        return _this.props.onClick();
      }
      _this.close();
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtToast, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtToast.prototype.__proto__ || Object.getPrototypeOf(AtToast.prototype), '_constructor', this).apply(this, arguments);

      var isOpened = props.isOpened,
          duration = props.duration;


      if (isOpened) {
        this.makeTimer(duration);
      }

      this._timer = null;
      this.state = {
        _isOpened: isOpened
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'clearTimmer',
    value: function clearTimmer() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
  }, {
    key: 'makeTimer',
    value: function makeTimer(duration) {
      var _this2 = this;

      if (duration === 0) {
        return;
      }
      this._timer = setTimeout(function () {
        _this2.close();
      }, +duration);
    }
  }, {
    key: 'close',
    value: function close() {
      var _isOpened = this.state._isOpened;

      if (_isOpened) {
        this.setState({
          _isOpened: false
        }, this.handleClose);
        this.clearTimmer();
      }
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      if ((0, _isFunction3.default)(this.props.onClose)) {
        this.props.onClose();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened,
          duration = nextProps.duration;

      if (!isOpened) {
        this.close();
        return;
      }

      if (!this.state._isOpened) {
        this.setState({
          _isOpened: true
        });
      } else {
        this.clearTimmer();
      }
      this.makeTimer(duration);
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _isOpened = this.__state._isOpened;
      var _props = this.__props,
          customStyle = _props.customStyle,
          text = _props.text,
          icon = _props.icon,
          status = _props.status,
          image = _props.image,
          hasMask = _props.hasMask;


      var realImg = image || _img2.default[status] || null;
      var isRenderIcon = !!(icon && !(image || _img2.default[status]));

      var bodyClass = (0, _classnames2.default)('toast-body', _defineProperty({
        'at-toast__body--custom-image': image,
        'toast-body--text': !realImg && !icon
      }, "at-toast__body--" + status, !!status));

      var iconClass = (0, _classnames2.default)('at-icon', _defineProperty({}, "at-icon-" + icon, icon));

      var anonymousState__temp = _isOpened ? (0, _classnames2.default)('at-toast', this.__props.className) : null;
      var anonymousState__temp2 = _isOpened ? (0, _taroWeapp.internal_inline_style)(customStyle) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        hasMask: hasMask,
        bodyClass: bodyClass,
        realImg: realImg,
        isRenderIcon: isRenderIcon,
        iconClass: iconClass,
        text: text
      });
      return this.__state;
    }
  }]);

  return AtToast;
}(_component2.default), _class.$$events = ["handleClick"], _class.$$componentPath = "Users/joshua/workspace/WECHAT/wuhan/node_modules/taro-ui/dist/weapp/components/toast/index", _temp2);


AtToast.defaultProps = {
  duration: 3000,
  isOpened: false
};

AtToast.propTypes = {
  text: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  hasMask: _propTypes2.default.bool,
  image: _propTypes2.default.string,
  isOpened: _propTypes2.default.bool,
  duration: _propTypes2.default.number,
  status: _propTypes2.default.oneOf(['', 'error', 'loading', 'success']),
  onClick: _propTypes2.default.func,
  onClose: _propTypes2.default.func
};
exports.default = AtToast;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtToast));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/toast/index.js","runtime","vendors"]]]);