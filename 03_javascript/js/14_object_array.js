/**
 * 객체 배열
 */
const test1 = () => {
    const pets = [];
    pets.push({
        name : '솜이',
        breed : '포메라니안',
        weight : 3,
        age : 10,
        color : ['white'],
        bark(){
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
    pets.push({
        name : '오공이',
        breed : '푸들',
        weight : 4,
        age : 4,
        color : ['white'],
        bark(){
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
    pets.push({
        name : '루아',
        breed : '비숑',
        weight : 2,
        age : 3,
        color : ['white'],
        bark(){
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
    console.log(pets);
};

/**
 * 생성자함수
 * - new연산자와 함께 호출할 함수
 * - 해당타입의 객체가 반환
 * - 관례적으로 대문자시작하는 이름을 갖는다.
 * - this용법3. 생성자함수(new연산자로 호출)안  this는 현재객체를 가리킨다. 
 */
const test2 = () => {
    const pets = [];
    pets.push(new Pet('솜이', '포메', 3, 10, ['white']));
    pets.push(new Pet('오공이', '푸들', 4, 4, ['white']));
    pets.push(new Pet('루아', '비숑', 2, 3, ['white', 'brown']));
    console.log(pets);

    pets.forEach((pet) => console.log(`${pet.name} ${pet.bark()} 짖는다~`));
}
function Pet(name, breed, weight, age, ...color){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.age = age;
    this.color = color;
    this.bark = function(){
        return this.weight < 10 ? "왈왈" : "멍멍";
    };
}

/**
 * this용법4. 일반함수 안에서 this는 window객체를 가리킨다.
 *  - window 브라우져 최상의객체 (DOM(document), js object, BOM, ...)
 */
const test3 = function(){
    console.log(this); // window
    console.log(window, globalThis);
};