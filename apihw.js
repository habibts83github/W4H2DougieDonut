const bkbutton = document.getElementById("Bk");
const mnbutton = document.getElementById("Mn");
const qubutton = document.getElementById("Qu");
const bxbutton = document.getElementById("Br");
const stbutton = document.getElementById("St");
const numInput = document.getElementById("tx");
const desch1= document.getElementById("representation");
const resDiv = document.getElementById("resolve")

bkbutton.addEventListener('click', () => {
  desch1.innerHTML =""
  resDiv.innerHTML =""
  //let complaint = numOfComplaintInput.value // extracting the value out of input
  let numCinput = Number(numInput.value);

  const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${numCinput}&borough=BROOKLYN`   
  fetch(url)
    .then((res)=> res.json() )// receives the response from the promise
    .then((data) => {
       
    for (let i=0; i<= data.length; i++){        
        let store = data[i].descriptor
        let policeAc = data[i].resolution_description
         desch1.innerHTML += `<p>${store}</p>`;
         resDiv.innerHTML+= `<button onclick=${policeAc}> NYPDaction </button>`;
        }
            
    })
    .catch((error) => {
    console.log(error)
  })
 })


 mnbutton.addEventListener('click', () => {
  desch1.innerHTML =""
  resDiv.innerHTML =""
  //let complaint = numOfComplaintInput.value // extracting the value out of input
  let numCinput = Number(numInput.value);
  const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${numCinput}&borough=MANHATTAN`   
  fetch(url)
    .then((res)=> res.json() )// receives the response from the promise
    .then((data) => {
       
    for (let i=0; i<= data.length; i++){        
        let store=data[i].descriptor
        let policeAc = data[i].resolution_description
         desch1.innerHTML += `<p>${store}</p>`;
         resDiv.innerHTML+= `<button onclick=${policeAc}> nypdaction </button>`;
        }            
    })
    .catch((error) => {
    console.log(error)
  })
 })

 
qubutton.addEventListener('click', () => {
  desch1.innerHTML =""
  resDiv.innerHTML =""
  //let complaint = numOfComplaintInput.value // extracting the value out of input
  let numCinput = Number(numInput.value);
  const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${numCinput}&borough=QUEENS`   
  fetch(url)
  .then((res)=> res.json() )// receives the response from the promise
  .then((data) => {
     
  for (let i=0; i<= data.length; i++){        
      let store=data[i].descriptor
      let policeAc = data[i].resolution_description
       desch1.innerHTML += `<p>${store}</p>`;
       resDiv.innerHTML+= `<button onclick=${policeAc}> nypdaction </button>`;
      }            
  })
  .catch((error) => {
  console.log(error)
})
})

 
bxbutton.addEventListener('click', () => {
  desch1.innerHTML =""
  resDiv.innerHTML =""
  //let complaint = numOfComplaintInput.value // extracting the value out of input
  let numCinput = Number(numInput.value);
  const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${numCinput}&borough=BRONX`   
  fetch(url)
  .then((res)=> res.json() )// receives the response from the promise
  .then((data) => {
     
  for (let i=0; i<= data.length; i++){        
      let store=data[i].descriptor
      let policeAc = data[i].resolution_description
       desch1.innerHTML += `<p>${store}</p>`;
       resDiv.innerHTML+= `<button onclick=${policeAc}> nypdaction </button>`;
      }            
  })
  .catch((error) => {
  console.log(error)
})
})

 
stbutton.addEventListener('click', () => {
  desch1.innerHTML =""
  resDiv.innerHTML =""
  //let complaint = numOfComplaintInput.value // extracting the value out of input
  let numCinput = Number(numInput.value);
  const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${numCinput}&borough=STATEN%20ISLAND`   
  fetch(url)
  .then((res)=> res.json() )// receives the response from the promise
  .then((data) => {
     
  for (let i=0; i<= data.length; i++){        
      let store=data[i].descriptor
      let policeAc = data[i].resolution_description
       desch1.innerHTML += `<p>${store}</p>`;
       resDiv.innerHTML+= `<button onclick=${policeAc}> nypdaction </button>`;
      }            
  })
  .catch((error) => {
  console.log(error)
})
})
