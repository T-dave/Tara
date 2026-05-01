import { getDB } from './db';

export const UserRepo = {
  async create(name: string, email: string) {
    const db = await getDB();

    const result = await db.runAsync(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      name,
      email
    );

    return result.lastInsertRowId;
  },

  async findByEmail(email: string) {
    const db = await getDB();

    return await db.getFirstAsync(
      'SELECT * FROM users WHERE email = ?',
      email
    );
  },

  async getAll() {
    const db = await getDB();

    return await db.getAllAsync('SELECT * FROM users');
  },

  async updateName(id: number, name: string) {
    const db = await getDB();

    return await db.runAsync(
      'UPDATE users SET name = ? WHERE id = ?',
      name,
      id
    );
  },

  async delete(id: number) {
    const db = await getDB();

    return await db.runAsync(
      'DELETE FROM users WHERE id = ?',
      id
    );
  }
};