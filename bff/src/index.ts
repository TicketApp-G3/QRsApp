import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import pino from 'express-pino-logger';
import pinoLogger from 'pino';
import { exceptionToHttpError, snakeToCamelcaseKeys } from './shared';
import { config } from './config';
import { registerRouters } from './controllers';

async function main() {
  const app = express();

  app.use(pino());
  app.use(cors());
  app.use(express.json());
  app.use(snakeToCamelcaseKeys());
  registerRouters(app);
  app.use(exceptionToHttpError);

  app.listen(config.port, () => {
    const logger = pinoLogger();
    logger.info(`App listening on port ${config.port}`);
  });
}

main();
