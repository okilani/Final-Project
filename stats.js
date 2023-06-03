let mountains = [
    { name: "Day:", height: 1658, place: "Workout" },
    { name: "", height: 1654, place: "" },
    { name: "", height: 1520, place: "" },
    { name: "", height: 1592, place: "" },
    { name: "", height: 1738, place: "" }
  ];
  const workoutLog = [
    { date: '2023-05-30', exercise: 'Push-ups', sets: 3, reps: 10 },
    { date: '2023-05-31', exercise: 'Plank', sets: 3, reps: 1- 2 },
    { date: '2023-06-01', exercise: 'Squats', sets: 3, reps: 10 },
   
  ];
  
  
  let totalSets = 0;
  let totalReps = 0;
  
  for (const entry of workoutLog) {
    totalSets += entry.sets;
    totalReps += entry.reps;
  }
  
 
  const averageSets = totalSets / workoutLog.length;
  const averageReps = totalReps / workoutLog.length;
  
  
  console.log('Date\t\tExercise\tSets\tReps');
  for (const entry of workoutLog) {
    console.log(`${entry.date}\t${entry.exercise}\t${entry.sets}\t${entry.reps}`);
  }
  console.log('---------------------------------');
  console.log(`Total:\t\t\t${totalSets}\t${totalReps}`);
  console.log(`Average:\t\t${averageSets.toFixed(2)}\t${averageReps.toFixed(2)}`);