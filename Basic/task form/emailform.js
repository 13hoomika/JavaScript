function emailValidation(){
        let val = true;
        alert('submit!');
        let emailValue= document.Myform.emailName.value;
        // a@a.a
        let atPosition = emailValue.indexOf("@");
        let dotPosition = emailValue.lastIndexOf(".");

        if(atPosition < 1 || dotPosition < 1 
                || dotPosition< atPosition + 2 
                || dotPosition + 2 >= emailValue.length 
        ){
                val= false;
        }
        return val;
}

function clearForm(){
         let emailValue= document.Myform.emailName.value = '';
}
  
  