import { formatStatus } from './invoiceType.ts';

export function formatCurrency(value: number): string {
  const formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value / 100);

  return formatter;
}

export function formatDate(date: string): string {
  const formatter = Intl.DateTimeFormat('pt-BR',{
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  return formatter.format(new Date(`${date}T00:00:00`));
}

export function formatStatus(status: formatStatus) {
  return status === 'paid' ?  'Paga' : 'Pendente';
}