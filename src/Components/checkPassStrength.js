const checkPassStrength = (password) => {
    let count = 0;
    // check for length;
    if (password.length > 5) {
        count++;
    }
    // check for numbers;
    if (/\d/.test(password)) {
        count++;
    }
    // check for lowercase;
    if (/[a-z]/.test(password)) {
        count++;
    }
    // check for uppercase;
    if (/[A-Z]/.test(password)) {
        count++;
    }
    // check for special characters;
    if (/[\W]/.test(password)) {
        count++;
    }

    // return the password strength

    switch (count) {
        case 0:
        case 1:
        case 2:
            return 'Weak';
        case 3:
        case 4:
            return 'Moderate';
        case 5:
            return 'Strong';
        default:
            return;
    }
}


export { checkPassStrength };