
let emp1 = {rollNo:100,name:'Bhoomi',age:22}
let emp2 = new Object();
let teamName = ['shanthanu',' Rifa',' prakash']
let MagagerNmae = new Array('Bill','Gate')
let testerTeam = new Array();
testerTeam[0] = 'saraswathi'
testerTeam[1] = 'ram'

function pressMe(){
    // console.log(names);
    // var names = 'Bhoomika'
    // console.log(names);

    // // console.log(age);  can't reslare or pre-declare in let object
    // getComputedStyle
    // let age = '22'
    // console.log(age);

    //cont
    //var
    //let

    dontPressBtn();
    console.log(emp1)
    emp2.id=103;
    emp2.name='abc';
    emp2.salary=200;
    console.log(emp2);

    // for (index = 0; index < teamName.length; index++) {
    //     document.write(teamName[index]);    
    // }
}
 
function dontPressBtn(){
    // document.write(emp1.name)
    console.log(testerTeam[1]);
    console.log(emp1);
    console.log(emp2);

   document.writeln(Test.display())
}

class Test{
    static display(){
        return 'this is static method'
    }
}
