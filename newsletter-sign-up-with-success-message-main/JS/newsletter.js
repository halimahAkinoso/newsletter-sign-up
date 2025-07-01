// const emailField = document.getElementById('email');
// const errorMessage = document.getElementById('errorMessage');
// const successMessage = document.getElementById('successMessage');
// const  productBody = document.querySelector('.text');
// const confirmationMessage = document.querySelector('#sucessMeassage');
// const dismissMessage =document.querySelector("dismiss-btn")

// simple emailvalidation regex
// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailField = document.getElementById("email");
const subcribeButton = document.getElementById("subcribeButton")

function validateEmail(email) {
    const emailRegrex = /^[^/s@]+@[^/s@]+\.[^/s@]+$/;
    return emailRegrex.test =(email);
}

subcribeButton.addEventListener("click", function(event){
    event.preventDefault();
    const email = emailInput.value.trim();


if (validateEmail(email)) {
    document.body.innerHTML = `
  <div class="container">
<div class="text">
  <!-- hero image in the product manager body-->
   <!-- <div>
    <img src="./assets/images/illustration-sign-up-desktop.svg" alt="sign up" class="hero-image">
</div> -->
  </div>
  </div>
    <!-- Modal for the success message -->
     <div id="successMessage" class="successMessage">
<div class="overlay">
  <div class="success-container">
    <div class="icon">
<img src="./assets/images/icon-list.svg" alt="">
    </div>
<h2>Thanks for subcribing!</h2>
<p>A confirmation email has been sent to <strong>ash@loremcompany.com</strong>
  Please open it and click the button inside to confirm your subscription
</p>
<!-- Dismiss Button to remove success message -->
<a href=>
<button class="dismiss-btn">Dismiss message</button>
</a>
  </div>

</div>
     </div>
    `;


}else {
    const errorMessage = document.getElementById("error-message");
    if (!errorMessage) {
        const errorMessage = document.createElement("div");
        errorElement.id = "error-message";
        errorElement.style.color = "red";
        errorElement.style.marginTop = "10px";
        errorElement.textcontent = "please enter a valid email";
        errorElement.parentElement.appenChild(errorMessage);

    }
}

});

// // real time validation  as the user types in the email field
// emailField.addEventListener('input', function(){
//     const emailValue = emailField.value.trim();// get the current email

//     // check if the email matches the pattern
//     if (emailValue === ''){
// // if the email feild is empty,  hide error message
// errorMessage.style.display='none';
//     }
//     else if(!emailPattern.test(emailValue)){
        
//     // check if the email doesnt matches the pattern, display the error message
//     errorMessage.textContent = 'Please enter a valid email address.'
//         errorMessage.style.display='block'
//     }else{
//     // if the email is valid , hide the error message
//     errorMessage.style.display='none';
//     }
    
// });
// // Add click eventListener to the submit button
// document.querySelector('.submitBtn').addEventListener('click', function(event){
//     event.preventDefault();// prevent form submission(default behaviour)
//     const emailValue = emailField.value.trim();
//     //reset previous messages
//     successMessage.style.display = 'none';

//     // check if email is valid before showing success message
//     if (emailValue === ''){
//         errorMessage.textContent = 'Email is required.';
//         errorMessage.style.display = 'block';

//     }else if (!emailPattern.test(emailValue)){
//         errorMessage.textContent = 'Please enter a valid email address.';
// errorMessage.style.display = 'block';
//     }else{
//         // if the email is valid show success message
//         successMessage.style.display= 'flex';
//         productBody.style.display = 'none';
//         confirmationMessage.textContent = emailValue; // insert the entered email value into the success page

//     }
// })
// //Dismiss success message when clicking the dismiss buttton
// document.querySelector('dismiss-btn').addEventListener('click', function(){
//     successMessage.style.display = 'none';
//     // reload the page after dismissing the success message
//     window.location.reload();
// });