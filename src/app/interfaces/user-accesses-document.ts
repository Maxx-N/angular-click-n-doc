import { User } from './user';

export interface UserAccessesDocument {
  id: number;
  userId: number;
  documentId: number;
  user: User;
  document: Document;
}
