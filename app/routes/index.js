import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch("http://universities.hipolabs.com/search");
    const results = await response.json();

    // Group by country
    let groupedData = results.reduce(
      function(output, item) {
        let key = item.country;
        output[key] = output[key] || [];
        output[key].push( { name: item.name, website: item.web_pages[0] } );

        return output;
      },
      {} // Initial value of 'output'
    );

    // Convert to array of pairs and sort by number of universities
    return Object.keys(groupedData).map(key => { return { country: key, universities: groupedData[key] }; })
      .sort(function(a, b) { return b.universities.length - a.universities.length });
  }
}
