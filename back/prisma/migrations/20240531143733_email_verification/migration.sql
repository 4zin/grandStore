-- AlterTable
ALTER TABLE "User" ADD COLUMN     "confirmationToken" TEXT,
ADD COLUMN     "emailConfirmed" BOOLEAN NOT NULL DEFAULT false;
