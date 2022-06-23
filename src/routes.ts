import CreateClinicController from "@controllers/Clinic/CreateClinicController";
import GetAllClinicController from "@controllers/Clinic/GetAllClinicController";
import { Router } from "express";
import { celebrate, Joi, errors, Segments } from "celebrate";

const routes = Router();

routes.post(
    "/clinics",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            cnpj: Joi.number().integer().required(),
            place: Joi.string().required(),
            number: Joi.number().integer().required(),
            neighborhood: Joi.string().required(),
            complement: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            country: Joi.string().required(),
            lat: Joi.number().required(),
            long: Joi.number().required(),
        }),
    }),
    CreateClinicController.handle
);
routes.get("/clinics", GetAllClinicController.handle);

export default routes;
