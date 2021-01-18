<script context="module">
  import states from '../data/states.js';

  export async function preload({ params }) {
    const state = params.state;
    if (!states.some((s) => s.abbreviation === state)) {
      this.error(404, 'State not found');
    }
    return { state };
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';

  export let state;
</script>

<svelte:head>
  <title>Covid-19 - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid-19 - {state}</h1>
  </div>
</div>
<h1>{state}</h1>

<CovidStat />
<CovidChart />
