

// Birinci tapsiriq
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <=i; j++) {
   document.write(i+"")
    
  }
 document.write("<br>")
}




// ikinci tapsiriq
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <=i; j++) {
   document.write(j+"")
    
  }
 document.write("<br>")
}


// ucuncu tapsiriq
let count=1

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <=i; j++) {
   document.write(count+"")
    count++
  }
 document.write("<br>")
}

// dorduncu tapsiriq

for (let i = 1; i <= 4; i++) {
  for (let j = 4; j >=i; j--) {
   document.write("&nbsp;");
    
  }
  for (let k = 1; k <=i; k++) {
    document.write(i + " ");
     
   }
 document.write("<br>");
}




// Besinci tapsiriq

let cumle ="Novruz Bayraminiz Mubarek"

let cumle2=cumle.indexOf("B")
console.log(cumle2);
 
// Bunuda funksyada yazdim

function sentencIndexOf(sentence) {
  return sentence.indexOf("m")
}

let text = "BU bir cumledir"
let text2=text
console.log(sentencIndexOf(text2));


// Altinci tapsiriq

function sentenceLength(metn) {
  return metn.length;
  
}

let cumle4="BU kitab maraqlidir"

let cumle5=cumle4

console.log(sentenceLength(cumle5));



//Yeddinci tapsiriq
const i='Bu melumatdi'
const k ='Bu melumatdir'

if (i===k) {
  console.log("true");
  
}

else{
  console.log("false");
}


function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
          row += i;
      }
      console.log(row);
  }
}

printPattern(4);




for (let i = 1; i <= 4; i++) {
  let result=""
  for (let j = 1; j <=i; j++) {
  result+=j
    
  }
 console.log(result)
  }
