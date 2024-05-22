let a = true;
const createpw = document.querySelector("#newpw");
const username = document.querySelector("#username");
const classnumber = document.querySelector("#classnumber");
const checkinf = document.querySelector("#checkinf");



checkinf.addEventListener("click", function(event){
    event.preventDefault();

    const data = {
    username: username.value,
    classnumber: classnumber.value
    };
    console.log(data);
  fetch("url", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((res) => {
    return res.json();
  })
  .then((data)=>{
    if(data.ok === true){
        const ok = document.querySelector("#checkinf input");
        ok.value = "인증 완료!";
        ok.style.backgroundColor = "#3CB371";
        return a = false;
    }else{
        alert("입력내용을 다시 확인해보세요.")
    }
  });
})

document.addEventListener("DOMContentLoaded", function() {
    createpw.disabled = a;
});