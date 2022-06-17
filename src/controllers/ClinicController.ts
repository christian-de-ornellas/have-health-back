import {Request, Response} from 'express'

class ClinicController {

 async index(request: Request, response: Response): Promise<Response> {
   try {
    return response.send({"status": true})
   } catch (error) {
      return response.send({error})
   }
  }
}

export default new ClinicController()
