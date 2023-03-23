import { HttpContextToken } from '@angular/common/http';

export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
export const USE_BASIC_AUTH = new HttpContextToken<boolean>(() => false);
export const USE_JWT_AUTH = new HttpContextToken<boolean>(() => false);
