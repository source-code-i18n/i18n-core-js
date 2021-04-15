/* global describe, it */
import Translator from '../src/Translator';

describe('Translator', () => {
  let sut;
  it('translates successfully', () => {
    const inputStream = `
    clase Test {
      esta.helloThere = 'Hola';
      constante myFunction = () => {
        si(verdadero) {
          consola.registro('Es verdad');
        } demás {
          consola.registro('Es falso');
        }

        regreso esta.helloThere;
      }
    }`;

    const languageMap = {
      si: 'if',
      esta: 'this',
      falso: 'false',
      registro: 'log',
      clase: 'class',
      demás: 'else',
      regreso: 'return',
      verdadero: 'true',
      constante: 'const',
      consola: 'console',
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

    sut = new Translator(languageMap, inputStream);

    expect(sut.getTranslatedFile()).toBe(expectedResult);
  });
});
