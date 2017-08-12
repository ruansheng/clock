$(function() {
	
	function timestampToDate(timestamp){
		var d = new Date(timestamp * 1000);
		var year = d.getFullYear();
		var month = d.getMonth();
		var day = d.getDate();
		var hour = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();

		month = month + 1;
		if(month < 10) {
			month = "0" + month;
		}
		if(day < 10) {
			day = "0" + day;
		}
		if(hour < 10) {
			hour = "0" + hour;
		}
		if(minutes < 10) {
			minutes = "0" + minutes;
		}
		if(seconds < 10) {
			seconds = "0" + seconds;
		}
		var date = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
		return date;
	}
	
	function dateToTimestamp(date) {
		var timestamp = Date.parse(new Date(date));
		return timestamp / 1000;
	}
	
	// 当前时间戳
	var now_timestamp = parseInt(new Date().getTime()/1000);
	$('#now_timestamp').val(now_timestamp);
	
	// 当前时间字符串
	var now_datestring = timestampToDate(now_timestamp);
	$('#now_datestring').val(now_datestring);
	
	$('#transform').click(function() {
		var timestamp = $('#input_timestamp').val();
		var timedate = $('#input_date').val();
		if(timestamp) {
			var date = timestampToDate(timestamp);	
			$('#input_date').val(date);		
		} else if(timedate){
			var timestamp = dateToTimestamp(timedate);
			$('#input_timestamp').val(timestamp);		
		}
	});
})
