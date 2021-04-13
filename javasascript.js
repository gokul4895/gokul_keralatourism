let email=document.getElementById("email");
let error=document.getElementById("error");
let errorp=document.getElementById("errorp");
let phonenumber=document.getElementById("phone")
function validation()
{
    let regexep=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9/-]+)\.([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if(regexep.test(email.value))
    {
       error.innerHTML="VALID!!";
       error.style.color="green";
       return true;
    }
else 
{
   error.innerHTML="INVALID";
   error.style.color="red";
   
    
}

 let re = /[0-9]/;
        if(!re.test(pwd.value)) {
            alert("Error: password must contain at least one number (0-9)!");
            
            return false;
        }
          // regular expression to match required at least one lowercase letter in passord field
        re = /[a-z]/;
        if(!re.test(pwd.value)) {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
           
            return false;
        }
          // regular expression to match required at least one uppercase letter in passord field
        re = /[A-Z]/;
        if(!re.test(pwd.value)) {
            alert("Error: password must contain at least one uppercase letter (A-Z)!");
            
            return false;
        }
     else {
          alert("Please check that you've entered and confirmed your password!");
         
          return false;
    }
    alert("You entered a valid password: " + pwd.value);
    return true;

     var number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(number.test(phoneno.value))
        {
      return true;
        }
      else
        {
        alert("enter correctly");
        return false;
        }
}