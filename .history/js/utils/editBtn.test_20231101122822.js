// SHOULD have imported logOut form editBtn.js, but it is not exported.
// Solution: make mock of editBtn.js (logOut.js) and export logOut from logOut.js into logOut.test.js
// So test is located in logOut.test.js, and logOut is imported from logOut.js
//
// Also had to split up localStorage.removeItem("name", "token"); into two lines
