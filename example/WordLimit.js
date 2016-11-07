'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WordLimit;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WordLimit(props) {
  if (props.children.length > props.limit) return _react2.default.createElement(
    'span',
    { title: props.children },
    props.children.substring(0, props.limit) + '...'
  );else return _react2.default.createElement(
    'span',
    { title: props.children },
    props.children
  );
}
