const bkbutton = document.getElementById("Bk");
const mnbutton = document.getElementById("Man");
const qubutton = document.getElementById("Qu");
const bxbutton = document.getElementById("Br");
const stbutton = document.getElementById("St");
const numOfComplaintInput = document.getElementById("btn");
const desch1= document.getElementById("representation");
let i;
bkbutton.addEventListener('click', () => {
  //let complaint = numOfComplaintInput.value // extracting the value out of input
  let numOfComplaintInput = 10;
  const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json`
  

  //JS has a built in method for API calls
  // which is promise based
  fetch(url)
    .then((res)=> res.json() )// receives the response from the promise
    .then((data) => {
        console.log(data);
    for (let i=1; i<= numOfComplaintInput; i++){
        // console.log(data[i].descriptor);
         desh1.innerHTML = `${data[i]}.descriptor`;
        }
            
    })
    .catch((error) => {
    console.log(error)
  })
 })


//  button2.addEventListener('click', () => {
//     let complaint = numOfCInput.value // extracting the value out of input
    
//     const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN`
  
//     //JS has a built in method for API calls
//     // which is promise based
//     fetch(url)
//       .then((res)=> res.json() )// receives the response from the promise
//       .then((data) => {
//        let dogPic = data.message
        
//         imageDiv.innerHTML = `<img src=${dogPic} >`;
        
//       })
//       .catch((error) => {
//       console.log(error)
//     })
//    })

//    button3.addEventListener('click', () => {
//     let complaint = numOfCInput.value // extracting the value out of input
    
//     const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEEN`
  
//     //JS has a built in method for API calls
//     // which is promise based
//     fetch(url)
//       .then((res)=> res.json() )// receives the response from the promise
//       .then((data) => {
//        let dogPic = data.message
        
//         imageDiv.innerHTML = `<img src=${dogPic} >`;
        
//       })
//       .catch((error) => {
//       console.log(error)
//     })
//    })


//    button4.addEventListener('click', () => {
//     let complaint = numOfCInput.value // extracting the value out of input
    
//     const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX`
  
//     //JS has a built in method for API calls
//     // which is promise based
//     fetch(url)
//       .then((res)=> res.json() )// receives the response from the promise
//       .then((data) => {
//        let dogPic = data.message
        
//         imageDiv.innerHTML = `<img src=${dogPic} >`;
        
//       })
//       .catch((error) => {
//       console.log(error)
//     })
//    })

//    button2.addEventListener('click', () => {
//     let complaint = numOfCInput.value // extracting the value out of input
    
//     const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATENISLAND`
  
//     //JS has a built in method for API calls
//     // which is promise based
//     fetch(url)
//       .then((res)=> res.json() )// receives the response from the promise
//       .then((data) => {
//        let dogPic = data.message
        
//         imageDiv.innerHTML = `<img src=${dogPic} >`;
        
//       })
//       .catch((error) => {
//       console.log(error)
//     })
//   