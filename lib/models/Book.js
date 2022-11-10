const pool = require('../utils/pool');

class Book {
  id;
  title;
  released;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors;
  }

  static async getAll() {
    const { rows } = await pool.query(`
      select
        books.*,
        coalesce(
          json_agg(to_jsonb(authors)) filter (
            WHERE
              authors.id IS NOT NULL
          ),
          '[]'
      ) as authors
      from
        books
        left join books_authors on books_authors.book_id = books.id
        left join authors on authors.id = books_authors.author_id
      group by
        books.id;
    `);
    return rows.map((row) => new Book(row));
  }
}

module.exports = { Book };
