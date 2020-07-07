//imports
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';

//conexão com o mongodb
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://user-bootcamp:230992@bootcamp.csvsk.mongodb.net/grades?retryWrites=true&w=majority',
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

app.listen(3000, () => {
  console.log('API iniciada');
});
