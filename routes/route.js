import { Router } from 'express';

export const router = Router();

let exams = {};

// Default route
router.get('/exam-group', (req,res) => 
    res.json({message: "Group F API"})
);
  