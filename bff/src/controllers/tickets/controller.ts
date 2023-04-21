import { TicketDto } from "./dtos";
import pinoLogger from 'pino';
import axios from 'axios';
import { Request } from '@shared';


class TicketController {
  private logger;
  private ticketsUrl = 'http://localhost:8080/tickets'

  constructor() {
      this.logger = pinoLogger()
    }

  public async getTickets(req: Request): Promise<TicketDto[]> {
    const response = await axios.get(this.ticketsUrl + `/${req.params.userId}`)
    return response.data
  }

}

const ticketController: TicketController = new TicketController();

export { TicketController, ticketController };
