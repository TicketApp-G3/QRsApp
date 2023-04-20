import Joi from "joi";

export class GetTicketByUserIdDTO {
  userId: string;
}

export const GetTicketByUserIdDTOSchema = Joi.object({
  userId: Joi.string().required(),
});
