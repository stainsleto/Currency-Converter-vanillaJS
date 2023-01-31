import { data } from 'autoprefixer';
import './style.css'

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector("#convert").addEventListener("click",(event)=>{
      event.preventDefault();

      
      const to = document.getElementById("to");
      const from = document.getElementById("from");
      const amount = document.getElementById("amount");

      let headers = new Headers();
      headers.append("apikey","YFsMiMLODqQlhsTSAaRIrYSdusufryk0");

      const requestOptions = {
          method:"GET",
          headers,
      }
      console.log(`before `)

      fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              document.querySelector("#result").textContent=`The Exchange Rate is ${data.result.toFixed(2)}`
          })
  })
})

// work on this to display the content 

if (data.length != 0 ){
    document.querySelector('result-box').style.display = "block"   
}