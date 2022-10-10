let win = $(window),
  sections = $(".section"),
  gnb = $(".gnb li");



gnb.click(function (e) {
  e.preventDefault();
  let tg = $(this);
  console.log(tg);
  let index = tg.index();
  let section = sections.eq(index);
  let offset = section.offset().top;
  $("html,body").stop().animate(
    {
      scrollTop: offset,
    },
    1500
  );
});

win.scroll(function () {
  let sct = win.scrollTop();
  sections.each(function (i) {
    if (sct >= sections.eq(i).offset().top - 500) {
      gnb.eq(i).addClass("on").siblings().removeClass("on");
      sections.eq(i).addClass("on").siblings().removeClass("on");
    }
  });
  sct > 400 ? $("header").addClass("sticky") : $("header").removeClass("sticky");
});


$(function () {
  const progressbox = $(".progress-bar");
  const progressOst = $(".animation").offset().top - 600;
  let isAni = false;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= progressOst && !isAni) {
      progressAni();
    }
  });
  function progressAni() {
    progressbox.each(function () {
      let $this = $(this),
        progressBar = $this.find(".bar"),
        progressText = $this.find(".rate"),
        progressRate = progressText.attr("data-rate");
      progressBar.animate({ width: progressRate + "%" }, 2500);

      //변수 text 선언후 익명함수 할당
      let text = function () {
        $({ rate: 0 }).animate(
          { rate: progressRate },
          {
            duration: 2000,
            progress: function () {
              let now = this.rate;
              progressText.text(Math.floor(now) + "%");
            },
            complete: function () {
              isAni = true;
            },
          }
        );
      };
      text();
    });
  }
});


$(".banner").on({
	mousemove: function (e) {
/* 		console.log(
			`브라우저X좌표:${e.clientX}, 브라우저Y좌표:${e.clientY}\n 요소X좌표:${e.offsetX}, 요소Y좌표:${e.offsetY}\n 페이지X좌표 (페이지가 길어지면 브라우저와 차이발생) :${e.pageX}, 페이지Y좌표:${e.pageY}\n 디바이스 x 좌표:${e.screenX}, 디바이스 y 좌표:${e.screenY}\n`
		) */
		let pageX = e.pageX
		let pageY = e.pageY

		let standardX = $(".banner").width() / 2 - pageX
		let standardY = $(".banner").height() / 2 - pageY

		$(".banner img").attr({ style: "transform : translate(" + standardX / 60 + "px," + standardY / 40 + "px)" })
		$(".banner .banner_img5").attr({ style: "transform : translate(" + standardX / 20 + "px," + standardY / 20 + "px)" })
	},
})
