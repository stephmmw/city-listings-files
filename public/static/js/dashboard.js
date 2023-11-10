jQuery(function($){
    // Password Togglers
    $("#id_password_toggle").click(function(){
        showHide('id_password');
    });

    $("#id_confirm_password_toggle").click(function(){
        showHide('id_confirm_password');
    });

    // Clear passwords after modal exit
    $("#id_close_password_change").click(function(){
        const $password = document.getElementById('id_password');
        const $confirmPassword = document.getElementById('id_confirm_password');

        $password.value = "";
        $confirmPassword.value = "";
    });

    // match password values adn check pattern
    $("#id_confirm_password").keyup(function(){
        matchPasswords("id_password", "id_confirm_password");
    });
    $("#id_password").keyup(function(){
        matchPasswords("id_password", "id_confirm_password");
        passwordPatternLengthCheck("id_password");
    });
});

// Show and Hide Passsword
function showHide(id){
    const $password = document.getElementById(id);
    const $passwordToggle = document.getElementById(id + '_toggle');
    const $passwordToggleIcon = document.getElementById(id + '_toggle_icon');

    if($password.getAttribute("type") == 'password'){
       $password.setAttribute("type", 'text'); 
       $passwordToggle.setAttribute("title", 'Hide');
       $passwordToggleIcon.setAttribute("class", 'bi bi-eye');
    }
    else{
        $password.setAttribute("type", 'password'); 
        $passwordToggle.setAttribute("title", 'Show');
        $passwordToggleIcon.setAttribute("class", 'bi bi-eye-slash');
    }
    
}

// Check password match
function matchPasswords(id1, id2){
    const $pass1 = document.getElementById(id1);
    const $pass2 = document.getElementById(id2);
    const $error = document.getElementById('id_password_error');

    if($pass1.value != "" && $pass2.value != "" || $pass1.value == "" && $pass2.value !=""){
        if ($pass1.value != $pass2.value){ 
            $error.innerText = "Passwords don't match. Please check your passwords!";
        }
        else{
            $error.innerText = "";
        }
    }
    else{
        $error.innerText = "";
    }
}
// check password pattern
function passwordPatternLengthCheck(id) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*()[\]{}.,<>?|:;"'+=_-]).{8,}$/;
    const pass = document.getElementById(id);
    const error = document.getElementById('id_password_error');
  
    if (pass.value !== "") {
      if (pattern.test(pass.value)) {
        error.innerHTML = "";
      }
       else {
        error.innerHTML = `<ul>
                              <li>Use password of 8 or more characters.</li>
                              <li>Use a combination of uppercase (A, B, C ...), lowercase (a, b, c ...) letters, numbers and special chars @, !, # ...</li>
                            </ul>`;
      }
    }
  }