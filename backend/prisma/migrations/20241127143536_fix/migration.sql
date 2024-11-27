/*
  Warnings:

  - You are about to drop the column `ratings` on the `Driver` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "ratings",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
