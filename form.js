var email = document.getElementById("email");
var pwd =  documnt.getElementById("pwd");
var phnNo = document.getElementById("phnNo");

function validate(email) {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}
/*function validate(email) {
    var email = document.getElementById("email");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.getElementById[email].value;
    if (reg.test(email) == false) 
    {
      alert('Invalid Email Address');
        return (false);
    }
    else{
        return true;
   }
}*/

/*function validate(email) {

    var email = document.getElementById("email");
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (reg.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
 else{
     return true;
 }
} */
function validate(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = document.getElementById("email");
if(email.value.match(mailformat))
{
email.focus
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus
return false;
}
}
/*function validate(pwd) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
var pwd =  document.getElementById("pwd");
if(pwd.value.match(decimal)) 
{ 
   
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')

return false;
}
}
/*if (pwd.value.length == 0) {
    pwd = 'Type Password';
} else if (pwd.value.length<8) {
   pwd = 'More Characters';
} else if (pwd.length<15) {
    pwd = '<span style="color:green">Strong!</span>';
} else if (pwd.length>15) {
    pwd = '<span style="color:orange">Medium!</span>';
} 
else {
   pwd= '<span style="color:red">Weak!</span>';
}
}*/
/*function validate(pwd) 
    {       
        var password_strength = document.getElementById("password_strength");
         //TextBox left blank.
            if (password.length == 0) {
                password_strength.innerHTML = "";
                return;
            }

            //Regular Expressions.
            var regex = new Array();
            regex.push("[A-Z]"); //Uppercase Alphabet.
            regex.push("[a-z]"); //Lowercase Alphabet.
            regex.push("[0-9]"); //Digit.
            regex.push("[$@$!%*#?&]"); //Special Character.

            var passed = 0;

            //Validate for each Regular Expression.
            for (var i = 0; i < regex.length; i++) {
                if (new RegExp(regex[i]).test(init)) {
                    passed++;
                }
            }

            //Validate for length of Password.
            if (passed > 2 && pwd.length > 8) {
                passed++;
            }

            //Display status.
            var color = "";
            var strength = "";
            switch (passed) {
                case 0:
                case 1:
                    strength = "Weak";
                    color = "red";
                    break;
                case 2:
                    strength = "Good";
                    color = "darkorange";
                    break;
                case 3:
                case 4:
                    strength = "Strong";
                    color = "green";
                    break;
                case 5:
                    strength = "Very Strong";
                    color = "darkgreen";
                    break;
            }
            password_strength.innerHTML = strength;
            password_strength.style.color = color;
        
        }
    }*/
    function validatePassword(pwd) {
                
        // Do not show anything when the length of password is zero.
        if (pwd.length === 0) {
            document.getElementById("msg").innerHTML = "";
            return;
        }
        // Create an array and push all possible values that you want in password
        var matchedCase = new Array();
        matchedCase.push("[$@$!%*#?&]"); // Special Charector
        matchedCase.push("[A-Z]");      // Uppercase Alpabates
        matchedCase.push("[0-9]");      // Numbers
        matchedCase.push("[a-z]");     // Lowercase Alphabates

        // Check the conditions
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(pwd)) {
                ctr++;
            }
        }
        // Display it
        var color = "";
        var strength = "";
        switch (ctr) {
            case 0:
            case 1:
            case 2:
                strength = "Very Weak";
                color = "red";
                break;
            case 3:
                strength = "Medium";
                color = "orange";
                break;
            case 4:
                strength = "Strong";
                color = "green";
                break;
        }
        document.getElementById("msg").innerHTML = strength;
        document.getElementById("msg").style.color = color;
    }


    //validating phone no
    function validate(phnNO)
{
    var phnNo = document.getElementById("phnNo");
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phnNo.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Phone no should contain only 10 digits and country code is not allowed");
        return false;
        }
}
