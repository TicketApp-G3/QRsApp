import pinoLogger from 'pino';
import axios from 'axios';
import { Request } from '@shared';

const BASE_URL = "http://localhost:8080" // PROD
// const BASE_URL = 'http://event_ms:8080'  // LOCAL

class GeneralController {
  private logger;

  constructor() {
    this.logger = pinoLogger()
  }

  public async getOwnerEvents(req: Request): Promise<any[]> {
    const response = await axios.get(`${BASE_URL}/events`, {
      params: {
        ownerId: req.params.userId,
        status: "IN_PROGRESS",
      }
    })
    return response.data
  }

  public async getTickets(req: Request): Promise<any[]> {
    const response = await axios.get(`${BASE_URL}/tickets/${req.params.userId}`)
    return response.data
  }

  public async validateTicket(req: Request): Promise<any> {
    const response = await axios.post(`${BASE_URL}/tickets/validate`, { ticketId: req.body.ticketId })
    return response.data
  }

}

const generalController: GeneralController = new GeneralController();

export { GeneralController, generalController };
