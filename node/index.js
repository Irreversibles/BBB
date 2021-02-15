'use strict';
exports.main_handler = async (event, context, callback) => {
    for (const v of event["Message"].split("\r\n")) {
        //解决云函数热启动问题
        delete require.cache[require.resolve(`./${v}.js`)];
        console.log(v);
        require(`./${v}.js`)
    }
}