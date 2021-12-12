//* =======================
//* === enums y objetos ===
//* =======================

// enums -> enumerables | pueden ser number o string
enum Roles {
    User = 'USER',
    Admin = 'ADMIN',
    SuperAdmin = 'SUPER_ADMIN'
}

console.log(Roles.Admin);       


// object -> objetos | 
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};

console.log(roles.User);