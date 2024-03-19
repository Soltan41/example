









// // Besinci tapsiriq

// let cumle ="Novruz Bayraminiz Mubarek"

// let cumle2=cumle.indexOf("B")
// console.log(cumle2);
 
// // Bunuda funksyada yazdim

// function sentencIndexOf(sentence) {
//   return sentence.indexOf("m")
// }

// let text = "BU bir cumledir"
// let text2=text
// console.log(sentencIndexOf(text2));


// // Altinci tapsiriq

// function sentenceLength(metn) {
//   return metn.length;
  
// }

// let cumle4="BU kitab maraqlidir"

// let cumle5=cumle4

// console.log(sentenceLength(cumle5));



// //Yeddinci tapsiriq
// function k() {
//   const i='Bu melumatdi'
// const k ='Bu melumatdir'

// if (i===k) {
//   console.log("true");
  
// }

// else{
//   console.log("false");
// }
  
// }

// k()


// function printPattern(rows) {
//   for (let i = 1; i <= rows; i++) {
//       let row = ' ';
//       for (let j = 1; j <= i; j++) {
//           row += i;
//       }
//       console.log(row);
//   }
// }

// printPattern(4);




// for (let i = 1; i <= 4; i++) {
//   let result=""
//   for (let j = 1; j <=i; j++) {
//   result+=j
    
//   }
//  console.log(result)
//   }


// function primaidPattern(row2) {
// for (let i = 1; i <= row2; i++) {
//   let patterin ="";

//   for (let j = 1; j <= row2-i; j++) {
    
//      patterin += " ";
//   }
  
//   for (let k= 1; k<=i; k++) {
//     patterin += i+" "
    
//   }

//   console.log(patterin);
// }

  
// }
//  let row2=4

// primaidPattern(row2)


//  async function  getData(url) {
//   try {
// const response=await fetch(url)
// const data=await response.json()
// console.log(data);
//   }
//   catch (error){
//     console.error("xeta bas verdi",error)

//   }
// }
// getData("https://jsonplaceholder.typicode.com/posts")


// async function getdata(url) {
//   try{
//      const response=await(url)
//      const data=await response.json()
//      console.log(data);
//   }
  
// }

// function arrlength(arr) {
// return arr.map(fruit=>fruit.length)

  
// }

// const fruits=["alma","banan","kiwi","armud"]
// const length=arrlength(fruits)
// console.log(length);


// const arrlength=(arr)=> {
//   return arr.map(fruit=>fruit.length)
  
    
//   }
  
//   const fruits=["alma","banan","kiwi","armud"]
//   const length=arrlength(fruits)
//   console.log(length);


// function name(arr) {
//   return arr.toUpperCase()
  
// }


// const name=["eli","arif","senan"]


// const users = [
//   { username: 'Soltan', password: 'admin123', role: 'telebe' },
//   { username: 'Zumrud', password: '1234', role: 'user' },
//   { username: 'Shxeli', password: '12345', role: 'owner' }
// ];


// users.forEach(user=>{
//   switch (user.role){
//     case "telebe":
//       console.log(`${user.username} telebedir `);
//       break;
//       case "user":
//       console.log(`${user.username} userdir`);
//       break;
//       case "ownner":
//         console.log(`${user.username} ownerdir`);
//       break;
//       default:
//         console.log(`${user.username} bilinmir `);
//   }
// })


// let check=false









// let check = false
// function myPromise() {
//   return new Promise((resolve, reject) => {
//     if (check){
//       resolve("Burda problem yoxdur")
//     }
//     else{
//       reject("burda problem var")
//     }
//   })
  
// }

// myPromise()
//  .then((response)=>
//  {
//   console.log(response);
//  })

//  .catch((error)=>{
// console.log(error);
//  })




function uniTelebeler(url) {
  return new Promise((resolve, reject) => {
const tth= new XMLHttpRequest();
try {
  tth.addEventListener("readystatechange",()=>{
    if(
      tth.readyState===4 & tth.status===200
    )
    {
      resolve(JSON.parse(tth.responseText))
    }
  })
}
catch(error){
  reject(error);
}
tth.open("Get",url)
tth.send();
  })
  
}

uniTelebeler("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
  data.forEach((user)=>{
    console.log(user.name);
  })
})
.catch((error)=>console.log(error))


//  const myPromise=new Promise((resolve, reject) => {
//   if (khatc) {
//     resolve("burda her sey duzdu")
    
//   }
//   else{
//     reject("burda problem var")
//   }
//  })


//  console.log(myPromise);




// let khatc = true;

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     if (khatc) {
//       resolve("burda indi isleyir")
      
//     }
//     else{
//       reject("burda heleki islemir")
//     }
//   })
  
// }
// myPromise()
// .then((data)=>{
//   console.log(data);
// })
// .catch((sef)=>{
//   console.log(sef);
// })











