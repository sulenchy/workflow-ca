// SHOULD have imported logOut form editBtn.js, but it is not exported.
// Solution: I made a mock of editBtn.js (logOut.js) and export logOut from logOut.js into logOut.test.js
// So the actual test is located in logOut.test.js, and logOut is imported from logOut.js
//
// Also had to split up localStorage.removeItem("name", "token"); into two lines
// as it was not removing token from localStorage since it can take only one argument per call.
//
// Also had to add "jest-localstorage-mock": "^2.4.26", to devDependencies in package.json
// to get localStorage to work in tests.