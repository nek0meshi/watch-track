import dayjs from "dayjs";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.watchRecord.deleteMany();

  for (let i = 0; i < 30; i++) {
    await prisma.watchRecord.create({
      data: {
        title: `銀河鉄道の夜${i}`,
        watchedOn: dayjs("2021-01-01").add(i, "day").toDate(),
        rating: Math.floor(Math.random() * 10) + 1,
        memo: "作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。作品の感想です。",
        createdAt: dayjs("2021-01-01").toDate(),
        updatedAt: dayjs("2021-01-01").toDate(),
      },
    });
  }
}

main()
  .then(() => {
    console.log("Seed completed");
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    prisma.$disconnect();
  });
