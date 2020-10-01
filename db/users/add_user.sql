INSERT INTO game_site_users (name, paid)
VALUES (${name}, ${paid})
RETURNING *;