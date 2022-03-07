const input = document.querySelectorAll("input")
const button = document.querySelector("#button")
const form = document.querySelector("form")
const pErr = document.querySelectorAll("#error")
regexName = /^[A-Z]/
regexEmail = /^([a-zA-Z0-9]|[0-9])/
regexPassword = /[a-zA-Z0-9]{6,8}/
regexPhone = /[0-9]/
regexDate = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/

function showErr(listinput,pErr){
    for(let key = 0; key < listinput.length; key ++){
        if(listinput[key].value == ''){
            listinput[key].style.border = "5px solid red"
            pErr[key].innerHTML =  listinput[key].id + " không được để trống"
        }
        else{
            pErr[key].innerHTML = ''
            switch (key) {
                case 0:
                    showEachErr(input[0],pErr[0],regexName)
                    break;
                case 1:
                    showEachErr(input[1],pErr[1],regexEmail)
                    break
                case 2:
                    showEachErr(input[2],pErr[2],regexPassword)
                    break
                case 3:
                    confirmPass(input[2],input[3],pErr[3])
                    break
                case 4:
                    showEachErr(input[4],pErr[4],regexPhone)
                    break
                case 5:
                    showEachErr(input[5],pErr[5],regexDate)
                    break
                default:
                    break;
            }
        }
    }
}
function confirmPass(pass1,pass2,pErr){
    if(pass2.value == pass1.value){
        pass2.style.border = "5px solid green"
    }
    else{
        pErr.innerHTML = pass2.id + " không trùng khớp"
        alert("hello")
    }
}

function showEachErr(inputName,pErr,regex){
    if(regex.test(inputName.value)){
        pErr.innerHTML = ''
        inputName.style.border = "5px solid green"

    }else{
        pErr.innerHTML = inputName.id + " không hợp lệ"
    }
}
button.addEventListener("click",() =>{
    showErr(input,pErr)

})