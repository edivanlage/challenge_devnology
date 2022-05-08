/*
  Warnings:

  - You are about to drop the column `marca` on the `computers` table. All the data in the column will be lost.
  - Added the required column `brand` to the `computers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "computers" DROP COLUMN "marca",
ADD COLUMN     "brand" TEXT NOT NULL;
