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

	return day + '/' + month + '/' + d.getFullYear() + ' - ' + hour + ':' + minute;
}

function buttonContent(text, loading) {
	let icon = '';
	if (text === 'Delete') {
		icon = <i className="fa fa-trash-o" />;
	} else if (text === 'Edit') {
		icon = <i className="fa fa-pencil-square-o" />;
	} else if (text === 'Submit' || text === 'Publish') {
		icon = <i className="fa fa-check" />;
	} else if (text === 'Save draft') {
		icon = <i className="fa fa-floppy-o" />;
	} else if (text === 'New draft') {
		icon = <i className="fa fa-file-text-o" />;
	}
	if (!loading) {
		return (<span className="button-text">{icon} {text}</span>)
	}
	return (<i className="fa fa-spinner fa-spin" aria-hidden="true" />)
}

function buttonDisableOnLoading(loading) {
	if (!loading) {
		return ''
	}
	return 'disabled'
}

function setupModalBox(id) {
    const modal = document.getElementById('myModal' + id);
    const btn = document.getElementById("myBtn" + id);
    const span = document.getElementsByClassName("close" + id)[0];
	if (btn) {
	    btn.onclick = function() {
	        modal.style.display = "block";
	    }
	}
	if (span) {
	    span.onclick = function() {
	        modal.style.display = "none";
	    }
	}
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

const defaultScreenshot = 'https://res.cloudinary.com/zeropointtwo/image/upload/v1494842326/default-screenshot_a6tl0o.jpg';

export {displayDate, buttonContent, buttonDisableOnLoading, defaultScreenshot, setupModalBox};
