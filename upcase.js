let caps = function() {
	let text1 = document.getElementsByClassName('allcaps');
	for (let i=0; i<text1.length; i++){
		text1[i].innerHTML = text1[i].innerHTML.toUpperCase();
	}
	
	let text2 = document.getElementsByClassName('upcase');
	for (let j=0; j<text2.length; j++){
		text2[j].style.textTransform = 'capitalize';
	}
}

document.getElementById('decorate').addEventListener('click', caps);