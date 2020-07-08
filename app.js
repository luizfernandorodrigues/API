//imports
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';

console.log(process.env.USER_DB);
console.log(process.env.PASSWORD);
console.log(process.env.PORT);
//conexão com o mongodb
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://' +
        process.env.USER_DB +
        ':' +
        process.env.PASSWORD +
        '@bootcamp.csvsk.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Ocorreu um erro' + error);
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => {
  console.log('API iniciada');
});
