var config = {
    apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
    authDomain: "firstproject-da938.firebaseio.com",
    databaseURL: "https://firstproject-da938.firebaseio.com",
    storageBucket: "time-sheet-55009.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
  
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#dest-input").val().trim();
    var firstT = moment($("#firstT-input").val().trim(),).format('HHmm');
    var freq = $("#freq-input").val().trim();
  
    var newTrain = {
      name: trainName,
      dest: destination,
      start: firstT,
      rate: freq
    };

    database.ref().push(newTrain);

    console.log(newTrain.name)

    alert("Train added!");

    $("#train-name-input").val("");
    $("#dest-input").val("");
    $("#firstT-input").val("");
    $("#freq-input").val("");

});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
  
    var trainN = childSnapshot.val().name;
    var trainDest = childSnapshot.val().dest;
    var firstTrain = childSnapshot.val().firstT;
    var trainFreq = childSnapshot.val().rate;
  
 
    console.log(trainN);
    console.log(trainDest);
    console.log(firstTrain);
    console.log(trainFreq);

 
  var newRow = $("<tr>").append(
    $("<td>").text(trainN),
    $("<td>").text(trainDest),
    $("<td>").text(trainFreq),
    $("<td>").text(firstTrain)
    
    
  );

  
  $("#train-table > tbody").append(newRow);
});