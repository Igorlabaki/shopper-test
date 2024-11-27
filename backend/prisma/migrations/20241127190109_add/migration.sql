/*
  Warnings:

  - You are about to drop the column `destinationLat` on the `Ride` table. All the data in the column will be lost.
  - You are about to drop the column `destinationLong` on the `Ride` table. All the data in the column will be lost.
  - You are about to drop the column `originLat` on the `Ride` table. All the data in the column will be lost.
  - You are about to drop the column `originLong` on the `Ride` table. All the data in the column will be lost.
  - Added the required column `destination` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distance` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ride" DROP COLUMN "destinationLat",
DROP COLUMN "destinationLong",
DROP COLUMN "originLat",
DROP COLUMN "originLong",
ADD COLUMN     "destination" TEXT NOT NULL,
ADD COLUMN     "distance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "origin" TEXT NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;
