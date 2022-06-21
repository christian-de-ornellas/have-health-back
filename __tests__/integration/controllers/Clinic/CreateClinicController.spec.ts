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
                name: "Clínica Fake",
                cnpj: "12345671",
                addressId: 1,
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/);
        expect(response.status).toEqual(201);
    });
});
