import { pool } from '../db';
import { RowDataPacket } from 'mysql2/promise';
import { Class } from './ClassModel';
import { Instructor } from './InstructorModel';

export interface ClassSection {
  id: string;
  section: string;
  crn: string;
  meeting_days: string;
  meeting_times: string;
  final_exam: string;
  meeting_location: string;
  course_id: string;
  instructor_id: string;
  class?: Class;
  instructor?: Instructor;
}

const findOne = async (id: string): Promise<ClassSection | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM class_sections WHERE id = ?', [id]
  );
  if (rows.length === 0) return null;
  return rows[0] as ClassSection;
};

const find = async (): Promise<ClassSection[]> => {
  const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM class_sections');
  return rows as ClassSection[];
};

export const ClassSectionModel = { findOne, find };
