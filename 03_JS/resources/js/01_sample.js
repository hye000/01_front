// test 라는 이름의 함수 정의
function test() {
    // 실행할 내용(코드)
    window.alert("안녕 여기는 외부파일!")
}

// 모든 요소가 브라우저에 표시가 되었을 때
window.onload = function test() {
    // id 속성이 btn2인 요소 선택해서 변수에 저장
let btn2 = document.getElementById("btn2");
// 선택된 요소의 onclick 속성에 실행할 함수 정의(저장)
btn2.onclick = function() {
    console.log("js 파일에서 출력")
}

}