"use client";

import type { WatchRecord } from "@/app/schema/watch-record";
import Container from "@/components/layout/Container";
import FixedFooter from "@/components/layout/FixedFooter";
import PageTitle from "@/components/typography/PageTitle";
import AppButton from "@/components/ui/buttons/AppButton";
import { useWatchRecords } from "@/hooks/queries/useWatchRecords";
import Link from "next/link";
import { useMemo, useState } from "react";
import { WatchRecordBlock } from "./_components/WatchRecordBlock";
import WatchRecordDetailModal from "./_components/WatchRecordDetailModal";
export default function WatchRecords() {
  const { data } = useWatchRecords();
  const [showDetailWatchRecord, setShowDetailWatchRecord] =
    useState<WatchRecord | null>(null);
  const isOpenDetailModal = useMemo(
    () => showDetailWatchRecord !== null,
    [showDetailWatchRecord],
  );

  return (
    <Container>
      <WatchRecordDetailModal
        isOpen={isOpenDetailModal}
        onClose={() => setShowDetailWatchRecord(null)}
        watchRecord={showDetailWatchRecord}
      />
      <PageTitle>鑑賞ログ一覧</PageTitle>
      {data?.map((watchRecord) => (
        <WatchRecordBlock
          key={watchRecord.id}
          watchRecord={watchRecord}
          onClickDetail={() => {
            setShowDetailWatchRecord(watchRecord);
          }}
        />
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
