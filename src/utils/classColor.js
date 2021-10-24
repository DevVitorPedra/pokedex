
function retrieveClass(type) {


    switch (type) {
        case 'normal':
            return 'White'
        case 'water':
            return '#4D90D5';
        case 'fire':
            return '#F5AC78';
        case 'grass':
            return '#A7DB8D';
        case 'poison':
            return '#AB6AC8'
        case 'dragon':
            return '#5A8EA1'
        case 'rock':
            return '#C7B78B'
        case 'bug':
            return '#90C12C'
        case 'fighting':
            return '#D67873'
        case 'flying':
            return '#EEEEEE'
        case 'ground':
            return '#D97746'
        case 'ghost':
            return '#5269AC'
        case 'steel':
            return '#5A8EA1'
        case 'electric':
            return '#F3D23B'
        case 'psychic':
            return '#FA92B2'
        case 'ice':
            return '#74CEC0'
        case 'dark':
            return '#A29288'
        case 'fairy':
            return '#F4BDC9'
        default:
            break;
    }

}
export { retrieveClass }