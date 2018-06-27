INSERT INTO products
    (Product_Name, Category, Picture, Description, Price, Buyer_ID, Seller_ID)
VALUES
    ('32MB iPhone8s', 'smartphone', '/assets/img/iphone8sblack.jpg', 'Black iphone, 32MB', 75.00, null, 1),
    ('64MB iPhone8s', 'smartphone', '/assets/img/iphone8sblack.jpg', 'Black iphone, 64MB', 85.00, null, 1),
    ('Nintendo Wii', 'gaming console', '/assets/img/nintendoWii.jpg', 'Nintendo Wii with two controllers', 100.00, null, 3),
    ('Lenovo375 Laptop', 'laptop', '/assets/img/lenovo375laptop.png', '16GB RAM, 1TB HD SSD, 2.1gHZ Intel processor', 548.00, null, 5),
    ('HP Pavillion 300', 'desktop', '/assets/img/hpdesktop.jpg', '32GB RAM, 2TB HD SSD, 2.5gHZ Intel processor, NIVIDIA Grapics, 18 inch HD montior. Brand new.', 1999.99, null, 4);


INSERT INTO buyer
    (Buyer_ID, First_name, Last_name, address, city, state, zip, phone, email)
VALUES
    (1, 'Bob', 'Jones', '2564 S. Everson St.', 'Denver', 'CO', 80204, '6557331444', 'bjones@email.com'),
    (2, 'Gina', 'Haskell', '333 E. 3rd St.', 'Dallas', 'TX', 75206, '7502459911', '12haskell@comcast.net'),
    (3, 'Amy', 'Evans', '404 Florissant St.', 'Chico', 'CA', 95928, '9074501499', 'a.evans@gmail.com'),
    (4, 'Kyle', 'Rudolph', '3445 S. Dana St.', 'Mesa', 'AZ', 85203, '4805551233', 'redrudolph@centurylink.net'),
    (5, 'Becca', 'Alley', '1455 S. Back St.', 'Las Vegas', 'NV', 89103, '5754447566', 'beccaalley@meetmetheir.com');

INSERT INTO seller
    (Seller_ID, First_name, Last_name, address, city, state, zip, phone, email)
VALUES
    (1, 'Trent', 'Williams', '8888 S. Colorado Blvd', 'Denver', 'CO', 80205, '6547341433', 'trentwilliams@email.com'),
    (2, 'Bob', 'Kelter', '123 E. Cotton Dr.', 'Dallas', 'TX', 75205, '7502485511', 'KoolKelter@comcast.net'),
    (3, 'Katie', 'Demar', '500 Buffalo Ave', 'Durham', 'CA', 95928, '9074502000', 'katiedemar@gmail.com'),
    (4, 'Erica', 'Swan', '522 S. Farnsworth St.', 'Mesa', 'AZ', 85204, '4805551255', 'ericaswan@centurylink.net'),
    (5, 'Becca', 'Alley', '1455 S. Back St.', 'Las Vegas', 'NV', 89103, '5754447566', 'beccaalley@meetmetheir.com');