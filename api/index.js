const cookieParser = require('cookie-parser')
const {express,routes} = require('./controller')
const path = require('path')
const cors = require('cors')
const app = express()
const errorHandling = require('./middleware/ErrorHandeling')
const port = +process.env.PORT || 3000


//static
app.use (express.static('../static')
)
app.use(express.urlencoded({
      extended: false
  }),
  routes)

routes.get('^/$|/challenger', (req, res, ) =>{
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
})


/*routes.get('^/$|/challenger', (req, res, next) =>{
    console.log("Welcome back");
    next,
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
})*/

// cookieParser(),
// cors(),
// Importing error handling middleware

// Middleware - Application level
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //* allows anyone to acces the api 
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});
// cookieParser & Router
// cookieParser should be set before router
app.use(cookieParser(), cors(), routes);
app.use(
    express.json(),
    express.urlencoded({
        extended: false,
    })
    );
    // Handling all errors
    app.use(errorHandling);
    // Server
    
    //log("") 
    // const { log } = require('console')
    app.listen(port, ()=>{
        console.log(`You are using port: ${port}`);
    })

    //