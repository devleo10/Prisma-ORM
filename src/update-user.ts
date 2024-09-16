import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.update({
        where: { id: 1 },
        data:{
            name:'Thomas Shelby'
        }
    })
}

main()