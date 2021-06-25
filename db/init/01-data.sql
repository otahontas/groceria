\connect groceria-db

/* Create two dummy lists */
INSERT INTO public.grocery_list (name) VALUES
('Mökkireissulista'),
('Kämppislista');

/* Create some dummy items for lists */
INSERT INTO public.grocery_item (name, grocery_list_id) VALUES
('Kaljaa', 1),
('Viini', 1),
('Soijanakki', 1),
('Sipet', 1),
('Epic mature -juusto', 2),
('iKaffe', 2),
('Jubileum-kahvi', 2),
('Appelsiinimehu', 2);
