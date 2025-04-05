import { Router } from 'express';

export const router = Router();

const exams = [
    { id: 1, name: 'Intprog Exam', date: '2025-04-05' }
  ];

// Default route
router.get('/exam-group', (req,res) => 
    res.json({message: "Group F API"})
);

router.post('/exams', (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1; 
    exams.push(newExam);
    res.status(201).json(newExam);
  });
//   module.exports = router;
  