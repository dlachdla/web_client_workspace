/**
 * window
 *  - 브라우져 최상위객체
 *  - 탭별로 하나씩 존재함
 *  - DOM
 *  - BOM Browser Object Model - navigator, history, screen, ...
 *  - Javascript Object
 *  - ....
 */
const test1 = () => {
    console.log(window);
}

/**
 * open
 *  - 새창(탭/팝업)을 여는 함수
 *  - 새창의 window객체를 반환. 해당 창에 대한 제어가능
 */
const test2 = () => {
    // open(url, name, spec)
    const newWindow = open('01_hellojs.html','hellojs','width = 500, height=300, top=400, left=400');
    // const newWindow = open('01_hellojs.html','_self') // 현재 탭을 대체
    console.log(newWindow);
    console.log(newWindow.opener); //현재창

    setTimeout(() => {
        // newWindow.close();
        // newWindow.alert('🚗🚗');
        newWindow.document.write('<h1>🚗🚓</h1>');
    }, 3000)
}

/**
 * Time API - setTimeout
 *  - milli초 후에 callback함수 실행
 *  - js시간은 쓰레드 스케쥴링에 의해 늘어질 수 있다.
 */
const test3 = () => {
    const TimeoutId = setTimeout(() => {
        alert('🎈🎈');
    }, 1000);
    console.log(TimeoutId);
};

(() => {
    setTimeout(() => {
     console.log('회원가입후 더많은 혜택을 누리세요~~');
    }, 5000);
})();

/**
 * setInterval(callbackFunction, millis)
 *  - millis초후에 callbackFunction을 실행
 *  - millis 초 간격으로 callbackFunction을 실행
 *  - clearInterval(id)로 취소하기전까지 실행
 */
let intervalId;
const test4 = () => {
    let i = 1;
    intervalId = setInterval(() => {
        console.log(i++);
    }, 1000);
    console.log(intervalId, '번 인터벌이 등록되었습니다.');
}
/**
 * 사용자 타이머
 */
let TimeoutId;
const test5 = () => {

    const messageVal = message.value;

    //유효성 검사
    if(!message.value || !sec.value){
        alert('유효한 값을 입력하세요🤬');
        return;
    }

    TimeoutId = setTimeout(() => {
        alert(messageVal);
        console.log(TimeoutId, '번 타이머가 설정되었습니다.');
        TimeoutId = undefined; // 타임아웃아이디 제거 실행했으니까
    }, sec.value * 1000); // 자동으로 형변환

    //실행 후에 값 초기화
    message.value = '';
    sec.value = '';
};

const test6= () => {
    if(TimeoutId){ // 타임아웃아이디가 있으면 실행
    clearTimeout(TimeoutId);
    alert('타이머가 취소 되었습니다.😀');
    }
};

/**
 * 초시계
 */
const f = (n) => n < 10 ? '0' + n : n;
const clock = () => {
    const d = new Date();
    const hh = f(d.getHours());
    const mm = f(d.getMinutes());
    const ss = f(d.getSeconds());
    console.log(`${hh}:${mm}:${ss}`);
    return `${hh}:${mm}:${ss}`;
};
// const displayClock = () => document.querySelector('#clock-display').innerHTML = clock();
// displayClock();
// setInterval(displayClock, 1000);