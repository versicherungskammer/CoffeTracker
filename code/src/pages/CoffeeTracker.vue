<template>
  <!-- <div>
    <h1>Coffee Tracker</h1>
  </div> -->
  <q-page class="flex flex-center">
      <div class="container">
        <img
          alt="Coffee Small Logo"
          src="~assets/CoffeeSmall-neu.png"
          style="width: 60px; height: 120px"
          @click="percentageOf()"
        />
      </div>
      <div class="container">
        <img
          alt="Coffee Medium Logo"
          src="~assets/CoffeeMedium-neu.png"
          style="width: 80px; height: 160px"
          @click="coffeeSelected(1)"
        />
      </div>
      <div class="container">
        <img
          alt="Coffee Large Logo"
          src="~assets/CoffeeLarge.svg"
          style="width: 100px; height: 200px"
          @click="coffeeSelected(2)"
        />
     </div>
  </q-page>
</template>

<style></style>
<script setup>
import {incrementStatistic} from "src/services/updateStatistics.js";
import {percentageOf} from  'src/services/convertLiters'

const coffeeSelected = (input) => {
  incrementStatistic(input);
}


</script>
