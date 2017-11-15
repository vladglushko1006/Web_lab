function isOnline()  { return  window.navigator.onLine; }

function uploadToServer()
{
    alert("The data has been uploaded to the server!");
}

function AddComment(){
 
 var Name = document.getElementById("Name");
    if(Name.value == ""){
        alert("Відкрийте своє ім'я перед системою");
		return;
    }
  

 var Check = document.getElementById("Check");
    if(Check.value == ""){
        alert("Ваш коментар не несе змісту. Спробуйте інший");
        return;
    }
   
    var Field = document.getElementById("Field");
	var responseField = document.getElementById("9");
 
     // Create new elements with attributes
     var responseRow = document.createElement("div");
	 responseRow.setAttribute("class", "feedback");
	 
	 var Name1 = document.createElement("h3");
	 
	 var Date1 = document.createElement("p");
     Date1.setAttribute("class", "blog-post-meta1");
     
	 var Coment = document.createElement("p");
	 
	 var Line = document.createElement("hr");
	 Line.setAttribute("align", "center");
	  Line.setAttribute("width", "500");
	  Line.setAttribute("size", "2");
 	  Line.setAttribute("color", "#ff0000");
	  

     // datetime column

     var date = new Date();
     var dateString = "";
     dateString = date.getDate() + "." + date.getMonth() + "." + (date.getYear() + 1900)
         + ", " + date.getHours() + ":" + date.getMinutes();
 
     //content
     Date1.innerHTML = dateString;
     Name1.innerHTML = Name.value;
     Coment.innerHTML = Check.value;
	 Line.innerHTML = Line.value;

     // Respnse row
     responseRow.appendChild(Name1);
     responseRow.appendChild(Date1);
     responseRow.appendChild(Coment);
	 responseRow.appendChild(Line);
	 
    // insert to doc
    if (isOnline())
    {
        Field.appendChild(responseRow);
        uploadToServer();
    }
    else
    {
        var items = JSON.parse(localStorage.getItem("addedComments"));
        items.push(responseRow.innerHTML);
        localStorage.setItem("addedComments", JSON.stringify(items));
    }
 
     // Clean fields
     Name.value = "";
     Check.value = "";
 }