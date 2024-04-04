import express, { Request, Response, Router } from "express";
import * as Models from './models';

const router: Router = express.Router();

router.get('/api/class/:classId', async (req: Request, res: Response) => {
    const classObject = await Models.ClassModel.findOne({ id: req.params.id }).lean();

    if (!classObject) {
        res.status(404).send('Class not found');
        return;
    }

    res.json(classObject);
});

router.get('/api/section/:sectionId', async (req: Request, res: Response) => {
    const classObject = await Models.ClassSectionModel.findOne({ id: req.params.id }).lean();

    if (!classObject) {
        res.status(404).send('Class not found');
        return;
    }

    res.json(classObject);
});

router.get('/api/csci/:sectionId', async (req: Request, res: Response) => {
    const classObject = await Models.ClassModel.findOne({ id: req.params.id }).lean();

    if (!classObject) {
        res.status(404).send('Class not found');
        return;
    }

    res.json(classObject);
});


export default router;