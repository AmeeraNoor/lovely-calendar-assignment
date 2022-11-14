
$(function () {
 
  var now = dayjs()
  var currentDay = document.getElementById('currentDay')
  currentDay.innerHTML = now.format('dddd DD/MM/YYYY h:mmA')

  var timeslots = document.getElementById('timeslots').querySelectorAll('.row')

  for (var i = 0; i < timeslots.length; i++) {
    var button = timeslots[i].querySelector('button')
    button.addEventListener('click', saveEvent) 

    var taskId = button.closest(".row").id
    const task = JSON.parse(localStorage.getItem(taskId)) || []
    document.getElementById(taskId).querySelector('textarea').value = task

    var currentHour = now.hour()
    var taskHour = parseInt(taskId.substring(5))

    if (currentHour - taskHour == 0) {
      document.getElementById(taskId).classList.add('present')
    } else if (currentHour - taskHour > 0) {
      document.getElementById(taskId).classList.add('future')
    } else if (currentHour - taskHour < 0) {
      document.getElementById(taskId).classList.add('past')
    }
  }
});
