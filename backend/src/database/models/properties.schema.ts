export const propertiesSchema = `
CREATE TABLE IF NOT EXISTS properties(
    property_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(100) NOT NULL,
    price_per_night INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (property_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
)`;
