import { registerHandler, validateSchema, Request, FieldOptions } from '@shared'
import { Router } from 'express'
import { ticketController } from './controller'
import { StatusCodes } from 'http-status-codes'
import { GetTicketByUserIdDTOSchema } from './dtos'

export function TicketRouter() {
  const router = Router()

  router.get(
    "/:userId",
    validateSchema(GetTicketByUserIdDTOSchema, [FieldOptions.params]),
    registerHandler(
      (req: Request<void, { userId: string }>) =>
      ticketController.getTickets(req),
      StatusCodes.OK
    )
  );

  return router
}
