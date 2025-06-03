.PHONY: db/migrate
db/migrate:
	npx prisma migrate dev --name ${name}

.PHONY: db/seed
db/seed:
	npx tsx prisma/seed.ts
