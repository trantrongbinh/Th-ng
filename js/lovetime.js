	//ngày giờ bắt đầu là của nhau
	//set năm
	var yearS = '2015';
	//set tháng
	var monthS = '12';
	//set ngày
	var dayS = '31';
	//set giờ
	var hourS = '22';
	//set phút
	var minS = '51';
	//set giây
	var secS = '0';
	//kết thúc chỉnh ngày giờ
	function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
	$("#elapseClock").html(result);
}
	var together = new Date();
	together.setFullYear(yearS, monthS, dayS);
	together.setHours(hourS);
	together.setMinutes(minS);
	together.setSeconds(secS);
	together.setMilliseconds(0);
		
	if (!document.createElement('canvas').getContext) {
		var msg = document.createElement("div");
		msg.id = "errorMsg";
		msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
		document.body.appendChild(msg);
		document.execCommand("stop");
	} else {
		timeElapse(together);
		setInterval(function () {
		timeElapse(together);
		}, 500);
	}