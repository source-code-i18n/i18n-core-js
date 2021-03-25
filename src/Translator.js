import LanguageMap from 'language-files/maps';

class Translator {
	constructor(naturalLanguage, inputStream) {
		this.inputStream = inputStream;
		this.tokenQueue = [];
	}

	translate() {
		const tokens = this.inputStream.split(' ');
		let isEmbeddedInString = false;
		let currentToken;
		for (let i = 0; i < tokens.length; i += 1) {
			currentToken = tokens[i];
				// If we are in a string, we don't want to translate the text
				if (currentToken === '"' || currentToken === '\'') {
					isEmbeddedInString = !isEmbeddedInString;
				} else if (isKeyword(currentToken)) { // We have a keyword
					this.tokenQueue.push(translateKeyword(currentToken));
				} else { // It is literally any other token
					this.tokenQueue.push(currentToken);
				}
			}
		}

	isKeyword(keyword) {
		return keyword in LanguageMap;
	}

	translateKeyword(keyword) {
		return LanguageMap[keyword];
	}
}

export default Translator;
