import express, { Request, Response, Router } from 'express';
import { ClassModel, ClassSectionModel, InstructorModel } from './models';

const router: Router = express.Router();

router.get('/api/class/:classId', async (req: Request, res: Response) => {
  const classObject = await ClassModel.findOne(req.params.classId);
  if (!classObject) { res.status(404).send('Class not found'); return; }
  res.json(classObject);
});

router.get('/api/section/:sectionId', async (req: Request, res: Response) => {
  const section = await ClassSectionModel.findOne(req.params.sectionId);
  if (!section) { res.status(404).send('Section not found'); return; }
  res.json(section);
});

router.get('/api/csci/:sectionId', async (req: Request, res: Response) => {
  const section = await ClassSectionModel.findOne(req.params.sectionId);
  if (!section) { res.status(404).send('Section not found'); return; }

  const classObject = await ClassModel.findOne(section.course_id);
  if (!classObject) { res.status(404).send('Class not found'); return; }

  const instructor = await InstructorModel.findOne(section.instructor_id);
  if (!instructor) { res.status(404).send('Instructor not found'); return; }

  res.json({ ...section, class: classObject, instructor });
});

router.get('/api/csci/', async (req: Request, res: Response) => {
  const sections = await ClassSectionModel.find();

  const results = await Promise.all(sections.map(async (section) => {
    const classObject = await ClassModel.findOne(section.course_id);
    const instructor = await InstructorModel.findOne(section.instructor_id);
    return { ...section, class: classObject, instructor };
  }));

  res.json(results);
});

export default router;
