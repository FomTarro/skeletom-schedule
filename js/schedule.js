/**
 * A Schedule list.
 * @typedef {Object} Schedule
 * @property {Item[]} events - What events are on the schedule?
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
    events: [
        {
            date: "Sunday, October 31st, 2023 @ 8PM ET",
            title: "Let's Endure The Four-Year Journey Of the Soul",
            subtitle: "Year three of four! <span class='highlight'>WOW~!</span>",
            img: "./img/tork.png"
        },
        {
            date: "Sunday, October 31st, 2023 @ 8PM ET",
            title: "Let's Endure The Four-Year Journey Of the Soul",
            subtitle: "Year three of four! <span class='highlight'>WOW~!</span>",
            img: "./img/tork.png"
        },
        {
            date: "Sunday, October 31st, 2023 @ 8PM ET",
            title: "Let's Endure The Four-Year Journey Of the Soul",
            subtitle: "Year three of four! <span class='highlight'>WOW~!</span>",
            img: "./img/tork.png"
        }
    ]
}