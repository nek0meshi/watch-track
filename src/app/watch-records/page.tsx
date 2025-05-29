"use client";

import Container from "@/components/layout/Container";
import FixedFooter from "@/components/layout/FixedFooter";
import PageTitle from "@/components/typography/PageTitle";
import AppButton from "@/components/ui/buttons/AppButton";
import { useWatchRecords } from "@/hooks/queries/useWatchRecords";
import Link from "next/link";
import { WatchRecordBlock } from "./_components/WatchRecordBlock";

export default function WatchRecords() {
  const { data } = useWatchRecords();

  return (
    <Container>
      <PageTitle>鑑賞ログ一覧</PageTitle>
      {data?.map((watchRecord) => (
        <WatchRecordBlock key={watchRecord.id} watchRecord={watchRecord} />
      ))}
      <FixedFooter>
        <div className="flex flex-row items-center gap-2 justify-end justify-content-end">
          <AppButton>
            <Link href="/watch-records/new">新規作成</Link>
          </AppButton>
        </div>
      </FixedFooter>
    </Container>
  );
}
