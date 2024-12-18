function validation (values) {
    let error= {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const pass_pattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(values.email === "") {
        error.email = "Email is required";
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email Do not match"
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password ="Password is required";
    }
    else if (!pass_pattern.test(values.password)) {
        error.password = "Password Do not match"
    }
    else {
        error.password = ""
    }
    return error;
}
export default validation