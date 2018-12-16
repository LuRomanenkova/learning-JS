function areaSqr(){
	var a = document.forma1.t2.value;
	var s = a * a;
	if  (a<0) {
		console.log('Ошибка');
	}
	else{
	document.forma1.res.value=s;
	}
}

function Mul(){
	var n = document.forma2.t1.value;
	var j = 1;
	var i = 2;
	var a = new Array();
	if  (n<0) {
		console.log('Ошибка');
	}
	else
	{
	do {
	  
	 if (n % i == 0){
	  a[j] = i;
	  j++;
	  n = n / i;
	 }
	 else
	 {
	  i++;
	 }
	}
	//console.log(a);
	while (i < n)
	a[j] = i;

	var res = {};
	a.forEach(function(e){
		if (res[e]){
			res[e] = 1 + res[e];
		}
		else{
			
		res[e] = 1;
		}
	});

	var s = "";
	for(k in res){
		s+=k+':'+res[k]+',';
	}
	s = s.substr(0,s.length-1);
	document.forma2.res.value=s;
}
}


function matrix()
{
	var n = 5, m = 7;
	var max = document.forma3.max.value; 
	var min = document.forma3.min.value; 
	function matrixArray(rows,columns){
	   var array = new Array();
	   for(var i=0; i<rows; i++){
		 array[i] = new Array();
		 for(var j=0; j<columns; j++){
			array[i][j]= Math.round(Math.random() * (max - min));
			}
		}
	return array;
	}
	
		
	var myMatrix = matrixArray(n,m);
	console.log(myMatrix.join('\n'));
	
	function sortMatrixArray(arr,rows,columns){
	   var i = 0;
	   for(var k=0; k<columns; k++){
	   for (var l = 0; l <rows; l++){
		for (var j = 0;j <rows - l; j++) {
			if (j<4){
			
				if (arr[j][i] > arr[j+1][i]) {
					var swap = arr[j][i];
					arr[j][i] = arr[j+1][i];
					arr[j+1][i] = swap;
				}
			}
        }
		
	   }
	   i++;
    }
		return arr;
	}

	
	var myNewMatrix = sortMatrixArray(myMatrix,n,m); 
	console.log(myNewMatrix.join('\n'));		


 }
 

 function Task4(){
	var max = document.forma4.max.value; 
	var min = document.forma4.min.value;
	var n =  document.forma4.n.value;
	var m = Math.sqrt(n);
	if ( (n<=0) || (m != Math.round(m) )){
		console.log('Ошибка');
	}
	else {
	var arr = [];
	
	function getRandomInt(mn, mx)
	{
		var a = Math.round(Math.random() * (max - min));
		return(a);
	}
	
	function createArray(l){
		var array = new Array();
		for(var i=0; i<l; i++){
			array[i]= getRandomInt(min, max);
	 
		}
	return array;
	}

	function getResultArray(a)
	{
		return( a.sort((a, b) => a - b));
	}
	
	function getMatrix(a,x)
	{	
		var array = new Array();
		var k = 0;
		var i=x-1;
		while (k <= x*x){
			array[i] = new Array();
			for(var j=0; j<x; j++)
				{
					array[i][j]= a[k]
					k++;
				}
			i--;
			array[i] = new Array();
			for(var j=x-1; j>=0; j--)
				{
					array[i][j]= a[k]
					k++;
				}
			i--;
			
		}
		return(array);
	}
		
	var myArr = createArray(n);
	console.log(myArr.join('\n'));
	var sortedArr = getResultArray(myArr);
	console.log(sortedArr);
	var getArr = getMatrix(sortedArr, m);
	console.log(getArr.join('\n'));
	
	table = document.createElement("TABLE") 
	tableBody = document.createElement("TBODY") 
	table.appendChild(tableBody) 
	for (i = 0; i < m; i++) { 
		tr = document.createElement("TR") 

		tableBody.appendChild(tr); 
		for (j = 0; j < m; j++) { 
			td = document.createElement("TD") 
			td.innerHTML = getArr[i][j]; 
			tr.appendChild(td) 
		} 
	}
	document.body.appendChild(table)
	}
	 
 }