document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".sticky-header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 30) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
});

   
function validateForm() {
  let isValid = true;
  document.getElementById("nameerror").textContent = "";
  document.getElementById("emailerror").textContent = "";
  document.getElementById("phoneerror").textContent = "";
  document.getElementById("messageerror").textContent = "";

  // Validate Name
  const name = document.getElementById("fname").value;
  const nameString = /^[a-zA-Z\s-]+$/;
  if (name === "") {
    document.getElementById("nameerror").textContent = "Please enter your name.";
    isValid = false;
  } 
  if(!nameString.test(name)) {
    document.getElementById("nameerror").textContent = "Please enter a Valid Name.";
    isValid = false;
  }


  // Validate Email
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailerror").textContent = "Please enter your email.";
    isValid = false;
  } 
  if (!emailPattern.test(email)) {
    document.getElementById("emailerror").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate Message
  const message = document.getElementById("message").value;
  if (message === "") {
    document.getElementById("messageerror").textContent = "Please enter your message.";
    isValid = false;
  }

  return isValid;
}


function sendEmail(){
    var params = {
        name: document.getElementById("fname").value,
        email:document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    const serviceId = "service_krwy18q";
    const templateId = "template_0o71v68";
emailjs.send(serviceId, templateId, params)
.then((res) =>  {
        document.getElementById("fname").value ="";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value ="";
        console.log(res)
        alert("Your Response Has been Sumbitted");
    })
.catch((err) => console.log(err));
}

