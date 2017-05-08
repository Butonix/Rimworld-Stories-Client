function displayDate(date) {
	if (!date) {
		return false;
	}
	const d = new Date(date);
	const day = ('0' + d.getDate()).slice(-2);
	const month = ('0' + (d.getMonth()+1)).slice(-2);
	const hour = ('0' + d.getHours()).slice(-2);
	const minute = ('0' + d.getMinutes()).slice(-2);

	return day + '/' + month + '/' + d.getFullYear() + ' at ' + hour + ':' + minute;
}

export {displayDate};
