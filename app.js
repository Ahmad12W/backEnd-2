const request =require("request")
const [num,sub]= process.argv[2]
const forecast = require ("./dataA.js/forecast")
forecast (num,sub, (error ,data)=>{
    console.log("ERROR : ",error)
    console.log("DAtA : ",data)
})



