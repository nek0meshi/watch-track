.PHONY: db/migrate
db/migrate:
	npx prisma migrate dev --name ${name}

.PHONY: db/migrate/reset
db/migrate/reset:
	npx prisma migrate reset

.PHONY: db/seed
db/seed:
	npx tsx prisma/seed.ts
