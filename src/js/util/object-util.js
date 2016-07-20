/**
 * Created by ssge on 2016/7/13.
 */
var cloneObjectWithProp = function (obj, prop, value) {
    var newObj = Object.assign({}, obj);
    newObj[prop] = value;
    return newObj;
};

export {cloneObjectWithProp};