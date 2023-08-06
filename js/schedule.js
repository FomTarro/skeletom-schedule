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
    week: "Aug 7th - Aug 13th",
    events: [
        {
            date: "Wednesday, August 9th @ 12PM ET",
            title: "Let's Enjoy Dolphin Summer!",
            subtitle: "Collaboration with <span class='highlight'>MC</span> over on her channel, <span class='highlight'>twitch.tv/millennium_cyborg</span>!",
            images: ["./img/sub4.png", './img/mc_squared.png']
        },
        {
            date: "Thursday, August 10th 2023 @ 8PM ET",
            title: "Let's Watch POKéMON WORLDS!",
            subtitle: "Kicking off a <span class='highlight'>whole weekend</span> of late-night commentary<br>with <span class='highlight'>Professor Tiberius</span> and <span class='highlight'>Lass PiaPiUFO</span>!",
            images: ["./img/worlds.png", "./img/piapiufo_cropped.png", "./img/tiberius_cropped.png",]
        },
        {
            date: "Friday, August 11th 2023 @ 8PM ET",
            title: "Let's Watch POKéMON WORLDS!",
            subtitle: "Continuing our coverage of POKéMON WORLDS 2023 with <span class='highlight'>Day 2 of Swiss</span>!<br>Who will make it to the <span class='highlight'>Grand Finals</span>?",
            images: ["./img/worlds.png"]
        },
        {
            date: "Sunday, August 13th 2023 @ 12AM ET",
            title: "Let's Watch POKéMON WORLDS!",
            subtitle: "It's time to find out who the world's <span class='highlight'>POKéMON MASTER</span> truly is!",
            images: ["./img/worlds.png", "./img/trophy.png"]
        },
    ]
}