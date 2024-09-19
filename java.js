
let quotes = [
    { quote: "عااااااا .. قالي الوداع وانا اقوله ايه...هو الوداع يتقال فيه ايه", author: "حمو زيزو " },
    { quote: "نحن غرابا عك.. عكٌّ إليك عانية..", author: " الكفار بتوع قبيله عك قدام الاصنام بتوعهم" },
    { quote: "طب كان من الاول ليه .. ليه تشغلني وتشغل بالي .. ليه وتسهر قلبي ليالي .. ", author: "مدحت فقوسه " },
    { quote: "الحياه بدون جروب الدفعه جنه ", author: "غاندي" },
    { quote: "       ولا يا طه .. نعم سيدنا  .", author: "جدي رضا وهو بيشرح طه الكفيف مع سيدنا اللي مقالش اسمه  " }

]


function abtquote(){
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let randomQuotes = quotes[randomIndex]

    document.getElementById('quote').innerHTML= `${randomQuotes.quote}`
    document.getElementById('author').innerHTML= `${randomQuotes.author}`

}