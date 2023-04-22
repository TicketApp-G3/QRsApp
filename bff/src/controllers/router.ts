import { Express } from 'express';
import { GeneralRouter } from './general';

export function registerRouters(app: Express) {
  app.get('/health', (_, res) => res.status(200).send());
  app.use('/', GeneralRouter());
}
