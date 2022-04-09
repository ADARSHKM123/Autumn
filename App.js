const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const ratelimiter = require('express-rate-limit');
const hpp = require('hpp');
const path = require('path');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const viewRouter = require('./routes/viewRoutes');


const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


// 1) MIDDLEWARES


//Development logging
if (process.env.NODE_ENV === 'development') {
  process.env.INLINE_RUNTIME_CHUNK
  app.use(morgan('dev'));
}



//cors preflight
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  method: ["GET", "POST"]
}))


const limiter = ratelimiter({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this ip, Please try agian in an hour!'
});


//Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());


//Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


app.use(globalErrorHandler);

module.exports = app;
