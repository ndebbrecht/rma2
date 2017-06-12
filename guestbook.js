$(document).ready(function(){

    /*Zaehlen der Einträge*/
    var zaehler=0;
    var speicherzaehler=localStorage.getItem("anzahl");
    if (!speicherzaehler){
        zaehler=0;
    }else{
        zaehler=parseInt(speicherzaehler);              //aus String Zahl bekommen
    }

     /*Anzeige der Einträge*/
    var i=0;
    for(i;i<zaehler;i++){
        var arr_temp2=JSON.parse(localStorage.getItem('gaestebuch-Arr'))
            $("#bucheintraege").append('<div class="panel panel-default">'
              +'<div class="panel-heading">'+arr_temp2[i][0]+' ('+arr_temp2[i][2]+')</div>'
              +'<div class="panel-body">'+arr_temp2[i][1]+'</div>'+'</div><button id="'+i+'">Delete</button>');
        //document.getElementById(i).onclick = deletePost;
    }

    /*Eintrag hinzufügen*/
    $('#einfuegen').click(function (){
        if($("#nick").val() != "" && $("#comment").val() != "" && $("#mail").val() != ""){
        var eintrag=[$("#nick").val(),$("#comment").val(),$("#mail").val()];
        if(zaehler==0){
            var gaestebuch=[eintrag];
            localStorage.setItem('gaestebuch-Arr',JSON.stringify(gaestebuch));  //konvertiert einen JavaScript-Wert in einen JSON-String
        }else{
            var arr_temp=JSON.parse(localStorage.getItem('gaestebuch-Arr'));
            arr_temp.push(eintrag);
            localStorage.setItem('gaestebuch-Arr',JSON.stringify(arr_temp));
        }
        zaehler++;
        localStorage.setItem("anzahl",zaehler);
        //location.reload(true);
/*}else{
  alert("Fülle bitte alle Felder aus!");
}*/
        }
    });

    /*Einträge löschen*/
    $('#löschen').click(function () {
        alert("Sie löschen alle Gästebucheinträge!");
        localStorage.clear();
        //location.reload(true);
    });
   var j = 0;
    for(j;j<i;j++){
   $('#'+j).click(function(){
       var arr_temp = localStorage.getItem('gaestebuch-Arr');
       arr_temp = JSON.parse(arr_temp);
       arr_temp.splice(i,1);
       localStorage.setItem('gaestebuch-Arr', JSON.stringify(arr_temp));
       var zaehler = localStorage.getItem('anzahl');
       zaehler--;
       localStorage.setItem('anzahl', zaehler);
       location.reload();
       
   });
    }
});


function deletePost(e){
    var i = e.target.id;
    var arr_temp = localStorage.getItem('gaestebuch-Arr');
    arr_temp = JSON.parse(arr_temp);
    arr_temp.splice(i,1);
    localStorage.setItem('gaestebuch-Arr', JSON.stringify(arr_temp));
    var zaehler = localStorage.getItem('anzahl');
    zaehler--;
    localStorage.setItem('anzahl', zaehler);
    location.reload();
}