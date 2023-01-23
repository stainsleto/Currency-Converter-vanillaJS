import './style.css'

document.addEventListener("DOMContentLoaded",()=>{
  const convertButton = document.getElementById("convert");
  convertButton.addEventListener('click',() => {
    const amount = document.getElementById("amount");
    const from = document.getElementById("form");
    const to = document.getElementById("to");
    const result = document.getElementById("result");


    
      let myHeaders = new Headers();
      myHeaders.append("apikey", "YFsMiMLODqQlhsTSAaRIrYSdusufryk0");
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
      
      const convertApi = fetch(`https://api.apilayer.com/currency_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
      const apiResponse = convertApi.then(response => response.json());
      const data = apiResponse.then(daata =>{
       console.log(daata.result);

      })
      
    


  });
  

  
    

})

