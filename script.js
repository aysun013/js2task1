
function login() {

    let email = prompt('enter your email:');

    if (email === 'admin@gmail.com') {
        answer = "siz daxil oldunuz";
    }
    else { answer = false; }
    alert(answer);


    let pass = prompt('enter your password');
    if (pass === "12345") {
        answer = "password yanlisdir";
    }
    else { answer = false; }
    alert(answer);

}