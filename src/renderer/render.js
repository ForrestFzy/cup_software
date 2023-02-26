// renderer.js
var thrift = require('thrift');
// 调用win10下thrift命令自动生成的依赖包
var userService = require('./gen-nodejs/userService.js');
var ttypes = require('./gen-nodejs/test_types.js');
var thriftConnection = thrift.createConnection('127.0.0.1', 8000);
var thriftClient = thrift.createClient(userService,thriftConnection);

thriftConnection.on("error",function(e)
{
    console.log(e);
});

export default thriftClient
