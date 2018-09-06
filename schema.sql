DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE bamazon (
  item_id INT(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(5) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('Shamwow', 'Cleaners', 17.00, 800);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('Snuggie', 'Apparel', 19.00, 1500);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('Pocket Hose', 'Gardening', 15.00, 1000);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('OxiClean', 'Cleaners', 11.00, 2000);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('Miracle Blade', 'Kitchen', 25.00, 700);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('PedEgg', 'Self-care', 12.00, 500);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('Ove Glove', 'Kitchen', 11.00, 600);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('Wonder Hanger', 'Home', 10.00, 1600);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('Veggetti', 'Kitchen', 23.00, 900);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) values ('Scrub Daddy', 'Cleaners', 10.00, 1800);