var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nums = [4, 1, 9, 7, 5, 3, 16];
var target = 14;
function findNum(nums) {
    var numMap = nums.reduce(function (acc, cur) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[cur] = true, _a)));
    }, {});
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var wantNum = target - num;
        if (wantNum in numMap) {
            return true;
        }
    }
    return false;
}
console.log(nums);
console.log(findNum(nums));
