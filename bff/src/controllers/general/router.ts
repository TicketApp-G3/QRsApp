import {
  registerHandler,
  validateSchema,
  Request,
  FieldOptions,
} from '@shared';
import { Router } from 'express';
import { generalController } from './controller';
import { StatusCodes } from 'http-status-codes';
import {
  GetTicketIdDTOSchema,
  GetUserIdDTOSchema,
  LoginDtoSchema,
  GetEventIdDtoSchema,
} from './dtos';
import { TicketMetricsDtoSchema } from './dtos/ticket.getMetrics.dto';

export function GeneralRouter() {
  const router = Router();

  router.post(
    '/tickets/validate',
    validateSchema(GetTicketIdDTOSchema, [FieldOptions.body]),
    registerHandler(
      (req: Request<void, { userId: string }>) =>
        generalController.validateTicket(req),
      StatusCodes.OK
    )
  );

  router.get(
    '/tickets/:userId',
    validateSchema(GetUserIdDTOSchema, [FieldOptions.params]),
    registerHandler(
      (req: Request<void, { userId: string }>) =>
        generalController.getTickets(req),
      StatusCodes.OK
    )
  );

  router.post(
    '/tickets/metrics/:eventId',
    validateSchema(GetEventIdDtoSchema, [FieldOptions.params]),
    validateSchema(TicketMetricsDtoSchema, [FieldOptions.body]),
    registerHandler(
      (req: Request<void, { eventId: string }>) =>
        generalController.getTicketsMetrics(req),
      StatusCodes.OK
    )
  );

  router.post(
    '/events/:userId',
    validateSchema(GetUserIdDTOSchema, [FieldOptions.params]),
    registerHandler(
      (req: Request<void, { userId: string }>) =>
        generalController.getOwnerEvents(req),
      StatusCodes.OK
    )
  );

  router.post(
    '/users',
    validateSchema(LoginDtoSchema, [FieldOptions.body]),
    registerHandler(
      (req: Request) => generalController.login(req),
      StatusCodes.OK
    )
  );

  return router;
}
