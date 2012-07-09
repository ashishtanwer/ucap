/**
 * Calculate the difference between two dates.
 * @param Date date1 the first date
 * @param Date date2 the second date
 * @return the difference between two dates in number of days
 */
function differenceInDays(date1, date2) {
	var millisBetween = date2.getTime() - date1.getTime();
	var millisecondsPerDay = 1000 * 60 * 60 * 24;
	var daysRemaining = Math.ceil(millisBetween / millisecondsPerDay);
	
	return daysRemaining;
}

/**
 * Compare two given times.
 * @param string time1 the first time, e.g. 2:00 PM
 * @param string time2 the second time, e.g. 3:00 PM
 * @return a number indication of their relative values; -1 = time1 < time2; 
 *		   0 = time1 == time2; 1 = time1 > time2
 */
function timeCompareTo(time1, time2) {
	time1 = Date.parse(time1);
	time2 = Date.parse(time2);
	
	var delta = time1.compareTo(time2);
	return delta;
}

/**
 * Numeric only validation. Special characters such as backspace and delete
 * are allowed.
 * @return true if the key event is numeric or false otherwise.
 */
function numericOnly(evt)
{
	evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
	
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false
    }
    return true
}

/**
 * Returns the time difference between UTC time and local time.
 */
function getTimeZone()
{
	var timezone = new Date().getTimezoneOffset();
	//timezone = (-1) * timezone;
	timezone = Math.floor(timezone / 60);
	
	return timezone;
}