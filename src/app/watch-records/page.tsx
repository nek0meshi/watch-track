"use client";

import Container from "@/components/layout/Container";
import FixedFooter from "@/components/layout/FixedFooter";
import { useWatchRecords } from "@/hooks/queries/useWatchRecords";
import Link from "next/link";
import { WatchRecordBlock } from "./_components/WatchRecordBlock";

export default function WatchRecords() {
  const { data } = useWatchRecords();

  console.log({ data });

  return (
    <Container>
      {data?.map((watchRecord) => (
        <WatchRecordBlock key={watchRecord.id} watchRecord={watchRecord} />
      ))}
      <FixedFooter>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          <Link href="/watch-records/new">新規作成</Link>
        </button>
      </FixedFooter>
    </Container>
  );
}
