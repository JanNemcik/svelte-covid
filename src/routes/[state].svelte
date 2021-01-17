<script context="module">
  export async function preload({ params }) {
    return { state: params.state };
  }
</script>

<script>
  import CovidChart from '../components/CovidChart.svelte';
  import CovidStat from '../components/CovidStat.svelte';

  export let state;
</script>

<h1>{state}</h1>

<CovidStat />
<CovidChart />
