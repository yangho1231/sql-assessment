select Users.FirstName, Users.LastName, Vehicles.model, Vehicles.year, Vehicles.make FROM Vehicles
JOIN Users
ON Vehicles.ownerId = Users.id
WHERE Vehicles.year > 2000
ORDER BY Vehicles.year ASC
