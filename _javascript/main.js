$(function(){
    console.log("ready");
});

$("#listNodes").click(function(){
    listNodes();
});

function listNodes(){
    $("#scrollbox").empty();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let resp = JSON.parse(xhttp.response);
            for (var instance of resp){
                $("#scrollbox").append('<div><a href="http://' + instance.ip + '/">' + instance.name + '</a></div>');
            }
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5000/list", true);
    xhttp.send();
}

$("#deleteNodes").click(function(){
    $("#scrollbox").empty();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("deleted nodes");
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5000/delete", true);
    xhttp.send();
});


$("#createNodes").click(function(){
    var xhttp = new XMLHttpRequest();
    let size = $("#nodeNum").val();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            listNodes();
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5000/deploy/" + size, true);
    xhttp.send();
});