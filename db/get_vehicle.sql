SELECT * FROM Vehicles
-- JOIN User u
-- on v.ownerid = u.id
WHERE ownerId = $1;
