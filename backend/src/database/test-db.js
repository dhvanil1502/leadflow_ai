import prisma from "./db.js";

async function main() {
const result = await prisma.$queryRaw`SELECT current_database()`;

console.log("Database connection successful!");
console.log("Connected database:", result);
}

main()
.catch((error) => {
console.error("Database connection failed:", error);
process.exitCode = 1;
})
.finally(async () => {
await prisma.$disconnect();
});
