

let x=+prompt("enter number")
if (x===0){
    console.log("вірно")
}else {
    console.log("невірно")
}







let time=+prompt("enter number")
if (time>=0 && time<15){
    console.log("перша")
}else if (time>=15 && time<30){
    console.log("друга")
}else if (time>=30 && time<45) {
    console.log("третя")
}else if (time>=45 && time<60) {
    console.log("четверта")
}else {
    console.log('невірно')
}





 let day=+prompt("enter number від 1 до 31")
 if (day>=1 && day<11){
     console.log("перша")
 }else if (day>=11 && day<21){
     console.log("друга")
 }else if (day>=21 && day<32) {
     console.log("третя")
}



let dayWeek=+prompt("enter number від 1 до 7")
switch (dayWeek) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    case 4:
        document.write("Thursday");
        break;
    case 5:
        document.write("Friday");
        break;
    case 6:
        document.write("Saturday");
        break;
    case 7:
        document.write("Sunday");
        break;
    default:
        document.write("????")

}





let a=30;
let b=30;
if (a>b){
    console.log(a)
}else if (a<b){
    console.log(b)
}

else {
    console.log("числа рівні")
}






let x=prompt('enter') || "default";
console.log(x)