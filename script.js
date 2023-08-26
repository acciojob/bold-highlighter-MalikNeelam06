let paraBold;
window.onload=getBold_items();
function getBold_items(){
 paraBold=document.getElementsByTagName("strong");
}
function highlight() {
    //Write your code here
	for(let i=0;i<paraBold.length;i++){
	paraBold[i].style.color="green";
	}

}


function return_normal() {
    //Write your code here
	for(let i=0;i<paraBold.length;i++){
	paraBold[i].style.color="black";
	}
	// para.style.color="black";

    
}
