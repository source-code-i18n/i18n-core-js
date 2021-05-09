/* global describe, it */
import Translator from '../src/Translator';

describe('Translator', () => {
  it('translates successfully', () => {
    const inputStream = `
    clase Test {
      esta.helloThere = 'Hola';
      constante myFunction = () => {
        si(verdadero) {
          console.log('Es verdad');
        } demás {
          console.log('Es falso');
        }

        regreso esta.helloThere;
      }
    }`;

    const languageMap = {
      apiSymbols: {},
      keywords: {
        si: 'if',
        esta: 'this',
        falso: 'false',
        clase: 'class',
        registro: 'log',
        demás: 'else',
        regreso: 'return',
        verdadero: 'true',
        constante: 'const',
      }
    };

    const expectedResult = `
    class Test {
      this.helloThere = 'Hola';
      const myFunction = () => {
        if(true) {
          console.log('Es verdad');
        } else {
          console.log('Es falso');
        }

        return this.helloThere;
      }
    }`;

    const sut = new Translator(languageMap, inputStream);
    expect(sut.getTranslatedFile()).toBe(expectedResult);
  });

  it('translates apiSymbols properly', () => {
    const languageMap = {
      keywords: {},
      apiSymbols: {
        consola: 'console',
        registro: 'log',
      }
    }

    const inputStream = `consola.registro('Hola');`;
    const expectedResult = `console.log('Hola');`;

    const sut = new Translator(languageMap, inputStream);
    expect(sut.getTranslatedFile()).toBe(expectedResult);
  });

  it('does not translate comments', () => {
    const inputStream = `
    /**
     * Hola!
     */
    clase Test {
      /*
       * Hola!
       */
      esta.helloThere = 'Hola';
      // Hola
      constante myFunction = () => {
        si(verdadero) {
          console.log('Es verdad');
        } demás {
          console.log('Es falso');
        }

        regreso esta.helloThere;
      }
    }`;

    const languageMap = {
      apiSymbols: {},
      keywords: {
        si: 'if',
        esta: 'this',
        falso: 'false',
        clase: 'class',
        registro: 'log',
        demás: 'else',
        regreso: 'return',
        verdadero: 'true',
        constante: 'const',
      }
    };

    const expectedResult = `
    /**
     * Hola!
     */
    class Test {
      /*
      * Hola!
      */
      this.helloThere = 'Hola';
      // Hola
      const myFunction = () => {
        if(true) {
          console.log('Es verdad');
        } else {
          console.log('Es falso');
        }

        return this.helloThere;
      }
    }`;

    const sut = new Translator(languageMap, inputStream);
    expect(sut.getTranslatedFile()).toBe(expectedResult);
  });
});
