import { pool } from '../db';
import { RowDataPacket } from 'mysql2/promise';

export interface Class {
  id: string;
  name: string;
  credit_hours: number;
  description: string;
  prerequisites: string[];
  learning_outcomes: string[];
  program_outcomes: string[];
  baccalaureate_characteristics: string[];
  textbooks: string[];
  modules: string[];
}

const findOne = async (id: string): Promise<Class | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM classes WHERE id = ?', [id]
  );
  if (rows.length === 0) return null;
  return parseClass(rows[0]);
};

const parseClass = (row: RowDataPacket): Class => ({
  id: row.id,
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

export const ClassModel = { findOne };
