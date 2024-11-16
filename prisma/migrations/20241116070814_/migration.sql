/*
  Warnings:

  - Made the column `content` on table `sys_posts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `sys_posts` MODIFY `content` TEXT NOT NULL;
