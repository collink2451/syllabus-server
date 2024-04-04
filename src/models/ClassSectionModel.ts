import mongoose from "mongoose";
const { Schema } = mongoose;

const ClassSectionSchema = new Schema(
  {
    id: {
      type: String,
    },
    name: {
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
  name: string;
  section: string;
  crn: string;
  meetingDays: string;
  meetingTimes: string;
  finalExam: string;
  meetingLocation: string;
  courseId: string;
  instructorId: string;
}

ClassSectionSchema.set("toObject", { virtuals: true });

const ClassSectionModel = mongoose.model<ClassSection>("ClassSection", ClassSectionSchema);
export default ClassSectionModel;
