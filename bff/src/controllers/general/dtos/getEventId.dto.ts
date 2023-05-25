import Joi from 'joi';

export class GetEventIdDto {
  eventId: string;
}

export const GetEventIdDtoSchema = Joi.object({
  eventId: Joi.string().required(),
});
