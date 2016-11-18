select * FROM Vehicles
JOIN Users
ON Vehicles.ownerId = Users.id
WHERE Users.FirstName like $1;
