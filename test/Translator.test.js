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
});
