function getHistory( ) {
return document.getElementById("history_value").value;}

function printHistory(num){
	document.getElementById("history_value").value=num;}

function getOutput(){
	return document.getElementById("output_value").value;}

function printOutput(num){
	 if (num=="") {
		document.getElementById("output_value").value=(num);}
	else{
	
	document.getElementById("output_value").value=getFormatedNumber(num);}
}
/*hadi ta9sem les value en trois trois*/
function getFormatedNumber(num){
	if (num=="-") {
		return("");}

	var n=Number(num);
	var value=n.toLocaleString("en");
	return value;
}
/*hadi l function tjib l'original number*/
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

/*hadi l fonction li tkhali ki nba3az 3la button ykhroj wach fiha l value*/
var nombre =document.getElementsByClassName("btn_number");
for (var i=0;i<nombre.length;i++){
	nombre[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}	});
}
var operation =document.getElementsByClassName("btn_operator");
for (var i=0;i<operation.length;i++){
	operation[i].addEventListener('click',function(){

		if (this.id=="Clear"){
			printHistory("");
		    printOutput("");
		}

        else if(this.id=="AC") {
		     var output=reverseNumberFormat(getOutput()).toString();
		     if (output) {
		     	output=output.substr(0,output.length-1);
		     	printOutput(output);
		     }
		    }

		 else {
		    	var output=getOutput();
		        var history=getHistory();
		        if (output==""&&history!="") {
		        	if(isNaN(history[history.length-1])){
		        		history=history.substr(0,history.length-1);
		        	}
		        };
		    	if(output!="" || history!=""){
		    		output= output==""?
		    	  output:reverseNumberFormat(output);

		    	  history+=output;
		    		
		    	  if(this.id=="equal"){
		    		    var result=eval(history);
		    		       printOutput(result);
		    		       printHistory("");
		    		          
		                 }
                         else{
                         	history+=this.id;
                         	printHistory(history);
                         	printOutput("");
                         }
		}}
             
		
	});
}
//mode dark

const dark=document.getElementById("dark");
const body=document.getElementById("body");

dark.addEventListener("click",(eo)=>{
	body.classList.toggle("dark")
})



//select text input
const myInp=document.getElementById("output_value");
    const btnCopy=document.getElementById("btnn1");
    btnCopy.onclick = function() {

	//select the text
	myInp.select();
	document.execCommand("copy");
	//coping
	}