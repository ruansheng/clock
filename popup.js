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
	
	// 时间戳转换日期
	$('#transform_timestamp').click(function() {
		var timestamp_string = $('#input_timestamp').val();
		if(timestamp_string == "") {
			return;
		}
		
		var timestamp_array = timestamp_string.split('\n');
		
		var date_array = new Array();
		for(i = 0; i < timestamp_array.length; i++) {
			var date = timestampToDate(timestamp_array[i]);		
			date_array.push(date);
		}
		$('#input_date').val(date_array.join('\n'));		
	});
	
	// 日期转换时间戳
	$('#transform_date').click(function() {
		var date_string = $('#input_date').val();
		if(date_string == "") {
			return;
		}
		
		var date_array = date_string.split('\n');
		
		var timestamp_array = new Array();
		for(i = 0; i < date_array.length; i++) {
			var date = dateToTimestamp(date_array[i]);		
			timestamp_array.push(date);
		}
		$('#input_timestamp').val(timestamp_array.join('\n'));		
	});
	
})
