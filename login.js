const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector('label.login');
const signupBtn = document.querySelector('label.signup');
const signupLink = document.querySelector('.signup-link a');
const loginText = document.querySelector('.title-txt .login');
const signupText = document.querySelector('.title-txt .signup');


const form=document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form1=document.getElementById('form1');
const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


signupBtn.onclick=(()=>{
    loginForm.style.marginLeft='-50%';
    loginText.style.marginLeft='-50%';
});

loginBtn.onclick=(()=>{
    loginForm.style.marginLeft='0%';
    loginText.style.marginLeft='0%';
});

signupLink.onclick=(()=>{
    signupBtn.click();
    return false;
})

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error')
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});

form1.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs1();
});

const validateInputs1=()=>{
    const email1Value=email1.value.trim();
    const password1Value=password1.value.trim();
    const password2Value=password2.value.trim();

    if(email1Value===''){
        setError(email1,'Email is required');
    }else if (!isValidEmail(email1Value)){
        setError(email1,'Provide a valid email address');
    }else{
        setSuccess(email1);
    }


    if(password1Value === '') {
        setError(password1, 'Password is required');
    } else if (password1Value.length < 8 ) {
        setError(password1, 'Password must be at least 8 character.')
    } else {
        setSuccess(password1);
    }

    if(password2Value===''){
        setError(password2,'Password is required');
    } else if(password2Value!=password1Value){
        setError(password2, `Password doesn't match.`);
    } else{
        setSuccess(password2);
    }
};




const validateInputs=()=>{
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();

    if(emailValue===''){
        setError(email,'Email is required');
    }else if (!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
    }else{
        setSuccess(email);
    }


    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
};

