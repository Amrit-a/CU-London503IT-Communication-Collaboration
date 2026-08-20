/* ================================================
   CALL IT OUT — Game Data
   All 5 stages · 22 questions total
   ================================================ */

const STAGES = [

  /* ============ STAGE 1: THE GROUP CHAT ============ */
  {
    id: 0,
    name: 'The Group Chat',
    icon: '💬',
    desc: 'A class group chat starts sharing embarrassing content about Jordan.',
    difficulty: 'Starter',
    questions: [
      {
        chat: [
          { from: 'Class Group Chat', msg: '📷 [Someone posts an embarrassing photo of Jordan taken without their knowledge]', system: true },
          { from: 'Classmate_A', msg: 'lmaoo 💀💀' },
          { from: 'Classmate_B', msg: 'omg who took this' },
          { from: 'Classmate_C', msg: '😭😭 sending this to everyone' }
        ],
        q: 'People are reacting with laughing emojis. The photo is spreading quickly. What do you do?',
        choices: [
          'React with a laughing emoji so you don\'t stand out from the group',
          'Stay silent and hope someone else says something',
          'Privately message Jordan to let them know and check they\'re okay',
          'Screenshot and share it in another group chat'
        ],
        correct: 2,
        pts: 10,
        trustGood: 15, trustBad: -12,
        sitGood: -5,   sitBad: 18,
        feedback: {
          correct: 'Reaching out privately shows Jordan someone is on their side without drawing more attention to the post. Jordan needs to know they\'re not alone right now.',
          wrong: 'Your reaction is visible to everyone — including Jordan. What message does it send them?'
        },
        hint: 'Think about what Jordan needs right now, not what looks easiest for you.'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'alex i just saw it. i had NO idea that photo was posted. im so humiliated 😭' },
          { from: 'Alex', msg: 'I\'m so sorry. What do you want to do?', alex: true }
        ],
        q: 'Jordan is upset and doesn\'t know what to do. What do you suggest they do first?',
        choices: [
          'Send an angry message to the whole group confronting everyone',
          'Report the photo to the platform and ask the person who posted it to delete it',
          'Leave the group chat immediately and say nothing',
          'Post a photo of the person who shared it as payback'
        ],
        correct: 1,
        pts: 10,
        trustGood: 15, trustBad: -10,
        sitGood: -10,  sitBad: 15,
        feedback: {
          correct: 'Reporting the content and requesting deletion directly addresses the harm. Most platforms have clear processes for removing non-consensual photos and take these seriously.',
          wrong: 'Reacting with anger or retaliation usually escalates the situation. What actually removes the harmful content?'
        },
        hint: 'What action directly removes the post and creates a formal record?'
      },
      {
        chat: [
          { from: 'Classmate_A', msg: 'it was just a joke lol' },
          { from: 'Classmate_B', msg: 'jordan is so sensitive omg' },
          { from: 'Classmate_C', msg: 'yeah not that deep' },
          { from: 'Classmate_D', msg: 'it was banter calm down' }
        ],
        q: 'The group is dismissing Jordan\'s feelings and calling it a joke. What do you do?',
        choices: [
          'Agree it was probably not meant to hurt anyone',
          'Say nothing and quietly leave the conversation',
          'Calmly tell the group that sharing photos without someone\'s permission isn\'t a joke and causes real harm',
          'Tell Jordan privately they should just ignore it and move on'
        ],
        correct: 2,
        pts: 15,
        trustGood: 18, trustBad: -15,
        sitGood: -10,  sitBad: 22,
        feedback: {
          correct: 'Naming the behaviour calmly and clearly challenges the group\'s thinking without escalating the situation. Bystanders who speak up are one of the most effective forces against cyberbullying.',
          wrong: 'Staying silent when someone is being dismissed signals that you agree the behaviour is acceptable.'
        },
        hint: 'Jordan is reading everything in this group chat. What message does your silence send them?'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'please don\'t tell any adults. i\'m embarrassed and i don\'t want it to get worse 😢' },
          { from: 'Alex', msg: 'I hear you. But I\'m really worried about you...', alex: true }
        ],
        q: 'Jordan asks you not to involve any adults. What do you do?',
        choices: [
          'Agree to stay silent because it\'s Jordan\'s decision to make',
          'Tell a trusted teacher or parent anyway because you\'re genuinely worried about Jordan',
          'Post in the group calling out everyone involved publicly',
          'Tell Jordan to deal with it themselves if they won\'t let you help'
        ],
        correct: 1,
        pts: 10,
        trustGood: 12, trustBad: -20,
        sitGood: -12,  sitBad: 10,
        feedback: {
          correct: 'When a friend is being harmed, involving a trusted adult is the right thing to do even when it feels difficult. A good friend protects someone even when it\'s uncomfortable for them.',
          wrong: 'Keeping someone else\'s safety secret can sometimes cause more harm than good. Jordan\'s feelings are valid, but they need more support than you alone can provide.'
        },
        hint: 'What happens to Jordan if this stays secret and no one with real authority gets involved?'
      }
    ]
  },

  /* ============ STAGE 2: THE GAMING LOBBY ============ */
  {
    id: 1,
    name: 'The Gaming Lobby',
    icon: '🎮',
    desc: 'Jordan is being mocked and excluded in an online game in real time.',
    difficulty: 'Standard',
    questions: [
      {
        chat: [
          { from: 'Game Lobby System', msg: '👾 Classmate_A, Classmate_B, Jordan_15, Alex_15 have joined the lobby', system: true },
          { from: 'Classmate_A', msg: 'ugh why is Jordan in here' },
          { from: 'Classmate_B', msg: 'lol Jordan can\'t even play watch' },
          { from: 'Classmate_A', msg: 'everyone report Jordan for being trash 💀' }
        ],
        q: 'The chat is filling with mocking comments about Jordan. What do you do first?',
        choices: [
          'Laugh along so they don\'t turn on you next',
          'Leave the game and let Jordan deal with it',
          'Tell the classmates in the chat to stop — their comments aren\'t funny',
          'Report the game session to your school immediately'
        ],
        correct: 2,
        pts: 10,
        trustGood: 18, trustBad: -18,
        sitGood: -8,   sitBad: 22,
        feedback: {
          correct: 'Calling out the behaviour in the chat shows Jordan they\'re not alone and may make the others reconsider. Being a visible ally matters enormously in group settings.',
          wrong: 'Jordan can see every message in this chat. Your choice — including silence — sends them a clear message.'
        },
        hint: 'Jordan is reading the chat in real time. What does your choice communicate to them?'
      },
      {
        chat: [
          { from: 'Classmate_A', msg: 'haha everyone block Jordan\'s character so they can\'t move' },
          { from: 'Classmate_B', msg: 'yes do it 😂' },
          { from: 'OtherPlayer', msg: 'lmaoo they\'re stuck' },
          { from: 'Jordan_15', msg: 'this isn\'t funny. i can\'t play at all' }
        ],
        q: 'Multiple players are deliberately blocking Jordan from playing. What\'s the best response?',
        choices: [
          'Keep playing and hope it stops on its own',
          'Use the in-game report function to report the players for harassment',
          'Tell Jordan to create a new account to escape them',
          'Block Jordan\'s character too so the others stop targeting you'
        ],
        correct: 1,
        pts: 10,
        trustGood: 15, trustBad: -20,
        sitGood: -10,  sitBad: 20,
        feedback: {
          correct: 'Reporting through the platform\'s official system creates a record and may result in action being taken against the bullies. These tools exist for exactly this reason — use them.',
          wrong: 'Most games have built-in reporting tools for this situation. Using them isn\'t dramatic, it\'s exactly what they\'re designed for.'
        },
        hint: 'What tool does the game itself give you to handle situations like this?'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'alex this has been happening for weeks in different games. i\'ve literally stopped gaming altogether just to avoid them' },
          { from: 'Alex', msg: 'That\'s awful. You shouldn\'t have to stop gaming because of them.', alex: true }
        ],
        q: 'Jordan has been avoiding all gaming to escape the bullying. What do you advise?',
        choices: [
          'Tell Jordan to find different games where those classmates don\'t play',
          'Keep a record of incidents with screenshots and dates, then report it to school as a pattern of behaviour',
          'Create an anonymous account to confront the bullies directly',
          'Advise Jordan to delete all gaming accounts permanently'
        ],
        correct: 1,
        pts: 15,
        trustGood: 20, trustBad: -10,
        sitGood: -15,  sitBad: 12,
        feedback: {
          correct: 'Documenting incidents with screenshots and dates creates evidence that schools and platforms can act on. Avoidance alone doesn\'t solve the problem — it just hands the bullies more power.',
          wrong: 'Making Jordan avoid things they love gives the bullies exactly what they want. What actually creates a record that leads to real consequences?'
        },
        hint: 'What would a teacher or platform actually need to take meaningful action?'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'what if reporting it just makes things worse at school' },
          { from: 'Alex', msg: 'I understand. But you can\'t keep going through this alone.', alex: true }
        ],
        q: 'Jordan is scared that reporting it will make things worse at school. What do you say?',
        choices: [
          'Tell Jordan they\'re probably right and agree to drop it',
          'Explain that having documented evidence gives adults the power to act, and that Jordan won\'t have to face this alone',
          'Tell Jordan to just wait it out and see if it stops',
          'Post all the evidence online publicly yourself without asking Jordan'
        ],
        correct: 1,
        pts: 10,
        trustGood: 20, trustBad: -15,
        sitGood: -10,  sitBad: 10,
        feedback: {
          correct: 'Reassuring Jordan that they\'ll have support through the process is exactly what a trusted friend does. Evidence gives adults real tools to help, rather than just a "he said, she said" situation.',
          wrong: 'Fear of retaliation is understandable — but doing nothing guarantees nothing changes.'
        },
        hint: 'What does Jordan need to feel before they\'ll be willing to take action?'
      }
    ]
  },

  /* ============ STAGE 3: THE FAKE ACCOUNT ============ */
  {
    id: 2,
    name: 'The Fake Account',
    icon: '👤',
    desc: 'An anonymous account has been created to impersonate Jordan.',
    difficulty: 'Standard',
    questions: [
      {
        chat: [
          { from: 'Jordan', msg: 'alex i think someone made a fake account with my name and school photo 😰' },
          { from: 'Jordan', msg: '[screenshot: account posting unkind things pretending to be Jordan]' },
          { from: 'Alex', msg: 'Oh no. That\'s seriously wrong. What can I do to help?', alex: true }
        ],
        q: 'Jordan has found a fake account using their identity. What\'s the first step?',
        choices: [
          'Create a fake account yourself to post things in defence of Jordan',
          'Report the impersonation account to the platform immediately',
          'Message the account directly to find out who\'s behind it',
          'Post a warning on your own account telling people the account is fake'
        ],
        correct: 1,
        pts: 10,
        trustGood: 15, trustBad: -10,
        sitGood: -10,  sitBad: 15,
        feedback: {
          correct: 'Reporting impersonation to the platform is the fastest and most effective way to have the account removed. Platforms take these cases seriously — especially when someone\'s photo and real name are used.',
          wrong: 'Think about which action actually has the power to permanently remove the account.'
        },
        hint: 'Which action addresses the core problem — the account\'s existence?'
      },
      {
        chat: [
          { from: 'FakeJordan_account', msg: 'you should just leave school. nobody wants you there anyway' },
          { from: 'Jordan', msg: 'alex i got this from the fake account. i can\'t stop crying. i don\'t know what to do' }
        ],
        q: 'Jordan is visibly distressed by the message from the fake account. What do you do?',
        choices: [
          'Tell Jordan to reply and stand up for themselves directly',
          'Encourage Jordan to block the account and speak to a trusted adult about how they\'re feeling',
          'Try to find out who made it and confront them yourself',
          'Post the message publicly to shame whoever made the account'
        ],
        correct: 1,
        pts: 10,
        trustGood: 20, trustBad: -20,
        sitGood: -5,   sitBad: 22,
        feedback: {
          correct: 'Blocking stops further messages immediately. Encouraging Jordan to talk to a trusted adult means they\'re not handling the emotional impact alone. This message was a deliberate attempt to cause harm.',
          wrong: 'Jordan\'s immediate wellbeing is the priority right now. What reduces harm straight away and gets them the support they need?'
        },
        hint: 'What does Jordan most need in this exact moment — more confrontation, or real support?'
      },
      {
        chat: [
          { from: 'Alex', msg: 'Based on some things I\'ve seen recently, I think I have a strong idea of who made this account.', alex: true }
        ],
        q: 'You have a strong suspicion about who created the fake account. What\'s the right move?',
        choices: [
          'Confront the person you suspect face-to-face at school',
          'Post on social media naming the person you think is responsible',
          'Share your suspicion privately with a school staff member who can investigate properly',
          'Tell all your mutual friends who you think did it'
        ],
        correct: 2,
        pts: 15,
        trustGood: 10, trustBad: -15,
        sitGood: -12,  sitBad: 22,
        feedback: {
          correct: 'Sharing a suspicion with a trusted adult allows a proper investigation to take place, rather than risking wrongly accusing someone. Acting on suspicion publicly can cause serious harm to an innocent person.',
          wrong: 'Even if you\'re right, acting without evidence can backfire badly and make the whole situation worse. Who actually has the authority to investigate this?'
        },
        hint: 'What happens if you publicly accuse someone and it turns out you\'re wrong?'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'the platform removed the account! thank you for helping me report it 🙏' },
          { from: 'Jordan', msg: 'but what if they just make another one...' }
        ],
        q: 'The fake account was removed but Jordan is scared it will happen again. What do you advise?',
        choices: [
          'Tell Jordan it\'s over and not to worry about it anymore',
          'Advise Jordan to set their social media to private and report any new impersonation accounts immediately',
          'Suggest Jordan deletes all their social media completely',
          'Tell Jordan to make their own fake account for protection'
        ],
        correct: 1,
        pts: 10,
        trustGood: 15, trustBad: -10,
        sitGood: -10,  sitBad: 10,
        feedback: {
          correct: 'Making accounts private reduces exposure and reporting any new accounts immediately means platforms can act faster — especially with the history of previous reports already on record.',
          wrong: 'Completely deleting social media gives the bully even more power over Jordan\'s life. What gives Jordan back control without disappearing from platforms they use?'
        },
        hint: 'What protective steps keep Jordan on the platforms they use without leaving them vulnerable?'
      }
    ]
  },

  /* ============ STAGE 4: THE PILE ON ============ */
  {
    id: 3,
    name: 'The Pile On',
    icon: '🔥',
    desc: 'Classmates are pressured to join in. You are asked directly to participate.',
    difficulty: 'Hard',
    questions: [
      {
        chat: [
          { from: 'Classmate_A', msg: '[DM] share this post about Jordan. everyone else already has' },
          { from: 'Classmate_A', msg: '[sends a mocking post targeting Jordan]' }
        ],
        q: 'You\'re directly asked to share content mocking Jordan. What do you do?',
        choices: [
          'Share it because you don\'t want to be left out or targeted',
          'Don\'t share it — full stop. You don\'t need to explain yourself',
          'Share it but add a comment saying you feel bad about it',
          'Ask why they\'re doing it before deciding'
        ],
        correct: 1,
        pts: 10,
        trustGood: 22, trustBad: -28,
        sitGood: -15,  sitBad: 28,
        feedback: {
          correct: 'Not sharing the content is the single most important action available to you. Every share extends the reach of harm. You don\'t owe anyone an explanation for refusing to participate in bullying.',
          wrong: 'Sharing harmful content makes you part of the problem, regardless of your reason for doing it. Even one more share causes real damage.'
        },
        hint: 'What happens to the reach of that post every single time someone shares it?'
      },
      {
        chat: [
          { from: 'Classmate_A', msg: '[DM] if you don\'t share it i\'ll tell everyone you\'re friends with Jordan and you\'ll be next' },
          { from: 'Classmate_A', msg: 'your choice' }
        ],
        q: 'You\'re now being directly threatened for refusing to participate. How do you respond?',
        choices: [
          'Share the content to protect yourself from being targeted',
          'Agree to share it but privately decide never to actually do it',
          'Refuse to share, save the threatening message as evidence, and tell a trusted adult about the pressure you\'re under',
          'Threaten to report the classmate if they don\'t stop'
        ],
        correct: 2,
        pts: 15,
        trustGood: 15, trustBad: -20,
        sitGood: -10,  sitBad: 16,
        feedback: {
          correct: 'Being threatened for refusing to bully someone is itself a form of coercion. Keeping evidence and involving a trusted adult protects both you and Jordan. You shouldn\'t have to manage this pressure alone.',
          wrong: 'Any form of compliance — even false agreement — puts you in a difficult position. And threats don\'t stop when you give in; they usually get worse.'
        },
        hint: 'Who actually has the power to stop this pressure and protect you from the threat?'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'apparently loads of people are sharing stuff about me now. even people i thought were my friends' },
          { from: 'Jordan', msg: 'i genuinely don\'t know who to trust anymore' }
        ],
        q: 'Jordan feels completely isolated and betrayed. What\'s the most important thing to say?',
        choices: [
          'Tell Jordan to stay off all social media until it blows over',
          'Remind Jordan you\'re still there, and actively offer to go to a school counsellor together',
          'Suggest Jordan directly confronts the people who shared the post',
          'Tell Jordan this happens to everyone and it\'ll pass eventually'
        ],
        correct: 1,
        pts: 15,
        trustGood: 28, trustBad: -20,
        sitGood: -5,   sitBad: 12,
        feedback: {
          correct: 'Reminding Jordan they\'re not alone — and offering to physically go with them to seek help — is one of the most powerful things a bystander can do. Isolation is what the bullies want. Don\'t let them have it.',
          wrong: 'Jordan needs to feel genuinely supported by a real person right now. What actually provides that?'
        },
        hint: 'What does Jordan most need to hear from a trusted friend in this exact moment?'
      },
      {
        chat: [
          { from: 'Teacher_DM', msg: 'Alex — I\'ve heard there may be something serious happening with Jordan online. Do you know anything about what\'s been going on?' }
        ],
        q: 'A teacher has reached out to you directly asking what you know. What do you do?',
        choices: [
          'Say you don\'t know anything to avoid getting more involved',
          'Tell the teacher everything you know and share all the screenshots you\'ve saved',
          'Tell the teacher to ask Jordan directly instead',
          'Say you\'ll only share information if Jordan gives you permission first'
        ],
        correct: 1,
        pts: 15,
        trustGood: 15, trustBad: -15,
        sitGood: -22,  sitBad: 15,
        feedback: {
          correct: 'A teacher asking you directly is the moment everything you\'ve documented becomes useful. The screenshots and timeline you saved are exactly what they need to act effectively. This is why you kept them.',
          wrong: 'A teacher reaching out is a critical opportunity. The evidence you\'ve gathered can now make a real difference — but only if you share it.'
        },
        hint: 'What are those screenshots for if not for this exact moment?'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'the school is getting involved. i\'m scared but honestly... also kind of relieved' },
          { from: 'Classmate_B', msg: '[Group Chat] can\'t believe this got "escalated" over a few jokes' }
        ],
        q: 'Some students are angry that it got "escalated" to the school. How do you respond?',
        choices: [
          'Apologise for getting the school involved to keep the peace',
          'Calmly point out that they shouldn\'t have done what they did if they didn\'t want consequences',
          'Stay completely quiet to avoid any more conflict',
          'Blame someone else in the group to deflect attention'
        ],
        correct: 1,
        pts: 10,
        trustGood: 12, trustBad: -15,
        sitGood: -10,  sitBad: 15,
        feedback: {
          correct: 'Accountability is not escalation. People who engage in cyberbullying are responsible for the consequences of their own actions. You have absolutely nothing to apologise for.',
          wrong: 'Why would you apologise for protecting your friend? You did nothing wrong.'
        },
        hint: 'Who made every single decision that led to this situation being reported?'
      }
    ]
  },

  /* ============ STAGE 5: RESOLUTION ============ */
  {
    id: 4,
    name: 'Resolution',
    icon: '✅',
    desc: 'Take the correct steps to report, support, and help Jordan recover.',
    difficulty: 'Hard',
    questions: [
      {
        chat: [
          { from: 'Alex', msg: 'Jordan and I want to make a formal report. What\'s the right way to do this?', alex: true }
        ],
        q: 'You and Jordan want to formally report everything. What\'s the most effective approach?',
        choices: [
          'Send an anonymous tip to the school office',
          'Tell one trusted friend and hope word reaches the right teacher',
          'Speak directly to a pastoral lead, bring all organised evidence and screenshots, and ask what support is available for Jordan',
          'Post everything publicly on social media to pressure the school into acting'
        ],
        correct: 2,
        pts: 15,
        trustGood: 15, trustBad: -12,
        sitGood: -22,  sitBad: 12,
        feedback: {
          correct: 'A direct conversation with well-organised evidence gives the school everything it needs to take meaningful action. Anonymous tips are harder to follow up. Public posts can make the situation even more painful for Jordan.',
          wrong: 'Think about what actually gives the school the clearest picture and the strongest ability to act.'
        },
        hint: 'What does an adult with real authority actually need from you to act effectively?'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'i don\'t really want to go to school anymore. i feel like i have no friends left and i just... don\'t want to do anything' }
        ],
        q: 'Jordan is expressing serious distress — losing motivation and wanting to withdraw. What\'s the most important step?',
        choices: [
          'Tell Jordan things will get better and give it time to settle',
          'Encourage Jordan to speak to a school counsellor and make sure a trusted adult knows exactly how serious Jordan\'s feelings are',
          'Organise a group of friends to publicly defend Jordan online',
          'Suggest Jordan takes a couple of weeks off school to recover'
        ],
        correct: 1,
        pts: 15,
        trustGood: 28, trustBad: -22,
        sitGood: -10,  sitBad: 12,
        feedback: {
          correct: 'When someone says they don\'t want to do anything and feel like they have no friends, they need professional support — urgently. This is beyond what a friend alone can handle. In the UK, Childline is free on 0800 1111 (24/7).',
          wrong: 'What Jordan is expressing needs professional attention. Reassurance and time aren\'t enough here.'
        },
        hint: 'Who is actually equipped to help Jordan with how they\'re feeling emotionally right now?'
      },
      {
        chat: [
          { from: 'Classmate_A', msg: '[DM to Jordan] hey. i\'m actually really sorry about everything. i was being stupid' },
          { from: 'Jordan', msg: 'they\'ve apologised. i don\'t know what to do with that honestly' }
        ],
        q: 'One of the students involved has apologised to Jordan. Jordan doesn\'t know how to respond. What do you advise?',
        choices: [
          'Tell Jordan they have to accept the apology so everyone can move on',
          'Tell Jordan they should never forgive anyone who hurt them like this',
          'Encourage Jordan to take time to decide how they feel — forgiveness is a personal choice, not an obligation',
          'Advise Jordan to publicly accept it even if they don\'t mean it, to avoid further conflict'
        ],
        correct: 2,
        pts: 10,
        trustGood: 15, trustBad: -10,
        sitGood: -5,   sitBad: 6,
        feedback: {
          correct: 'Forgiveness is entirely Jordan\'s choice and Jordan\'s timeline. Pressuring someone to forgive before they\'re ready can add to the harm they\'ve already experienced. An apology doesn\'t automatically mean reconciliation.',
          wrong: 'Whose feelings should be at the centre of this decision?'
        },
        hint: 'Who should be in control of how to respond to this apology — Jordan, or anyone else?'
      },
      {
        chat: [
          { from: 'Jordan', msg: 'the school has actually taken proper action against the students involved' },
          { from: 'Jordan', msg: 'i feel a bit safer knowing something real actually happened. thank you for not just ignoring it alex' }
        ],
        q: 'Jordan is starting to feel safer. Looking back across everything — what was the single most important thing you did?',
        choices: [
          'Sharing some of the content early so you could see what was really going on',
          'Saying nothing publicly so as not to make things worse',
          'Speaking up early, documenting everything, and consistently involving trusted adults',
          'Waiting until Jordan specifically asked for your help before getting involved'
        ],
        correct: 2,
        pts: 10,
        trustGood: 12, trustBad: -6,
        sitGood: -12,  sitBad: 6,
        feedback: {
          correct: 'Early, documented, supported action made all the difference. Every correct decision — speaking up, saving evidence, involving adults — gave Jordan a better outcome than if you\'d stayed silent.',
          wrong: 'Think about what actually changed the situation for Jordan. Which combination of actions created the outcome Jordan is feeling now?'
        },
        hint: 'What combination of actions led directly to the outcome Jordan is experiencing now?'
      },
      {
        chat: [
          { from: 'Alex', msg: 'I\'m really glad you\'re feeling a bit better.', alex: true },
          { from: 'Jordan', msg: 'honestly... having even one person actually stand up and not just watch made everything different' }
        ],
        q: 'Finally — what is the most important thing for a bystander to understand about cyberbullying?',
        choices: [
          'Staying silent is always the safest option for everyone involved',
          'It\'s better to wait and see whether things resolve on their own first',
          'Bystanders have real power — choosing to act early can prevent serious harm from escalating',
          'Getting involved always makes things more complicated for everyone'
        ],
        correct: 2,
        pts: 15,
        trustGood: 20, trustBad: -10,
        sitGood: -20,  sitBad: 12,
        feedback: {
          correct: 'Research consistently shows that bystander intervention is one of the most powerful forces against cyberbullying. Silence is never neutral — it signals that the behaviour is acceptable. You changed Jordan\'s story by choosing to act.',
          wrong: 'Think about what would have happened at every single stage of Jordan\'s situation if you had said nothing.'
        },
        hint: 'What did Jordan say made the biggest difference of all?'
      }
    ]
  }

]; /* end STAGES */
