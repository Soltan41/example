// function cutveyatek(a) {
//     if (a%2==0) {
//          console.log('cutreqemdi');
//     }
//     else{
//         console.log('tekreqemdi');
//     }

// }
// cutveyatek(8)
// // cutveyatek(6)

// let str=''

// function Piramid(r) {
//     for (let i = 0; i < r; i++) {
//       str+=i+1
//     console.log(str);
//   }
// }



// Piramid(10)


//  let numbers = [1, 2, 3, 4, 5]
//  numbers.forEach(
//     function (a) {
//     console.log(a);
        
//     }
//  )

// console.log('hello world');





// let text = "";

// for (let i = 0; i < 5; i=i+3) {
//  console.log("bu yazını beş dəfə yaz");
// }

// const Soltan="soltan"

// for (let i = 0; i < Soltan.length; i++) {
//   console.log(Soltan[i]);
  
// }


// const obj={mashin:"kia",model:"optima",il:"ikimbesh",trafick:"true"}

// for (const key in obj) {
// if (key=="mashin") {
//   console.log(key);
//   console.log(obj[key]);
 
  
// }
// }

// const arr=["bir","iki","uch","dort"]
//  let selectditem=false;

// arr.forEach(function name(a) {

//   if (a=="dortt") {
//  selectditem=true
    
//   }
  
// })
// console.log(selectditem);

// const arr=["Ilkin","Revan","Yareb","Qedir"]


// for (let i = 0; i < arr.length; i++) {

 
//   if (arr[i]=="Yareb") {
// continue
    
//   }
//   console.log(arr[i]);
 
  
// }



// const mehsul={  mehsul: "meyve",
// mehsulnovu  : "Alma",
//  qiymeti : 5,
// rengi : "blue"}

// console.log(mehsul.mehsulnovu);



// const cedvel=[1, 2, 3, 4]
//  cedvel.push(5)
// console.log(cedvel);


// function frint() {
//   const diller={  mehsul: "meyve",
//   mehsulnovu  : "Alma",
//    qiymeti : 5,
//   rengi : "blue"}
//   console.log(diller);
// }

// frint()




// function reqem(usta1, usta2) {
//   const cemi=usta1+usta2
//   console.log(cemi);
  
// }
// reqem(5, 4)

// function cumle(student1, student2) {
//   const sentens=student1+" ve "+student2 +"  birlikde imtahandadir"


//   console.log(sentens);
  
// }
// cumle( "arif","ali")

// // cumle("akif", "arif")





//  const newdiv=document.createElement("div")


// newdiv.innerHTML=('hello world')

// document.body.appendChild(newdiv)
//  const yenidiv=document.createElement("div")
// yenidiv.id=("some")
// document.body.appendChild(yenidiv)


// const yenidiv=document.createElement("div")

// yenidiv.innerHTML=('hello world')

// document.body.appendChild(yenidiv)
// const newdiv=document.createElement("div")
// newdiv.id=("some")
// document.body.appendChild( newdiv)   


// let button=document.querySelector("button")
// button.addEventListener("click",function () {
//     alert("ciliket")
    
// })

// function myFunction(p1, p2) {
//     return p1 * p2;
//   }



//   const form=document.querySelector('form')

//   console.log(form);




//     const input=form.querySelector("input")


//     console.log(input);

//     const element=input.closest("div")

//     console.log(element);


//     const kitab={müəllif: "kiosaki",
//      kitab:"varli ata kasib ata ", 
//      ders:"edebiyyat", sinif:"onbir"}

// delete kitab.müəllif  kitab.pop()
//     kitab.muellif='hill'



//     delete kitab.pop()
//     console.log(kitab);







//     const person={
//         ad:"Soltan",
//         Soyad:"Mahmudov",
//         Yash:"26",
//  fufllname: function () {
//     return this.Soyad +" "+ this.ad;        
    
//  }
//     }
//     console.log(person.fufllname);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

// const laminat=["krem","venge","qara","ag mat","yashil","mavi","red"]

// laminat.push("sari")
// const yenilaminat=laminat.slice(1,5)
// console.log(yenilaminat);
// function validateForm() {
//     let x = document.forms["name"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }
//   validateForm()

const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

 form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === ''|| name.value == null){
    messages.push( 'Name is required')
  }

  if (password.value.length <= 6){
    messages.push('passowerd must be longer than 6 xarekter')
   }
  if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(',')
  }


 })











