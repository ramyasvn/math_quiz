function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
   player2_name = document.getElementById("player2_name_input").value;

   localStorage.setItem("player1_name", player1_name);
   localStorage.setItem("player2_name", player2_name);

   window.location = "game_login.HTML";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player_question").innerHTML = "Question Turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player2_name;

function send() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    actual_answer = parseInt(n1) * parseInt(n2);

    question_number = "<h4>" + n1 + " x "+ n2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row ;
    document.getElementById("n1").value = ""; 
    document.getElementById("n2").value = "";
}