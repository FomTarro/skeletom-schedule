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
 * @property {string[]} images - Relative path to the thumbnail.
 */

/** 
* @constant - List of all events.
* @type {Schedule}
*/
const SCHEDULE = {
    week: "Aug 28st - Sept 2nd",
    events: [
        {
            date: "<span class='highlight'>???</span>, ??? @ 8PM ET",
            title: "Let's ???",
            subtitle: "???",
            images: []
        },
        {
            date: "<span class='highlight'>Friday</span>, September 1st @ 8PM ET",
            title: "Let's Collect Every Ribbon!",
            subtitle: "Our ongoing quest to load Torkoal up with<br><span class='highlight'>every ribbon in the games</span> continues!",
            images: ["./img/ribbons_transparent_short.png"]
        },
    ]
}