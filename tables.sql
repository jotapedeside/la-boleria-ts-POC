CREATE TABLE "public.cakes" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"price" numeric NOT NULL,
	"image" varchar(255) NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
);


