export const imagesSchema = `
CREATE TABLE IF NOT EXISTS images (
    image_id INT NOT NULL AUTO_INCREMENT,
    property_id INT NOT NULL,
    image_url VARCHAR(225) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (image_id),
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE
  
)`;
