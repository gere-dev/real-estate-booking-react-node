import { CorsOptions } from 'cors';
export interface CorsConfig {
  allowedOrigins: string[];
}

export interface CustomCorsOptions extends CorsOptions {
  origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => void;
  credentials: boolean;
  methods: string[];
  allowedHeaders: string[];
}
