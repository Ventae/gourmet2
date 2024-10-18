$(document).ready(function(){
	
	//   상단메뉴에 마우스를 댈때 + 웹접근성 강화 (엔터친다)
	$("nav  ul").on("mouseenter  click " , function(){
		$("nav  nav").stop().slideDown();
	});   
		
	//상단메뉴에 마우스를 치울때 
	$("nav  ul").mouseleave( function(){
		$("nav  nav").stop().slideUp();
	}); 
	
	//상단메뉴에서 마지막 항목에  포커스를 잃을때:  웹접근성강화
	$(".last").blur( function(){
		$("nav  nav").stop().slideUp();
	}); 	
	
	
	
	//페이드 슬라이드:  2.8초마다 함수 호출
	setInterval( fading ,  2800 );
	let i = 2;
	function fading(){
		if(    $("#slide a").eq(1).css("display")  ==  "none"    ){
			$("#slide a").fadeIn(800);
			i = 2;
		} else {
			$("#slide a").eq(i).fadeOut(1000);
			i--;
		}
		
	}// fading() 끝

	$(document).ready(() => {
		$('#notice a').on('click', (event) => {
			event.preventDefault(); // 기본 링크 클릭 동작 방지
			const imageSrc = $(event.currentTarget).data('image'); // data-image 속성 값 가져오기
			$('#popup-image').attr('src', imageSrc); // 팝업 이미지 설정
			$('#popup').fadeIn(); // 팝업 표시
		});

		// 팝업 닫기 기능
		$('.close').on('click', () => {
			$('#popup').fadeOut(); // 팝업 숨기기
		});

		// 팝업 외부 클릭 시 닫기
		$(window).on('click', (event) => {
			if ($(event.target).is('#popup')) {
				$('#popup').fadeOut(); // 팝업 숨기기
			}
		});
	});
	
	
});////////////////////////////////전체 끝