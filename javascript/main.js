var input=document.getElementById("inputs");
 var col=document.getElementById("col");
 var btn=document.getElementById("btn");
 var list=document.getElementById("list");
 function add(){
     if (input.value ===''){
         alert("Please Write Something..!");
     }
     else{
         let li=document.createElement("li");
         li.innerHTML=input.value;
         list.append(li);
         let span=document.createElement("span");
         span.innerHTML="\u00d7"
         li.appendChild(span);
         li.addEventListener('click',()=>{
             li.style.textDecoration="";
            
         })}
     input.value="";
     dataSaving();
 }
 list.addEventListener("click",function(e){
     if(e.target.tagName==="LI"){
         e.target.classList.toggle("check");
         dataSaving();
     }
     else if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove();
         dataSaving();

     }
 },false);
 function dataSaving(){
     localStorage.setItem("data",list.innerHTML);
 }
 function showingData(){
     list.innerHTML=localStorage.getItem("data");
 }
 showingData();
