import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";


const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
throw new Error("DATABASE_URL is missing from the environment");
}

const adapter = new PrismaPg({
connectionString,
});

if(!adapter){
    throw new Error("problem with adapter generation")
}

const prisma = new PrismaClient({
adapter,
});

if(!prisma){
    throw new Error("problem with genration of prismaClient")
}

export default prisma;
