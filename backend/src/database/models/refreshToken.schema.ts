export const refreshTokenSchema = `
CREATE TABLE IF NOT EXISTS refresh_tokens (
    token_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    token VARCHAR(225) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
)`;
