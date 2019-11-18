// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  const today = new Date().getFullYear();
  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  console.log("\n1) Array.prototype.some(): is at least one person 19 or older?:\n");
  const answer1 = people.some(p=>today-p.year>=19)
  console.log(answer1)

  // Array.prototype.every() // is everyone 19 or older?
  console.log("\n2) Array.prototype.every(): is everyone 19 or older?:\n");
  const answer2 = people.every(p=>today-p.year>=19)
  console.log(answer2)


  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  console.log("\n3) Array.prototype.find():\nFind is like filter, but instead returns just the one you are looking for. \nFind the comment with the ID of 823423\n");
  const answer3 = comments.find(c=>c.id===823423).text
  console.log(answer3)

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  console.log("\n4) Array.prototype.findIndex(): Find the comment with this ID:\n");
  const index=comments.findIndex(c=>c.id===823423)
  const answer4 = comments[index].text
  console.log(answer4);


  console.log("\n5) Delete the comment with the ID of 823423: \n");
  comments.splice(answer4,1)
  console.table(comments);
  