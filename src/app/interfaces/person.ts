import { User } from './user';

export interface Person {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: Date;
  address: string;
  user: User;
  ownedDocuments: Document[];
  issuedDocuments: Document[];
}
