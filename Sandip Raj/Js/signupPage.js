function readUserInfo() {
	var UserDetails = {};
	UserDetails.UserName = document.querySelector("#UserName").value;
	UserDetails.emailId = document.querySelector("#emailId").value;
	UserDetails.mobNo = document.querySelector("#mobNo").value;
	UserDetails.Password = document.querySelector("#Password").value;

	UserDetails.gender = document.querySelector("input[name=gender]:checked").value; 
	//UserDetails.Date of Birth = document.querySelector("")



	console.log(UserDetails);
}