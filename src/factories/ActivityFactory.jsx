import Activity from "../data/api/Activity";

/**
 * @param {Object} data
 * @param {string} type
 * @returns {Activity}
 */
class ActivityFactory {
    constructor(data, type) {
        if(type === "API") {
            return new Activity(data);
        }
    }
}

export default ActivityFactory;