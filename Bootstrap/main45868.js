document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const sparkCount = 70;

  function createSpark() {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    spark.style.top = `${Math.random() * 100}vh`;
    spark.style.left = `${Math.random() * 100}vw`;

    container.appendChild(spark);
  }

  for (let i = 0; i < sparkCount; i++) {
    createSpark();
  }
});
