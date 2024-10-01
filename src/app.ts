import exp, { Express } from 'express'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
// internal
import authRouter from './controllers/authController'
import gameRouter from './controllers/gameController'

// creates server
const app = exp();

app.use(exp.static('wwwroot'));
app.use(exp.json());
app.use(cookieParser());

// routers
app.use( '/auth' , authRouter );
app.use( '/games', gameRouter );

// listening
app.listen(process.env.PORT, () => {
    console.log(`Listening on 0.0.0.0:${process.env.PORT}...`);
})