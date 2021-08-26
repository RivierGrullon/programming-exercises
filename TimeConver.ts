// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

function timeConvert(time: string): string {
	let timeArr = time.split(":", 4);
	const Time24Hour: Record<string, number> = {
		"12": 0,
		"01": 13,
		"02": 14,
		"03": 15,
		"04": 16,
		"05": 17,
		"06": 18,
		"07": 19,
		"08": 20,
		"09": 21,
		"10": 22,
		"11": 23,
	};

	if (timeArr[2].includes("AM")) {
        timeArr[2] = timeArr[2].substring(0, 2);
		if (timeArr[0] === "12") {
			timeArr[0] = "00";
		}
	} else if (timeArr[2].includes("PM")) {
		if (timeArr[0].length === 1) {
			timeArr[0] = `0${timeArr[0]}`;
		}

		timeArr[2] = timeArr[2].substring(0, 2);
		timeArr[0] = Time24Hour[timeArr[0]].toString();
        if (timeArr[0] === "0") {
			timeArr[0] = "12";
		}
	}
	return timeArr.join(":");
}

console.log(timeConvert("07:45:54PM"));
