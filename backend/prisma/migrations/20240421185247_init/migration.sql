-- DropForeignKey
ALTER TABLE "VideoCategory" DROP CONSTRAINT "VideoCategory_category_id_fkey";

-- DropForeignKey
ALTER TABLE "VideoCategory" DROP CONSTRAINT "VideoCategory_video_id_fkey";

-- AddForeignKey
ALTER TABLE "VideoCategory" ADD CONSTRAINT "VideoCategory_video_id_fkey" FOREIGN KEY ("video_id") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCategory" ADD CONSTRAINT "VideoCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
