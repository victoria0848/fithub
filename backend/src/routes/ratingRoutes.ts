import { Router } from 'express';
import { getAvgStarsByTeamId, createRecord, deleteRecord } from '../controllers/ratingController';
import { Authorize } from '../middleware/authMiddleware';

const routes = Router();
routes.get('/:teamId', getAvgStarsByTeamId);
routes.post('/', Authorize, createRecord);
routes.delete('/:id', deleteRecord);

export const ratingRoutes = routes;
