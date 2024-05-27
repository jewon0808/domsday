const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector(".btn button");


function nextPage(){
    console.log(id.value, pw.value);

    if(id.value==="ppsalho"&&pw.value==="pp0316"){
        window.open("index2.html", "_blank");
    }
    console.log(id.value,pw.value);
}

btn.addEventListener("click", nextPage);

