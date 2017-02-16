import add from './scripts/add';
//import subtract from './scripts/subtract';


document.querySelector('.add').addEventListener('click',()=>{
    console.log(add(3,4));
});

document.querySelector('.subtract').addEventListener('click',()=>{
    //console.log(subtract(6,5));
    require.ensure(['./scripts/subtract'],(require)=>{
        const subtract = require('./scripts/subtract').default;
        console.log(subtract(6,5));
    },'another');
})