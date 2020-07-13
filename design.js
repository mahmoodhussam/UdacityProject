const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const submit = document.getElementById('click');

submit.addEventListener('click' , makeGrid);

table.addEventListener('click' , function(event){
	var color = colorPicker.value ;
	if(event.target.tagName == 'TD'){
	
	event.target.style.backgroundColor = color;

}

});

function makeGrid(event){
	table.innerHTML = "";
	
	event.preventDefault();
	let h = inputHeight.value ; 
	let w = inputWidth.value ; 
	console.log(h);
	console.log(w);
	for(var i = 0 ; i<h ; i++){
		var tr = document.createElement('TR');
		for(var j = 0 ; j < w ; j++){
			var td = document.createElement('TD');
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

}