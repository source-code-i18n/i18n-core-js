/**
 * Class that is meant to translate the input stream given a language map.
 * Method for consumption: getTranslatedFile
 */
class Translator {
	constructor(naturalLanguageMap, inputStream) {
		this.translatedTokens = [];
		this.inputStream = inputStream;
		this.languageMap = naturalLanguageMap;
		this.javascriptCharacters = ['.', '(', ')', ':', ';', '{', '}', '[', ']', '*', '/', '-', '=', '+', '!', '@',	'#', ' ', '\n', "'", '\'', '?', '<', '>', '^', '$', '&', ',', '_', '-'];
	}

	/**
	 * Indicates whether or not a token is a keyword to be translated or not. Keyword examples include:
	 * const, let, this, etc...
	 * @param {string} keyword - The token we want to determine if it is in the language map (i.e.
	 * if it is a keyword).
	 * @returns {bool} - True if the token is in the map. False otherwise.
	 */
	isKeyword(keyword) {
		return keyword in this.languageMap.keywords;
	}

	/**
	 * Retrieves the translated keyword from the language map.
	 * @param {string} keyword - The keyword we are wanting to translate.
	 * @returns {string} - The translated keyword.
	 */
	translateKeyword(keyword) {
		return this.languageMap.keywords[keyword];
	}

	/**
	 * Indicates whether or not a token is an api symbol to be translated or not. Api symbol examples include:
	 * console.log, Array.some, parseInt, etc...
	 * @param {string} apiSymbol - The token we want to determine if it is in the language map.
	 */
	isApiSymbol(apiSymbol) {
		return apiSymbol in this.languageMap.apiSymbols;
	}
	
	/**
	 * Retrieves the translated api symbol from the language map.
	 * @param {string} apiSymbol - The apiSymbol we are wanting to translate.
	 * @returns {string} - The translated apiSymbol.
	 */
	 translateApiSymbol(apiSymbol) {
		return this.languageMap.apiSymbols[apiSymbol];
	}

	/**
	 * Tokenizes the input stream by converting a string into an array.
	 * @returns {Array} - The tokenized version of the input stream.
	 */
	tokenize() {
		let buffer = '';
		const tokens = [];
		[...this.inputStream].forEach((character) => {
			// Test to see if that character is in the character arrays.
			if(this.javascriptCharacters.some(element => element === character)) {
				if(buffer.length > 0) {
					// Push the buffer
					tokens.push(buffer);
					// Push the current character
					tokens.push(character);
					// Clear the buffer
					buffer = '';
				} else {
					tokens.push(character);
				}
			} else {
				buffer += character;
			}
		});

		return tokens;
	}

	/**
	 * Translates the token stream.
	 */
	translate() {
	const tokens = this.tokenize();
	let isEmbeddedInString = false;
	tokens.forEach((currentToken) => {
			// If we are in a string, we don't want to translate the text
			if (currentToken === '"' || currentToken === '\'') {
				this.translatedTokens.push(currentToken);
				isEmbeddedInString = !isEmbeddedInString;
			} else if (this.isKeyword(currentToken) && !isEmbeddedInString) { // We have a keyword
				this.translatedTokens.push(this.translateKeyword(currentToken));
			} else if (this.isApiSymbol(currentToken) && !isEmbeddedInString) { // We have an api symbol
				this.translatedTokens.push(this.translateApiSymbol(currentToken));
			} else { // It is literally any other token
				this.translatedTokens.push(currentToken);
			}
		});
	}

	/**
	 * This is designed to be the public facing method to be consumed (besides the constructor)
	 * to translate the original input stream.
	 * @returns {string} - The string that is the translated file.
	 */
	getTranslatedFile() {
		this.translate();
		return this.translatedTokens.join('');
	}
}

export default Translator;
