<script>
  import { addRunActivity } from "../api/runActivity";
  let title;
  let date;
  let time;
  let distance;
  let hourDuration;
  let minuteDuration;
  let secondDuration;
  let avgHR;
  let avgPace; // TODO pace is a timespan as well
  let notes;

  async function handleSubmit(evt) {
    const response = await addRunActivity({
      // TODO ensure right thing is passed in if nothing entered in form
      userId: "d30e52b0-304c-4aa1-3c68-08d888b124c0",
      date: `${date}T${time}`, // TODO timezone
      title,
      distanceMile: distance,
      // duration: `${hourDuration}:${minuteDuration}:${secondDuration}`,
      averageHr: avgHR,
      // averagePace: avgPace,
      notes,
    });
    console.log(response);
  }
</script>

<style>
  form {
    border: 1px grey solid;
    padding: 1rem;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .full-width {
    grid-column: 1 / span 2;
    width: 100%;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="full-width">
    <label for="titleInput">Give your run a title:</label>
    <input type="text" bind:value={title} required />
  </div>

  <div>
    <label for="dateInput">Date *:</label>
    <input type="date" id="dateInput" bind:value={date} required />
  </div>

  <div>
    <label for="timeInput">Time *:</label>
    <input type="time" id="timeInput" bind:value={time} required />
  </div>

  <div>
    <label for="distanceInput">Distance (miles) *:</label>
    <input type="number" id="distanceInput" bind:value={distance} />
  </div>

  <div>
    <label for="durationHourInput">Duration:</label>
    <input type="number" id="durationHourInput" bind:value={hourDuration} />
    <input type="number" id="durationMinuteInput" bind:value={minuteDuration} />
    <input type="number" id="durationSecondInput" bind:value={secondDuration} />
  </div>

  <div>
    <label for="hrInput">Avg HR:</label>
    <input type="number" id="hrInput" bind:value={avgHR} />
  </div>

  <div>
    <label for="paceInput">Avg pace (min mile):</label>
    <input type="number" id="paceInput" bind:value={avgPace} />
  </div>

  <div>
    <label for="notesInput">Notes:</label>
    <textarea id="notesInput" bind:value={notes} />
  </div>

  <button type="submit">Submit</button>
</form>
