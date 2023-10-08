import { Express, Request, Response } from 'express';
import { searchCountry } from '../utils/searchCountry';

export const router = (app: Express) => {
  app.get('/health', (req: Request, res: Response) => {
    res.status(200).send("Health check OK.")
  })

  app.get('/countries/:countryName', (req: Request, res: Response) => {
    const country:string = req.params.countryName;

    searchCountry(country);
  })
}