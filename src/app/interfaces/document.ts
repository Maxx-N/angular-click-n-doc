import { Person } from './person';
import { UserAccessesDocument } from './user-accesses-document';

export interface Document {
  id: number;
  ownerId: number;
  issuerId: number;
  issuanceDate: Date;
  duration: number;
  title: string;
  month: number;
  year: number;
  // file: byte[];
  documentType: DocumentType;
  owner: Person;
  issuer: Person;
  userAccessesDocuments: UserAccessesDocument[];
}
