<template>
    <div>
      <h1>Statistik</h1>
    </div>
    
    <div class = "statisticsContainer">
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
          <q-td key="fillingAmount" :props="props">
            {{ props.row.fillingAmount }}
            <q-popup-edit v-model="props.row.fillingAmount" title="Passe Füllmenge an" buttons label-set="Speichern" label-cancel="Schließen" v-slot="scope">
              <q-input type="number" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="price" :props="props">
            {{ props.row.price }} €
            <q-popup-edit v-model="props.row.price" title="Passe Preis an" buttons label-set="Speichern" label-cancel="Schließen" v-slot="scope">
              <q-input type="number" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="additives" :props="props">
            <div class="text-pre-wrap">{{ props.row.additives }}</div>
            <q-popup-edit v-model="props.row.additives" title="Passe Zusätze an" buttons label-set="Speichern" label-cancel="Schließen" v-slot="scope">
              <q-input type="textarea" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="amount" :props="props">
            {{ props.row.amount }}
           
          </q-td>
          </q-tr>
      </template>
    </q-table>
  </div>
    </div>
</template>
  
<style></style>

<script>
  import { ref } from 'vue'
  import meineKlasse from 'src/services/updateStatistics'

const columns = [
  { 
    name: 'name',
    required: true,
    label: 'Kaffeetyp',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'fillingAmount', align: 'center', label: 'Menge (ml)', field: 'fillingAmount', sortable: true },
  { name: 'price', label: 'Preis (€)', field: 'fat', sortable: true, style: 'width: 10px' },
  { name: 'additives', label: 'Zucker/Milch', field: 'additives' },
  { name: 'amount', label: 'Stück', field: 'amount' }
]


const rows = [
{
    id : '0',
    name: 'Espresso',
    fillingAmount: 30,
    price: 1,
    additives: '', 
    amount: 4
    
  },
  {
    id : '1',
    name: 'Haferl Kaffee',
    fillingAmount: 250,
    price: 2,
    additives: 'Zucker', 
    amount: 2 
  },
  {
    id : '2',
    name: 'Großer Cappuchino',
    fillingAmount: 400,
    price: 3,
    additives: 'Zucker, Milch', 
    amount: 12 
  }
]

const updateNumbers = (inputId) => {
  objIndex = rows.findIndex((obj => obj.id == inputId ))
  rows[objIndex].amount += 1;
}

export default {
  setup () {
    return {
      columns,
      rows: ref(rows)
    }
  },
  updateNumbers


}
</script>