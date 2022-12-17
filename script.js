function validate(){
    var email=document.getElementById('email').value;
    var pass=document.getElementById('password').value;
    var res=email.match(/.+\..+@bmsce\.ac\.in/);
    if(res==null)
    {
        alert("Enter BMSCE Email ID");
        return false;
    }
    else if(pass.length<8)
    {
        alert("Password length should be more than 8")
        return false;
    }
    alert("Login Successfull");
    return true;

}