let firstname = document.querySelector(`.firstname`);
let lastname = document.querySelector(`.lastname`);
let useremail = document.querySelector(`.useremail`);
let GuardianName = document.querySelector(`.GuardianName`);
let GuardianEmail = document.querySelector(`.GuardianEmail`);
let phoneNo = document.querySelector(`.phoneNo`);
let locate = document.querySelector(`.locate`);
let lgpassword = document.querySelector(`.lgpassword`);
let emailval = document.querySelector(`.emailval`);
let gemailval = document.querySelector(`.gemailval`);
let phoneNoVal = document.querySelector(`.phoneNoVal`);
let passval = document.querySelector(`.passval`);
let form = document.querySelector(`.format`);
let form1 = document.querySelector(`.format1`);
let checkbox = document.querySelectorAll(`.check`);
let consent = document.querySelector(`.consent`);
let response = document.querySelector(`.response`)
let responseInput = document.querySelector(`.responseInput`)
let formres = document.querySelector(`.formres`)
let print = document.querySelectorAll(`.print`)
let sumbtn = document.querySelector(`.sumbtn`)
let backbtn = document.querySelector(`.backbtn`)

let printpage = function () {
    close.style.fontSize = "10px"
    window.print();
    
}

// hide the prompt input column
responseInput.style.display = "none"


// summary DOM creation

let firstnames = document.querySelector(`.firstnames`);
let lastnames = document.querySelector(`.lastnames`);
let useremails = document.querySelector(`.useremails`);
let GuardianNames = document.querySelector(`.GuardianNames`);
let GuardianEmails = document.querySelector(`.GuardianEmails`);
let phoneNos = document.querySelector(`.phoneNos`);

// Email and Password validation

function validate(){
    if (!email.value.match(/^[A-Za-z\_.\-0-9]*[@]*[A-Za-z]*[\.][A-Za-z]{3,4}$/)){
        
        // (/^[A-Za-z\._\-0-9]*[@]*[A-Za-z]*[\.][A-Za-z]{3,4}$/) Email validating regular expression
        
        emailval.textContent = "please input a valid email"
        emailval.style.color = "red"
        email.label.display = "none"
    }else{
        emailval.textContent = "valid email";
        emailval.style.color = "green"
    }

}
function validateg(){
    if (!email.value.match(/^[A-Za-z\_.\-0-9]*[@]*[A-Za-z]*[\.][A-Za-z]{3,4}$/)){
        
        // (/^[A-Za-z\._\-0-9]*[@]*[A-Za-z]*[\.][A-Za-z]{3,4}$/) Email validating regular expression
        
        gemailval.textContent = "please input a valid email"
        gemailval.style.color = "red"
        
    }else{
        gemailval.textContent = "valid email";
        gemailval.style.color = "green"
    }
    
}


let passreg = function(){
    if(!lgpassword.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/) || lgpassword.value.length < 8){
        passval.textContent = "invalid password/Weak password"
        passval.style.color = "red"
    }else{
        passval.textContent = "valid password/ Strong password"
        passval.style.color = "green"

    }
}

    
// form event listening starts here

form.addEventListener('submit', function (event) {
    firstnames.value = firstname.value;
    lastnames.value = lastname.value;
    useremails.value = useremail.value;
    GuardianEmails.value = GuardianEmail.value;
    GuardianNames.value = GuardianName.value;
    phoneNos.value = phoneNo.value;



    

let test = document.querySelector(`.test`);
let test1 = document.querySelector(`.test1`);
let test2 = document.querySelector(`.test2`);
let test3 = document.querySelector(`.test3`)
let test4 = document.querySelector(`.test4`)
let test5 = document.querySelector(`.test5`)
// let test6 = document.querySelector(`.test6`)
    let userdoc = {
        fullname: firstname.value +" "+ lastname.value,
        email: useremail.value,
        guardianName: GuardianName.value,
        guardianEmail: GuardianEmail.value,
        phone: phoneNo.value
    }
    test.textContent = `fullName is: ${userdoc.fullname}`;
    test1.textContent = `Patient Email is: ${userdoc.email}`;
    test2.textContent = `Patient Guardian Name is: ${userdoc.guardianName}`;
    test3.textContent = `Patient Guardian Email is: ${userdoc.guardianEmail}`;
    test4.textContent = `Patient PhoneNumber is: ${userdoc.phone}`;
    test5.textContent = `Please verify your Details`;

    consent.textContent = "Please Verify the details for correction"
    responseInput.style.display = "block"
    responseInput.placeholder = "is it correct"

    formres.addEventListener('submit', function (event) {
        if(String(responseInput.value) === "yes"){
            sumbtn.style.display = "block"
            backbtn.style.display = "none"
            response.textContent = "THANKS FOR YOUR RESPONSE"
        }else{
            response.textContent = `let try again later `
            backbtn.style.display = "block"
            sumbtn.style.display = "none"
             
        }
    
        event.preventDefault()
    })
    sumbtn.addEventListener(`click`, function () {
        form.style.display = "block"
        formres.style.display = "none"
     })
form.style.display = "none"
formres.style.display = "block"
formres.style.width = "50%"
backbtn.addEventListener(`click`, ()=>{
form.style.display = "block"
formres.style.display = "none"

})
    event.preventDefault()
})

// let userdoc = {
//     fullname: firstname.value +" "+ lastname.value,


// }


// modals starts here

let modals = document.querySelector(`.modals`);
let close = document.querySelector(`.close`);
let openmodal = document.querySelector(`.modal-btn`);
let overall = document.querySelector(`.overall`)
let date = document.querySelector(`.date`)
let hides = document.querySelector(`.hides`)
let inputs = document.querySelectorAll(`.inputs`)
let count = document.querySelector(`.count`);
openmodal.style.backgroundColor = "rgb(10, 197, 135)"



openmodal.addEventListener('click', function () {
    // modals.classList.remove(`hidden`)
    modals.style.display = "block"
    // modals.style.top = "40%"
    count.style.display = "none"
    form.style.display = "none"
    hides.style.display = "none"
    

})

close.addEventListener(`click`, function () {
    modals.style.display = "none"
    form.style.display = "block"
    count.style.display = "block"
    hides.style.display = "block"
    formres.style.display = "none"
})