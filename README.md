# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/time-tracking-dashboard-challenge-eK9ekEPjzV)
- Live Site URL: [Add live site URL here]([https://your-live-site-url.com](https://faresthedev.github.io/Time-tracking-dashboard/))

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

### What I learned
One of the things I learned in this challenge is how to handle my frustration. I learned how to control my creeping thoughts when I face a hard challenge, and trust me, I fought those feelings like there's no tomorrow! 
And another thing I learned is to start small, even if the problem is complex. start small and basic then add complexity as you need it.

But on to the more technical problems, there are two things I did face for the first time, and they were hard to work on, but I did really great in the end:

Problem: the stacked up cards:
The problem I was having is that I didn't know how to make them stack above each other and get them to align in a grid. I tried to set an index value to them, and it worked, but the placement was ruined for some reason. One easy way I thought about is to make an SVG background and set it to the card to make it look like two cards above each other, and I believe that would solve the problem. But I wanted to know how to make it with CSS and HTML because I loved the idea of it, and I want to make future projects with it and add animations to the cards. That won't be possible, obviously, if I just use an SVG background, but that's a tip for you if you liked how they look and you aren't an extra ✨ like me!
So to make them “look like” they are about each other is just that., make it look like they are about each other by adding box-shadow that will be over the other div, and boom, you did it!

```css
.user-info {
box-shadow: 0 20px var(--dark-blue);
}
```

Problem: being DRY like a smart programmer:
The other problem I had was repeating myself too much. As you can see in the project, there are 6 cards: work, play, study, exercise, social, and selfcare. Each card has a current time count and a previous time count, and there are also three data types for each one: daily, weekly, and monthly. Therefore, I am basically bound to repeat myself and create the ugliest and most inefficient code ever. So, I spent an hour and a half just trying to solve this problem.

First, I made an array with the type of information each card has:

```jsx
const informationType = ["work", "play", "study", "exercise", "social", "self-care"];
```

And by making this array, now I can loop and dynamically change the targeted ID:

```jsx
const currentCount = document.getElementById(
      `current-${informationType[i]}-count`
    );
```

And this "current-{}-count" will target each current count,of each information type, in each card with couple of lines of code. 

```html
<div class="card-text">
  <h1 class="time-count" id="current-work-count"></h1>
	<h3 id="previous-work-count"></h3>
</div>
```
Note: every ID is the same for the other cards except the type of the information (ex: `id="current-play-count"` `id="previous-play-count"`), and that’s how I was able to reach every type.

And I did the same thing to the “previous count”:
```jsx
const previousCount = document.getElementById(
      `previous-${informationType[i]}-count`
    );
```

Then in the same loop, we will take the hours form the database, and miniplate the DOM 
```jsx
currentCount.textContent = `${data[i].timeframes.daily.current}hrs`;
    previousCount.textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
```

And all of the previous code is in three functions with small changes, one for the daily, weekly and monthly information. The example I just gave you is from the `getDailyData()` function, which will be called when clicking on the daily button. Basically, the same process will be taken for the weekly and monthly buttons.

## Author

- Frontend Mentor - [@FaresTheDev](https://www.frontendmentor.io/profile/FaresTheDev)
- Twitter - [@FaresTheDev](https://www.twitter.com/FaresTheDev)
