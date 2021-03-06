(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/activity-indicator/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/activity-indicator/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/activity-indicator/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtActivityIndicator = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtActivityIndicator, _AtComponent);

  function AtActivityIndicator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtActivityIndicator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtActivityIndicator.__proto__ || Object.getPrototypeOf(AtActivityIndicator)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__7", "rootClass", "content", "color", "size", "mode", "className"], _this.customComponents = ["AtLoading"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtActivityIndicator, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtActivityIndicator.prototype.__proto__ || Object.getPrototypeOf(AtActivityIndicator.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__7"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__7 = _genCompid2[0],
          $compid__7 = _genCompid2[1];

      var _props = this.__props,
          color = _props.color,
          size = _props.size,
          mode = _props.mode,
          content = _props.content;


      var rootClass = (0, _classnames2.default)('at-activity-indicator', {
        'at-activity-indicator--center': mode === 'center'
      }, this.__props.className);

      _taroWeapp.propsManager.set({
        "size": size,
        "color": color
      }, $compid__7, $prevCompid__7);
      Object.assign(this.__state, {
        $compid__7: $compid__7,
        rootClass: rootClass,
        content: content
      });
      return this.__state;
    }
  }]);

  return AtActivityIndicator;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "Users/joshua/workspace/WECHAT/wuhan/node_modules/taro-ui/dist/weapp/components/activity-indicator/index", _temp2);


AtActivityIndicator.defaultProps = {
  size: 0,
  mode: '',
  color: '',
  content: '',
  className: ''
};

AtActivityIndicator.propTypes = {
  size: _propTypes2.default.number,
  mode: _propTypes2.default.string,
  color: _propTypes2.default.string,
  content: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string])
};
exports.default = AtActivityIndicator;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtActivityIndicator));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/activity-indicator/index.js","runtime","vendors"]]]);