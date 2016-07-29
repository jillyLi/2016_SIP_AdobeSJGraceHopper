	var allTasks = [];
	var hoursLeft = 24;
	var sleepHrs = 0;
	var schoolHrs = 0;
	
		function sleepFunc() {
			sleepHrs = 8;
			var sleepArray = ["Sleep", sleepHrs.toString()];
			console.log(sleepArray);
		}
		function schoolFunc(){
			schoolHrs = 7;
			var schoolArray = ["School", schoolHrs.toString()];
			console.log(schoolArray);
		}
		function taskFunc(){
			while (plan != false){
				var description  = document.getElementById("desc");
				var duration = document.getElementById("dur");
				var priority = document.getElementById("pri");
				var task = [description.value.toString(),duration.value.toString(),priority.value.toString()];
				allTasks.push(task);			
				console.log(allTasks);
			}
		}
		function openTask(){
			document.getElementById('TaskForm').style.visibility = "visible";
			}
		function plan(){
			var plan = true;
			hoursLeft = 24 - sleepHrs - schoolHrs;
			for (i=0; i<allTasks.length; i++){
				currentDur = parseInt(allTasks[i][1]);
				hoursLeft = hoursLeft - currentDur;
				console.log(hoursLeft);
			}
			if (hoursLeft < 0){
				/* button will show up that asks to remove the task for the lowest priority
				it will find the item in the allTasks that has the highest value for priority, and delete that item. If hoursLeft is still less than 0,
				then it will delete the item with the next highest value for priority*/
				document.getElementById('RemovePriority').style.visibility = "visible";
				document.getElementById('LowerSleep').style.visibility = "visible";
			}
			document.getElementById('TaskForm').style.visibility = "hidden";

		}
		function remPri(){
			var index = 0;
			var lowestPri = 0;
			for (i=0; i<allTasks.length; i++){
				var currentPriority = parseInt(allTasks[i][2])
				if (currentPriority > lowestPri){
					lowestPri = currentPriority;
					index = i;
				}
				else{
					lowestPri = lowestPri;
				}
			}
			allTasks.splice(index,1);
			console.log(">>>>>>>>>>>>>>>>>>");
			console.log(allTasks);
		}
		