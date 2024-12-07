function validation(values) {
    let error = {};
  
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    // Username validation
    if (!values.username) {
      error.username = "Username is required";
    }
  
    // Customer Name validation
    if (!values.customerName) {
      error.customerName = "Customer name is required";
    }
  
    // Phone Number validation
    if (!values.phoneNumber) {
      error.phoneNumber = "Phone number is required";
    }
  
    // Email validation
    if (!values.email) {
      error.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Invalid email format";
    }
  
    // Password validation
    if (!values.password) {
      error.password = "Password is required";
    } else if (!pass_pattern.test(values.password)) {
      error.password =
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    }
  
    return error;
  }
  
  export default validation;
  