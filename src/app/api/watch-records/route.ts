
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import type { WatchRecord } from "@/app/schema/watch-record";

export async function GET() {
  const watchRecords: WatchRecord[] = await prisma.watchRecord.findMany();

  return NextResponse.json<WatchRecord[]>(watchRecords);
}
