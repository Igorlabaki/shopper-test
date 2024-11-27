/*
  Warnings:

  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ratings` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_driverId_fkey";

-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "ratings" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Rating";
