$(document).load(function(){
    if(document.getElementById('id_profile_icon')){
        let $profileIcon = document.getElementById('id_profile_icon');
        $profileIcon.setAttribute('src', '{%static "profile.jpg"%}');
    }
})