<script>
  import { getRunActivity } from "./api/runActivity";
  import { onMount } from "svelte";

  let activity;
  onMount(async () => {
    const res = await getRunActivity(1);
    activity = res;
  });
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <p>{activity && activity.title}</p>
</main>
