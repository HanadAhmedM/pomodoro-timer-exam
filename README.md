# pomodoro-timer-exam
Individuell examination – Git &amp; Agilt (solo) 
# Pomodoro Timer

A web-based Pomodoro Timer with focus sessions and short breaks, featuring a circular progress design and alarms. Built as part of the MU25 course examination for Git & Agile practices.

---

## Innehåll

- [Bakgrund](#bakgrund)
- [Funktioner](#funktioner)
- [Tekniker](#tekniker)
- [Arbetsflöde](#arbetsflöde)
- [Kom igång](#kom-igång)
- [PR Reviews](#pr-reviews)
- [Konflikter](#konflikter)


---

## Bakgrund

This project was created for the MU25 course to demonstrate full Git workflow, Agile user stories, and feature implementation with proper PRs, reviews, and conflict resolution.

---

## Funktioner

- Fokuspass på 25 minuter
- Paus på 30 sekunder med alarm
- Start / Paus / Fortsätt / Återställ-knappar
- Cirkulär visualisering av både fokuspass och paus
- Visuell indikator för paus (färgändring)
- Responsiv design för desktop och mobil
- Timer fortsätter korrekt efter paus
- Alarm stops when “Fortsätt” is clicked

---

## Tekniker

- HTML, CSS, JavaScript
- DOM manipulation
- Canvas / SVG for circular progress
- Git & GitHub (branches, PRs, squash merges)
- Trello for Agile workflow

---

## Arbetsflöde

- Trello board: [Pomodoro Timer Board](https://trello.com/b/your-board-id)
- 1 Trello card → 1 feature branch → 1 PR → squash merge to main
- Main branch updated only via PR
- PR titles: `feat(usX-feature): short description`
- PR description includes why + how + Trello link

---
## PR Reviews
Given:

- Review 1: PR  – (https://github.com/VitaliyBeletskiy/mu25-git-agile-bookmarks-mini/pull/3)

- Review 2: PR  – (https://github.com/VitaliyBeletskiy/mu25-git-agile-bookmarks-mini/pull/4#pullrequestreview-3417026003)

Mottagen:

- Review 1: PR1  – (https://github.com/HanadAhmedM/pomodoro-timer-exam/pull/1)
- Review 2: PR2  – (https://github.com/HanadAhmedM/pomodoro-timer-exam/pull/2)

---
## Konflikter
- (https://github.com/HanadAhmedM/pomodoro-timer-exam/pull/6)

## Kom igång

**Live demo:** *(if available)*  

To run locally:

```bash
git clone https://github.com/HanadAhmedM/pomodoro-timer-exam.git
cd pomodoro-timer-exam/starter
open index.html
