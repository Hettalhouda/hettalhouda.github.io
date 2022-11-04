
//mode dark
const dark=document.getElementById("dark");
const body=document.getElementById("body");


dark.addEventListener("click",(eo)=>{
	body.classList.toggle("dark")
})
//copy the output
const myInp=document.getElementById("output_value");
    const btnCopy=document.getElementById("btnn1");
    btnCopy.onclick = function() {

	//select the text
	myInp.select();
	document.execCommand("copy");
	//coping
	}


var output=document.querySelector('#output_value');
var history=document.querySelector('#history_value');
var btn=document.querySelectorAll('.btn');


for (item of btn) {
	item.addEventListener('click',(e)=> {
		btntext=e.target.innerText;
		if (btntext=='/') {};
		output.value+=btntext;
	})
};
function sin()
{
	output.value=Math.sin(output.value);
}

function cos()
{
	output.value=Math.cos(output.value);
}
function tan()
{
	output.value=Math.tan(output.value);
}
function pow()
{
	output.value=Math.pow(output.value,2);
}
function triblr(){
	output.value=Math.sqrt(output.value,3);

}
function sqrt()
{
	output.value=Math.sqrt(output.value,2);
}
function log()
{
	output.value=Math.pow(output.value);
}
function pi()
{
	output.value=3.14159265359;
}
function fact()
{
	var i, num, f;
	f=1;
	num=output.value;
	for(i=1;i<=num;i++){
		f=f*i;
	output.value=f;	
	}}

function ac(){
	output.value=output.value.substr(0,output.value.length-1);

}
function c(){
	output.value="";

}
	

