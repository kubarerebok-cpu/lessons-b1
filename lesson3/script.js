// условия оператора if/else swich/case
// let email = prompt('ведите ваш email');
// let password = prompt ('ведите ваш пароль');
// let userEmail = 'admin'
// let userPassword = 'admin123'

// if(email === userEmail && password === userPassword) {
//     alert("ВЫ УСПЕШНО ВОШЛИ В СИСТЕМУ")
// }else {
//     alert("неверный логин или пароль")
// }

let month = prompt('ведите любой месяц');
switch(month){
    case 'январь':
    case 'февпаль':
    case 'март':
        alert('зима')
   

break;
    case 'март':
    case 'апрель':
    case 'май':
         alert('весна')
    break;
   case'июнь':
   case'июль':
   case 'август':
         alert(лето)
    break;
    case'сентябрь':
   case'ноябрь':
   case 'октяябрь':
        alert(осень)
        break;
    default:
        alert('такогог месяца не существует');  
}
   

   

