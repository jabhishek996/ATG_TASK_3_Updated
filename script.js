var click_btn=document.querySelector("#click_btn");
var btn1=document.querySelector(".btn1");
var svg=document.querySelector("svg");
var button=document.querySelector('button');


// --------Javascript to change button state----------


    


click_btn.addEventListener("click", function() {
   
   if(btn1.classList.contains("Primary_default_state")){
    svg.style.display="block";
   }
    setTimeout(() => {
        btn1.classList.remove("Primary_default_state");
        btn1.classList.add("Primary_disabled_state");
        svg.style.display="none";
        
       
    }, 3000);
   
    
  });
