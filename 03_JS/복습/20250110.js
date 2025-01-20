 window.onload = function() {// ----------- 요소 선택 ------------------------------
        // id 속성: color-box  >> !!!!! 우변으로 먼 저 값을 가져오고(어떤 요소를 가져올 것인지에 따라 document.get~) 좌변 변수에 저장하기 !!!!!!
        let colorBox = document.getElementById("color-box");
        // id 속성: color-input
        let colorInput = document.getElementById("color-input");
        // id 속성: apply-button
        let applyButton = document.getElementById("apply-button");   
        // id 속성: message
        let message = document.getElementById("message");



        // 버튼 클릭 이벤트 핸들러
        applyButton.onclick = function () {
            /* 선택된 색상 값 조회(가져오기) >> !!!!! 설정한 변수(값 저장돼 있음) 가져오기
            보통 태그는 innerHTML, innerText로 가져옴. input태그는 .value 로 가져옴 */
            let color = colorInput.value;

            // #color-box 요소의 스타일 중 배경색 변경
            colorBox.style.backgroundColor = color;  /* or colorInput.value를 위에서 color라는 변수값에 저장했으니 color라고 넣어줘도 됨*/;

            // #message 요소에 변경된 배경색 정보로 출력
            // !!!!! p 요소의 값 변경 : innerHTML, innerText
            message.innerHTML = "현재 배경색은" + color + "입니다";
        };
    }