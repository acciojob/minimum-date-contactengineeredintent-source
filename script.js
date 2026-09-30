function minDate(dates) {
  //write you code here
	let datesArr = [];
	for(let i=0; i<dates.length; i++){
		let tempArr = dates[i].split("/").map(Number);
		datesArr.push(tempArr);	
	}
    console.log(datesArr);
    let minYear = datesArr[0][0];
    let minMonth = 13;
    let minDate = 32;
    console.log(minYear, minMonth, minDate);
    //finding min year
    for(let i=0; i<datesArr.length; i++){
        let j=0;
        //finding minimum year value
        // console.log(datesArr[i][j]);
        if(datesArr[i][j] < minYear){
            minYear = datesArr[i][j];
        }
    }
    console.log(`min year = ${minYear}`);
    //finding min month
    for(let i=0; i<datesArr.length; i++){
        let j=0;
        let k=1;
        //finding minimum year value
        // console.log(datesArr[i][k]);
        if(datesArr[i][j] == minYear && datesArr[i][k] < minMonth){
            minMonth = datesArr[i][k];
        }
        
    }
    console.log(`min month = ${minMonth}`);
    //finding min date
    for(let i=0; i<datesArr.length; i++){
        let j=0;
        let k=1;
        let l=2;
        //finding minimum year value
        // console.log(datesArr[i][k]);
        if(datesArr[i][j] == minYear && datesArr[i][k] == minMonth && datesArr[i][l] < minDate){
            minDate = datesArr[i][l];
        }
        
    }
    return `${minYear}/${minMonth}/${minDate}`;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
