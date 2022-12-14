<template>
<div class='q-px-xl q-py-md'>
{{"Version  a paar neue Features"}}
<q-btn @click="refreshApp()">refreshApp</q-btn>
    <div v-if="ios">
 Die App wird auf einem Iphone oder Tablet installiert, indem sie unten teilen anwählen und
"Zum Home Bildschirm" anwählen und auf "Hinzufügen" drücken.
<div v-if="showUpdateSplash">

<h2>Updating</h2>

</div>


</div>
<div v-if="andriod">
</div>
</div>
</template>
<script setup>
import { useQuasar } from 'quasar'
import { useRouter } from "vue-router";
import { getCurrentInstance, ref } from 'vue'
const $q = useQuasar();
const emit = defineEmits(['change', 'delete'])
const router = useRouter();
const props = defineProps([])
const ios = $q.platform.is.ios
const andriod = $q.platform.is.android
const installed =window.matchMedia('(display-mode: standalone)').matches
const showUpdateSplash=ref(false)
const goto = (link) => {
      router.push({ path: "/vkLogo" });
    };
const refreshApp=async ()=>{
  showUpdateSplash.value=true

  //Löst ein löschen des Caches aus , nicht aber ein reload, da trotz await kein Warten erfolgt
  await window.location.reload(true)
  const instance = getCurrentInstance();
  console.log('-----Begin ----- > instance')
  console.log(instance)
  console.log('-----Ende ----- > instance')
  window.close()

  showUpdateSplash.value=false
  instance?.proxy?.$forceUpdate();

  goto("/");

}
</script>
