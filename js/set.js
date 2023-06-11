
new Vue({
    el:'#loggin',
    data:{
        them1:"display:block;",
        them2:"display:none;",
    },
    methods: {
        changeSign: function(log){
            if(log==1){

             return this.them1="display:none;",
                    this.them2="display:block;";
            }
            if(log==2){

                return this.them2="display:none;",
                       this.them1="display:block;";
               }
        
        },
       
        
    },
    
})
 function valid(){
           
            let username=document.querySelector("#exampleInputname");
            let email=document.querySelector("#exampleInputEmail1");
            let pass=document.querySelector("#exampleInputPassword1");
            let btnsign=document.querySelector("#clicksign");
            const newLocal = "#erroruser";
            let error=document.querySelector(newLocal);
            let erroremail=document.querySelector(".email");
            let errorpass=document.querySelector(".pass");
           if(username.value==''){
            error.style.display="block";
            error.innerHTML ="please write your name ";
                 
           }
           else if(username.value.length <=4){
                error.style.display="block";
                error.innerHTML ="name is less than 5";
           }
           else{
                error.style.display="none";
                
                
           }
           if(email.value==''){
            erroremail.style.display="block";
            erroremail.innerHTML ="please write your email ";
           }
           else{
            erroremail.style.display="none";
           }
           if(pass.value==''){
            errorpass.style.display="block";
            errorpass.innerHTML ="password? ";
                 
           }
           else if(pass.value.length <=7){
            errorpass.style.display="block";
            errorpass.innerHTML ="password is less than 8";
           }
           else{
            errorpass.style.display="none";
                
           }
           
           
           if (username.value.length>=5 && !email.value=='' && pass.value.length>=8) {
            localStorage.setItem('userloggin','true');
            let home=document.querySelector('#loggin');
            home.style.display='none';
            location.reload();
            
           }
           else{
          
           }
           
        }
 if(localStorage.getItem('userloggin')=='true'){
    let home=document.querySelector('#loggin');
    home.style.display='none';
    
    location.href ='home.html';

 }