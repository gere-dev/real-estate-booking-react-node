export const imagesSchema = `
CREATE TABLE IF NOT EXISTS images (
    image_id INT NOT NULL AUTO_INCREMENT,
    entity_id INT NOT NULL,
    entity_type ENUM('property', 'user') NOT NULL,
    image_url VARCHAR(225) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (image_id),
    FOREIGN KEY (entity_id) REFERENCES properties(property_id) ON DELETE CASCADE,
    FOREIGN KEY (entity_id) REFERENCES users(user_id) ON DELETE CASCADE
  
)`;
