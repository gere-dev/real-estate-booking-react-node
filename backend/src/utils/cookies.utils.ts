import { ACCESS_TOKEN_MAX_AGE, REFRESH_TOKEN_MAX_AGE } from '@/constants/tokens.max.age';
import { TokenNames } from '@/enums/tokens.name';
import { Response } from 'express';

type COOKIE_OPTIONS = {
  httpOnly: boolean;
  maxAge: number;
  secure: boolean;
  sameSite: 'none' | 'lax' | 'strict';
};

export const setCookies = (res: Response, refreshToken: string) => {
  const cookieOptions = (maxAge: number): COOKIE_OPTIONS => {
    return {
      httpOnly: true,
      maxAge: maxAge, // in milliseconds
      secure: true,
      sameSite: 'none',
    };
  };

  // res.cookie(TokenNames.ACCESS_TOKEN, accessToken, cookieOptions(ACCESS_TOKEN_MAX_AGE));
  res.cookie(TokenNames.REFRESH_TOKEN, refreshToken, cookieOptions(REFRESH_TOKEN_MAX_AGE));
};
