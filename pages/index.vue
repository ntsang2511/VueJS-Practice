<template>
  <DefaultLayout :section="[navBarSection, footerSection]">
    <div v-if="!pending && !error">
      <Hero :heroContent="heroSection" />
      <Services :servicesContent="servicesSection" />
      <Strategy :strategyContent="ProcessSection" />
      <WhyChooseUs :solutionsContent="solutionSection" />
      <Facts :teamContent="teamSection" />
      <Team :teamContent="teamSection" />
      <Projects :projectContent="projectsSection" />
      <Testimonials :testimonialsContent="testimonialsSection" />
      <FAQ :faqContent="clientsSection" />
    </div>
    <div v-else-if="pending" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else-if="error" class="text-center text-danger">
      <p>Error loading data: {{ error.message }}</p>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { computed } from "vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Hero from "../components/sections/Hero.vue";
import Services from "../components/sections/Services.vue";
import Strategy from "../components/sections/Strategy.vue";
import WhyChooseUs from "../components/sections/WhyChooseUs.vue";
import Facts from "../components/sections/Facts.vue";
import Team from "../components/sections/Team.vue";
import Projects from "../components/sections/Projects.vue";
import Testimonials from "../components/sections/Testimonials.vue";
import FAQ from "../components/sections/FAQ.vue";
import { useSupabaseClient } from "#imports";
import { useHomepageStore } from "../../stores/useItemStore";
import { useContentStore } from "../stores/content";
import { useHead } from "@vueuse/head";

const itemStore = useHomepageStore();
const contentStore = useContentStore();
const supabase = useSupabaseClient();

const { data, pending, error } = await useAsyncData("homepage_sections", async () => {
  try {
    const { data: fetchedData, error: fetchError } = await supabase
      .from("homepage_sections")
      .select("*")
      .order("order_index", { ascending: true });

    if (fetchError) {
      throw new Error(fetchError.message);
    }
    console.log("Fetched data:", fetchedData);
    return fetchedData || [];
  } catch (err) {
    console.error("Error fetching data:", err.message);
    throw err;
  }
});

const heroSection = computed(() => data.value?.find((item) => item.section_key === "hero") || {});
const navBarSection = computed(() => data.value?.find((item) => item.section_key === "navbar") || {});
const ProcessSection = computed(() => data.value?.find((item) => item.section_key === "process") || {});
const solutionSection = computed(() => data.value?.find((item) => item.section_key === "solutions") || {});
const testimonialsSection = computed(() => data.value?.find((item) => item.section_key === "testimonials") || {});
const footerSection = computed(() => data.value?.find((item) => item.section_key === "footer") || {});
const clientsSection = computed(() => data.value?.find((item) => item.section_key === "clients") || {});
const projectsSection = computed(() => data.value?.find((item) => item.section_key === "projects") || {});
const teamSection = computed(() => data.value?.find((item) => item.section_key === "team") || {});

itemStore.fetchItems();
contentStore.fetchStrategy();

useHead({
  title: "Home - Digital Agency",
  meta: [
    {
      name: "description",
      content: "Award-winning digital agency specializing in mobile design, web design, and 3D animation.",
    },
  ],
});
</script>