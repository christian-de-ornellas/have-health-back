import { AppDataSource } from "@database/index";
import { Clinic } from "@entities/Clinic";

type ClinicRequest = {
    name: string;
    cnpj: string;
    place: string;
    number: string;
    neighborhood: string;
    complement: string;
    city: string;
    state: string;
    country: string;
    lat: number;
    lng: number;
};

class CreateClinicService {
    async execute(data: ClinicRequest): Promise<Clinic> {
        const repository = AppDataSource.getRepository(Clinic);

        const clinic = repository.create(data);

        await repository.save(clinic);

        return clinic;
    }
}
export default CreateClinicService;
