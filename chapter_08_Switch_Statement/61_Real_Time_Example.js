let statusCode = 400;

switch (statusCode) {
    case 200:
        console.log("200 OK");
        break;
    case 201:
        console.log("201 CREATED");
        break;
    case 404:
        console.log("404 PAGE NOT FOUND");
        break;
    case 400:
        console.log("400 FAIL");
        break;
    case 500:
        console.log("500 INTERNAL SERVER ERROR");
        break;
    default:
        console.log("Not Matched");
        break;
}