function getTime(uptime) {
	if (uptime < 60) {
    	var seconds = uptime + 's';
		return seconds;
    } else if (uptime >= 60 && uptime < 3600 ) {
		var minutes = Math.floor((uptime / 60)) + 'min ' + Math.floor((uptime % 60)) + 's';
		return minutes;
	} else {
		var hours = Math.floor((uptime / 3600)) + 'h ' + Math.floor((uptime % 3600 / 60)) + 'min ' + Math.floor((uptime % 60)) + 's';
		return hours;
	}
}  

exports.print = getTime; 