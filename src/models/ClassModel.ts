import mongoose from "mongoose";
const { Schema } = mongoose;

const ClassSchema = new Schema(
  {
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    creditHours: {
      type: Number,
    },
    description: {
      type: String,
    },
    prerequisites: {
      type: [String],
    },
    learningOutcomes: {
      type: [String],
    },
    programOutcomes: {
      type: [String],
    },
    baccalaureateCharacteristics: {
      type: [String],
    },
    textbooks: {
      type: [String],
    },
    modules: {
      type: [String],
    },
  },
  { versionKey: false }
);

export interface Class extends mongoose.Document {
  name: string;
  id: string;
  creditHours: number;
  description: string;
  prerequisites: string[];
  learningOutcomes: string[];
  programOutcomes: string[];
  baccalaureateCharacteristics: string[];
  textbooks: string[];
  modules: string[];
}

ClassSchema.set("toObject", { virtuals: true });

const ClassModel = mongoose.model<Class>("Class", ClassSchema);
export default ClassModel;
