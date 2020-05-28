//Dummy check to make sure we're connected
console.log('it works')


// Make contact form interactive
    // defining the error function
    function printError(ElemId, hintMsg) {
        document.getElementById(ElemId).innerHTML = hintMsg;
    }

    // leftover from my first attempt, isn't hurting anything and lets us see that the submit button is doing its thang
    $(document).ready(function () {
        $('.submit').click(function (event) {
            console.log('Clicked Button')

        
            var firstName = $('.firstName').val()
            var lastName = $('.lastName').val()
            var email = $('.email').val()
            var phoneNumber = $('.phoneNumber').val()
            var statusElm = $('.statusElm')
            statusElm.empty() 
    
    /*
            // are these even necessary? Apparently not lol
            var firstNameErr = true;
            var lastNameErr = true;
            var emailErr = true;
            var phoneErr = true;
    */

            if(firstName == "") {
                console.log('First name is not valid')
                printError("firstNameErr", "Please enter your first name");
            } else {
            event.preventDefault()
            printError("firstNameErr","")
            nameErr = false;
            }

            if(lastName == "") {
                console.log('Last name is not valid')
                printError("lastNameErr", "Please enter your last name");
            } else {
            event.preventDefault()
            printError("lastNameErr","")
            nameErr = false;
            }
            
            if(email == "" || !email.includes('@') || !email.includes('.')) {
                console.log('Email is not valid')
                printError("emailErr", "Please enter a valid email");
            } else {
            event.preventDefault()
            printError("emailErr","")
            nameErr = false;
            }

            // Daniel Kim is the man
            var checker = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

            if(phoneNumber == "" || phoneNumber.length <= 9 || !checker.test(phoneNumber)) {
                console.log('Phone Number is not valid')
                printError("phoneErr", "Please enter a valid phone number");
            } else {
            event.preventDefault()
            printError("phoneErr","")
            nameErr = false;
            }

        })
    })