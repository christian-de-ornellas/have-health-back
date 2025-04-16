import request from "supertest";
import server from "../../../../src/server";
import { AppDataSource } from "../../../../src/database";

describe("POST /clinics", () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
    });
    afterEach(async () => {
        await server.close();
        //  await AppDataSource.dropDatabase();
    });
    it("should add a new clinic", async () => {
        const response = await request(server)
            .post("/clinics")
            .send({
                name: "Clínica Janeiro 200",
                cnpj: "12345671",
                place: "rua machado de assis",
                number: 20,
                neighborhood: "Vilar dos Teles",
                complement: "Próximo a casa da cultura",
                city: "São João de Meriti",
                state: "RJ",
                country: "Brasil",
                lat: "-22.7732267",
                long: "-43.359573",
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/);
        expect(response.status).toEqual(201);
    });
});
