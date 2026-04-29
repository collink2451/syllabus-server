import { pool } from '../db';
import { RowDataPacket } from 'mysql2/promise';

export interface Class {
  id: number;
  course_code: string;
  name: string;
  credit_hours: number;
  description: string;
  prerequisites: string[];
  learning_outcomes: string[];
  program_outcomes: (string | number)[][];
  baccalaureate_characteristics: (string | number)[][];
  textbooks: string[];
  modules: string[];
}

const parse = (row: RowDataPacket): Class => ({
  id: row.id,
  course_code: row.course_code,
  name: row.name,
  credit_hours: row.credit_hours,
  description: row.description,
  prerequisites: JSON.parse(row.prerequisites || '[]'),
  learning_outcomes: JSON.parse(row.learning_outcomes || '[]'),
  program_outcomes: JSON.parse(row.program_outcomes || '[]'),
  baccalaureate_characteristics: JSON.parse(row.baccalaureate_characteristics || '[]'),
  textbooks: JSON.parse(row.textbooks || '[]'),
  modules: JSON.parse(row.modules || '[]'),
});

const findOne = async (courseCode: string): Promise<Class | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM classes WHERE course_code = ?', [courseCode]
  );
  return rows.length ? parse(rows[0]) : null;
};

const findById = async (id: number): Promise<Class | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM classes WHERE id = ?', [id]
  );
  return rows.length ? parse(rows[0]) : null;
};

export const ClassModel = { findOne, findById };
