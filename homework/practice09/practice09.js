const Actions = require('../../utils/Actions');

function test1() {
    Actions.visitUrl('www.techglobal.com')
        .then((data) => {
            console.log(data);
            return Actions.login('TechGlobal', 'Test1234')
        })
        .then((data) => {
            console.log(data);
            return Actions.validateTitle(' ')
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err))



}
//test1();
console.log('XXXXXXXXXXXXXXXXXXXXX Test2 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

async function test2(){
    try{
        console.log(await Actions.visitUrl('www.TechGlobal.com'));
        console.log(await Actions.login('TechGlobal', 'Test1234'));
        console.log(await Actions.validateTitle(' '));

    }
    catch(err ){
        console.log(err)
    }
}
test2();