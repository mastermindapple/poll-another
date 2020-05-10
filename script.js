var preference;
function data(){
    preference = "ForceAndPressure";
    console.log(preference);
    document.getElementById("choice").innerHTML = ("Your preferable chapter is 'Force And Pressure'");
}
function root(){
    preference = "Microorganisms";
    console.log(preference);
    document.getElementById("choice").innerHTML = ("Your preferable chapter is 'Microorganisms: Friend and Foe'");
}
function quad(){
    preference = "SyntheticFibres";
    console.log(preference);
    document.getElementById("choice").innerHTML = ("Your preferable chapter is 'Synthetic Fibres and Plastics'");
}

var button = document.getElementById("submit");



button.addEventListener("click",(e) =>{
    e.preventDefault();
    var name = document.getElementById("name").value;
    var database = firebase.database();
    if(!name){
        alert("Please enter your name to proceed");
    }
    
    else if(preference === undefined){
        alert("Please select a chapter");
    }
    else{
     database.ref("/Users/"+name).set({
            Chapter: preference
        });
        setTimeout(giveConfirmation,3000);
    }
});
function giveConfirmation(){
    document.getElementById("header").innerHTML = ("Choice Submitted!");
    document.getElementById("input").innerHTML = ("");
    document.getElementById("options").innerHTML = ("Results will be out in the next Class");
    document.getElementById("btn").innerHTML = ("");
    document.getElementById("choice").innerHTML = ("");

}


 
