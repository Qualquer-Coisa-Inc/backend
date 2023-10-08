import { Express, Request, Response } from 'express';
import { searchCountry } from '../utils/searchCountry';

export const router = (app: Express) => {
  app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Bem-vindo a API de busca de países!")
  })

  app.get('/health', (req: Request, res: Response) => {
    res.status(200).send("Health check OK.")
  })

  app.get('/countries/:countryName', async (req: Request, res: Response) => {
    const { countryName } = req.params;

    try {
      const countryData = await searchCountry(countryName);
      res.status(200).json(countryData);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar dados do país' });
    }
  })
}