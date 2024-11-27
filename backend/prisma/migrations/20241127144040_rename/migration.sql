/*
  Warnings:

  - You are about to drop the column `userId` on the `Ride` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `custumerId` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_userId_fkey";

-- AlterTable
ALTER TABLE "Ride" DROP COLUMN "userId",
ADD COLUMN     "custumerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Custumer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Custumer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Custumer_name_key" ON "Custumer"("name");

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_custumerId_fkey" FOREIGN KEY ("custumerId") REFERENCES "Custumer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
