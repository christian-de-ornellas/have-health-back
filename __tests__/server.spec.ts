import server from "../src/server";

describe("Server", () => {
    afterAll(async () => {
        await server.close();
    });
    it("should return one connection at some port", async () => {
        const isConnection = server.listenerCount.length;
        expect(isConnection).toEqual(1);
    });
});
