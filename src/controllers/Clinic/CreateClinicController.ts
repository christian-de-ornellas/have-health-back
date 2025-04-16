import CreateClinicService from "@services/CreateClinicService";
import { Request, Response } from "express";

class CreateClinicController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const service = new CreateClinicService();
            const result = await service.execute(request.body);
            if (result instanceof Error) {
                return response.status(400).json({ result });
            }
            return response.status(201).json({ result });
        } catch (error) {
            return response.send({ error });
        }
    }
}

export default new CreateClinicController();
