-- CITIES
CREATE TABLE cities (
  cityId    INTEGER NOT NULL PRIMARY KEY,
  cityName  CHAR(20) NOT NULL,
  cityState CHAR(20) NOT NULL
);

-- DESC cities;

INSERT INTO cities(cityId, cityName, cityState) VALUES(1, 'Indore', 'Madhya Pradesh');
INSERT INTO cities(cityId, cityName, cityState) VALUES(2, 'Mumbai', 'Maharashtra');
INSERT INTO cities(cityId, cityName, cityState) VALUES(3, 'Jaipur', 'Rajasthan');
INSERT INTO cities(cityId, cityName, cityState) VALUES(4, 'Deharadun', 'Uttrakhand');

-- WAREHOUSES 
CREATE TABLE warehouses (
  warehouseId       INTEGER NOT NULL PRIMARY KEY,
  warehouseName     CHAR(30) NOT NULL,
  warehouseLocation INTEGER,
  FOREIGN KEY (warehouseLocation) REFERENCES cities(cityId)
);

-- DESC warehouses;

INSERT INTO warehouses(warehouseId, warehouseName, warehouseLocation) VALUES (1, 'Amazon', 1);
INSERT INTO warehouses(warehouseId, warehouseName, warehouseLocation) VALUES (2, 'Flipkart', 2);
INSERT INTO warehouses(warehouseId, warehouseName, warehouseLocation) VALUES (3, 'Amazon', 3);
INSERT INTO warehouses(warehouseId, warehouseName, warehouseLocation) VALUES (4, 'Myntra', 4);

-- STORES
CREATE TABLE stores (
  storeId       INTEGER NOT NULL PRIMARY KEY,
  storeName     CHAR(20) NOT NULL,
  storeLocation INTEGER,
  warehouseId   INTEGER,
  FOREIGN KEY (storeLocation) REFERENCES cities(cityId),
  FOREIGN KEY (warehouseId) REFERENCES warehouses(warehouseId)
);

-- DESC stores;

INSERT INTO stores(storeId, storeName, storeLocation, warehouseId) VALUES (1, 'Krishna Store', 1, 1);
INSERT INTO stores(storeId, storeName, storeLocation, warehouseId) VALUES (2, 'Amazon Store', 2, 2);
INSERT INTO stores(storeId, storeName, storeLocation, warehouseId) VALUES (3, 'Tirupati Store', 3, 3);
INSERT INTO stores(storeId, storeName, storeLocation, warehouseId) VALUES (4, 'Effle Store', 4, 4);
INSERT INTO stores(storeId, storeName, storeLocation, warehouseId) VALUES (5, 'Yadav Store', 1, 1);

-- CUSTOMERS
CREATE TABLE customers (
  customerId      INTEGER NOT NULL PRIMARY KEY,
  customerName    CHAR(50) NOT NULL,
  customerAddress VARCHAR(50),
  customerCity    INTEGER,
  FOREIGN KEY (customerCity) REFERENCES cities(cityId)
);

-- DESC customers;

INSERT INTO customers(customerId, customerName, customerAddress, customerCity) VALUES (1, 'Bhanu', "480, Shri Krishna Enclave",  1);
INSERT INTO customers(customerId, customerName, customerAddress, customerCity) VALUES (2, 'Vinod', "46/7, Dharampuri",  3);
INSERT INTO customers(customerId, customerName, customerAddress, customerCity) VALUES (3, 'Amrik', "22-A, DLF",  2);
INSERT INTO customers(customerId, customerName, customerAddress, customerCity) VALUES (4, 'Mayuri', "31, Dream Homes",  4);
INSERT INTO customers(customerId, customerName, customerAddress, customerCity) VALUES (5, 'Rishabh', "141, Vinayak Residency",  2);
INSERT INTO customers(customerId, customerName, customerAddress, customerCity) VALUES (6, 'Devang', "48, Sanskriti",  1);
INSERT INTO customers(customerId, customerName, customerAddress, customerCity) VALUES (7, 'Apoorv', "10, Divya Vihar",  2);
INSERT INTO customers(customerId, customerName, customerAddress, customerCity) VALUES (8, 'Aryan', "42, Radha Krishna Bhavan",  4);

-- ITEMS
CREATE TABLE items (
  itemId          INTEGER NOT NULL PRIMARY KEY,
  itemDescription TEXT,
  itemWeight      DECIMAL(5,2) NOT NULL,
  itemCost        DECIMAL(5,2) NOT NULL
);

-- DESC items;

INSERT INTO items(itemId, itemDescription, itemWeight, itemCost) VALUES(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing', 22.5, 120);
INSERT INTO items(itemId, itemDescription, itemWeight, itemCost) VALUES(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing', 25.0, 140);
INSERT INTO items(itemId, itemDescription, itemWeight, itemCost) VALUES(3, 'Lorem ipsum dolor sit amet, consectetur adipiscing', 50, 220);
INSERT INTO items(itemId, itemDescription, itemWeight, itemCost) VALUES(4, 'Lorem ipsum dolor sit amet, consectetur adipiscing', 56, 300);

-- ORDERS
CREATE TABLE orders (
  orderId   INTEGER NOT NULL PRIMARY KEY,
  orderDate DATE NOT NULL,
  customerId INTEGER NOT NULL,
  FOREIGN KEY (customerId) REFERENCES customers(customerId)
);

-- DESC orders;

INSERT INTO orders(orderId, orderDate, customerId) VALUES (1, '2022-05-11', 1);
INSERT INTO orders(orderId, orderDate, customerId) VALUES (2, '2022-05-01', 2);
INSERT INTO orders(orderId, orderDate, customerId) VALUES (3, '2022-05-30', 3);
INSERT INTO orders(orderId, orderDate, customerId) VALUES (4, '2022-06-24', 4);
INSERT INTO orders(orderId, orderDate, customerId) VALUES (5, '2022-06-12', 5);
INSERT INTO orders(orderId, orderDate, customerId) VALUES (6, '2022-07-11', 6);
INSERT INTO orders(orderId, orderDate, customerId) VALUES (7, '2022-07-17', 2);
INSERT INTO orders(orderId, orderDate, customerId) VALUES (8, '2022-07-24', 4);


-- ITEMSORDERS
CREATE TABLE itemsorders (
  ioId     INTEGER NOT NULL PRIMARY KEY,
  orderId  INTEGER NOT NULL,
  itemId   INTEGER NOT NULL,
  FOREIGN KEY (orderId) REFERENCES orders(orderId),
  FOREIGN KEY (itemId) REFERENCES items(itemId)
);

-- DESC itemsorders;

INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(1, 1, 3);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(2, 2, 3);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(3, 3, 2);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(4, 4, 1);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(5, 5, 1);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(6, 6, 4);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(7, 7, 2);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(8, 8, 4);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(9, 2, 2);
INSERT INTO itemsorders(ioId, orderId, itemId) VALUES(10, 1, 1);

-- STORESITEMS
CREATE TABLE storesitems (
  siId INTEGER NOT NULL PRIMARY KEY,
  storeId INTEGER NOT NULL,
  itemId INTEGER NOT NULL,
  FOREIGN KEY (storeId) REFERENCES stores(storeId),
  FOREIGN KEY (itemId) REFERENCES items(itemId)
);

-- DESC storesitems;

INSERT INTO storesitems(siId, storeId, itemId) VALUES (1, 1, 1);
INSERT INTO storesitems(siId, storeId, itemId) VALUES (2, 2, 2);
INSERT INTO storesitems(siId, storeId, itemId) VALUES (3, 3, 1);
INSERT INTO storesitems(siId, storeId, itemId) VALUES (4, 5, 3);
INSERT INTO storesitems(siId, storeId, itemId) VALUES (5, 4, 4);
INSERT INTO storesitems(siId, storeId, itemId) VALUES (6, 1, 1);
INSERT INTO storesitems(siId, storeId, itemId) VALUES (7, 5, 4);
INSERT INTO storesitems(siId, storeId, itemId) VALUES (8, 2, 2);