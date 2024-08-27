CREATE TABLE "phim" (
	"id" VARCHAR,
	"name_flim" VARCHAR,
	"slug" VARCHAR,
	"original_name" VARCHAR,
	"thumb_url" VARCHAR,
	"poster_url" VARCHAR,
	"new_episode" INTEGER,
	"status" BOOLEAN,
	PRIMARY KEY("id")
);


CREATE TABLE "chitietphim" (
	"phim_id" VARCHAR,
	"created" TIMESTAMP,
	"modified" TIMESTAMP,
	"description" TEXT,
	"total_episodes" INTEGER,
	"language" VARCHAR,
	"quality" VARCHAR,
	"director_id" VARCHAR unique,
	"category_id" VARCHAR unique,
	"cast_id" VARCHAR unique,
	PRIMARY KEY("phim_id")
);


CREATE TABLE "dienvien" (
	"id" VARCHAR,
	"casts" VARCHAR,
	PRIMARY KEY("id")
);


CREATE TABLE "nhasanxuat" (
	"id" VARCHAR,
	"directors" VARCHAR,
	PRIMARY KEY("id")
);


CREATE TABLE "tapphim" (
	"id" SERIAL,
	"phim_id" VARCHAR,
	"server_name" VARCHAR,
	"episode" INTEGER,
	"slug" VARCHAR,
	"embed" VARCHAR,
	"m3u8" VARCHAR,
	PRIMARY KEY("id")
);


ALTER TABLE "chitietphim"
ADD FOREIGN KEY("phim_id") REFERENCES "phim"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE "dienvien"
ADD FOREIGN KEY("id") REFERENCES "chitietphim"("cast_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE "nhasanxuat"
ADD FOREIGN KEY("id") REFERENCES "chitietphim"("director_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE "tapphim"
ADD FOREIGN KEY("phim_id") REFERENCES "chitietphim"("phim_id")
ON UPDATE NO ACTION ON DELETE NO ACTION;