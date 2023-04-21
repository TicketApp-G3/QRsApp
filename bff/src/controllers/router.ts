import { Express } from 'express';
import { TicketRouter } from './tickets';

export function registerRouters(app: Express) {
  app.get('/health', (_, res) => res.status(200).send());
  app.use('/tickets', TicketRouter());
}
