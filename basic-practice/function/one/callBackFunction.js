function explain_callback(name, age, task) {
    console.log('hello', name);
    console.log('your age', age)
    task();
}

function washHand() {
    console.log('wash hand with soap');
}

function takeShower() {
    console.log('take a shower');
}

function scrollFacebook() {
    console.log('scroll facebook but dont like any post');
}
explain_callback('Sogir uddin', 17, washHand);
explain_callback('jogir uddin', 13, takeShower);
explain_callback('mugur uddin ', 22, scrollFacebook);

// two types of call back function 
// sincronus and asyncronous