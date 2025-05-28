import type { WatchRecord } from "@/app/schema/watch-record";
import { range } from "@/utils/array";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export async function GET() {
  const watchRecords: WatchRecord[] = range(1, 30).map((i) => ({
    id: i.toString(),
    title: `銀河鉄道の夜${i}`,
    watchedOn: dayjs("2021-01-01").add(i, "day").toDate(),
    rating: 10,
    memo: "作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。",
    createdAt: dayjs("2021-01-01").toISOString(),
    updatedAt: dayjs("2021-01-01").toISOString(),
  }));

  return NextResponse.json<WatchRecord[]>(watchRecords);
}
