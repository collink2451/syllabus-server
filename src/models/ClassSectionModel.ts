import mongoose from "mongoose";
import { Class } from "./ClassModel";
import { Instructor } from "./InstructorModel";
const { Schema } = mongoose;

const ClassSectionSchema = new Schema(
  {
    id: {
      type: String,
    },
    section: {
      type: String,
    },
    crn: {
      type: String,
    },
    meetingDays: {
      type: String,
    },
    meetingTimes: {
      type: String,
    },
    finalExam: {
      type: String,
    },
    meetingLocation: {
      type: String,
    },
    courseId: {
      type: String,
    },
    instructorId: {
      type: String,
    },
  },
  { versionKey: false }
);

export interface ClassSection extends mongoose.Document {
  id: string;
  section: string;
  crn: string;
  meetingDays: string;
  meetingTimes: string;
  finalExam: string;
  meetingLocation: string;
  courseId: string;
  class: Class | undefined;
  instructorId: string;
  instructor: Instructor | undefined;
}

ClassSectionSchema.set("toObject", { virtuals: true });

const ClassSectionModel = mongoose.model<ClassSection>("ClassSection", ClassSectionSchema);
export default ClassSectionModel;
