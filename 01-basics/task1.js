/*   ----Question----
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

// Run in browser

let username = prompt(`May I knwo who is this?`)
if(username == `Admin`){
    let password = prompt("Tell me the password then!")
    if(password == `TheMaster`) alert(`Welcome! ${username}`)
    else{
        alert(`Wrong password`)
    }
}else if(username == null){
    alert(`Cancelled`)
}else{
    alert(`I don't know you`)
}