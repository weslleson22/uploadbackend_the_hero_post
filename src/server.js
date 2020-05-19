require ("dotenv").config();

const path = require('path')
const app = require('./app');



const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('src', path.join(__dirname, 'src'))
  .set('src engine', 'ejs')
  .get('/', (req, res) => res.render('server'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
