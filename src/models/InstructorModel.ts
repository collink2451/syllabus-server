import { pool } from '../db';
import { RowDataPacket } from 'mysql2/promise';

export interface Instructor {
  id: string;
  name: string;
  office_hours: string;
  office: string;
  appointment_info: string;
  phone: string;
  email: string;
}

const findOne = async (id: string): Promise<Instructor | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM instructors WHERE id = ?', [id]
  );
  if (rows.length === 0) return null;
  return rows[0] as Instructor;
};

export const InstructorModel = { findOne };
