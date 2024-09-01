import prisma from "../../src/prismaClient";
import PostSeeder from "./PostSeeder";
import UserSeeder from "./UserSeeder";

async function main() {
  try {
    const usersId = await UserSeeder();

    await PostSeeder(usersId);
  } catch (err) {
    console.log("Error in seeding: ", err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
