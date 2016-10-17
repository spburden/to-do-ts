/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("do the dishes.", "high"));
tasks.push(new ToDoList.HomeTask("buy chocolate.", "low", people.diane));
tasks.push(new ToDoList.HomeTask("wash the laundry", "high"));
tasks[0].markDone();
console.log(tasks);

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Her are thors tasks: ");
for(var task of thorTasks){
  console.log(task);
}
