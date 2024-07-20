export const ACCESS_TOKEN_MAX_AGE = 60 * 15 * 1000; // 15 minutes in milliseconds
export const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 1000; // 24 hours in milliseconds

export enum TokenNames {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}
