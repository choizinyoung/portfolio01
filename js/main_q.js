let win = $(window),
  sections = $(".section"),
  scrollup = $(".upstart"),
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
  scrollup.each(function(o){
    if(sct>=scrollup.eq(o).offset().top - 400){
      scrollup.eq(o).addClass("scroll");
    }
  });
  sct > 400 ? $("header").addClass("sticky") : $("header").removeClass("sticky");
});

$(".banner").on({
  mousemove: function (e) {
    let pageX = e.pageX
    let pageY = e.pageY

    let standardX = $(".banner").width() / 2 - pageX
    let standardY = $(".banner").height() / 2 - pageY

    $(".banner img").attr({ style: "transform : translate(" + standardX / 60 + "px," + standardY / 40 + "px)" })
    $(".banner .banner_img5").attr({ style: "transform : translate(" + standardX / 20 + "px," + standardY / 20 + "px)" })
  },
})


$(function () {
  const progressbox = $(".progress_bar");
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




var tabWrapper = $(".sec3"),
  targetLink = tabWrapper.find(".sec3_content a"),
  tabContent = tabWrapper.find(".sec3_tab_wrap>div");

tabContent.eq(0).show();

targetLink.each(function () {
  var tg = $(this); 
  var tgAnc = tg.attr("href");
  tg.click(function (e) {
    e.preventDefault();
    targetLink.removeClass("active");
    tg.addClass("active");
    tabContent.hide();
    $(tgAnc).show();
  });
});