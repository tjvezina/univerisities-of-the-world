import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const GRAPH_COUNTS = [5, 20, 40];

export default class BarGraph extends Component {
  @tracked graphCount = GRAPH_COUNTS[0];

  @action setCount(count) { this.graphCount = count; }
  
  get graphCountList() { return GRAPH_COUNTS; }

  get data() {
    const topCountries = this.args.data.slice(0, this.graphCount);

    return {
      labels: topCountries.map(x => x.country),
      datasets: [
        {
          label: 'Universities',
          backgroundColor: 'rgba(60, 120, 220, 1)',
          data: topCountries.map(x => x.universities.length)
        }
      ]
    };
  }

  get options() {
    return {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  }
}
