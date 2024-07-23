let button = document.querySelectorAll(".btn-style");
let operationalbtn = document.querySelectorAll(".operational-button");
let reset = document.querySelector("#reset_button")
let screen = document.querySelector("#screen");
let equal  = document.querySelector("#equal_button");
let  reset_value 

// styling to the screen Element
let screenElement = document.createElement("div");
screenElement.setAttribute('style','font-size:25px')
screen.append(screenElement);



   button.forEach((btn_val)=>{
      let values = btn_val;
      
      
      values.addEventListener("click",()=>{
         let num = values.innerHTML;
         
       
         screenElement.append(num);
     
      })
   })
           
         
         
      
      
   
   
     
   operationalbtn.forEach((Operation)=>{
      let operational_symbol = Operation;
    
      operational_symbol.addEventListener('click',()=>{
         if(operational_symbol.innerHTML === "DEL"){
         
            
         }
         else if(!(operational_symbol.innerHTML === "+")){      //we nagate the condition because it is not matching;
            let symbol = operational_symbol.innerText;
             screenElement.append(symbol);
         }

      })
   })
       
   reset.addEventListener('click',function(){
      if(screenElement.innerHTML != " " ){
         screenElement.innerHTML = " "
      }
   })
       
     
  
  

   
   equal.addEventListener('click',()=>{
      let process = screenElement.innerHTML;
      let Answer = eval(process);
      screenElement.innerHTML =" "
      screenElement.append(Answer);
   })
            
          
         
        
  


  



      
 
      
       
    
   



