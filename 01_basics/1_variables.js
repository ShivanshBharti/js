const accountId = 12345;
let accountEmail = "Bruce@waynce.inc";
var accountPassword = "Batman@123";
accountCity = "Gotham";

// accountId = 5050;

accountEmail = "Batman@wayne.inc";
accountPassword = "Bruce@321";
accountCity = "new jersey";

//shall not declare object without const, let or var

console.table([accountId, accountEmail, accountPassword, accountCity]);

/* Prefer not to use Var
because of issue of block scope and functional scope
instead use let and const */
