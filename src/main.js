import './style.css'

const to = document.getElementById("to");
const from = document.getElementById("from");
const amount = document.getElementById("amount");
const resultBox = document.getElementById("result-box");
const result = document.getElementById("result");
const loading = document.getElementById("loading")



document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector("#convert").addEventListener("click",converter)

})



async function converter(){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "YFsMiMLODqQlhsTSAaRIrYSdusufryk0");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    const apiFetch = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, requestOptions);
    let response = await apiFetch.json();
    let data = await response.result.toFixed(2);
    console.log(response);
    resultBox.style.display = "block"   
    result.textContent = `${amount.value} ${from.value} is ${data} ${to.value}`
    

}