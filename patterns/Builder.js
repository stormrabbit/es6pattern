/**
 *  builder 模式测试
 */
class Builder {
    
    constructor(id) {
        this.obj = { id };
    }

    static create(id) {
        const builder = new Builder(id);
        return builder
    }

    addParam(key, value) {
        this.obj[key] = value;
        return this;
    }

    addTest(value) {
        this.obj['test'] = value;
        return this;
    }

    addTest2(value) {
        this.obj['test2'] = value;
        return this;
    }

    build() {
        let obj = this.obj;
        this.obj = null;
        return obj;
    }
}

// module.exports = Builder;
export default Builder;
