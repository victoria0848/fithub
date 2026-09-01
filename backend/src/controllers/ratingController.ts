import { Request, RequestHandler, Response } from 'express';
import { prisma } from '../prisma.js';

export const getAvgStarsByTeamId = async (req: Request, res: Response) => {
  const { teamId } = req.params

  try {
    const ratings = await prisma.rating.aggregate({
      where: {
        teamId: Number(teamId)
      },
      _avg: {
        numStars: true
      }
    });

    res.json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

export const createRecord = async (req: Request, res: Response) => {
  const { teamId, numStars } = req.body;
  const userId = req?.user?.id || undefined;

  const parsedTeamId = Number(teamId);
  const parsedUserId = Number(userId);
  const parsedNumStars = Number(numStars);

  if (!parsedTeamId || isNaN(parsedTeamId) || !parsedUserId || isNaN(parsedUserId)) {
    res.status(400).json({ error: 'Valid userId and teamId are required' });
  }

  if (!teamId || !userId) {
    res.status(400).json({ error: 'User, team & number of stars are required' });
  }

  try {
    const data = await prisma.rating.create({
      data: {
        teamId: parsedTeamId,
        userId: parsedUserId,
        numStars: parsedNumStars
      }
    });
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create rating' });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.rating.delete({
      where: {
        id: Number(id)
      },
    });
    res.status(200).json({ message: 'Rating deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete rating' });
  }
};
