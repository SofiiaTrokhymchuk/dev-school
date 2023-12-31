insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Forbes', 'Filberto', 'Toderini', 'ftoderini0@delicious.com', '2008-11-09');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Kurt', null, 'Earles', 'kearles1@purevolume.com', '2006-04-01');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Jo-anne', null, 'Chater', 'jchater2@mapy.cz', '2010-10-04');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Annadiane', null, 'Spinney', 'aspinney3@yellowbook.com', '2021-09-05');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Gerik', null, 'Hryncewicz', 'ghryncewicz4@samsung.com', '2007-09-08');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Wilie', 'Greggory', 'Jeenes', 'gjeenes5@mysql.com', '2018-06-05');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Beale', 'Errick', 'Whitta', 'ewhitta6@netvibes.com', '2007-03-08');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Gaby', null, 'D''Antoni', 'gdantoni7@senate.gov', '2022-11-08');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Katha', null, 'Elcomb', 'kelcomb8@goodreads.com', '2014-04-10');
insert into "Customer" ("firstName", "middleName", "lastName", "email", "birthdate") values ('Reed', 'Rem', 'Cumbridge', 'rcumbridge9@printfriendly.com', '2007-07-31');

insert into "Product" ("name", "category", "amount", "price") values ('Squash - Guords', 'Fruits', 23, 51.08);
insert into "Product" ("name", "category", "amount", "price") values ('Seedlings - Mix, Organic', 'Seafood', 50, 59.57);
insert into "Product" ("name", "category", "amount", "price") values ('Shrimp - Prawn', 'Baking', 25, 69.84);
insert into "Product" ("name", "category", "amount", "price") values ('Container - Clear 16 Oz', 'Seafood', 88, 71.48);
insert into "Product" ("name", "category", "amount", "price") values ('Shrimp - Black Tiger 8 - 12', 'Meat', 96, 94.82);
insert into "Product" ("name", "category", "amount", "price") values ('Red Snapper - Fresh, Whole', 'Drinks', 9, 34.04);
insert into "Product" ("name", "category", "amount", "price") values ('Nestea - Iced Tea', 'Condiments', 25, 77.89);
insert into "Product" ("name", "category", "amount", "price") values ('Thyme - Fresh', 'Drinks', 99, 81.07);
insert into "Product" ("name", "category", "amount", "price") values ('Cookies Almond Hazelnut', 'Baking', 27, 38.05);
insert into "Product" ("name", "category", "amount", "price") values ('Beef - Ox Tail, Frozen', 'Snaks', 1, 53.65);

insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Brear', 'Sewall', null, 'Warehouse Worker');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Haleigh', 'Tafani', 'Fredrick', 'Customer Service Representative');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('David', 'Rasher', 'Arturo', 'Customer Service Representative');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Pierre', 'Thwaites', null, 'Stock Clerk');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Monro', 'Khrishtafovich', null, 'Cashier');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Lorry', 'Maria', 'Brandyn', 'Cashier');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Harwell', 'Valenti', 'Aldric', 'Manager');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Leah', 'Lindback', null, 'Warehouse Worker');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Erick', 'Cummings', null, 'Warehouse Worker');
insert into "Employee" ("firstName", "lastName", "middleName", "position") values ('Legra', 'Carcass', null, 'Cashier');

insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (7, 9, '61961 Jackson Place', 53.84);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (6, 5, '372 Jackson Hill', 82.86);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (3, 10, '260 Reinke Parkway', 98.33);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (6, 3, '6 Debra Lane', 96.26);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (8, 10, '669 Upham Parkway', 3.77);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (9, 4, '6 Delaware Terrace', 40.45);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (2, 4, '43 Bellgrove Hill', 30.83);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (7, 8, '9060 Bayside Lane', 54.27);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (6, 5, '4018 Derek Alley', 8.29);
insert into "Order" ("employeeId", "customerId", "address", "deliveryCost") values (9, 7, '88515 Mifflin Circle', 52.61);

insert into "ProductsInOrders" ("orderId", "productId", "amount") values (1, 2, 56.67);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (1, 7, 2.32);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (6, 5, 51.82);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (4, 9, 29.69);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (4, 5, 44.98);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (4, 6, 45.26);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (8, 6, 42.11);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (8, 7, 14.07);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (4, 10, 62.19);
insert into "ProductsInOrders" ("orderId", "productId", "amount") values (3, 2, 55.6);