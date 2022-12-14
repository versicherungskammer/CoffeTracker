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
        <div v-for="link in menuList" :key="link.title" v-bind="link">
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
import { useQuasar } from 'quasar'
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goTo = (link) => {
  router.push({ path: link });
};
const $q = useQuasar();
const menuList = [
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
  if($q.platform.is.mobile){
      console.log('mobile')
      menuList.push(
      {
      title: "install on your Homescreen",
        caption: "insallation on Your device",
        icon: "test",
        link: "/installation",
      }
      )
       if($q.platform.within.__installed){
        console.log('App is installed')
       }
     }


const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

</script>
