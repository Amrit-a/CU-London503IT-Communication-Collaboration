# CALL IT OUT — Cyberbullying Awareness Game

**Module:** 503IT Communication & Collaboration  
**Team:** Pandeya & Ishneha Rai  
**Institution:** Coventry University London  
**Academic Year:** 2025–2026

---

## How to Run

1. Open the `call-it-out` folder
2. Double-click `index.html` — it opens directly in any browser
3. No server, no installation, no internet required

---

## Project Structure

```
call-it-out/
│
├── index.html              ← Main game file (open this)
│
├── css/
│   ├── style.css           ← Base styles, variables, buttons, layout
│   ├── screens.css         ← Screen-specific styles (home, stages, game, summary)
│   └── components.css      ← Reusable components (meters, chat bubbles, choices, feedback)
│
├── js/
│   ├── data.js             ← All 5 stages and 22 questions
│   └── game.js             ← Game engine and state management
│
└── README.md               ← This file
```

---

## Game Overview

CALL IT OUT is a scenario-based decision game teaching teenagers (aged 12–17) how to recognise, respond to, and report cyberbullying. Players take the role of Alex, a 15-year-old bystander, and navigate five escalating stages involving their friend Jordan.

### The 5 Stages

| Stage | Topic | Difficulty | Questions |
|-------|-------|-----------|-----------|
| 💬 The Group Chat | Photo shared without consent | Starter | 4 |
| 🎮 The Gaming Lobby | Exclusion and mockery in gaming | Standard | 4 |
| 👤 The Fake Account | Impersonation and identity theft | Standard | 4 |
| 🔥 The Pile On | Pressure to participate, threats | Hard | 5 |
| ✅ Resolution | Reporting, supporting, recovery | Hard | 5 |

**Total: 22 decisions**

### Game Mechanics

- **Trust Meter** — tracks how supported Jordan feels (start: 50%)
- **Situation Meter** — tracks escalation (start: 0%, max before restart: 100%)
- **Awareness Points** — earned for correct answers, spent on hints (5 pts)
- **Hint system** — costs 5 points, reveals thinking tip before answering
- **Stage unlock** — stages unlock in order as each is completed
- **Educational feedback** — every answer (correct or wrong) explains the real-world consequence

---

## Educational Aims

- Recognise different forms of cyberbullying (exclusion, impersonation, harassment, pile-ons)
- Understand the bystander effect and the power to intervene
- Know correct reporting steps on platforms and at school
- Build confidence to seek help from trusted adults
- Understand emotional impact on victims

---

## Technologies Used

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (ES6, IIFE module pattern)
- No frameworks, no libraries, no internet required

---

## Support Resources (Real)

If you or someone you know is experiencing cyberbullying:

- 🇬🇧 **Childline:** 0800 1111 (free, 24/7)
- 🌐 **childline.org.uk**
- 🏫 Talk to a trusted adult at school or home
