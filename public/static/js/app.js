$(document).ready(function(){
    if(document.getElementById('id_footer_year')){
        let $currentYear = new Date().getFullYear(); 
        let $year = document.getElementById('id_footer_year');
        $year.innerText = $currentYear;
    }
});

jQuery(function($){
    // Password Togglers
    $("#id_password_toggle").click(function(){
        showHide('id_password');
    });

    $("#id_confirm_password_toggle").click(function(){
        showHide('id_confirm_password');
    });
})
// Show and Hide Passsword
function showHide(id){
    let $password = document.getElementById(id);
    let $passwordToggle = document.getElementById(id + '_toggle');
    let $passwordToggleIcon = document.getElementById(id + '_toggle_icon');

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
