





document.addEventListener('DOMContentLoaded', function () {
	
	var deadline = new Date(2021, 12, 01);

	var timerId = null;

	function declensionNum(num, words) {
	  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}
	
	function countdownTimer() {
	var diff = deadline - new Date();
	  if (diff <= 0) {
		 clearInterval(timerId);
	  }
	  var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
	  var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
	  var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
	  var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
	  $days.textContent = days < 10 ? '0' + days : days;
	  $hours.textContent = hours < 10 ? '0' + hours : hours;
	  $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
	  $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
	  $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
	  $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
	  $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
	  $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
	}

	var $days = document.querySelector('.timer__days');
	var $hours = document.querySelector('.timer__hours');
	var $minutes = document.querySelector('.timer__minutes');
	var $seconds = document.querySelector('.timer__seconds');
	countdownTimer();
	timerId = setInterval(countdownTimer, 1000);
 });