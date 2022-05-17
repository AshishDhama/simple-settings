import { Entity } from './entity';
import { UserRole } from '../enums/UserRole';

export interface User extends Entity {
  first_name: string;
  last_name?: string;
  email: string;
  description?: string;
}
