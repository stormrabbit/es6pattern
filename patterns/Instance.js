/**
 * 单例
 */

const singleton = (function () {
  let instance;
  const init = () => {
    let flag = 0;
    const setFlag = (flag2) => {
      flag = flag2;
    }
    const getFlag = () => flag;

    return {
      setFlag,
      getFlag
    }
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
}())

export default singleton.getInstance();