document.querySelector('form.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const textInputEmail = document.querySelector('input[type="email"]');
    const textInputPassword = document.querySelector('input[type="password"]');
    const valueInputEmail = textInputEmail.value.trim();
    const valueInputPassword = textInputPassword.value.trim();

    if (valueInputEmail === "" && valueInputPassword === "")
    {
        alert('All form fields must be filled in');
    }
    else {
        
        const formData = {
            email: valueInputEmail,
            password: valueInputPassword
        };

        console.log(formData);
        
        this.reset();
    }
  });