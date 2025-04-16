import GetAllClinicService from "@services/GetAllClinicService";
import { Request, Response } from "express";

class GetAllClinicController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const service = new GetAllClinicService();
            const result = await service.execute();
            if (result instanceof Error) {
                return response.status(400).json({ result });
            }
            return response.status(200).json({ result });
        } catch (error) {
            return response.send({ error });
        }
    }
}

export default new GetAllClinicController();
