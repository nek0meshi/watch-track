-- CreateTable
CREATE TABLE "WatchRecord" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "watchedOn" TIMESTAMP(3),
    "rating" INTEGER NOT NULL,
    "memo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WatchRecord_pkey" PRIMARY KEY ("id")
);
