// 로그인 모달
// 모달 열기
var signupBtn = document.querySelector("#signup-btn");
var signupModal = document.querySelector('#signup-modal');
signupBtn.addEventListener('click', function() {
	signupModal.style.display = 'block';
});

// 모달 닫기
var closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(function(closeBtn) {
	closeBtn.addEventListener('click', function() {
		signupModal.style.display = 'none';
	});
});


//////////////////////////////// 회원가입 모달
//모달 열기
var registBtn = document.querySelector("#regist-btn");
var registModal = document.querySelector('#regist-modal');
registBtn.addEventListener('click', function() {
	registModal.style.display = 'block';
});

// 모달 닫기
var closeBtns2 = document.querySelectorAll('.close2');
closeBtns2.forEach(function(closeBtn) {
	closeBtn.addEventListener('click', function() {
		registModal.style.display = 'none';
	});
});


////////////////////////////////회원가입 모달
//모달 열기
var registBtn2 = document.querySelector("#sign-up-now");
var registModal = document.querySelector('#regist-modal');
registBtn2.addEventListener('click', function() {
	registModal.style.display = 'block';
});

//모달 닫기
var closeBtns2 = document.querySelectorAll('.close2');
closeBtns2.forEach(function(closeBtn) {
	closeBtn.addEventListener('click', function() {
		registModal.style.display = 'none';
	});
});

