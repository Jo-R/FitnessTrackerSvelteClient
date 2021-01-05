<script>
  import { addRunActivity } from "../api/runActivity";
  let title;
  let date;
  let time;
  let distance;
  let hourDuration = "00";
  let minuteDuration = "00";
  let secondDuration = "00";
  let avgHR;
  let avgPaceMin = "00";
  let avgPaceSec = "00";
  let notes = "";

  async function handleSubmit() {
    try {
      const dateTime = new Date(`${date}T${time}`);
      const response = await addRunActivity({
        userId: "d30e52b0-304c-4aa1-3c68-08d888b124c0", //TODO once have login remove hard coded
        date: dateTime,
        title,
        distanceMile: distance,
        duration: `${hourDuration}:${minuteDuration}:${secondDuration}`,
        averageHr: avgHR,
        averagePace: `00:${avgPaceMin}:${avgPaceSec}`,
        notes,
      });
      console.log(response); // TODO SUCCESS MESSAGE
    } catch {
      console.error("didn't add run"); // TODO FAIL MESSAGE
    }
  }
</script>

<style>
  form {
    border: 1px grey solid;
    padding: 1rem;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 50%;
    text-align: left;
  }

  .full-width {
    grid-column: 1 / span 2;
    width: 100%;
  }

  input,
  textarea {
    border: none;
    border-bottom: 2px solid lightblue;
  }

  .narrow {
    width: 20%;
  }

  button {
    background-color: lightblue;
    border-radius: 3px;
    align-self: center;
    justify-self: center;
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
    <input
      type="number"
      id="durationHourInput"
      bind:value={hourDuration}
      class="narrow" />
    <input
      type="number"
      id="durationMinuteInput"
      bind:value={minuteDuration}
      class="narrow" />
    <input
      type="number"
      id="durationSecondInput"
      bind:value={secondDuration}
      class="narrow" />
  </div>

  <div>
    <label for="hrInput">Avg HR:</label>
    <input type="number" id="hrInput" bind:value={avgHR} />
  </div>

  <div>
    <label for="paceInput">Avg pace (min mile):</label>
    <input
      type="number"
      id="paceMinuteInput"
      bind:value={avgPaceMin}
      class="narrow" />
    <input
      type="number"
      id="paceSecondInput"
      bind:value={avgPaceSec}
      class="narrow" />
  </div>

  <div>
    <label for="notesInput">Notes:</label>
    <textarea id="notesInput" bind:value={notes} />
  </div>

  <button type="submit">Submit</button>
</form>
