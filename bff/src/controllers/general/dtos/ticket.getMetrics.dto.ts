import Joi from "joi";

export class TicketMetricsDto {
  timeCheckpoints: Date[];
}

export const TicketMetricsDtoSchema = Joi.object({
  timeCheckpoints: Joi.array().items(Joi.date()).required(),
});
