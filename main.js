var students=[];

$("#btnAdd").on("click", function(){
  var studentName= $("#nameInput").val();
  students.push(studentName);
  console.log(students);
});

$("#btnAttendance").on("click", function(){
  $("li").remove();
  var studentName = $("li").detach();
  students.forEach(function(element){
$("ol").append("<li>"+element+"</li>");
  });
});







  <!-- //create an ordered list of student names
  //create an input to type student name in
  //create button to add name to list
  //create an array using students names
  //create forEach loop to show all students names who have typed their name in when clicking 'attendance' -->
