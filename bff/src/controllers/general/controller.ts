import pinoLogger from 'pino';
import axios from 'axios';
import { Request, UserPlatforms } from '@shared';

const EVENTS_BASE_URL = "https://ticket-app-ms-events.onrender.com" // PROD
// const EVENTS_BASE_URL = 'http://event_ms:8080'  // LOCAL

const USERS_BASE_URL = 'http://event_ms:8084'  // LOCAL

class GeneralController {
  private logger;

  constructor() {
    this.logger = pinoLogger()
  }

  public async getOwnerEvents(req: Request): Promise<any[]> {
    const response = await axios.get(`${EVENTS_BASE_URL}/events`, {
      params: {
        ownerId: req.params.userId,
        status: "IN_PROGRESS",
      }
    })
    return response.data
  }

  public async getTickets(req: Request): Promise<any[]> {
    const response = await axios.get(`${EVENTS_BASE_URL}/tickets/${req.params.userId}`)
    return response.data
  }

  public async validateTicket(req: Request): Promise<any> {
    const response = await axios.post(`${EVENTS_BASE_URL}/tickets/validate`, { ticketId: req.body.ticketId })
    return response.data
  }

  public async login(req: Request): Promise<any> {
    const response = await axios.post(`${USERS_BASE_URL}/users`, {
      ...req.body,
      platform: UserPlatforms.ORGANIZER_BACKOFFICE,
    })
    return response.data
  }

}

const generalController: GeneralController = new GeneralController();

export { GeneralController, generalController };
