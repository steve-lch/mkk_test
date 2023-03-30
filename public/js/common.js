let header = "../include/header.html";
let footer = "../include/footer.html";
let sideTools = "../include/side_tools.html";
let mobileBottom = "../include/mobile_bottom.html";

const requestHeader = axios.get(header);
const requestFooter = axios.get(footer);
const requestSideTools = axios.get(sideTools);
const requestMobileBottom = axios.get(mobileBottom);

axios.all([requestHeader, requestFooter, requestSideTools, requestMobileBottom]).then(axios.spread((...responses) => {
    $(".header-sec").html(responses[0].data);
    $(".footer-sec").html(responses[1].data);
    $(".side-tools").html(responses[2].data);
    $(".mobile-btm-tools-sec").html(responses[3].data);

    // 載入動畫
    let loadingAnima = document.querySelector('.loading-anima-sec');
    setTimeout(() => {
      loadingAnima.classList.add('hide');
    }, 500);

    // 右側按鈕動畫
    const chiShow = gsap.timeline({
        repeat: -1,
        repeatDelay: 3
    });
    chiShow.from("#chi-chi", {opacity: 0, y: 100, duration: 0.5, ease: "expo"})
            .from("#chi-chi-say", {scale: 0, opacity: 0, transformOrigin:"right bottom", delay: 0.2, duration: 0.5, ease: "bounce"});

    // 導覽列
    $('.mobile-navi-btn').click(function() {
        $('.mobile-navi-btn').toggleClass('active');
        $('.header-sec').toggleClass('active');
    });

    // 導覽列子項目
    $('.navi-list.dropdown').click(function() {
        $('.navi-list.dropdown').removeClass('active');
        $(this).addClass('active');
    });

})).catch(errors => {
    console.error('Loading components failed...');
});


