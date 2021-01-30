const fs = require('fs')
 fs.readFile('./6.html',(err, data) => {

   for(let i=0 ;i<=50;i++) {
    fs.writeFile('./'+ i+'.html',data.toString(),(err) => {

    })
   }
  //  console.log(data.toString())
 })
 
