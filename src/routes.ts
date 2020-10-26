import ApartmentController from './controllers/ApartmentController'
import LoginController from './controllers/LoginController'
import { Router } from 'express';
import multer from 'multer'
import uploadConfig from './config/upload'
const upload = multer(uploadConfig)

const routes = Router();

routes.post('/register',upload.array('images'),ApartmentController.apartmentCreate);
routes.get('/apartments',ApartmentController.index);
routes.get('/apartments/:ref',ApartmentController.show);
routes.put('/apartments/:ref',upload.array('images'),ApartmentController.update);
routes.delete('/apartments/:ref',ApartmentController.apartmentDelete);

routes.get('/login',LoginController.logIn);


export default routes;