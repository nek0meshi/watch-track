import { api } from "@/api/client";
import { queryKeys } from "@/api/queryKeys";
import {
  type WatchRecord,
  type WatchRecordCreate,
  type WatchRecordResponse,
  WatchRecordSchema,
} from "@/app/schema/watch-record";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useWatchRecords() {
  return useQuery<WatchRecord[]>({
    queryKey: [queryKeys.watchRecords],
    // queryFn: () => api("/api/watch-records"),
    queryFn: () =>
      api<WatchRecordResponse[]>("/api/watch-records").then((items) =>
        items.map((item) => WatchRecordSchema.parse(item)),
      ),
  });
}

export function useCreateWatchRecord() {
  return useMutation({
    mutationFn: (watchRecord: WatchRecordCreate) =>
      api("/api/watch-records", {
        method: "POST",
        body: JSON.stringify(watchRecord),
      }),
  });
}
