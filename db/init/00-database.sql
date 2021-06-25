\connect groceria-db;

/* Create extensions */
CREATE EXTENSION pgcrypto;

/* Create grocrey list table in public schema */
CREATE TABLE public.grocery_list(
    id SERIAL PRIMARY KEY,
    name TEXT,
    url UUID DEFAULT gen_random_uuid(),
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE public.grocery_list IS
'Grocery lists.';

/*Create grocery item table in public schema*/
CREATE TABLE public.grocery_item (
    id SERIAL PRIMARY KEY,
    name TEXT,
    is_complete BOOLEAN DEFAULT FALSE,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grocery_list_id INTEGER NOT NULL REFERENCES public.grocery_list(id)
);

COMMENT ON TABLE public.grocery_item IS
'Grocery items for lists.';
