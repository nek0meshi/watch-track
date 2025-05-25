import { z } from "zod";

export const WatchRecordSchema = z.object({
  id: z.string(),
  title: z.string(),
  watchedOn: z.date().nullable(),
  rating: z.number(),
  memo: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type WatchRecord = z.infer<typeof WatchRecordSchema>;
