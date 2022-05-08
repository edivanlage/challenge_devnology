-- CreateTable
CREATE TABLE "computers" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "computers_pkey" PRIMARY KEY ("id")
);
