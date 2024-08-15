const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {

    const capital = capitals[country];

    if (capital) {
        return capital;
    } else {
        return `No hemos podido encontrar la capital de ${country}.`;
    }
}

const country = "Norway";
const capital = getCapital(country);
console.log(`La capital de ${country} es ${capital}.`);
