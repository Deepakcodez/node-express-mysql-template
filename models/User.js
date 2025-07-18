const { pool } = require("../config/database");

class User {
  // Create a new user
  static async create(userData) {
    try {
      const { name, email, age } = userData;
      const query = `
        INSERT INTO users (name, email, age)
        VALUES (?, ?, ?)
      `;

      const [result] = await pool.execute(query, [name, email, age]);
      return { id: result.insertId, name, email, age };
    } catch (error) {
      throw error;
    }
  }

  // Get all users
  static async getAll() {
    try {
      const query = "SELECT * FROM users ORDER BY created_at DESC";
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Get user by ID
  static async getById(id) {
    try {
      const query = "SELECT * FROM users WHERE id = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  // Update user
  static async update(id, userData) {
    try {
      const { name, email, age } = userData;
      const query = `
        UPDATE users 
        SET name = ?, email = ?, age = ?
        WHERE id = ?
      `;

      const [result] = await pool.execute(query, [name, email, age, id]);
      return { id, name, email, age, affectedRows: result.affectedRows };
    } catch (error) {
      throw error;
    }
  }

  // Delete user
  static async delete(id) {
    try {
      const query = "DELETE FROM users WHERE id = ?";
      const [result] = await pool.execute(query, [id]);
      return { id, affectedRows: result.affectedRows };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
