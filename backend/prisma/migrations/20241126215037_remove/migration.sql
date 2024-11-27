/*
  Warnings:

  - You are about to drop the column `carId` on the `Driver` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Driver_carId_key";

-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "carId";
