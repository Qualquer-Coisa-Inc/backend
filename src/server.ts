import express from 'express';
import { router } from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));

router(app);

app.listen(3000, () => {
  console.log('Server running on port 3000!')
})

export default app;