const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
})


function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const mailValue = mail.value.trim();
	const passValue = pass.value.trim();

  flag = true;
	for(i = 0; i < fnameValue.length; i++){
    if(fnameValue[i] >= '0' && fnameValue[i] <= '9'){
      flag = false;
      break;
    }
  }
  if(flag){
    setSuccessFor(fname);
  }else {
    setErrorFor(fname, "Name cannot contain numbers")
  }

  flag = true;
  for(i = 0; i < lnameValue.length; i++){
    if(lnameValue[i] >= '0' && lnameValue[i] <= '9'){
      flag = false;
      break;
    }
  }
  if(flag){
    setSuccessFor(lname);
  }else{
    setErrorFor(lname, "Name cannot contain numbers")
  }


	if (!isEmail(mailValue)) {
		setErrorFor(mail, 'Not a valid email');
	}else {
		setSuccessFor(mail);
	}

	if(passValue.length < 6) {
		setErrorFor(pass, 'Password cannot be less than 6 charchaters');
	} else {
		setSuccessFor(pass);
	}
}



function setErrorFor(input, message) {
	const control = input.parentElement;
	const small = control.querySelector('small');
	control.className = 'control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const control = input.parentElement;
	control.className = 'control success';
}

function isEmail(mail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}
