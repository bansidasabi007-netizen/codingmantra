import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link } from "react-router-dom";

function Brain() {

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  // 🔥 Data
  const puzzles = [
    {
      title: "The Wolf, Goat, and Cabbage",
      question:
        "A farmer needs to transport a wolf, a goat, and a cabbage across a river in a boat. The boat can only hold the farmer and one other item. The wolf cannot be left alone with the goat, and the goat cannot be left alone with the cabbage. How can the farmer safely get all three items across the river?",
      answer: `The key to this puzzle is realizing that the farmer can bring an item back.

1. Trip 1: Take the Goat across.
2. Trip 2: Return alone.
3. Trip 3: Take the Wolf across.
4. Trip 4: Bring the Goat back.
5. Trip 5: Take the Cabbage across.
6. Trip 6: Return alone.
7. Trip 7: Take the Goat across.`
    },

    {
      title: "The Bridge and Torch Problem",
      question:
        "Four people need to cross a rickety bridge at night. They have only one torch, which must be used for every crossing. The bridge can only support two people at a time. The four people cross at different speeds: one takes 1 minute, one takes 2 minutes, one takes 5 minutes, and the slowest takes 10 minutes. When two people cross together, they move at the speed of the slower person. What is the minimum time required for all four to cross?",
      answer:
`The minimum time is 17 minutes. The key is to minimize the time spent on return trips and to have the two slowest people cross together.

The Solution:
1. Trip 1 (2 min): The 1-min and 2-min people cross. (Total time: 2 min)
2. Trip 2 (1 min): The 1-min person returns with the torch. (Total time: 2 + 1 = 3 min)
3. Trip 3 (10 min): The two slowest people (5-min and 10-min) cross together. This is the most efficient use of the torch for them. (Total time: 3 + 10 = 13 min)
4. Trip 4 (2 min): The 2-min person (who was waiting on the far side) returns with the torch. (Total time: 13 + 2 = 15 min)
5. Trip 5 (2 min): The 1-min and 2-min people cross again. (Total time: 15 + 2 = 17 min)

Everyone is now across the bridge.`


    },
    {
      title: "The Jealous Husbands Problem",
      question:
        "Three married couples must cross a river using a boat that can only hold two people at a time. The challenge is that no wife can be on a bank or in the boat with another man unless her own husband is also present. How can all six people cross the river?",
      answer:
`This puzzle requires careful management of who is on which bank. Let the couples be (H1, W1), (H2, W2), and (H3, W3).

1. Trip 1: W1 and W2 cross. (W1, W2 on far bank).
2. Trip 2: W1 returns. (H1, W1, H2, W3, H3 on start bank).
3. Trip 3: W1 and W3 cross. (W1, W2, W3 on far bank).
4. Trip 4: W1 returns. (All husbands + W1 on start bank).
5. Trip 5: H2 and H3 cross. (Now all husbands are on the far bank with W2 and W3. This is safe because the wives' husbands are present).
6. Trip 6: H2 and W2 return in the boat.
7. Trip 7: H1 and H2 cross. (W1 and W3 are left on the start bank).
8. Trip 8: W3 returns.
9. Trip 9: W1 and W3 cross.
10. Trip 10: One of the husbands (e.g., H1) returns.
11. Trip 11: The remaining two husbands (H1 and another) cross.`
    },
    {
      title: "The Missionaries and Cannibals",

      
      question:
        "Three missionaries and three cannibals must cross a river. The boat can hold at most two people. The constraint is that for any bank, and in the boat, if there are missionaries present, they cannot be outnumbered by cannibals (or they will be eaten). How can everyone cross safely?",
      answer:
`This is another classic state-management puzzle. Let M=Missionary, C=Cannibal.

1. Trip 1: 1M & 1C cross. (1M, 1C on far bank).
2. Trip 2: 1M returns. (All missionaries on start bank, so safe).
3. Trip 3: 2C cross. (1M, 3C on far bank).
4. Trip 4: 1C returns. (3M, 1C on start bank).
5. Trip 5: 2M cross. (1M, 1C on far bank; 1M, 2C on start bank. This is the crucial step where it balances).
6. Trip 6: 1M & 1C return. (2M, 2C on start bank).
7. Trip 7: 2M cross. (3M on far bank, 3C on start bank).
8. Trip 8: 1C returns.
9. Trip 9: 2C cross.
10. Trip 10: 1C returns.
11. Trip 11: 2C cross. Everyone is now across.`
    },
    {
      title: "The Hourglass Timers",
      question:
        "You have two hourglasses: one that measures exactly 7 minutes and another that measures exactly 11 minutes. Using only these two hourglasses, how can you measure exactly 15 minutes?",
      answer:
`The goal is to use the difference between the two timers to isolate a specific time interval.

1. Start (0 mins): Start both the 7-minute and 11-minute hourglasses at the same time.
2. At 7 mins: The 7-minute hourglass runs out. Immediately flip it over to start it again. At this point, the 11-minute hourglass has 4 minutes of sand left.
3. At 11 mins: The 11-minute hourglass runs out. At this exact moment, the 7-minute hourglass has been running for 4 minutes on its second cycle.
4. Flip Again: Immediately flip the 7-minute hourglass over again. It now has 4 minutes of sand at the bottom (from the 4 minutes it just ran). It will take exactly 4 more minutes for this sand to run out.
5. Finish (15 mins): The total time measured is the 11 minutes from the first full run of the 11-minute hourglass, plus the final 4 minutes from the 7-minute hourglass. (11 + 4 = 15 minutes).`
    },
    {
      title: "The Rope Burn",
      question:
        "You are given two ropes and a lighter. Each rope takes exactly 60 minutes to burn from one end to the other, but they burn at a non-uniform rate (e.g., the first half might take 50 minutes and the second half 10 minutes). How can you measure exactly 45 minutes?",
      answer:
`The key is that lighting a rope from both ends makes it burn completely in half the time (30 minutes), regardless of its non-uniformity.

1. Start (0 mins): Light Rope 1 at both ends simultaneously. At the same time, light Rope 2 at only one end.
2. At 30 mins: Rope 1 will completely burn out. At this exact moment, Rope 2 has been burning for 30 minutes from one end and has 30 minutes of "burn time" left.
3. Light the Other End: The moment Rope 1 is gone, immediately light the other, unlit end of Rope 2.
4. Measure the Final 15 mins: Rope 2 is now burning from both ends. The remaining part of the rope would take 30 minutes to burn from one end, but since it's burning from both, it will be consumed in half that time: 15 minutes.
5. Finish (45 mins): The total time measured is the initial 30 minutes (from Rope 1 burning out) plus the final 15 minutes (from the rest of Rope 2 burning out).`
    },
    {
      title: "The Heavy Pill Bottle",
      question:
        "You have 10 bottles of pills. Nine of the bottles contain pills weighing 10 grams each, but one bottle contains pills that are all 11 grams each. You have a digital scale that you can use only once. How can you find the bottle with the heavier pills?",
      answer:
`This puzzle requires using the number of pills as a way to identify the bottles.

1. Label the bottles: Label them from #1 to #10.
2. Take a specific number of pills: Take 1 pill from bottle #1, 2 pills from bottle #2, 3 pills from bottle #3, and so on, up to 10 pills from bottle #10.
3. Weigh all the pills together: Place all these collected pills (a total of 1+2+...+10 = 55 pills) on the digital scale for your single weighing.
4. Analyze the result:
- If all pills weighed the standard 10 grams, the total weight would be 55 pills * 10 grams/pill = 550 grams.
- The amount the actual weight exceeds 550 grams will tell you exactly which bottle contains the heavy pills. For example, if the scale reads 553 grams, it is 3 grams overweight. Since each heavy pill adds 1 extra gram, this means you must have taken 3 heavy pills. The bottle you took 3 pills from was bottle #3. Therefore, bottle #3 is the heavy one.`
    },
    {
      title: "The 12 Coins Puzzle",
      question:
        "You have 12 identical-looking coins. One of them is counterfeit and is either slightly heavier or slightly lighter than the others. Using a simple balance scale only three times, how do you find the counterfeit coin and determine if it's heavier or lighter?",
      answer:
`This is a classic logic puzzle about eliminating possibilities. Let's label the coins 1 through 12.

Weighing 1: Compare (1, 2, 3, 4) vs (5, 6, 7, 8)
- Case A: Scales Balance. The counterfeit coin must be in the group you set aside (9, 10, 11, 12). All coins 1-8 are normal.
- Weighing 2: Weigh (9, 10) vs (1, 2) (known good coins).
- If they balance, the counterfeit is 11 or 12. For Weighing 3, weigh (11) vs (1). If it balances, 12 is the counterfeit. If it tips, 11 is the counterfeit. (A final weigh against a good coin can determine if it's heavy or light).
- If they tip, the counterfeit is 9 or 10. For Weighing 3, weigh (9) vs (10). The one that tips the scale is the counterfeit.
- Case B: Scales Tip (e.g., 1,2,3,4 is heavier). The counterfeit is in this group of 8. Either one of (1,2,3,4) is heavy, OR one of (5,6,7,8) is light.
- Weighing 2: Weigh (1, 2, 5) vs (3, 6, 9) (coin 9 is known good).
- If they balance, the counterfeit is 4 (heavy), 7 (light), or 8 (light). For Weighing 3, weigh (7) vs (8). If they balance, 4 is the heavy one. If they tip, you've found the light one.
- If left side (1,2,5) is heavier, either 1 or 2 is heavy, or 6 is light. For Weighing 3, weigh (1) vs (2). If they balance, 6 is the light one. If one is heavier, you've found the heavy coin.
- If right side (3,6,9) is heavier, either 3 is heavy, or 5 is light. Weighing 3 will isolate it.`
    },

  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [error, setError] = useState("");

  const toggleAnswer = (index) => {
    try {
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
      setError("");
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />

      <div className="px-4 mx-auto mt-6 max-w-7xl">
  <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-sm overflow-x-auto">

    <button
      onClick={() => window.history.back()}
      className="text-[var(--text-secondary)] hover:text-[#F3A412] transition"
    >
      ←
    </button>

    <Link
      to="/"
      className="text-[var(--text-secondary)] hover:text-[#F3A412]"
    >
      Home
    </Link>

    <span className="text-[var(--text-secondary)]">›</span>

    <Link
      to="/Games"
      className="text-[var(--text-secondary)] hover:text-[#F3A412]"
    >
      Games
    </Link>

    <span className="text-[var(--text-secondary)]">›</span>

    <span className="font-semibold text-[#F3A412]">
     Brain Teasers & Logic Puzzles
    </span>

  </div>
</div>

      {/* Title */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
          Brain Teasers & Logic Puzzles
        </h1>

        <p className="max-w-3xl mx-auto mt-3 text-xl text-[var(--text-secondary)]">
          Sharpen your mind with a collection of classic puzzles.
        </p>
      </div>

      <div className="max-w-4xl px-4 mx-auto mt-10">

        {/* ERROR */}
        {error && (
          <div className="p-3 mb-4 text-white bg-red-500 rounded">
            {error}
          </div>
        )}

        {/* PUZZLES */}
   {puzzles.map((puzzle, index) => (
  <div
    key={index}
    className="mb-6 p-6 rounded-xl border bg-[var(--card-bg)] border-[var(--border-color)]"
  >
    <h2 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">
      {puzzle.title}
    </h2>

    <p className="mb-4 text-[var(--text-secondary)]">
      {puzzle.question}
    </p>

    <div className="mb-3 border-t border-[var(--border-color)]"></div>

    {/* Toggle */}
    <div
      onClick={() => toggleAnswer(index)}
      className="flex items-center justify-between py-2 cursor-pointer"
    >
      <span className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
        Show Detailed Answer
      </span>

      <span
        className={`text-[var(--text-secondary)] transition-transform duration-300 ${
          openIndex === index ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </div>

    {/* Answer */}
    {openIndex === index && (
      <div className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] whitespace-pre-line animate-fadeIn">
        {puzzle.answer}
      </div>
    )}
  </div>
))}
      </div>

      <Footer />
    </div>
  );
}

export default Brain;