import CreateClinicController from "@controllers/Clinic/CreateClinicController";
import GetAllClinicController from "@controllers/Clinic/GetAllClinicController";
import { Router } from "express";

const routes = Router();

routes.post("/clinics", CreateClinicController.handle);
routes.get("/clinics", GetAllClinicController.handle);

export default routes;
