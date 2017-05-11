import React from 'react';

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

function buttonContent(text, loading) {
	if (!loading) {
		return text
	}
	return (<i className="fa fa fa-spinner fa-spin" aria-hidden="true" />)
}

function buttonDisableOnLoading(loading) {
	if (!loading) {
		return ''
	}
	return 'disabled'
}

function setupModalBox() {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById("myBtn");
    const span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

const defaultScreenshot = 'https://res.cloudinary.com/zeropointtwo/image/upload/v1494319409/default-screenshot_fvcgca.jpg';

export {displayDate, buttonContent, buttonDisableOnLoading, defaultScreenshot, setupModalBox};
