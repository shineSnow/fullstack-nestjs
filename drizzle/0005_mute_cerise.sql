CREATE TABLE IF NOT EXISTS "test_categories_books" (
	"book_id" integer,
	"category_id" integer,
	CONSTRAINT "test_categories_books_book_id_category_id_pk" PRIMARY KEY("book_id","category_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "test_categories_books" ADD CONSTRAINT "test_categories_books_book_id_test_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."test_books"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "test_categories_books" ADD CONSTRAINT "test_categories_books_category_id_test_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."test_categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
