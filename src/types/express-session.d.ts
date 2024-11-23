import * as express from 'express';

declare module 'express-session' {
  interface SessionData {
    user?: {
      username: string;
      role: number;
    };
  }
}
