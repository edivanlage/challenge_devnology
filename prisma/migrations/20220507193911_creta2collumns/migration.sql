/*
  Warnings:

  - Added the required column `rate` to the `computers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviews` to the `computers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "computers" ADD COLUMN     "rate" INTEGER NOT NULL,
ADD COLUMN     "reviews" INTEGER NOT NULL;
