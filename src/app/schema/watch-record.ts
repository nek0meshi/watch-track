import { z } from "@/lib/zod";
import dayjs from "dayjs";

export const WatchRecordSchema = z.object({
  id: z.string(),
  title: z.string(),
  watchedOn: z
    // .date()
    .string()
    .nullable()
    .refine((val) => (val ? dayjs(val).isValid() : true), {
      message: "Invalid date",
    })
    .transform((val) => (val ? dayjs(val).toDate() : null)),
  //
  rating: z.number(),
  memo: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const WatchRecordsSchema = z.array(WatchRecordSchema);

export type WatchRecordResponse = z.input<typeof WatchRecordSchema>;
export type WatchRecord = z.infer<typeof WatchRecordSchema>;

export const WatchRecordCreateSchema = z.object({
  title: z.string().min(1).max(50),
  watchedOn: z.string().nullable(),
  rating: z.number().min(0).max(10),
  memo: z.string().nullable(),
});

export type WatchRecordCreate = z.infer<typeof WatchRecordCreateSchema>;
