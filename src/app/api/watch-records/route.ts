import type { WatchRecord } from "@/app/schema/watch-record";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export async function GET() {
  const watchRecords: WatchRecord[] = [
    {
      id: "1",
      title: "Watch Record 1",
      watchedOn: dayjs("2021-01-01").toDate(),
      rating: 10,
      memo: "Memo 1",
      createdAt: dayjs("2021-01-01").toISOString(),
      updatedAt: dayjs("2021-01-01").toISOString(),
    },
    {
      id: "2",
      title: "Watch Record 2",
      watchedOn: dayjs("2021-01-02").toDate(),
      rating: 7,
      memo: "Memo 2",
      createdAt: dayjs("2021-01-02").toISOString(),
      updatedAt: dayjs("2021-01-02").toISOString(),
    },
  ];

  return NextResponse.json<WatchRecord[]>(watchRecords);
}
