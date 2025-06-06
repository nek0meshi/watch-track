import { z } from "@/lib/zod";
import dayjs from "dayjs";

export const WatchRecordSchema = z.object({
  id: z.string(),
  title: z.string(),
  watchedOn: z
    .string()
    .nullable()
    .refine((val) => (val ? dayjs(val).isValid() : true), {
      message: "Invalid date",
    })
    .transform((val) => (val ? dayjs(val).toDate() : null)),
  //
  rating: z.number(),
  memo: z.string(),
  createdAt: z
    .string()
    .refine((val) => dayjs(val).isValid())
    .transform((val) => dayjs(val).toDate()),
  updatedAt: z
    .string()
    .refine((val) => dayjs(val).isValid())
    .transform((val) => dayjs(val).toDate()),
});

export const WatchRecordsSchema = z.array(WatchRecordSchema);

export type WatchRecordResponse = z.input<typeof WatchRecordSchema>;
export type WatchRecord = z.infer<typeof WatchRecordSchema>;

export const WatchRecordCreateSchema = z.object({
  title: z.string().min(1).max(50),
  watchedOn: z
    .string()
    .refine((val) => val === "" || dayjs(val).isValid())
    .transform((val) => (val === "" ? null : new Date(val))),
  rating: z.number().min(0).max(10),
  memo: z.string().max(500),
});

export type WatchRecordCreate = z.infer<typeof WatchRecordCreateSchema>;
