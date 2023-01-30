
const express = require("express");

const app = express();



require('dotenv').config()



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});








app.get("/",(req,res)=>{
    app.use(express.static(__dirname+"/views/jarboePainting/build/static"));            //required for css and js
    app.use(express.static('./views/jarboePainting/build', express.static('static')));  //required for images and fonts
    res.sendFile(__dirname + "/views/jarboePainting/build/index.html");   
})




if(process.env.DEVELOPER_MODE){
  //FOR DEV
  const http = require('http');
  var httpServer = http.createServer(app);
  
  httpServer.listen(8080);
  console.log("Dev mode");

}else{

//FOR PROD
  require('greenlock-express')
      .init({
          packageRoot: __dirname,
    maintainerEmail: "christiandjarboe@gmail.com",
          // where to look for configuration
          configDir: './greenlock.d',

          // whether or not to run at cloudscale
          cluster: false
      })
      // Serves on 80 and 443
      // Get's SSL certificates magically!
      .serve(app);
  console.log("Prod mode");
}









console.log("Live bb hek yea 1.2.")













