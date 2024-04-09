import express, { Request, Response, Router } from "express";
import * as Models from './models';

const router: Router = express.Router();

router.get('/api/class/:classId', async (req: Request, res: Response) => {
    const classObject = await Models.ClassModel.findOne({ id: req.params.classId }).lean();

    if (!classObject) {
        res.status(404).send('Class not found');
        return;
    }

    res.json(classObject);
});

router.get('/api/section/:sectionId', async (req: Request, res: Response) => {
    const section = await Models.ClassSectionModel.findOne({ id: req.params.sectionId }).lean();

    if (!section) {
        res.status(404).send('Class not found');
        return;
    }

    res.json(section);
});

router.get('/api/csci/:sectionId', async (req: Request, res: Response) => {
    const section = await Models.ClassSectionModel.findOne({ id: req.params.sectionId }).lean();

    if (!section) {
        res.status(404).send('Section not found');
        return;
    }

    // Find the class that goes with this section
    const classObject = await Models.ClassModel.findOne({ id: section.courseId }).lean();
    if (!classObject) {
        res.status(404).send('Class not found');
        return;
    }

    // Get the instructor for this section
    const instructor = await Models.InstructorModel.findOne({ id: section.instructorId }).lean();
    if (!instructor) {
        res.status(404).send('Instructor not found');
        return;
    }

    section.class = classObject;
    section.instructor = instructor;

    res.json(section);
});

router.get('/api/csci/', async (req: Request, res: Response) => {
    const sections = await Models.ClassSectionModel.find().lean();

    for (const section of sections) {
        const classObject = await Models.ClassModel.findOne({ id: section.courseId }).lean();
        const instructor = await Models.InstructorModel.findOne({ id: section.instructorId }).lean();

        section.class = classObject;
        section.instructor = instructor;
    }

    res.json(sections);
});

export default router;