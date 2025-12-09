const infoBtn = document.getElementById("load-info-btn");
const healthBtn = document.getElementById("health-btn");
const infoOutput = document.getElementById("info-output");
const healthOutput = document.getElementById("health-output");

infoBtn.addEventListener("click", async () => {
  infoOutput.textContent = "Loading...";
  try {
    const res = await fetch("/api/info");
    const data = await res.json();
    infoOutput.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    infoOutput.textContent = "Error fetching /api/info\n" + err.message;
  }
});

healthBtn.addEventListener("click", async () => {
  healthOutput.textContent = "Checking...";
  try {
    const res = await fetch("/healthz");
    const data = await res.json();
    healthOutput.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    healthOutput.textContent = "Error fetching /healthz\n" + err.message;
  }
});
