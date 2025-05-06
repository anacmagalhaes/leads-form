import express from 'express';
import cors from 'cors';
import connectDB from './src/database/config.js';
import routes from './src/routes/routes.js';

const app = express();

app.use(cors({origin: '*'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);

connectDB();

app.listen(3000, () => {
    console.log(`Servidor iniciado na porta ${3000}`);
})

export default app;