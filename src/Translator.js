class Translator {
    constructor(naturalLanguage, inputStream) {
        this.inputStream = inputStream;
        // load the translations for the natural language and JavaScript
        this.naturalLanguageMap = require('language-files/javascript/' + naturalLanguage);
        this.tokenQueue = [];
    }

    translateFile() {
        const tokens = this.inputStream.split(' ');
        let currentToken;
        for(let i = 0; i < tokens.length; i += 1) {
            currentToken = tokens[i];
            if () {

            } else {
                this.tokenQueue.push(currentToken);
            }
        }
    }
}

export default Translator;
