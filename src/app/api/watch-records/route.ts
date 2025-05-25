import type { WatchRecord } from "@/app/schema/watch-record";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export async function GET() {
  const watchRecords: WatchRecord[] = [
    {
      id: "1",
      title: "銀河鉄道の夜",
      watchedOn: dayjs("2021-01-01").toDate(),
      rating: 10,
      memo: "作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。",
      createdAt: dayjs("2021-01-01").toISOString(),
      updatedAt: dayjs("2021-01-01").toISOString(),
    },
    {
      id: "2",
      title: "注文の多い料理店",
      watchedOn: dayjs("2021-01-02").toDate(),
      rating: 7,
      memo: "作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。",
      createdAt: dayjs("2021-01-02").toISOString(),
      updatedAt: dayjs("2021-01-02").toISOString(),
    },
    {
      id: "3",
      title: "ハムスターのおやつ",
      watchedOn: dayjs("2021-01-03").toDate(),
      rating: 5,
      memo: "作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。",
      createdAt: dayjs("2021-01-03").toISOString(),
      updatedAt: dayjs("2021-01-03").toISOString(),
    },
    {
      id: "4",
      title: "ハムスターのおやつ",
      watchedOn: dayjs("2021-01-04").toDate(),
      rating: 5,
      memo: "作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。",
      createdAt: dayjs("2021-01-04").toISOString(),
      updatedAt: dayjs("2021-01-04").toISOString(),
    },
  ];

  return NextResponse.json<WatchRecord[]>(watchRecords);
}
