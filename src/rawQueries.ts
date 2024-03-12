import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQueries = async () => {
//   const user = await prisma.$queryRaw`SELECT * FROM "users" `;
//   console.log(user);

// delete all and everything (forcefully with related all data)
await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`
};
rawQueries();
