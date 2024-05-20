/*
  Warnings:

  - Added the required column `comment_id` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whoFollowed` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "comment_id" TEXT NOT NULL,
ADD COLUMN     "whoFollowed" TEXT NOT NULL;
