let toggle = 1;
const csslink = document.getElementById("csslink");


function changemode(){
    if(toggle==1){
        csslink.setAttribute('href','light_styles.css');
        toggle = -toggle;
    }
    else{
        csslink.setAttribute('href','dark_styles.css');
        toggle = -toggle;
    }
}