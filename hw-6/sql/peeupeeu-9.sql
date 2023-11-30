CREATE TABLE users(
	id BIGSERIAL PRIMARY KEY,
	username VARCHAR(40) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL
);

INSERT INTO users(username, email, first_name, last_name, password)
VALUES('peeupeeu', 'peeupeeu@example.com', 'Sonia', 'Sonia2', ':3 0_0 >_<')
RETURNING *;