export interface DocumentType {
  id: number;
  name: string;
  isUnique: boolean;
  isAnnual: boolean;
  isMonthly: boolean;
  hasIssuanceDate: boolean;
  hasExpirationDate: boolean;
}
