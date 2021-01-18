<script context="module">
  import requests from '../data/request';
  export async function preload() {
    try {
      const usStats = await requests.usStats();
      return { usStats };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';
  import TableContainer from '../components/TableContainer.svelte';
  import Error from './_error.svelte';

  export let usStats;
</script>

<svelte:head>
  <title>Covid 19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid-19 US</h1>
  </div>
</div>

<CovidStat {...usStats} />

<CovidChart />

<TableContainer />
