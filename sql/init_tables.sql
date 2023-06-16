-- Creation of product table
CREATE TABLE IF NOT EXISTS product (
  product_id INT NOT NULL,
  name varchar(250) NOT NULL,
  PRIMARY KEY (product_id)
);

INSERT  INTO product(product_id,name) VALUES (1,'Product 1'),(2,'Product 2'),(3,'Product 3');