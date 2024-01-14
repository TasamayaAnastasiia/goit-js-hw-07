document.querySelector('form.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let textInputEmail = document.querySelector('input[type="email"]');
    let textInputPassword = document.querySelector('input[type="password"]');
    let valueInputEmail = textInputEmail.value.trim();
    let valueInputPassword = textInputPassword.value.trim();

    let nameField = document.querySelectorAll('label').textContent;

    if (valueInputEmail === "" && valueInputPassword === "")
    {
        alert('All form fields must be filled in');
    }
    else {
        const formData = {
            email: "",
            password: ""
        };
        

        formData.email = valueInputEmail;
        formData.password = valueInputPassword;

        console.log(formData);
        
        this.reset();
    }
  });