/*
  Warnings:

  - Changed the type of `tax` on the `Driver` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "tax",
ADD COLUMN     "tax" INTEGER NOT NULL;
