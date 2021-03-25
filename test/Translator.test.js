/* global describe, it */
import Translator from '../src/Translator';

describe('Translator', () => {
  let sut;
  it('translates successfully', () => {
    const inputStream = `si(verdadero) {
      consola.registro('Es verdad')
    } demás {
      consola.registro('Es falso')
    }`;
    const languageMap = {
      si: 'if',
      demás: 'else',
      falso: 'false',
      registro: 'log',
      verdadero: 'true',
      consola: 'console',
    };
    const expectedResult = `if(true) {
      console.log('Es verdad')
    } else {
      console.log('Es false')
    }`;

    sut = new Translator(languageMap, inputStream);

    expect(sut.translate()).toBe(expectedResult);
  });
});
