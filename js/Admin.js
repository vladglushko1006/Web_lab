function addNews(){

     var TitleText = document.getElementById("Head");
	 if(TitleText.value == ""){
        alert("Ну і де назва?");
        return;
    }

    var SmallText = document.getElementById("Small");
     if(SmallText.value == ""){
        alert("І як мені описати цю новину?");
        return;
    }
	 
	 
     var FullText = document.getElementById("Full");
	 if(FullText.value == ""){
        alert("Ваша новина не несе змісту. Спробуйте)");
        return;
    }
	 
     var ShortText = document.getElementById("Small");
     if(TitleText.value != "" && FullText != "" && ShortText!=""){
         alert("Дякую за додану новину)");
     }
 } 
