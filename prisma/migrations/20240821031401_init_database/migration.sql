-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "image" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "comment" TEXT[],

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
