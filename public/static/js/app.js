$(document).ready(function(){
    if(document.getElementById('id_footer_year')){
        let $currentYear = new Date().getFullYear(); 
        let $year = document.getElementById('id_footer_year');
        $year.innerText = $currentYear;
    }
});