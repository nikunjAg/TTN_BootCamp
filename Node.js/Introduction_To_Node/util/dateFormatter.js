const moment = require("moment");

const getFormattedDateTime = () => {
	return moment().format("ddd, MMM Do YYYY, h:mm::ss A");
};

console.log(getFormattedDateTime());
