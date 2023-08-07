-- CreateTable
CREATE TABLE "candidates" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ai_generated_persona" JSONB,
    "manually_created_persona" JSONB,
    "file_upload_id" TEXT,
    "team_id" TEXT NOT NULL,

    CONSTRAINT "candidates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "candidates_file_upload_id_key" ON "candidates"("file_upload_id");

-- AddForeignKey
ALTER TABLE "candidates" ADD CONSTRAINT "candidates_file_upload_id_fkey" FOREIGN KEY ("file_upload_id") REFERENCES "file_uploads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidates" ADD CONSTRAINT "candidates_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
