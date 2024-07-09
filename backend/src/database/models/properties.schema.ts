export const propertiesSchema = `
CREATE TABLE IF NOT EXISTS properties(
    property_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    extraInfo TEXT NOT NULL,
    bed INT NOT NULL,
    address VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    price_per_night INT NOT NULL,
    wifi BOOLEAN NOT NULL,
    parking BOOLEAN NOT NULL,
    pets BOOLEAN NOT NULL,  
    gym BOOLEAN NOT NULL,
    pool BOOLEAN NOT NULL,
    netflix BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (property_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
)`;
