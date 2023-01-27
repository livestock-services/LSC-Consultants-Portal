<template>
  <div>
      <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />

<div class="mt-2">
    <h6>Filter by date</h6>
</div>
<div class="columns mt-4">
            
           <div  class="column is-one-quarter">
                
            <b-field label="Start Date">
            <b-datepicker
            
                placeholder="Click to select..."
                v-model="milkingStartDate"
                >
            </b-datepicker>
          </b-field>

           
           </div>

            <div  class="column is-one-quarter">
                
            <b-field label="End Date">
            <b-datepicker
            
                placeholder="Click to select..."
                v-model="milkingEndDate"
                >
            </b-datepicker>
          </b-field>

          </div>

         </div>

         

  </div>

</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'Jan', 'Feb', 'Mar','Apr', 'May','Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec' ],
        datasets: [ { data: [4709, 200, 1200,4000, 200, 1200, 1340, 2220, 512, 300, 590, 4000] } ]
      },
      chartOptions: {
          
        responsive: true
      }
    }
  }
}
</script>