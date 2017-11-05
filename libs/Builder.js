'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  builder 模式测试
 */
var Builder = function () {
    function Builder(id) {
        _classCallCheck(this, Builder);

        this.obj = { id: id };
    }

    _createClass(Builder, [{
        key: 'addParam',
        value: function addParam(key, value) {
            this.obj[key] = value;
            return this;
        }
    }, {
        key: 'addTest',
        value: function addTest(value) {
            this.obj['test'] = value;
            return this;
        }
    }, {
        key: 'addTest2',
        value: function addTest2(value) {
            this.obj['test2'] = value;
            return this;
        }
    }, {
        key: 'build',
        value: function build() {
            var obj = this.obj;
            this.obj = null;
            return obj;
        }
    }], [{
        key: 'create',
        value: function create(id) {
            var builder = new Builder(id);
            return builder;
        }
    }]);

    return Builder;
}();

// module.exports = Builder;


exports.default = Builder;