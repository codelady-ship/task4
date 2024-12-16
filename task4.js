/*Boş duranı Allah sevməz, kod yazın...
Task-01
İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
İstifadəçi adını parametr kimi qəbul edən və konsola
«[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
Funksiyanı 3 müxtəlif ad üçün çağırın.*/
function user(ad){
    document.write(`salam. ${ad} is active now <br/> `)
}
user("eli")
user("veli")
user("ehmed")
// -------------------------------------------------------------------------------------------------------------------
/*Task-02
Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
Fərqli arqumentlərlə funksiyanı üç dəfə çağırın*/
eded1 =2;
eded2 =3;
eded3 =6;
function eded(number1,number2,number3){
    Math.max(number1,number2,number3);    
}
eded(eded1,eded2,eded3);
document.write(`bu reqemlerden en boyuyu  ${eded}-dir. <br/>`)
// -------------------------------------------------------------------------------------------------------------------
/*Task-03
Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
cəmin rublla göstərən funksiya yazın.
Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
Bir dollar üçün məzənnə 75 rubl təşkil edir.
Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.dollar+rubl*75   */

pul=+prompt("rublla hesabini reqemle yaz"); 
pul=+prompt("dollarla hesabini reqemle yaz"); 
function pul(number){
    if(pul==="pul") {
        pul=("pul"*75)+"pul"} 
}
document.write(`Bütün depozitlər üzrə məbləğ:${pul} <br/>`)

// -------------------------------------------------------------------------------------------------------------------
/*Task-04
Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.*/
reqem =+prompt("1ci reqemi yaz");
reqem =+prompt("2ci reqemi yaz");
function reqem(number){
    Math.min(reqem);    
}
document.write(`bu reqemlerden kiciyi  ${reqem}-dir. <br/>`)

// -------------------------------------------------------------------------------------------------------------------
/*Task-05
Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
Məsələn, calc(4, 6, '+'); // 10 qaytaracaq*/
 calculate(12,6,"+");
 calculate(12,6,"-");
 calculate(12,6,"*");
 calculate(12,6,"/");
 function calculate(n1,n2,o)
    if(o==="+")
      document.write(`${n1}+${n2}=${n1+n2}<br/>`);
    else if(o==="-")
      document.write(`${n1}-${n2}=${n1-n2}<br/>`);
    else if(o==="*"){
      document.write(`${n1}*${n2}=${n1*n2}<br/>`);
    }else if(o==="/")
      if(o==="/" && n2=== 0 ){
      document.write("0-ra bolme mumkun deyil")
    }
     else if(
     document.write(`${n1}/${n2}=${n1/n2}<br/>`);
    )else{"duzgun deyer yaz. <br/>"};
 console.log{calculate}
 
// -------------------------------------------------------------------------------------------------------------------
/*Task-06
İstifadəçidən bir ay adı daxil etməsini tələb edən və həmin ayın neçə gün çəkdiyini göstərən bir proqram yazın. (switch-case ilə)*/
ay=prompt("her hansi ayin adini daxil edin");
let mesaj="";
function month(ay)
    switch(ay){
        case "yanvar": mesaj="bu ay 30 gundur";
     break;
        case"fevral": mesaj="bu ay 29 gundur";
     break;
        case"mart":mesaj="bu ay 31 gundur";
     break;
        case"aprel":mesaj="bu ay 30 gundur";
    break;
        case"may":mesaj="bu ay 31 gundur";
     break;
        case"iyun":mesaj="bu ay 30 gundur";
     break;
        case"iyul":mesaj="bu ay 30 gundur";
     break;
        case"avqust":mesaj="bu ay 31 gundur";
     break;
        case"sentyabr":mesaj="bu ay 30 gundur";
     break;
        case"oktyabr":mesaj="bu ay 30 gundur";
     break;
        case"noyabr":mesaj="bu ay 31 gundur";
     break;
        case"dekabr":mesaj="bu ay 30 gundur";
     break;
default:"duzgun deyer yaz. <br/>";
}
console.log(mesaj);
month (ay);

// -------------------------------------------------------------------------------------------------------------------
/*Task-07
İstifadəçidən bir ədəd daxil etməsini tələb edən və bu ədədin Armstrong rəqəmi olub olmadığını yoxlayan bir proqram yazın. (dövrlə və if-else ilə)*/

a=+prompt(" Armstrong rəqəmi ucun 12e dek reqem daxil et");
let sum=0;
for(let i=0; i<a.lenght; i++){
  sum+=a[i]**a.lenght;
  console.log(sum);
    if(sum==a){
      console.log("Armstrong number",sum) ;
    }else{
      console.log("error",sum);
  }
}  