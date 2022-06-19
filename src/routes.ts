import CreateClinicController from "@controllers/CreateClinicController";
import { Router } from "express";

const routes = Router();

routes.post("/clinics", CreateClinicController.handle);

export default routes;
