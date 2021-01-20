import Component from '@glimmer/component';

export default class CountryListItem extends Component {
  get country() {
    return this.args.data.country;
  }

  get universityCount() {
    return this.args.data.universities.length;
  }
}
