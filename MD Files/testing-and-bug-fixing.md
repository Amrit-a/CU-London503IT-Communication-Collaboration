# Testing and Bug Fixing

During the testing phase, several issues were identified and resolved to improve gameplay stability, user experience, and educational effectiveness.

---

## 1. Trust Meter and Situation Meter Not Updating Correctly

**Problem:** After selecting an answer, the Trust Meter and Situation Meter did not visually update until the player clicked through to the next question, causing confusion about whether their answer had registered.

**Solution:** The meter update logic was moved to trigger immediately on answer selection rather than on page transition. Both meters now animate smoothly as soon as an answer is confirmed, providing clear real-time feedback.

---

## 2. Hint System Could Be Triggered After Answering

**Problem:** During early testing, players discovered they could spend Awareness Points to reveal a hint after already submitting an answer. This allowed players to retroactively justify wrong answers without any meaningful cost.

**Solution:** A state check was added to disable the hint button as soon as an answer is submitted. The hint button is now only active before the player confirms their selection.

---

## 3. Stage Restart Not Resetting Meters Correctly

**Problem:** When a player triggered a stage restart by allowing the Situation Meter to reach maximum, the meters did not fully reset. The Situation Meter correctly returned to zero but the Trust Meter retained its previous value, creating an inconsistent starting state.

**Solution:** A full state reset function was implemented to restore both meters to their default values whenever a stage restart is triggered. This ensures consistent conditions at the beginning of each attempt.

---

## 4. Educational Feedback Popup Overlapping on Mobile Screens

**Problem:** On smaller screen sizes, the educational feedback popup extended beyond the visible screen area, cutting off the feedback text and making it unreadable without scrolling.

**Solution:** The popup container was updated with responsive CSS sizing and a maximum height with internal scrolling enabled. The popup now fits correctly within the visible viewport on all tested screen sizes.

---

## 5. Answer Options Selectable Multiple Times

**Problem:** During testing it was discovered that players could click an answer option multiple times in quick succession, triggering the feedback popup to open multiple times simultaneously.

**Solution:** A single-selection lock was implemented. Once an answer option is clicked, all options are immediately disabled until the player proceeds past the feedback screen. This prevents duplicate event triggers.

---

## 6. Stage Progress Not Saving Between Sessions

**Problem:** When a player closed the browser and returned later, their stage progress was not retained. Players were returned to Stage 1 regardless of how far they had progressed.

**Solution:** Stage completion status and Awareness Point totals are now saved to local storage when each stage is completed. On return, the game reads local storage and unlocks completed stages accordingly.

---

## 7. Awareness Points Total Displaying Incorrectly on Summary Screen

**Problem:** The end-of-stage summary screen occasionally displayed an incorrect Awareness Points total, sometimes showing a lower value than the player had actually earned.

**Solution:** A timing issue in the score calculation function was identified. The total was being read before the final answer's points had been added. The calculation was restructured to ensure all points from the completed stage are added before the summary screen renders.

---

## 8. Full Story Mode Skipping Stage 3

**Problem:** When playing the Full Story mode, Stage 3 (The Fake Account) was skipped entirely and the game jumped directly from Stage 2 to Stage 4. Players missed five questions and the associated educational content.

**Solution:** The Full Story mode sequence array was corrected. A missing stage index entry was identified and restored. All five stages now appear in the correct order during Full Story mode.

---

## Result

After implementing these fixes, the game became stable, consistent, and educationally effective across all tested devices and screen sizes. Players can now progress through all five stages, receive accurate feedback, and complete the full story experience as intended.
