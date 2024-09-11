import { title } from 'process';
import { z } from 'zod';

export const createBookSchema = z
  .object({
    title: z.string(),
    author: z.string(),
    published: z.boolean(),
  })
  .required();

export type CreateBookDto = z.infer<typeof createBookSchema>;
