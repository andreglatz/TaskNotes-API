module.exports = {
    isContentEnough(data = {}) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                if (element == undefined || element.length < 4 || element.length > 20) {
                    throw undefined;
                }
            }
        }
    }
}