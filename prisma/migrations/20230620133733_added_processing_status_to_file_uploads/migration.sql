/*
  Warnings:

  - Added the required column `processing_status` to the `file_uploads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "file_uploads" ADD COLUMN     "processing_status" TEXT NOT NULL;
