// /stores/useItemStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { useSupabase } from '../composables/useSupabase';


export const useHomepageStore = defineStore("homepage", () => {
  const client = useSupabase();
  const items = ref<any[]>([]);
  const item = ref<any | null>(null);
  const error = ref<string | null>(null);

  const ALLOWED_TABLES = ["homepage_sections", "homepage_items"];

  // fetch all record
  const fetchItems = async (table: string, onlyReturn = false) => {
    if (!ALLOWED_TABLES.includes(table)) {
      throw new Error(`Table '${table}' is not allowed.`);
    }
    error.value = null;
    const { data, error: err } = await client
      .from(table)
      .select("*")
      .order("id", { ascending: true });

    if (err) {
      error.value = err.message;
      return;
    }

    if (onlyReturn) {
      return data;
    }

    items.value = data || [];
  };

  // fetch a record
  const fetchItem = async (table: string, id: number, onlyReturn = false) => {
    if (!ALLOWED_TABLES.includes(table)) {
      throw new Error(`Table '${table}' is not allowed.`);
    }
    error.value = null;
    const { data, error: err } = await client
      .from(table)
      .select("*")
      .eq("id", id)
      .single();

    if (err) {
      error.value = err.message;
      return;
    }

    if (onlyReturn) {
      return data;
    }

    item.value = data;
  };

  return {
    items,
    item,
    error,
    fetchItems,
    fetchItem,
  };
});
