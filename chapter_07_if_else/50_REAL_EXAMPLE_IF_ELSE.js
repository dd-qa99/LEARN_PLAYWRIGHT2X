let isUserLoggedIn = false;

let userRole = "ejbfewf";

if (isUserLoggedIn) {
    if (userRole === "Admin") {
        console.log("Admin can do all the things");
    }
    else if (userRole === "Editor") {
        console.log("Editor can only edit");
    }
    else if (userRole === "Viewer") {
        console.log("Viewer can only view");
    }
    else {
        console.log("You maybe a guest!");
    }
}
else {
    console.log("You are not LOGGED IN !");
}