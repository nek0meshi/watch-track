-- CreateTable
CREATE TABLE "WatchRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "watchedOn" DATETIME,
    "rating" INTEGER NOT NULL,
    "memo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
