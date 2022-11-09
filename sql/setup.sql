
-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS books_authors;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  dob VARCHAR,
  pob VARCHAR
);

INSERT INTO authors (
    name,
    dob,
    pob,
)
VALUES
  ('Michael Crichton', 'October 23, 1942', 'Chicago, IL'),
  ('Pierce Brown', 'January 28, 1988', 'Denver, CO'),
  ('Frank Herbert', 'October 8, 1920', 'Tacoma, WA'),
  ('Brian Herbert', 'June 29, 1947', 'Seattle, WA'),
  ('Kevin J. Anderson', 'March 27, 1962', 'Racine, WI'),
  ('Dan Simmons', 'April 4, 1948', 'Peoria, IL'),


-- CREATE TABLE books (
--   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   title VARCHAR(280) NOT NULL,
--   released INT not NULL
-- );

-- CREATE TABLE books_authors (
--   id BIGINT GENERATED ALWAYS AS IDENTITY,
--   author_id BIGINT,
--   book_id BIGINT,
--   FOREIGN KEY (author_id) REFERENCES authors(id),
--   FOREIGN KEY (book_id) REFERENCES books(id)
-- );
