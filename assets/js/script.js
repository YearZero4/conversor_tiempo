function resolve(n, f, t) {
	let res = "";
	if (f === "days" && t === "hours") {
		res += `${n * 24}`;
	} else if (f === "days" && t === "minutes") {
		res += `${n * 1440}`;
	} else if (f === "days" && t === "seconds") {
		res += `${n * 86400}`;
	} else if (f === "hours" && t === "days") {
		res += `${n / 24}`;
	} else if (f === "hours" && t === "minutes") {
		res += `${n * 60}`;
	} else if (f === "hours" && t === "seconds") {
		res += `${n * 3600}`;
	} else if (f === "minutes" && t === "days") {
		res += `${n / 1440}`;
	} else if (f === "minutes" && t === "hours") {
		res += `${n / 60}`;
	} else if (f === "minutes" && t === "seconds") {
		res += `${n * 60}`;
	} else if (f === "seconds" && t === "days") {
		res += `${n / 86400}`;
	} else if (f === "seconds" && t === "hours") {
		res += `${n / 3600}`;
	} else if (f === "seconds" && t === "minutes") {
		res += `${n / 60}`;
	}

	return `${res} ${t}`;
}
function funct() {
	n = document.getElementById("number");
	number = document.getElementById("number").value;
	from = document.getElementById("from").value;
	to = document.getElementById("to").value;
	if (from === to) {
		result = `${number} ${from} (mismo resultado)`;
	} else {
		result = resolve(number, from, to);
	}
	document.getElementById("print-result").innerHTML = `${result}`;

	n.addEventListener("input", function () {
		setTimeout(() => {
			funct();
		}, 1500);
	});
}
