import { ACCESS_TOKEN_MAX_AGE, REFRESH_TOKEN_MAX_AGE, TOKEN_TYPE } from '@/constants';
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
      maxAge: maxAge,
      secure: true,
      sameSite: 'none',
    };
  };

  // res.cookie(TOKEN_TYPE.ACCESS_TOKEN, accessToken, cookieOptions(ACCESS_TOKEN_MAX_AGE));
  res.cookie(TOKEN_TYPE.REFRESH_TOKEN, refreshToken, cookieOptions(REFRESH_TOKEN_MAX_AGE));
};
