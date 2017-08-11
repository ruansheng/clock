$(function() {
	
	function getDate(timestamp){
		var d = new Date(timestamp * 1000);
		var date = (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" + (d.getDate()) + " " + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
		return date;
	}
	
	// 当前时间戳
	var now_timestamp = parseInt(new Date().getTime()/1000);
	$('#now_timestamp').val(now_timestamp);
	
	// 当前时间字符串
	var now_datestring = getDate(now_timestamp);
	$('#now_datestring').val(now_datestring);
	
	$('#button_time').click(function() {
		var time = $('#input_time').val();
		var date = getDate(time);
		$('#output_time').val(date);		
	});
})
