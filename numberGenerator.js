function generateNumber(no_reps, min, max, nums) { 
	if(no_reps){
		let temp = parseInt((Math.random() * (max - min + 1)), 10) + min;
		if(!nums.includes(temp)) {
			nums.push(temp);
			return parseInt(temp);
		}
		else if(nums.length == max - min + 1) {
			return null;
		}
		else {
			while(nums.includes(temp)) {
				if(temp != max)
					temp++;
				else
					temp = min;
			}
			nums.push(temp);
			return parseInt(temp);
		}	
	}
	return parseInt((Math.random() * (max - min + 1)), 10) + min;
}
