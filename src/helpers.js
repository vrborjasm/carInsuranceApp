export function differenceBetweenYears(year) {
    return new Date().getFullYear() - year;
}

export function estimateByBrand(brand) {
    let incremento;

    switch(brand) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

export function insureIncrement(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}