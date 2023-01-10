<script>
import {Line} from 'vue-chartjs'
export default {
extends:Line,
props:["chartData","options" ],

mounted(){
    renderChart(this.chartData, this.options)
}
}
</script>