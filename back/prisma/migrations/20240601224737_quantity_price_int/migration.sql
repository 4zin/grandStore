/*
  Warnings:

  - Added the required column `quantity` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `price` on the `Products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "quantity" INTEGER NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;
