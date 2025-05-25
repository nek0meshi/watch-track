import { api } from "@/api/client";
import { queryKeys } from "@/api/queryKeys";
import {
  type WatchRecord,
  type WatchRecordResponse,
  WatchRecordSchema,
  WatchRecordsSchema,
} from "@/app/schema/watch-record";
import { useQuery } from "@tanstack/react-query";

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
