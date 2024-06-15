export const userSchema = `
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL, 
    password VARCHAR(225) NOT NULL,
    PRIMARY KEY (id)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
)`;
