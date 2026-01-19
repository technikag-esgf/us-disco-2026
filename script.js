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
    var formData = new FormData(form);
    formData.append("type", document.getElementById("select").value);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://10.0.0.89/api/addPerformance.php", true);
    xhr.send(formData);
    xhr.onreadystatechange = function() {
        console.log(xhr.status);
    }

    console.log(formData);
}  