document.getElementById("stepByBx").addEventListener("click", function(event) {
    event.preventDefault();

    // Change Background Image
    document.getElementById("hero").style.background = "url('stepby1m.jpg') center/cover no-repeat";

    // Change Text
    document.getElementById("mainTitle").innerText = "STEP BY 1M";
    document.getElementById("subText").innerText = "스텝바이 원밀리언";

    // Change Button Style
    this.innerText = "Step By 1M";
});
