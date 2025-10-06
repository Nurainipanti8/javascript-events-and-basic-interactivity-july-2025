//## 🎉 Part 1: JavaScript Event Handling and Interactive Elements
let  btnClick=document.getElementById('btnClick');
let outPut=document.getElementById('output');
btnClick.addEventListener('click', function(){
outPut.innerHTML='Button Clicked!';
});

// ## 🎮 Part 2: Building Interactive Elements
let toggleLight=document.getElementById('togglelight');

toggleLight.addEventListener('click', function(){
document.body.style.backgroundColor='#000';
});

btnClick.addEventListener( onmousedown, function(){
outPut.innerHTML='Button Clicked!';
});
btnClick.addEventListener(blur, function(){
outPut.innerHTML='Button Clicked!';
});
btnClick.addEventListener('click', function(){
outPut.innerHTML='Button Clicked!';
})
btnClick.addEventListener('cut', function(){
outPut.innerHTML='Button Clicked!';
});

// ## 📋✅ Part 3: Form Validation with JavaScript
function validateEmail(email){
  let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return format.test(email)
 
};

function validatePassWord(password){
  let format=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return format.test(password)


};

function validateSignUp() {
  let username=document.getElementById('username').value.trim();
  let email=document.getElementById('email').value.trim();
  let password=document.getElementById('password').value.trim();

  if(!username || !email || !password){
    alert('ALL filled are required')
    return false;
  };
if(!validateEmail(email)){
  alert('invalid emailformat')
  return false;
};
if(!validatePassWord(password)){
alert('invalid password format')
return false;
};

alert('Form submitted successfully!');
    return true; //allow form submission
}
validateSignUp(); 
