import Joi from "joi";

export class GetTicketIdDTO {
  ticketId: string;
}

export const GetTicketIdDTOSchema = Joi.object({
  ticketId: Joi.string().required(),
});
