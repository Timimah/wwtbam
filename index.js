let themeSong = () =>{
    mainTheme.play()
}
var exampleModal = document.getElementById('staticBackdrop')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
})
let showLoginA = () =>{
    rules.style.display = "none"
    logP.style.display = "none"
    logA.style.display = "block"
    signup.style.display = "none"
}
let showLoginP = () =>{
    rules.style.display = "none"
    logA.style.display = "none"
    logP.style.display = "block"
    signup.style.display = "none"
}
let showSignup = () =>{
    rules.style.display = "none"
    logA.style.display = "none"
    logP.style.display = "none"
    signup.style.display = "block"
}
let showHow = () =>{
    logA.style.display = "none"
    logP.style.display = "none"
    signup.style.display = "none"
    rules.style.display = "block"
}
let allAdmin = []
let newAdmin
let allPlayers = []
let newPlayer
if(localStorage.admin_user){
    allAdmin = JSON.parse(localStorage.getItem("admin_user"))
}
if(localStorage.player_user){
    allPlayers = JSON.parse(localStorage.getItem("player_user"))
}
let signupAdmin = () =>{
    // alert()
    if(su_uname.value == ""){
        warning_msg.style.display = "block"
    }
    else{
        warning_msg.style.display = "none"
    }
    if(su_name.value == ""){
        warning_msg0.style.display = "block"
    }
    else{
        warning_msg0.style.display = "none"
    }
    if(su_password.value == ""){
        warning_msg1.style.display = "block"
    }
    else{
        warning_msg1.style.display = "block"
    }
    if(su_uname.value != "" && su_name.value != "" && su_password.value != ""){
        alert("All fields are filled")
        newAdmin ={
            suuserName: su_uname.value,
            suName: su_name.value,
            suPassword: su_password.value
        }
        allAdmin.push(newAdmin)
        localStorage.setItem("admin_user", JSON.stringify(allAdmin))
        su_uname.value = ""
        su_name.value = ""
        su_password.value = ""
        rules.style.display = "none"
        log_in.style.display = "block"
        signup.style.display = "none"
    }
}
let signupPlayer = () =>{
    // alert()
    if(su_uname.value == ""){
        warning_msg.style.display = "block"
    }
    else{
        warning_msg.style.display = "none"
    }
    if(su_name.value == ""){
        warning_msg0.style.display = "block"
    }
    else{
        warning_msg0.style.display = "none"
    }
    if(su_password.value == ""){
        warning_msg1.style.display = "block"
    }
    else{
        warning_msg1.style.display = "block"
    }
    if(su_uname.value != "" && su_name.value != "" && su_password.value != ""){
        alert("All fields are filled")
        newPlayer ={
            suuserName: su_uname.value,
            suName: su_name.value,
            suPassword: su_password.value
        }
        allPlayers.push(newPlayer)
        localStorage.setItem("player_user", JSON.stringify(allPlayers))
        su_uname.value = ""
        su_name.value = ""
        su_password.value = ""
        rules.style.display = "none"
        log_in.style.display = "block"
        signup.style.display = "none"
    }
}
let logInA = () =>{    // alert()
    if(login_password.value == ""){
        warning_lmsg0.style.display = "block"
    }
    else if(login_name.value == ""){
        warning_lmsg.style.display = "block"
    }
    if(login_name != "" && login_password != ""){
        let found = false
        allAdmin.map((element) =>{
            if(login_password.value == element.suPassword && login_name.value == element.suuserName){
                found = true
                // let signedinAdmin = []
                // signedinAdmin.push(element)
                // console.log(signedinAdmin)
            }
        })
        if(found == true){
                window.location = 'admin.html'
        }
        else{
            login_name.value = ""
            login_password.value = ""
            notfound_msg.style.display = "block"
        }
    }
}
let logInP = () =>{    // alert()
    if(login_ppassword.value == ""){
        warning_lmsgp0.style.display = "block"
    }
    else if(login_pname.value == ""){
        warning_lmsgp.style.display = "block"
    }
    if(login_pname != "" && login_ppassword != ""){
        let found = false
        allPlayers.map((element) =>{
            if(login_ppassword.value == element.suPassword && login_pname.value == element.suuserName){
                found = true
                // let signedinAdmin = []
                // signedinAdmin.push(element)
                // console.log(signedinAdmin)
            }
        })
        if(found == true){
                window.location = 'gameplay.html'
        }
        else{
            login_pname.value = ""
            login_ppassword.value = ""
            notfound_msgp.style.display = "block"
        }
    }
}
let hideuAlert = () =>{
    warning_lmsgp.style.display = "none"
    warning_lmsg.style.display = "none"
}
let hidepAlert = () =>{
    warning_lmsgp0.style.display = "none"
    warning_lmsg0.style.display = "none"
}