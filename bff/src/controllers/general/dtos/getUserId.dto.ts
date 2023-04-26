import Joi from "joi";

export class GetUserIdDTO {
  userId: string;
}

export const GetUserIdDTOSchema = Joi.object({
  userId: Joi.string().required(),
});
