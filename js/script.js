// lesson 1

var arr = [1,2,3];
document.getElementById("array").innerHTML = "Array: " + arr;

document.getElementById("submit").onclick = function(){
	arr.push(parseInt(document.getElementById("add-a-number").value));
	document.getElementById("array").innerHTML = "Array: " + arr;
	console.log(arr);
};
