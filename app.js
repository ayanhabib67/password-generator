let checkboxSmall = document.getElementById("checkboxsmallLetter")
let checkboxcap = document.getElementById("checkboxcapitallLetter")
let checkboxNumber = document.getElementById("checkboxNumber")
let checkboxsym= document.getElementById("checkboxsymbol")
let smallLatter ="abcdefghijklmnopqrustuvewxyz"
let capitaliLetter ="ABCDEFGHIKLMNOPQRUSTUVEWXYZ"
let number = 12345678910
let symbol = "!;#$%&'()*+,-./:;<=>?@[]^_`{|}~"



function passwordGenerator(){
    let len = document.getElementById("lengthInp")
    let  allChar = ""
    let  password =""



if (checkboxSmall.checked == true){
    allChar += smallLatter
}
if (checkboxcap.checked == true){
    allChar += capitaliLetter
}
if (checkboxNumber.checked == true){
    allChar += number
}
if (checkboxsym.checked == true){
    allChar += symbol
}



for  (let i = 0; i < len.value ; i++) {


    let  randomInd = Math.floor(Math.random() * allChar.length)
    
    password += allChar[randomInd]
    
}

console.log(password)


}