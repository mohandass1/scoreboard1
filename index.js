let scoreEl=document.getElementById("score-el")
let scorePl=document.getElementById("score")
let hiS1=document.getElementById("his1")
let hiS2=document.getElementById("his2")
let count=0;
let count2=0;
let hisadd1=1 + " - ";
let hisadd4=4 +" - ";
let hisadd6=6 +" - "; 

   
    function addone()
    {   count=count+1
        scoreEl.textContent =count;
        hiS1.textContent+=hisadd1;
    }
    function addtwo(){
        count=count+4;
        scoreEl.textContent=count;
        hiS1.textContent+=hisadd4;
    }
    function addfive(){
        count=count+6;
        scoreEl.textContent=count;
        hiS1.textContent+=hisadd6;
        
    }
    function newgame(){
        count=0;
        scoreEl.textContent=count;
        let his="History:" + " ";
        hiS1.textContent=his;  
    }
     function addone2(){
        count2=count2+1
        scorePl.textContent =count2;
        hiS2.textContent+=hisadd1; 

    }
    function addtwo2(){
        count2=count2+4
        scorePl.textContent =count2; 
        hiS2.textContent+=hisadd4;
    }
    function addfive2(){
        coun2=count2+6
        scorePl.textContent =count2;
        hiS2.textContent+=hisadd6; 
    }
    function newgame2(){
        count2=0
        scorePl.textContent =count2; 
        let his="History:" + " ";
        hiS2.textContent=his;
    }
   
    
    
   
   