var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }

    var release = os.release(); 
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();    
    var userInfo = os.userInfo();  

    console.log('System:'.grey, type);    
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);   
    // console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');   
    console.log('Uptime:'.green, time.print(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.gray, userInfo.homedir);
}

exports.print = getOSinfo;

/*
exports.print = getOSinfo;
exports.getCPUDetails = getCPUDetails;
*/
// alternative
/*
module.exports = {
    print: getOSinfo,
    getCPUDetails: getCPUDetails
};
*/