import pinoLogger from 'pino';
import axios from 'axios';
import { Request } from '@shared';


class GeneralController {
  private logger;
  private ticketsUrl = process.env.TICKETS_URL;
  private eventsUrl = process.env.EVENTS_URL;

  constructor() {
    this.logger = pinoLogger()
  }

  public async getTickets(req: Request): Promise<any[]> {
    const response = await axios.get(this.ticketsUrl + `/${req.params.userId}`)
    return response.data
  }

  public async getOwnerEvents(req: Request): Promise<any[]> {
    const response = await axios.get(this.eventsUrl, { params: { ownerId: req.params.userId } })
    return response.data
  }

  public async validateTicket(req: Request): Promise<any> {
    const response = await axios.post(this.ticketsUrl + '/validate', { ticketId: req.body.ticketId })
    return response.data
  }

}

const generalController: GeneralController = new GeneralController();

export { GeneralController, generalController };
