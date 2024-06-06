let observer = new IntersectionObserver((e)=>{
    e.forEach((a)=>{
        if(a.isIntersecting){
            a.target.style.opacity =1;
        }else{
            a.target.style.opacity=0;
        }
    })
})

let div = document.querySelectorAll("div");
observer.observe(div[0])
observer.observe(div[1])
observer.observe(div[2])
observer.observe(div[3])
observer.observe(div[4])
observer.observe(div[5])
observer.observe(div[6])
observer.observe(div[7])
observer.observe(div[8])
observer.observe(div[9])
observer.observe(div[10])
observer.observe(div[11]);

window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // 스크롤이 시작되는 위치
    const scrollStart = 4000;

    // 시작 및 끝 색상 정의
    const startColor = [16, 16, 16]; // RGB for #1a1a1a
    const endColor = [255, 255, 255]; // RGB for white

    // 스크롤 가능한 최대 값 계산
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // 스크롤 비율 계산 및 색상 변화에 가속을 적용하기 위해 제곱 적용
    let scrollRatio;
    if (scrollY >= scrollStart) {
        scrollRatio = Math.min((scrollY - scrollStart) / (maxScroll - scrollStart), 1);
    } else {
        scrollRatio = 0;
    }
    const acceleratedRatio = Math.pow(scrollRatio, 2); // 가속화를 위해 제곱 적용

    // 시작 및 끝 색상 사이 보간
    const currentColor = startColor.map((start, index) => {
        return Math.round(start + (endColor[index] - start) * acceleratedRatio);
    });

    // 보간된 색상을 배경색으로 적용
    document.body.style.backgroundColor = `rgb(${currentColor.join(',')})`;
});

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const scrollStart = 4000;

    const centeredLink = document.getElementById('centered-link');

    if (scrollY >= scrollStart) {
        centeredLink.style.display = 'block';
        if(scrollY >=5900){
            centeredLink.style.color ="#e37676";
        }
    }else {
        centeredLink.style.display = 'none'; // 스크롤 위치가 4000 미만이면 링크를 숨김
    }
});





  

