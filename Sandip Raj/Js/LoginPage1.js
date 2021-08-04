function validate() {
   // var loginDetails = {};
  //  loginDetails.Username = document.querySelector("#Username").value;
   // loginDetails.Password = document.querySelector("#Password").value;
      
      var Username = document.getElementById("Username").value;
      var Password = document.getElementById("Password").value;

    if (Username == "admin" && Password == "12345"){
        alert("login successfully");
         return false;
             } 
             else{
        alert("login failed");
    }
}