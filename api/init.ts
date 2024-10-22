import { Item, Sales } from "./schema";

export const initial_migration = async (knex) => {
  await knex.schema.createTable<item>('items', function (table) {
    table.increments('id');
    table.string('name');
    table.string('type');
    table.float('price');
    table.integer('quantity');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable<Sale>('sales', function (table) {
    table.increments('id');
    table.integer('item').unsigned();
    table.foreign('item').references('id').inTable('items');
    table.string('name');
    table.string('type');
    table.string('price');
    table.integer('quantity');
  });
};

