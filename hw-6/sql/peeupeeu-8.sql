UPDATE city
SET city = 'Dnipro'
WHERE city = 'Hadiach'
RETURNING *;