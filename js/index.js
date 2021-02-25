import users from "./users.js";

console.table(users);


//==================Task 1================================

const getUserNames = users => {

    return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//==================Task 2================================

const getUsersWithEyeColor = (users, color) => {

    return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.log(getUsersWithEyeColor(users, 'green'));
console.log(getUsersWithEyeColor(users, 'white'));


//===================Task 3===============================

const getUsersWithGender = (users, gender) => {

    return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.log(getUsersWithGender(users, 'female'));


//===================Task 4===============================

const getInactiveUsers = users => {

    return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


//====================Task 5=============================

const getUserWithEmail = (users, email) => {

    return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));


//===================Task 6==============================

const getUsersWithAge = (users, min, max) => {

    return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


//==================Task 7===============================

const calculateTotalBalance = users => {

    return users.reduce(((acc, user) => acc + user.balance), 0);
};

console.log(calculateTotalBalance(users)); // 20916


//=================Task 8===============================

const getUsersWithFriend = (users, friendName) => {

    return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Sharron Pace'));


//==================Task 9==============================

const getNamesSortedByFriendsCount = users => {

    return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


//==================Task 10=============================

const getSortedUniqueSkills = users => {

    return users.reduce((allSkills, user) => [...allSkills, ...user.skills], [])
        .filter((skill, index, allSkills) => allSkills.indexOf(skill) === index)
        .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

