export type formatStatus = 'paid' | 'pending';

export interface Invoice {
  id: number;
  amount: number;
  status: formatStatus;
  issueDate: string;
  dueDate: string;
  customer: {
    id: number;
    name: string;
    email: string;
  }
}