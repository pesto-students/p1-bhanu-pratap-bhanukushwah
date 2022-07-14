-- Find the item that has minimum weight.
SELECT MIN(itemWeight) FROM items;

-- Find the different warehouses in “Indore”.
SELECT * FROM warehouses WHERE warehouseLocation IN (SELECT cityId FROM cities WHERE cityName = "Indore");

-- Find the details of items ordered by a customer “Bhanu”.
SELECT * FROM items WHERE itemId IN ( SELECT itemId FROM itemsorders WHERE orderId = (SELECT orderId FROM orders WHERE customerId =(SELECT customerId FROM customers WHERE customerName = "Bhanu")));

-- Find a Warehouse which has maximum stores.
SELECT * FROM warehouses WHERE warehouseId = ( SELECT warehouseId FROM (SELECT COUNT(warehouseId) storeCount, warehouseId FROM stores GROUP BY warehouseId) derivedTable WHERE storeCount = (SELECT MAX(storeCount) FROM (SELECT COUNT(warehouseId) storeCount, warehouseId FROM stores GROUP BY warehouseId) derivedTable1));

-- Find an item which is ordered for a minimum number of times.
SELECT * FROM items WHERE itemId IN (SELECT itemId FROM (SELECT COUNT(itemId) itemOrderCount, itemId FROM itemsorders GROUP BY itemId) derivedTable WHERE itemOrderCount = (SELECT MIN(itemOrderCount) FROM (SELECT COUNT(itemId) itemOrderCount, itemId FROM itemsorders GROUP BY itemId) derivedTable));

-- Find the detailed orders given by each customer.
SELECT customers.customerId, customers.customerName, customers.customerAddress, customers.customerCity, dt2.orderId, dt2.itemId, dt2.itemDescription, dt2.itemWeight, dt2.itemCost FROM customers LEFT JOIN (SELECT orders.orderId, orders.customerId, dt.itemId, dt.itemDescription, dt.itemWeight, dt.itemCost FROM orders INNER JOIN (SELECT itemsorders.orderId, items.itemId, itemDescription, itemWeight, itemCost FROM itemsorders LEFT JOIN items ON itemsorders.itemId = items.itemId) dt ON orders.orderId = dt.orderId) dt2 ON customers.customerId = dt2.customerId;