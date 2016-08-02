	var allTasks = [[],[],[],[],[]];
	var hoursLeft = 23;
	var sleepHrs = 0;
	var schoolHrs = 0;
	var start = 11;
	var startM = "PM";
	var endM = "PM";
	var sleepArray = [];
	var schoolArray = [];
	
		function bubbleSort(a)
		{
			var swapped;
			do {
				swapped = false;
				for (var i=0; i < a.length-1; i++) {
					if (a[i][1] > a[i+1][1]) {
						var temp = a[i];
						a[i] = a[i+1];
						a[i+1] = temp;
						swapped = true;
					}
				}
			} while (swapped);
		}
		function hide(){
			document.getElementById("add1").style.visibility="hidden";
		}
		function sleepFunc() {
			sleepHrs = 8;
			sleepArray = ["Sleep", sleepHrs.toString()];
			document.getElementById("Sleep").disabled = true;
		}
		function schoolFunc(){
			schoolHrs = 7;
			schoolArray = ["School", schoolHrs.toString()];
			document.getElementById("School").disabled = true;
		}
		function taskFunc(){	
			document.getElementById("add1").style.visibility="visible";
			var description  = document.getElementById("desc");
			var duration = document.getElementById("dur");
			var priority = document.getElementById("pri");
			var task = [description.value.toString(),duration.value.toString(),priority.value.toString()];
			allTasks[parseInt(priority.value.toString()) - 1].push(task);			
		}
		function openTask(){
			document.getElementById('TaskForm').style.visibility = "visible";
			}
		
		function plan(){
			document.getElementById("add1").style.visibility="hidden";
			document.getElementById('TaskForm').style.visibility = "hidden";
			document.getElementById('Task').style.visibility = "hidden";
			document.getElementById('Plan').style.visibility = "hidden";
			
			//calculating time left in the day
			hoursLeft = 23 - sleepHrs - schoolHrs;
			for (i=0; i<allTasks.length; i++){
				for(j=0; j<allTasks[i].length; j++){
					var currentDuration = parseInt(allTasks[i][j][1]);
					hoursLeft = hoursLeft - currentDuration;	
				}			
			}		
			
			//sorting by duration
			for (i=0; i<allTasks.length; i++){
				bubbleSort(allTasks[i]);
			}
			
			if (hoursLeft < 0){
				/* button will show up that asks to remove the task for the lowest priority
				it will find the item in the allTasks that has the highest value for priority, and delete that item. If hoursLeft is still less than 0,
				then it will delete the item with the next highest value for priority*/
				document.getElementById('RemovePriority').style.visibility = "visible";
			}
			else{
				makeCal();
			}
		}
		function remPri(){
			document.getElementById('RemovePriority').style.visibility = "hidden";
			var removed = false;
			for(i=allTasks.length-1;i>=0;i--){
				for(j=allTasks[i].length-1;j>=0;j--){
					if (removed == false){
						allTasks[i].splice(j, 1);
						removed = true;
					}
				}
			}
			plan();
			}
		
		function makeCal(){
			document.getElementById('Table').style.visibility = "visible";
			document.getElementById('School').style.visibility = "hidden";
			document.getElementById('Sleep').style.visibility = "hidden";
			var table = document.getElementById("Table");
			
			//sleep
			var row = table.insertRow();
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			end = (start + sleepHrs);
			if(end >= 12){
				if(endM == "AM"){
					endM = "PM";
				}else{
					endM = "AM";
				}
			}
			end = end % 12;
			cell1.innerHTML = start.toString() + startM + " - " + end.toString() + endM;
			cell2.innerHTML = sleepArray[0];
			cell3.innerHTML = sleepArray[1] + " hr(s)";
			start = end + 1;
			startM = endM;
			
			//school
			if (parseInt(sleepArray[1]) > 0){
			var row2 = table.insertRow();
			var cell1= row2.insertCell(0);
			var cell2 = row2.insertCell(1);
			var cell3 = row2.insertCell(2);
			end = (start + schoolHrs);
			if(end >= 12){
				if(endM == "AM"){
					endM = "PM";
				}else{
					endM = "AM";
				}
			}
			end = end % 12;
			cell1.innerHTML = start.toString() + startM + " - " + end.toString() + endM;
			cell2.innerHTML = schoolArray[0];
			cell3.innerHTML = schoolArray[1] + " hr(s)";
			start = end;
			startM = endM;
			}
			
			//tasks
			for (i=0; i<allTasks.length; i++){
				for (j=0; j<allTasks[i].length; j++){
					var row3 = table.insertRow();
					var cell1 = row3.insertCell(0);
					var cell2 = row3.insertCell(1);
					var cell3 = row3.insertCell(2);
					var end = (start + parseInt(allTasks[i][j][1]));
					if(end >= 12){
						if(endM == "AM"){
							endM = "PM";
						}else{
							endM = "AM";
						}
					}
					end = end % 12;
					
					if(end == 0){
						end = 12;
					}
					if (start == 0){
						start = 12;
					}
					cell1.innerHTML = start.toString()+ startM + " - " + end.toString() + endM;
					cell2.innerHTML = allTasks[i][j][0];
					cell3.innerHTML = allTasks[i][j][1] + " hr(s)";
					start = end;
					startM = endM;
					}
			}
		}
		
		function bedFunc(){
			document.getElementById('Bedtime').style.visibility = "visible";
			var sleepTime = document.getElementById("enterTime");
			start = sleepTime.value;
		}
