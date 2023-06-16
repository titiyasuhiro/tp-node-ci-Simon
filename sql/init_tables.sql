-- Creation of product table
CREATE TABLE IF NOT EXISTS products (
  product_id INT NOT NULL,
  name varchar(250) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (product_id)
);

INSERT  INTO products(product_id,name) VALUES (1,'Product 1'),(2,'Product 2'),(3,'Product 3');