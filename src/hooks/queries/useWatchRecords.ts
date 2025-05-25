import { api } from "@/api/client";
import { queryKeys } from "@/api/queryKeys";
import type { WatchRecord } from "@/app/schema/watch-record";
import { useQuery } from "@tanstack/react-query";

export function useWatchRecords() {
  return useQuery<WatchRecord[]>({
    queryKey: [queryKeys.watchRecords],
    queryFn: () => api("/api/watch-records"),
  });
}
