\connect groceria-db;

/* Create extensions */
CREATE EXTENSION pgcrypto;

/* Create grocrey list table in public schema */
CREATE TABLE public.grocery_list(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

COMMENT ON TABLE public.grocery_list IS 
'Grocery lists.';
COMMENT ON COLUMN public.grocery_list.id IS '@omit create,update
The primary unique identifier for the grocery list';
COMMENT ON COLUMN public.grocery_list.name IS 
'The name of the grocery list';
COMMENT ON COLUMN public.grocery_list.created_date IS '@omit create,update
Time when grocery list was originally created';

/* Create grocery item table in public schema */
CREATE TABLE public.grocery_item (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    is_complete BOOLEAN DEFAULT FALSE NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    grocery_list_id INTEGER NOT NULL REFERENCES public.grocery_list(id)
);

COMMENT ON TABLE public.grocery_item IS
'Grocery items for grocery lists.';
COMMENT ON COLUMN public.grocery_item.id IS '@omit create,update
The primary unique identifier for the grocery item';
COMMENT ON COLUMN public.grocery_item.name IS 
'The name of the grocery item';
COMMENT ON COLUMN public.grocery_item.is_complete IS '@omit create 
The status implicating whether grocery item is active or not';
COMMENT ON COLUMN public.grocery_item.created_date IS '@omit create,update
Time when grocery item was originally created';
COMMENT ON COLUMN public.grocery_item.grocery_list_id IS '@omit update
Id of the grocery list the grocery item belongs to';
