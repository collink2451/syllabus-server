import { pool } from '../db';
import { RowDataPacket } from 'mysql2/promise';

export interface Instructor {
  id: number;
  name: string;
  office_hours: string;
  office: string;
  appointment_info: string;
  phone: string;
  email: string;
}

const findById = async (id: number): Promise<Instructor | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    'SELECT * FROM instructors WHERE id = ?', [id]
  );
  return rows.length ? (rows[0] as Instructor) : null;
};

export const InstructorModel = { findById };
