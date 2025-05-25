"use client";

import { useWatchRecords } from "@/hooks/queries/useWatchRecords";

export default function WatchRecords() {
  const { data } = useWatchRecords();

  return (
    <div>
      {data?.map((watchRecord) => (
        <div key={watchRecord.id}>{watchRecord.title}</div>
      ))}
    </div>
  );
}
