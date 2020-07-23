import { Person } from "./person";
import { UserAccessesDocument } from "./user-accesses-document";

export interface User {
  id: string;
  personId: number;
  person: Person;
  userAccessesDocuments: UserAccessesDocument[];
}
