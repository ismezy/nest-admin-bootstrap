-- CreateTable
CREATE TABLE "Dictionary" (
    "id" SERIAL NOT NULL,
    "group" VARCHAR(64) NOT NULL,
    "code" VARCHAR(64) NOT NULL,
    "caption" VARCHAR(255) NOT NULL,
    "orderNumber" INTEGER NOT NULL,

    CONSTRAINT "Dictionary_pkey" PRIMARY KEY ("id")
);
