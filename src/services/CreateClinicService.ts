import { AppDataSource } from "@database/index";
import { Clinic } from "@entities/Clinic";

type ClinicRequest = {
    name: string;
    cnpj: string;
    addressId: number;
};

class CreateClinicService {
    async execute({ name, cnpj, addressId }: ClinicRequest): Promise<Clinic> {
        const repository = AppDataSource.getRepository(Clinic);

        const clinic = repository.create({ name, cnpj, addressId });

        await repository.save(clinic);

        return clinic;
    }
}
export default CreateClinicService;
