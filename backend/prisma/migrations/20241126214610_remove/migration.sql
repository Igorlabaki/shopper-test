/*
  Warnings:

  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `car` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_carId_fkey";

-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "car" TEXT NOT NULL;

-- DropTable
DROP TABLE "Car";
