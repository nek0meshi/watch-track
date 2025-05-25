"use client";

import { Container } from "@/components/layout/Container";
import { useWatchRecords } from "@/hooks/queries/useWatchRecords";
import { WatchRecordBlock } from "./_components/WatchRecordBlock";
export default function WatchRecords() {
  const { data } = useWatchRecords();

  return (
    <Container>
      {data?.map((watchRecord) => (
        <WatchRecordBlock key={watchRecord.id} watchRecord={watchRecord} />
      ))}
    </Container>
  );
}
