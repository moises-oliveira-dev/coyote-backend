import {z} from 'zod'

const createCustomerSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  imageUrl: z.url().optional()
});

export const updateCustomerSchema = createCustomerSchema.partial();

export type createCustomer = z.infer<typeof createCustomerSchema>;
export type createCustomer = z.infer<typeof updateCustomerSchema>;