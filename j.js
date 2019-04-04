 
var numsquare =6;
var colors = generaterandomcolor(numsquare);
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#h1"); 
var pickedcolor = document.querySelector("#pickcolor");
var messagedisplay = document.querySelector("#message");
var newcolor1 = document.querySelector("#newcolor");
var modebutton = document.querySelectorAll(".mode");
var easybutton = document.querySelector("#easy");
var hardbutton = document.querySelector("#hard");
pickedcolor.textContent = rgbcolor();
colordisplay.style.background="steelblue";

easybutton.addEventListener("click",function(){

messagedisplay.textContent="  ";
easybutton.classList.add("selected");
hardbutton.classList.remove("selected");
newcolor1.classList.remove("selected");
colors = generaterandomcolor(3);
colordisplay.style.background="steelblue";


//display color change
pickedcolor.textContent = rgbcolor();
for (var i = 0; i < squares.length; i++) {
	if(colors[i])
	squares[i].style.background= colors[i];
else{
	squares[i].style.display = "none";
}

}

});

hardbutton.addEventListener("click", function(){
messagedisplay.textContent="  ";
hardbutton.classList.add("selected");
easybutton.classList.remove("selected");
newcolor1.classList.remove("selected");
colordisplay.style.background="steelblue";
colors = generaterandomcolor(6);
pickedcolor.textContent = rgbcolor();
for (var i = 0; i < squares.length; i++) {

	squares[i].style.background= colors[i];
	squares[i].style.display = "block";
}   
});

newcolor1.addEventListener("click", function(){
 
 hardbutton.classList.remove("selected");

easybutton.classList.remove("selected");
 colordisplay.style.background = "steelblue"; 
 colors = generaterandomcolor(6);
messagedisplay.textContent=" ";
newcolor1.textContent= "newcolor";
  
 //display color change
 pickedcolor.textContent = rgbcolor();
 //squares color change
 for (var i = 0; i <squares.length; i++) {
 squares[i].style.background = colors[i];
 squares[i].style.display = "block";
 }




});


for(var i=0; i < squares.length; i++)
	{
		squares[i].style.background =  colors[i];
		 squares[i].addEventListener("click", function(){
		 	 var clickedcolor = this.style.background;

			if(clickedcolor ===  pickedcolor.textContent)
			{	messagedisplay.textContent = "CORRECT";
                newcolor1.textContent = "play again";

            colordisplay.style.background = clickedcolor;
            squarecolor(clickedcolor);
			}
			else
				{	messagedisplay.textContent="try again";
                this.style.background = "rgb(0, 0, 0)";
                }
		});
		}
	
		   function squarecolor(){
		   	for (var i =0; i <= squares.length; i++) {
		   		squares[i].style.background = colors[i];
		   	}
		   }
		   function randomcolor(){
		   	  
		   	 
		   	 
		   	 var r = Math.floor(Math.random() * 256);
		   	 var g =Math.floor(Math.random() * 256);
		   	 var b = Math.floor(Math.random() * 256);
               return "rgb("+r + ", "  + g + ", " +b+")";
             
             }

     function generaterandomcolor(num){
     	var arr = [];
     	for (var i = 0; i <num; i++) {
     		arr.push(randomcolor());
     	}
     	return arr;
     	


		   }
     function rgbcolor(){
       var i = Math.floor(Math.random() * colors.length);
       return colors[i];
     }
			
	
