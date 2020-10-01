CREATE TABLE game_site_users (
  game_site_users_id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  paid BOOLEAN
);

INSERT INTO game_site_users (name, paid)
VALUES
  ('bob', false),
  ('margie', true),
  ('rover', true);