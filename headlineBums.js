$('.monthButton').click(function(e){
            $('#text1').hide();
            var name = e.target.innerHTML;
            $('.headlines').show();
            document.getElementById("headline1").innerHTML = name + " Überschrift 1";
            document.getElementById("headline2").innerHTML = name + " Überschrift 2";
            document.getElementById("headline3").innerHTML = name + " Überschrift 3";
        })
        
        $('.headlines').click(function(e){
            var monat = e.target.innerHTML;
            $('#text1').show();
            document.getElementById('text1').innerHTML = "Dies ist der Text für die " + monat;
        })