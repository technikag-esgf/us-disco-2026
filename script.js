function checkforOther(option) {
    switch(option) {
        case "sonstiges":
            document.getElementById("description_label").innerHTML = "Beschreibung/Liedname:";
            document.getElementById("form_other").style.display = "flex";
            break;
        case "karaoke":
            document.getElementById("description_label").innerHTML = "Liedname:";
            document.getElementById("form_other").style.display = "none";
            break;
        case "kostumperformance":
            document.getElementById("description_label").innerHTML = "Liedname:";
            document.getElementById("form_other").style.display = "none";
            break;
        case "tanz":
            document.getElementById("description_label").innerHTML = "Liedname:";
            document.getElementById("form_other").style.display = "none";
            break;
    }
}

function send() {
    var formData = new FormData();
    formData.append("type", document.getElementById("select").value);
    formData.append("other", document.getElementById("form_other").value);
    formData.append("name", document.getElementById("name").value);
    formData.append("actdescription", document.getElementById("actdescription").value);

    fetch("https://technik.esgf.de/api/addPerformance.php", {
        method: "POST",
        body: formData
    })
    .then(async response => {
        const contentType = response.headers.get("content-type") || "";
        let data;

        if (contentType.includes("application/json")) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        if (!response.ok) {
            throw new Error(typeof data === "string" ? data : "Die Übermittlung konnte nicht abgeschlossen werden.");
        }

        console.log(data);
        window.location.href = "send.html";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Die Übermittlung konnte nicht gesendet werden. Bitte versuche es später erneut.");
    });
}