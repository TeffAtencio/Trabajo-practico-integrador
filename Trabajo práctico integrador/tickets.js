let descest	= 0.2;
let desctr = 0.5;
let desctjr = 0.85;

const opcant = document.getElementById('cant-input');
const btncat = document.getElementById('cat');
const btnrsm = document.getElementById('resumen');

opcant.addEventListener("click", totalfinal);
btnrsm.addEventListener("click", resume);

function totalfinal(){

	let total = 0;

	if (btncat.value == 'est') {
		total = (descest * 200) * opcant.value;
	} else if (btncat.value == 'tr') {
		total = (desctr * 200) * opcant.value;
	} else {
		total = (desctjr * 200) * opcant.value;
	}
	return total;
}

function resume(){
  
	document.getElementById("getvalue").innerHTML = totalfinal()}