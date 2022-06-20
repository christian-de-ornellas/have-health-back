import request from "supertest";
import server from "../../../src/server";

describe("POST /clinics", () => {
    afterEach(async () => {
        await server.close();
    });
    it("should add a new clinic", async () => {
        const response = await request(server).post("/clinics").send({
            name: "T1",
            cnpj: "123",
            addressId: 1,
        });
        expect(response.status).toEqual(201);
    });
});
