const riddles = [
    {
      riddle: "Q: What has a bottom at the top?",
      answer: "A: Your legs",
    },
    {
      riddle: "Q: What gets wet while drying?",
      answer: "A: A towel.",
    },
    {
      riddle:
        "Q: What is red and smells like blue paint?",
      answer: "A: Red paint.",
    },
    {
      riddle: "Q: How far can you walk into the woods?",
      answer: "A: Halfway.",
    },
    {
      riddle: "Q: What can you catch, but not throw?",
      answer: "A: A cold.",
    },
    {
      riddle: "Q: What kind of band never plays music?",
      answer: "A: A rubber band.",
    },
    {
      riddle: "Q: What has many teeth, but cannot bite?",
      answer: "A: A comb.",
    },
    {
      riddle: "Q: What has lots of eyes, but can’t see?",
      answer: "A: A potato.",
    },
    {
      riddle: "Q: What has one eye, but can’t see?",
      answer: "A: A needle.",
    },
    {
      riddle: "Q: When is a door no longer a door?",
      answer: "A: When it’s ajar.",
    },
  ];
  
  const riddle = document.querySelector("#riddles span:first-child");
  const answer = document.querySelector("#riddles span:last-child");
  const todayRiddle = riddles[Math.floor(Math.random() * riddles.length)];
  
  riddle.innerText = todayRiddle.riddle;
  answer.innerText = todayRiddle.answer;