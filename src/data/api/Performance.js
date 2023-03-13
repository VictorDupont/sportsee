class Performance {
    /**
     * @param {Object} data
     * @param {number} data.userId
     * @param {Object} data.kind
     * @param {Array} data.data
     * @param {number} data.data.kind
     * @param {number} data.data.value
     */
    constructor(data) {
        this._id = data.userId;
        this._kind = data.kind;
        this._data = data.data;
    }

    /**
     * @returns {number}
     */
    get id() {
        return this._id;
    }

    /**
     * @returns {Object}
     * @returns {string} return.kind (1: Cardio, 2: Énergie, 3: Endurance, 4: Force, 5: Vitesse, 6: Intensité)
     */
    get kind() {
        return this._kind;
    }

    /**
     * @returns {Array}
     * @returns {number} return.kind
     * @returns {number} return.value
     */
    get data() {
        return this._data;
    }

    /** 
     * @returns {Object}
     * @returns {string} return.kind
     * @returns {number} return.value
     */
    get performance() {
        return this._data.map((data) => {

            let kindName = "";

            switch(data.kind) {
                case 1:
                    kindName = "Cardio";
                    break;
                case 2:
                    kindName = "Énergie";
                    break;
                case 3:
                    kindName = "Endurance";
                    break;
                case 4:
                    kindName = "Force";
                    break;
                case 5:
                    kindName = "Vitesse";
                    break;
                case 6:
                    kindName = "Intensité";
                    break;
                default:
                    return data.kind;
            }

            return {
                kind: kindName,
                value: data.value
            }
        });
    }
}

export default Performance;