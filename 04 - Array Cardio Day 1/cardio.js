  // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
  
      console.log("\n1)\n");
      const answer1=inventors.filter(inventor=> (inventor.year<1600 && inventor.year>1499))
      console.table(answer1)

      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names

      console.log("\n2)\n");
      const answer2=inventors.map(inventor=> `${inventor.first} ${inventor.last}`)
      console.table(answer2)
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest

      console.log("\n3)\n");
      const answer3=inventors.map(inventor=> inventor).sort((a,b)=>a.year-b.year)
      console.table(answer3)
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?

      console.log("\n4)\n");
      const answer4=inventors.map(inventor=>inventor.passed-inventor.year).reduce((a,b)=>a+b)
      console.table(answer4)
  
  
      // 5. Sort the inventors by years lived

      console.log("\n5)\n");
      const answer5=inventors.map(inventor=>{
          inventor['yearsLived']=inventor.passed-inventor.year; 
          return inventor;
        }).sort((a,b)=>b.yearsLived-a.yearsLived)
      console.table(answer5)
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

      console.log("\n6)\n");
      const answer6
      console.table(answer6)  
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name

      console.log("\n6)\n");
      const answer7=inventors.map
      console.table(answer6)  

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  