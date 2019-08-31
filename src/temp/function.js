"use strict";
{
    const funcA = (e) => {
        if (typeof e === 'string') {
            return e;
        }
        return e();
    };
}
{
    const funcA = (e) => {
        return e.length;
    };
    // console.log(100)
    funcA(undefined);
}
//# sourceMappingURL=function.js.map