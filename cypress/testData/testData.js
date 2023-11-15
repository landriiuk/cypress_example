import { faker } from '@faker-js/faker';

const url = Object.freeze({
    dashboard: '/web/index.php/dashboard/index',
    login: '/web/index.php/auth/login',
    admin_view_users: '/web/index.php/admin/viewSystemUsers',
});

function getRandomString(...options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
const validUserData = Object.freeze({
    role: getRandomString("Admin", "SSE"),
    status: getRandomString("Enabled", "Disabled"),
    password: faker.string.alpha(10) + faker.number.binary(2),
    employeeName: "Test",
    userName: faker.word.words(),
});

const invalidUserData = Object.freeze({
    role: getRandomString("Admin", "SSE"),
    status: getRandomString("Enabled", "Disabled"),
    password: faker.string.alpha(10) + faker.number.binary(2),
    employeeName: "Test",
    userName: faker.word.adjective(6),
});

export { url, validUserData, invalidUserData };