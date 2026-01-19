function checkforOther(option) {
    switch(option) {
        case "sonstiges":
            document.getElementById("description_label").innerHTML = "Beschreibung";
            document.getElementById("form_other_label").style.display = "unset";
            document.getElementById("form_other").style.display = "unset";
            break;
        case "karaoke":
            document.getElementById("description_label").innerHTML = "Liedname";
            document.getElementById("form_other_label").style.display = "none";
            document.getElementById("form_other").style.display = "none";
            break;
        case "kostumperformance":
            document.getElementById("description_label").innerHTML = "Liedname";
            document.getElementById("form_other_label").style.display = "none";
            document.getElementById("form_other").style.display = "none";
            break;
        case "tanz":
            document.getElementById("description_label").innerHTML = "Liedname";
            document.getElementById("form_other_label").style.display = "none";
            document.getElementById("form_other").style.display = "none";
            break;
    }
}

function send() {

    var form = document.querySelector("form");
    var formData = [];
    formData.push("type", document.getElementById("select").value);
    formData.push("other", document.getElementById("form_other").value);
    formData.push("name", document.getElementById("name").value);
    formData.push("description", document.getElementById("actdescription").value);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://technik.esgf.de/api/addPerformance.php", true);
    xhr.send(formData);
    xhr.onreadystatechange = function() {
        console.log(xhr.status);
    }

    console.log(formData);
}  