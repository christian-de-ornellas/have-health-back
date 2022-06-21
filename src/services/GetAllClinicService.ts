import { AppDataSource } from "@database/index";
import { Clinic } from "@entities/Clinic";

class GetAllClinicService {
    async execute(): Promise<unknown> {
        const repository = AppDataSource.getRepository(Clinic);
        const clinic = await repository.find();
        return clinic;
    }
}
export default GetAllClinicService;
