import { Router } from 'express';
import { getRecord, getRecords } from '../controllers/teamController';

const routes = Router();
routes.get('/', getRecords);
routes.get('/:id', getRecord);

export const teamRoutes = routes;
