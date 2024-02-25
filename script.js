let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  window.location.href = `https://www.google.com/search?q=${
    document.getElementById("userInput").value
  }&oq=&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIRCAYQABgDGEIYjwEYtAIY6gIyDwgHEC4YAxiPARi0AhjqAtIBCTg1MDZqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8`;
});