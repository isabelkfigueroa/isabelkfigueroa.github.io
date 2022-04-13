document.addEventListener("DOMContentLoaded", () => {
  let currentSection = 0;
  const nextButton = document.getElementById("next-button");
  const backButton = document.getElementById("back-button");
  const sectionCount = document.
    getElementById("sections").
    getElementsByTagName("section").
    length;

  nextButton.addEventListener("click", function() {
    document.getElementById(`section-${currentSection}`).hidden = true;
    currentSection += 1;

    if (currentSection > sectionCount - 1) {
      currentSection = 0;
    };

    document.getElementById(`section-${currentSection}`).hidden = false;
  });

  backButton.addEventListener("click", function() {
    document.getElementById(`section-${currentSection}`).hidden = true;
    currentSection -= 1;

    if (currentSection < 0) {
      currentSection = sectionCount - 1;
    };

    document.getElementById(`section-${currentSection}`).hidden = false;
  });
});
