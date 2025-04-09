import app from"./app.js";
/*Function expression (se llama despues despues)*/
const main = () =>{
    app.listen(app.get("port"));
    console.log(`The companys web server  is running on port ${app.get("port")}`);
}
main();
/*Function declaration */
