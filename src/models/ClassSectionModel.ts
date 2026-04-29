import { pool } from '../db';
import { RowDataPacket } from 'mysql2/promise';
import { Class } from './ClassModel';
import { Instructor } from './InstructorModel';

export interface ClassSection {
  id: number;
  section_code: string;
  section: string;
  crn: string;
  meeting_days: string;
  meeting_times: string;
  final_exam: string;
  meeting_location: string;
  course_id: number;
  instructor_id: number;
  class?: Class;
  instructor?: Instructor;
}

const findOne = async (sectionCode: string): Promise<ClassSection | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM class_sections WHERE section_code = ?', [sectionCode]
  );
  return rows.length ? (rows[0] as ClassSection) : null;
};

const find = async (): Promise<ClassSection[]> => {
  const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM class_sections');
  return rows as ClassSection[];
};

export const ClassSectionModel = { findOne, find };
