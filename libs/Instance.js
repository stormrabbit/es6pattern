"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 单例
 */

var singleton = function () {
  var instance = void 0;
  var init = function init() {
    var flag = 0;
    var setFlag = function setFlag(flag2) {
      flag = flag2;
    };
    var getFlag = function getFlag() {
      return flag;
    };

    return {
      setFlag: setFlag,
      getFlag: getFlag
    };
  };
  return {
    getInstance: function getInstance() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
}();

exports.default = singleton.getInstance();