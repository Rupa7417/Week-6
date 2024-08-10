document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("confirmBtn").addEventListener("click", function() {
    alert("Action Confirmed!");
    document.getElementById("modal").style.display = "none";
});
