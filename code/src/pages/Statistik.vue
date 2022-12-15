<template>
  <div>
    <h1>Statistik</h1>
  </div>

  <q-list bordered separator>
    <q-item clickable v-ripple v-for="value in percentageValues">
      Anteil von: {{ value.name }} {{ value.percentage }}
    </q-item>
  </q-list>
  <div class="statisticsContainer">
    <div class="q-pa-md">
      <q-table
        title="Kaffeestatistik"
        :rows="rows"
        :columns="columns"
        row-key="name"
        binary-state-sort
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.name }}
              <q-popup-edit v-model="props.row.name" v-slot="scope">
                <q-input v-model="scope.value" dense autofocus counter />
              </q-popup-edit>
            </q-td>
            <!-- <q-td key="fillingAmount" :props="props">
            {{ props.row.fillingAmount }}
            <q-popup-edit v-model="props.row.fillingAmount" title="Passe Füllmenge an" buttons label-set="Speichern" label-cancel="Schließen" v-slot="scope">
              <q-input type="number" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td> -->
            <!-- <q-td key="price" :props="props">
            {{ props.row.price }} €
            <q-popup-edit v-model="props.row.price" title="Passe Preis an" buttons label-set="Speichern" label-cancel="Schließen" v-slot="scope">
              <q-input type="number" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td> -->

            <!-- <q-td key="additives" :props="props">
            <div class="text-pre-wrap">{{ props.row.additives }}</div>
            <q-popup-edit v-model="props.row.additives" title="Passe Zusätze an" buttons label-set="Speichern" label-cancel="Schließen" v-slot="scope">
              <q-input type="textarea" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td> -->
            <q-td key="amount" :props="props">
              {{ props.row.amount }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>

  <div class="imgIcon">
    <div class="imgContainer" id="1"></div>
    <div class="imgContainer" id="2"></div>
    <div class="imgContainer" id="3"></div>
    <div class="imgContainer" id="4"></div>
  </div>

  <div>
    <img
      alt="Coffee Medium Logo"
      src="~assets/Geld.svg"
      style="width: 40px; height: 80px"
    />
  </div>
</template>

<style>
.imgContainer {
  width: 100%;
  height: 100%;
}
#1 {
  border: 1px solid #000;
  padding-bottom: 30%;
  height: 0;
  width: 30%;
  margin: 1%;
  float: left;
  display: block;
}

#2 {
  border: 1px solid #000;
  padding-bottom: 30%;
  height: 0;
  width: 30%;
  margin: 1%;
  float: left;
  display: block;
}

#3 {
  border: 1px solid #000;
  padding-bottom: 30%;
  height: 0;
  width: 30%;
  margin: 1%;
  float: left;
  display: block;
}

#4 {
  border: 1px solid #000;
  padding-bottom: 30%;
  height: 0;
  width: 30%;
  margin: 1%;
  float: left;
  display: block;
}

.imgIcon {
}
</style>

<script>
import { ref } from "vue";
import { calculateFullAmount } from "src/services/calculateCoffeeAmount";
import { percentageOf } from "src/services/convertLiters";
import { getEachPercentageOf } from "src/services/convertLiters";

const columns = [
  {
    name: "name",
    required: true,
    label: "Kaffeetyp",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  //{ name: 'fillingAmount', align: 'center', label: 'Menge (ml)', field: 'fillingAmount', sortable: true },
  //{ name: 'price', label: 'Preis (€)', field: 'fat', sortable: true, style: 'width: 10px' },
  //{ name: 'additives', label: 'Zucker/Milch', field: 'additives' },
  { name: "amount", label: "Stück", field: "amount" },
];

let percentageValues = [];

const rows = [
  {
    id: "0",
    name: "Espresso",
    fillingAmount: 30,
    price: 1,
    additives: "",
    amount: 4,
  },
  {
    id: "1",
    name: "Haferl Kaffee",
    fillingAmount: 250,
    price: 2,
    additives: "Zucker",
    amount: 2,
  },
  {
    id: "2",
    name: "Großer Cappuchino",
    fillingAmount: 400,
    price: 3,
    additives: "Zucker, Milch",
    amount: 12,
  },
];

export function getRows() {
  return rows;
}

export const updateNumbers = (inputId) => {
  let objIndex = rows.findIndex((obj) => obj.id == inputId);
  rows[objIndex].amount += 1;
};

export default {
  setup() {
    calculateFullAmount();
    return {
      columns,
      rows: ref(rows),
      percentageValues: percentageOf(),
    };
  },
  updateNumbers,
  getRows,
};
</script>
