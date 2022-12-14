<template>
  <div class="background">
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-brown-9">
        <q-btn class="menuButton"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="title">
          <div>CoffeeTracker</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Items </q-item-label>
        <div v-for="link in linksList" :key="link.title" v-bind="link">
          <q-item clickable @click="goTo(link.link), toggleLeftDrawer()">
            <q-item-section v-if="link.icon" avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.title }}</q-item-label>
              <q-item-label caption>{{ link.caption }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goTo = (link) => {
  router.push({ path: link });
};

const linksList = [
  {
    title: "Coffee Tracker",
    caption: "",
    icon: "local_cafe",
    link: "coffee",
  },
  {
    title: "Statistik",
    caption: "",
    icon: "local_cafe",
    link: "statistik",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

</script>
