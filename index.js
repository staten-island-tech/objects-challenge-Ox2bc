const Caroline = {
    name: "Caroline",
    dob: 2004,
    graduated: false,
    age: function() {
      return 2020 - this.dob;
    }
  };  

  const Homer = {
      name: "Homer",
      age: 32,
      family: {
          wife: {
              name: "Marge"
          },
          son: {
              name: "Bart"
          }
      },
      pets: ["cat", "dog"]
  };  

   const Haoran = {
    name: "how",
    dob: 2001,
    year: "Senior",
    age: function() {
        return 2020 - this.dob;
      }
  }; 
   const Eric = Haoran;
  Eric.name = "Eric";
  const Christian = {};
  Christian.dob = Haoran.dob;
  Christian.dob = 2003; 

   const calculator = {
      add: 1+2,
      subtract: 1-2
  }; 

  const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
   
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
   
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
   
  //3) return only the last three presidents
   
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
   
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"