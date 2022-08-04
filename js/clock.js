let userName = prompt("Kullanici Adinizi Giriniz")
let myName= document.querySelector("#myName")
let myClock= document.querySelector("#myClock")

let days=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
function timePage(){
    let time=new Date()
    myClock.innerHTML=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${days[time.getDay()-1]}
    ${console.log(time.getSeconds())}
    `  
}
setInterval(timePage,1000)
myName.innerHTML=userName