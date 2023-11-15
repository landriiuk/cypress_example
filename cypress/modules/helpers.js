export function getRandomString(...options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}