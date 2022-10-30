function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    var correct_way=/^[A-Za-z]+$/;

    var name1 = document.forms['myForm']["fname1"].value;
    if (name1.length<3){
        seterror("namef", "*Length of name is too short");
        returnval = false;
    }
    if(name1.match(correct_way))
    true;
    else{
        seterror("namef","*Alphabets only")
        returnval=false;
    

    var name2 = document.forms['myForm']["fname2"].value;
    if (name2.length<3){
        seterror("namel", "*Length is too short");
        returnval = false;
    } 
    if(name2.match(correct_way))
    true;
    else{
        seterror("namel","*Alphabets only")
        returnval=false;
    }

    var email = document.forms['myForm']["femail"].value;
    if(email.length==0){
        seterror("email","**Enter Email");
        returnval=false;
    }
    if (email.indexOf('@')<=0){
        seterror("email", "**Email cant start with @");
        returnval = false;
    }
    if(email.cahrAt(email.length-4)!='.' && (email.charAt(email.length-3)!='.')){
        seterror("email","*Only 2/3 character allowed after last '.' ");
        returnval=false;
    }
    

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

        
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

