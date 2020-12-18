debugger;
document.getElementById("user_name").innerHTML = "Mayank Gupta";
document.getElementById("user_name").innerText = "Mayank Gupta";
document.getElementById("user_name").style.color = "red";


setTimeout(() => {
    document.getElementById("user_name").style.color = "blue";
    document.getElementById("user_name").innerHTML = "Anshul Gupta"
}, 5000)


document.getElementById("root").innerHTML = "";


var name = ["A", "B", "C"]

for(let i = 0 ; i <name.length; i++ ) {

    var node = document.createElement("h1");           
    var textnode = document.createTextNode(name[i]);       
    document.getElementById("myList").appendChild(textnode);        
}
