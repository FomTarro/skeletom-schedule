/**
 * A Schedule list.
 * @typedef {Object} Schedule
 * @property {Item[]} events - What events are on the schedule?
 * @property {string} week - The week the schedule covers
 */

/**
 * A Schedule event.
 * @typedef {Object} Item
 * @property {string} date - What day and time?
 * @property {string} title - What's it called?
 * @property {string} subtitle - Something witty.
 * @property {string} img - Relative path to the thumbnail.
 */

/** 
* @constant - List of all events.
* @type {Schedule}
*/
const SCHEDULE = {
    week: "Aug 7th - Aug 13th",
    events: [
        {
            date: "Wednesday, August 9th @ 12PM ET",
            title: "Let's Enjoy Dolphin Summer!",
            subtitle: "Mystery collab! With who, I wonder? You'll just have to tune in <span class='highlight'>AND FIND OUT!</span>",
            img: "./img/tork.png"
        },
        {
            date: "Thursday, August 10th 2023 @ 8PM ET - Sunday August 13th @ 2AM EST",
            title: "Let's SHOUTCAST POKEMON WORLDS 2023!",
            subtitle: "So you want to be a master? Of Pokemon? Do you have the skills to be <span class='highlight'>NUMBER ONE?</span>",
            img: "./img/tork.png"
        },
    ]
}