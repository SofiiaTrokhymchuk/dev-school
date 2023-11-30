const express = require('express');
const dotenv = require('dotenv');
const customersRouter = require('./api/routers/customersRouter');
const employeesRouter = require('./api/routers/employeesRouter');
const ordersRouter = require('./api/routers/ordersRouter');
const productsRouter = require('./api/routers/productsRouter');
const errorMiddleware = require('./api/middlewares/errorMiddleware');
const { NotFoundError } = require('./api/utils/custom-errors/HttpError');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/customers', customersRouter);
app.use('/employees', employeesRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);

app.use((req, res, next) => {
  next(new NotFoundError('Rout not found'));
});
app.use(errorMiddleware);

app.listen(port, () =>
  console.info(`Server is running on port ${port}`, new Date())
);
