import ClinicController from "@controllers/ClinicController";
import { Router } from "express";

const routes = Router();

routes.get("/", ClinicController.index);

export default routes;
