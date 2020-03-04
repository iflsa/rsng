var no_reps = true;
var min = 0, max = 10;
var PreviousNumbers = [];
var GeneratedNumber = 0;
var temp;

function GenerateNumber()
{
  console.log(PreviousNumbers)
	if(!no_reps)
	{console.log("POWTARZENIA")

		GeneratedNumber = parseInt((Math.random() * (max - min + 1)), 10) + min;
    return GeneratedNumber;
	}
	else
	{

		temp = parseInt((Math.random() * (max - min + 1)), 10) + min;
		if(!PreviousNumbers.includes(temp))
		{
			PreviousNumbers.push(temp);
			console.log("a");
			return parseInt(temp);
		}
		else if(PreviousNumbers.length == max - min + 1)
		{
			temp = null;
			console.log("b");
			return null;
		}
		else
		{
			while(PreviousNumbers.includes(temp))
			{
				if(temp != max)
					temp++;
				
				else
					temp = min;
			}
			console.log("c");
			PreviousNumbers.push(temp);
			return parseInt(temp);
		}
			
	}
}
for(let i=0; i<12; i++)
console.log(GenerateNumber())