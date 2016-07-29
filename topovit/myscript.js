	var allTasks = [];
	var hoursLeft = 24;
	var sleepHrs = 0;
	var schoolHrs = 0;
	
		/*function bubbleSort(a){
			var swapped;
			do{
				swapped = false;
				for (i=0; i<a.length-1;i++){
					if(a[i][1] > a[i+1][1]){
						var temp = a[i][1];
						a[i][1] = a[i+1][1];
						a[i+1][1] = temp;
						swapped = true;
					}
				}
				
			}while(swapped);
		} */
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
			console.log("hello");
			var description  = document.getElementById("desc");
			var duration = document.getElementById("dur");
			var priority = document.getElementById("pri");
			var task = [description.value.toString(),duration.value.toString(),priority.value.toString()];
			allTasks.push(task);			
			console.log(allTasks);
		}
		function openTask(){
			document.getElementById('TaskForm').style.visibility = "visible";
			}
		function plan(){
			document.getElementById('TaskForm').style.visibility = "hidden";
			hoursLeft = 24 - sleepHrs - schoolHrs;
			for (i=0; i<allTasks.length; i++){
				var currentDuration = parseInt(allTasks[i][1]);
				hoursLeft = hoursLeft - currentDuration;
				console.log(hoursLeft);
			}
			if (hoursLeft < 0){
				/* button will show up that asks to remove the task for the lowest priority
				it will find the item in the allTasks that has the highest value for priority, and delete that item. If hoursLeft is still less than 0,
				then it will delete the item with the next highest value for priority*/
				document.getElementById('RemovePriority').style.visibility = "visible";
				document.getElementById('LowerSleep').style.visibility = "visible";
			}
			/*else{
				var p = [[],[],[],[],[]]
				for (i=0; i<allTasks.length; i++){
					priority = allTasks[i][2];
					p[priority-1].push(i);
				}
				for (i=0; i<p.length; i++){
					bubbleSort(p[i]);
					console.log(p);
				}
			} */
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
		