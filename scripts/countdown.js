/**
 * @author Wesley Gaddini
 */
function updateTime() {
	now      = new Date();
	launch  = new Date(2012, 10, 5, 23);
	diff = launch - now;

	days  = Math.floor( diff / (1000*60*60*24) );
	hours = Math.floor( diff / (1000*60*60) );
	mins  = Math.floor( diff / (1000*60) );
	secs  = Math.floor( diff / 1000 );

	dd = days;
	hh = hours - days  * 24;
	mm = mins  - hours * 60;
	ss = secs  - mins  * 60;

	// document.getElementById("worldcup_countdown_time").innerHTML = dd + ' days<br/>' + hh + ' hours<br/>' + mm + ' minutes<br/>' + ss + ' seconds' ;
	document.getElementById("countdown").innerHTML = dd + ' days ' + hh + ' hours ' + mm + ' minutes ' + ss + ' seconds ';
}
setInterval('updateTime()', 1000 );