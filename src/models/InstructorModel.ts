import mongoose from "mongoose";
const { Schema } = mongoose;

const InstructorSchema = new Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    officeHours: {
      type: String,
    },
    appointmentInfo: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { versionKey: false }
);

export interface Instructor extends mongoose.Document {
  id: string;
  name: string;
  officeHours: string;
  appointmentInfo: string;
  phone: string;
  email: string;
}

InstructorSchema.set("toObject", { virtuals: true });

const InstructorModel = mongoose.model<Instructor>("Instructor", InstructorSchema);
export default InstructorModel;
