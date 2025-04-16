import request from "supertest";
import server from "../../../../src/server";
import { AppDataSource } from "../../../../src/database";

describe("GET /clinics", () => {
    beforeAll(async () => {
        await AppDataSource.initialize();
        await server.close();
    });

    it("should to get list of clinics", async () => {
        const response = await request(server)
            .get("/clinics")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/);
        expect(response.status).toEqual(200);
    });
});
