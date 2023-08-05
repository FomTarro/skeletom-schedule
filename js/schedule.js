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
            subtitle: "Mystery collab! With who, I wonder?<br>You'll just have to tune in <span class='highlight'>AND FIND OUT!</span>",
            images: ["./img/sub4.png", './img/mc_squared.png']
        },
        {
            date: "Thursday, August 10th 2023 @ 8PM ET",
            title: "Let's Watch POKEMON WORLDS 2023!",
            subtitle: "Kicking off a whole weekend of commentary with <span class='highlight'>Professor Tiberius</span> and <span class='highlight'>Lass PiaPiUFO</span>!",
            images: ["./img/tork.png"]
        },
        // {
        //     date: "Friday, August 11th 2023 @ 8PM ET",
        //     title: "Let's Watch POKEMON WORLDS 2023!",
        //     subtitle: "So you want to be a master? Of Pokemon? Do you have the skills to be <span class='highlight'>NUMBER ONE?</span>",
        //     images: ["./img/tork.png"]
        // },
        // {
        //     date: "Sunday, August 13th 2023 @ 12AM ET",
        //     title: "Let's Watch POKEMON WORLDS 2023!",
        //     subtitle: "Tune in for the VGC <span class='highlight'>grand finals</span> and see who comes out on top!",
        //     images: ["./img/tork.png"]
        // },
    ]
}