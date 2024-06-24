"use strict";
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
const list = ArrayUtils.wrapInArray("1");
