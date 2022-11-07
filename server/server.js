const path = require('path')
const express =require('express')
const app = express()
const publicPath = path.join(_dirName,'..','public')
const path = process.nextTick.PORT || 3000

app.use(express.static(publicPath))

app.get ('*', (req,res)=> {
    res.sendFile(path.join(publicPath),'index.html')
})
app.listen(port, function(){
    console.log(`server is running on port ${port}`)
})