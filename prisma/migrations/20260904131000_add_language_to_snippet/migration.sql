-- Backfill existing snippets while adding the required column.
ALTER TABLE "Snippet"
ADD COLUMN "language" TEXT NOT NULL DEFAULT 'javascript';

ALTER TABLE "Snippet"
ALTER COLUMN "language" DROP DEFAULT;
