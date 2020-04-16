var arrAvg
var maximum 
var minimum 

let more = function(){
	for (i=0; i<5; i++){
		let field = document.createElement('INPUT');
		field.setAttribute('type', 'text');
		document.getElementById('input-list').appendChild(field);
	}
}

let calculate = function(){
	let values = document.getElementsByTagName('input');
	let collection = [];
	for (i=0; i<values.length; i++){
		if (values[i].value != ''){
			let parsed = parseInt(values[i].value, 10)
			collection.push(parsed);
			console.log(collection);
			
			minimum = Math.min.apply(Math, collection);
			let min = document.getElementById('min');
			min.innerHTML = minimum;
		
			maximum = Math.max.apply(Math, collection);
			let max = document.getElementById('max');
			max.innerHTML = maximum;
			
			arrAvg = collection.reduce((a,b) => a + b, 0) / collection.length
			let avg = document.getElementById('average');
			avg.innerHTML = arrAvg;	
		}
	}
	for (x = 0; x<collection.length; x++){
        if(collection[x] == maximum){
            document.getElementsByTagName("input")[x].style.backgroundColor = "#a1ffa4";
        }
    }

    for (y=0; y<collection.length; y++){
        if(collection[y] == minimum){
            document.getElementsByTagName("input")[y].style.backgroundColor = "#a1e4ff";
        }
    }
}

let remove = function(){
	
}

document.getElementById('submit').addEventListener('click', calculate);
document.getElementById('more').addEventListener('click', more);
document.getElementById('remove').addEventListener('click', remove);

