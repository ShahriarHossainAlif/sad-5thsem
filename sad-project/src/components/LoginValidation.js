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
        error.email ="Password is required";
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Password Do not match"
    }
    else {
        error.email = ""
    }
    return error;
}
export default validation