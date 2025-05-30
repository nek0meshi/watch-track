import type { WatchRecord, WatchRecordCreate } from "@/app/schema/watch-record";
import { WatchRecordCreateSchema } from "@/app/schema/watch-record";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const watchRecords: WatchRecord[] = await prisma.watchRecord.findMany({
    orderBy: [{ watchedOn: "desc" }, { createdAt: "desc" }],
  });

  return NextResponse.json<WatchRecord[]>(watchRecords);
}

export async function POST(request: Request) {
  const body = await request.json();
  const watchRecord = WatchRecordCreateSchema.safeParse(body);

  if (!watchRecord.success) {
    console.log(watchRecord.error.flatten().fieldErrors);

    return NextResponse.json(watchRecord.error.flatten().fieldErrors, {
      status: 400,
    });
  }

  const createdWatchRecord = await prisma.watchRecord.create({
    data: watchRecord.data,
  });

  return NextResponse.json<WatchRecord>(createdWatchRecord);
}
