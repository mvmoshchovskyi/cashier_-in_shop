CREATE TABLE cashier(
 id SERIAL PRIMARY KEY,
 name VARCHAR(255),
 age INTEGER,
 sex VARCHAR(255),
 surname VARCHAR(255),
 expirience INTEGER,
 previous_work VARCHAR(255),
 shop_id INTEGER,
 FOREIGN KEY (shop_id) REFERENCES shop (id)
);

CREATE TABLE shop(
 id SERIAL PRIMARY KEY,
 name VARCHAR(255),
 city VARCHAR(255),
 addres VARCHAR(255)
);

