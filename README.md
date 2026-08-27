# StopWatch
A stopwatch web application built with HTML, CSS, and Vanilla JavaScript. 

# JavaScript Precision Stopwatch

A clean, responsive web application that tracks time with centisecond accuracy (`00:00:00:00`) and supports start, pause, resume, and reset functionality.

## About

I built this project to challenge myself beyond basic counters and code-alongs. Instead of relying on simple number incrementing—which drifts over time due to browser lag—I designed the app using real timestamp math via `Date.now()`. I worked through complex state logic to handle pausing without losing time, applied modulo arithmetic to control unit boundaries, and formatted numbers.

## What I Learned

While building this project, I practiced:

* **Timestamp Math** — calculating accurate elapsed time using `Date.now()` differences rather than uncalibrated step counters
* **State Management** — maintaining `elapsedTime` across pause/resume states to prevent time from resetting when resuming
* **Modulo Arithmetic** — using the remainder operator (`%`) to reset centiseconds at `100`, seconds at `60`, and minutes at `60`
* **Precise Interval Control** — storing interval IDs in global state to start and clear intervals using `setInterval()` and `clearInterval()`
* **String Padding** — using `.toString().padStart(2, '0')` to enforce two-digit formatting across all time units
* **Flexbox Layouts** — structuring nested flex containers to align the central clock display and control buttons vertically and horizontally

## Features

* **Centisecond Precision** — tracks elapsed time down to hundredths of a second in `HH:MM:SS:CS` format
* **Pause & Resume** — seamlessly saves accumulated time so the timer picks up right where you left off
* **Clean Reset** — clears active interval loops and wipes stored timestamps back to `00:00:00:00`
* **Leading Zero Formatting** — ensures every unit always renders as a padded two-digit string
* **Modern Dark-Mode UI** — styled with high-contrast button states, subtle neon glow effects, and hover interactions

## Technologies Used

* HTML
* CSS
* JavaScript

## Purpose

This project is part of my journey mastering JavaScript and front-end development. Building a stopwatch allowed me to tackle real-world state management challenges, master modulo division, handle asynchronous timers, and refine my understanding of DOM manipulation and CSS Flexbox alignment.

I plan to keep building and recreating projects to sharpen my software engineering skills.

## Preview
<img width="1919" height="927" alt="Screenshot 2026-08-26 215123" src="https://github.com/user-attachments/assets/0bcb3bc9-fe98-4bdd-b7d7-5f8be5d033ce" />


## Live Demo

[View the Stopwatch App](https://eliotcs.github.io/StopWatch/)
