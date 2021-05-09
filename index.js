
function makeHeaderItem(strings){
    const item = document.createElement('a');
    item.innerHTML = strings;
    item.style.color = 'lightgrey';
    item.style.fontWeight = '400';
    item.href = '#'+strings;

    item.addEventListener('mouseenter', () => {
        item.style.color = 'white';
    });

    item.addEventListener('mouseleave', () => {
        item.style.color = 'lightgrey';
    })

    return item;
}

function makeHeader(){
    const header = document.querySelector('.header-container');
    const needItem = ['Home','AboutMe','Skill','Project','Contact'];
    needItem.forEach(item => {
        const getItem = makeHeaderItem(item);
        header.appendChild(getItem);
    })
}

async function makeTop(){
    const top = document.querySelector('.top-container');
    top.id = 'Home';
    const imgs = document.createElement('img');
    imgs.style.cssText = 'width:100vw;';

    let width = document.documentElement.clientWidth;
    if(width <= 768) {
        imgs.style.height = '50vh';
        top.style.height = '50vh';
    }else {
        imgs.style.height = '100vh';
        top.style.height = '100vh';
    }
    imgs.src = './img/halgatewood-com-Pr578ZCufII-unsplash.jpg';
    imgs.className = 'HomeImage';

    top.appendChild(imgs);

    const top_introduce = document.createElement('div');
    top_introduce.className = 'topintroduce';
    top_introduce.style.cssText = 'position:absolute; bottom:10vh; display:flex; align-items:flex-end;';

    if(width <= 768){
        top_introduce.style.left = '50vw';
    }
    else{
        top_introduce.style.left = '60vw';
    }

    top.appendChild(top_introduce);

    const top_job = document.createElement('div');
    const top_name = document.createElement('div');
    const job = ['F','r','o','n','t','e','n','d',' ','D','e','v','e','l','o','p','e','r'];
    const name = ['김','준','호'];

    top_job.style.cssText = 'color:white; font-size:1.5rem; margin-right:20px; padding-bottom:5px;';
    top_name.style.cssText = 'color:white; font-size:3rem;';

    top_introduce.appendChild(top_job);
    top_introduce.appendChild(top_name);
    
    function writing(el, text, end){
        let idx = 0;
        return new Promise(resolve => {
            const si = setInterval(() => {
                el.append(text[idx++]);
                if(idx == end) {
                    clearInterval(si);
                    resolve();
                }
            }, 200);
        });
    }

    writing(top_job, job, 18).then(() => {
        writing(top_name, name, 3);
    });

}

function makeAboutme(){
    const width = document.documentElement.clientWidth;

    const aboutme = document.querySelector('.aboutme-container');
    aboutme.id = 'AboutMe';

    const aboutmeTitle = document.createElement('div');
    aboutmeTitle.className = 'aboutmeTitle';
    aboutmeTitle.style.cssText = 'width:70vw; display:flex; margin:5vh 0;';
    
    const titleHeader = document.createElement('div');
    const titleMain = document.createElement('div');
    titleHeader.className = "titleHeader";
    titleMain.className = 'titleMain';
    titleHeader.style.cssText = 'font-size:2.7rem; font-weight:500;';
    if(width <= 768){
        titleHeader.style.width = 'auto';
    }
    else{
        titleHeader.style.width = '20vw';
    }

    titleMain.style.cssText = 'display:flex; flex-direction:column; font-size:1.2rem;';
    titleHeader.innerHTML = '# ABOUT ME';
    const main1 = document.createElement('p'); main1.style.margin = '0';
    const main2 = document.createElement('p'); main2.style.margin = '0';
    const main3 = document.createElement('p'); main3.style.margin = '0';
    main1.innerHTML = '안녕하세요🖐 프론트엔드 개발자를 꿈꾸는 김준호입니다.'
    main2.innerHTML = '새로운 지식을 얻는 재미를 통해 매일 즐겁게 코딩하고 있습니다.';
    main3.innerHTML = '꾸준한 성장으로 더욱 실력있는 개발자가 되기 위해 노력하겠습니다.';
    // titleMain.appendChild(main1);
    // titleMain.appendChild(main2);
    // titleMain.appendChild(main3);

    // aboutmeTitle.appendChild(titleHeader);
    // aboutmeTitle.appendChild(titleMain);
    
    // aboutme.appendChild(aboutmeTitle);

    const certificate = document.createElement('div');
    certificate.className = 'certificate';
    certificate.style.cssText = 'width:70vw; display:flex; margin:2vh 0;';
    const certifiTitle = document.createElement('div');
    certifiTitle.className = 'certifiTitle';
    certifiTitle.innerHTML = '# Certificate';
    certifiTitle.style.cssText = 'font-size:2rem; font-weight:500; width:20vw;';
    // certificate.appendChild(certifiTitle);

    const experience = document.createElement('div');
    experience.className = 'experience';
    experience.style.cssText = 'width:70vw; display:flex; margin:2vh 0;';
    const experTitle = document.createElement('div');
    experTitle.className = 'experTitle';
    experTitle.innerHTML = '# Experience';
    experTitle.style.cssText = 'font-size:2rem; font-weight:500; width:20vw;';
    // experience.appendChild(experTitle);

    if(width <= 768){
        certifiTitle.style.width = 'auto';
        experTitle.style.width = 'auto';
    }
    else{
        certifiTitle.style.width = '20vw';
        experTitle.style.width = '20vw';
    }

    const experMain = document.createElement('div');
    const certifiMain = document.createElement('div');
    experMain.style.cssText = 'display:flex; flex-direction:column;';
    certifiMain.style.cssText = 'display:flex; flex-direction:column; justify-content:center';

    function joinInfo(p, c){
        p.appendChild(c);
    }

    function makeInfo(date, info){
        const newEl = document.createElement('div');
        const dateEl = document.createElement('div');
        const infoEl = document.createElement('div');
        newEl.style.cssText = 'display:flex; font-size:1rem; width:50vw;';
        dateEl.style.cssText = 'width:15vw;';
        infoEl.style.cssText = 'width:35vw';
        dateEl.innerHTML = date;
        infoEl.innerHTML = info;
        newEl.appendChild(dateEl);
        newEl.append(infoEl);
        return newEl; 
    }

    let certifiInfo = [];
    let experInfo = [];

    certifiInfo.push(makeInfo('2020.08.28', '정보처리기사'));
    experInfo.push(makeInfo('2019.11','ACM-ICPC Seoul Regional 본선'));
    experInfo.push(makeInfo('2019.12','2019 SoftWave'));
    experInfo.push(makeInfo('2020.12','교내 프로그래밍 경진대회 우수상'));
    experInfo.push(makeInfo('2021.02 ~ 2021.03', '부산 프로그래밍 동아리 DnD 4기'));

    certifiInfo.forEach(item => {
        joinInfo(certifiMain, item);
    })
    experInfo.forEach(item => {
        joinInfo(experMain, item);
    })

    // window.addEventListener('resize', () => {
    //     const width = document.documentElement.clientWidth;
    //     if(width <= 768){
            
    //     }
    // })

    titleMain.appendChild(main1);
    titleMain.appendChild(main2);
    titleMain.appendChild(main3);

    aboutmeTitle.appendChild(titleHeader);
    aboutmeTitle.appendChild(titleMain);
    
    aboutme.appendChild(aboutmeTitle);

    certificate.appendChild(certifiTitle);
    experience.appendChild(experTitle);

    certificate.appendChild(certifiMain);
    experience.appendChild(experMain);

    aboutme.appendChild(certificate);
    aboutme.appendChild(experience);
}

function makeSkill(){
    const skillContainer = document.querySelector('.skill-container');
    skillContainer.id = 'Skill';

    const skillTitle = document.createElement('div');
    skillTitle.innerHTML = '# Skill';
    skillTitle.style.cssText = 'font-size:3rem; font-weight:500; width:70vw; margin:5vh 0;';
    skillContainer.appendChild(skillTitle);

    let mypublish = ['./img/html.png', './img/css.png','./img/js.png','./img/ts.png', './img/styled.png'];
    let myfront = ['./img/react.png','./img/redux.png','./img/redux-saga.png','./img/next.png'];
    let myback = ['./img/node.png','./img/express.png'];

    function makeItem(item){
        const res = document.createElement('img');
        res.src = item;
        res.style.cssText = 'background-color:transparent; width:12vh; height:12vh; border-radius:10px; box-shadow: 2px 2px 2px grey; margin:10px;';
        return res;
    }

    const publish = document.createElement('div');
    publish.style.cssText = 'width:70vw; display:flex; flex-wrap:wrap; ';
    mypublish.forEach(item => {
        publish.appendChild(makeItem(item));
    })

    const front = document.createElement('div');
    front.style.cssText = 'width:70vw; display:flex; flex-wrap:wrap; ';
    myfront.forEach(item => {
        front.appendChild(makeItem(item));
    })

    const back = document.createElement('div');
    back.style.cssText = 'width:70vw; display:flex; flex-wrap:wrap; ';
    myback.forEach(item => {
        back.appendChild(makeItem(item));
    })

    skillContainer.appendChild(publish);
    skillContainer.appendChild(front);
    skillContainer.appendChild(back);
}

function makeProject(){
    const projectContainer = document.querySelector('.project-container');
    projectContainer.id = 'Project';

    const projectTitle = document.createElement('div');
    projectTitle.innerHTML = '# Project';
    projectTitle.style.cssText = 'font-size:3rem; font-weight:500; width:70vw; margin:5vh 0;';

    projectContainer.appendChild(projectTitle);

    const projectWrap = document.createElement('div');
    projectWrap.style.cssText = 'width:100vw; display:flex; flex-direction:column; justify-content:center; align-items:center;';

    let projectData = [
        {
            img: './img/project/moagym.PNG',
            name: 'Moagym',
            date: '2021.03 ~ 2021.04',
            skill: 'React, Redux, Typescript, styled-component',
            info: 'MoaGym 은 무신사 같은 국내 의류 쇼핑몰처럼 헬스, 요가, 필라테스 등의 의류 만을 모아서 보여주자는 의미로 시작한 프로젝트입니다.',
            url: 'https://github.com/junho0956/MoaGym',
            imgdata:[
                './img/project/img_home1.PNG',
                './img/project/img_home2.PNG',
                './img/project/img_brandList.PNG',
                './img/project/img_brandPage1.PNG',
                './img/project/img_brandPage2.PNG',
                './img/project/category1.PNG',
                './img/project/category2.PNG',
                './img/project/img_ItemInfo1.PNG',
                './img/project/img_ItemInfo2.PNG',
            ],
        },
        {
            img: './img/project/nodebird.PNG',
            name: 'study project',
            date: '2021.05.01 ~ 진행 중',
            skill: `React, Redux, Redux-saga, styled-component, Next, Node, Express, swr`,
            info: '개인 공부용 프로젝트입니다. 웹 개발의 전체적인 과정을 경험하기 위해 프론트 및 백엔드 전부 구현 중이며, Next를 통한 서버사이드 렌더링을 공부하기 위해 진행 중입니다.',
            url: 'https://github.com/junho0956/practice-SSR',
            imgdata: [],
        }
        // {
        //     img: './img/project/clava.png',
        //     name: 'Clava',
        //     date: '2020.11 ~ 2020.11',
        //     skill: 'React',
        //     info: '동아리를 주제로 다루는 커뮤니티를 만들어 보았습니다.',
        //     url: 'https://github.com/junho0956/Graduate-project',
        //     imgdata:[
        //         './img/project/clava.png',
        //         './img/project/clavaImg1.png',
        //         './img/project/clavaImg2.png',
        //     ],
        // },
        // {
        //     img: './img/project/duggy.PNG',
        //     name: 'Duggy-Music',
        //     date: '2020.08 ~ 2020.08',
        //     skill: 'React, firebase',
        //     info: '지인의 유튜브 음원을 이용해서 쇼핑몰을 만들어 보았습니다.',
        //     url: 'https://github.com/junho0956/duggy',
        //     imgdata:[
        //         './img/project/duggy.PNG',
        //         './img/project/duggy1.PNG',
        //         './img/project/duggy3.PNG',
        //         './img/project/duggy4.PNG',
        //     ],
        // }
    ]

    function makeProjectSlide(data){
        const slideContainer = document.createElement('div');
        slideContainer.style.cssText = 'position:relative; display:none; width:30vw; height:45vh;';

        const slideUlContainer = document.createElement('div');
        slideUlContainer.style.cssText = 'overflow:hidden; height:100%;';

        const slideUl = document.createElement('ul');
        slideUl.style.cssText = `display:flex; height:100%; transition:0.5s; list-style:none; padding:0; margin:0;`;
        slideUl.style.width = `${data.length * 100}%`;

        function makeLi(image){
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = image;
            img.style.cssText = "width:100%; height:100%;";
            li.appendChild(img);
            return li;
        }

        data.forEach(item => {
            slideUl.appendChild(makeLi(item));
        })

        slideUl.childNodes.forEach(res => {
            res.children[0].style.cssText = 'width:30vw; height:100%;';
        })

        slideUlContainer.appendChild(slideUl);
        slideContainer.appendChild(slideUlContainer);

        const leftbutton = document.createElement('i');
        const rightbutton = document.createElement('i');
        leftbutton.className = 'fas fa-chevron-left';
        rightbutton.className = 'fas fa-chevron-right';
        leftbutton.style.cssText = 'position:absolute; width:2vh; height:2vh; font-size:2rem; top:50%; left:2vw; transparent(-50%, -50%);';
        rightbutton.style.cssText = 'position:absolute; width:2vh; height:2vh; font-size:2rem; top:50%; right:2vw; transparent(-50%, -50%);';

        let pos = 0;
        leftbutton.style.display = "none";
        leftbutton.addEventListener('click', () => {
            if(pos > 0){
                pos = pos-1;
                if(pos === 0) leftbutton.style.display = 'none';
                rightbutton.style.display = 'block';
                slideUl.style.marginLeft = `${-pos*100}%`;
            }
        });
        rightbutton.addEventListener('click', () => {
            if(pos < data.length-1){
                pos = pos+1;
                if(pos === data.length-1) rightbutton.style.display = 'none';
                leftbutton.style.display = 'block';
                slideUl.style.marginLeft = `${-pos*100}%`;
            }
        })

        slideContainer.appendChild(leftbutton);
        slideContainer.appendChild(rightbutton);

        return slideContainer;
    }

    function makeProjectItem(data){
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex; width:60vw; height:45vh; background-color: white; box-shadow:3px 3px 3px grey; margin:5vh;';

        const img = document.createElement('img');
        img.src = data.img;
        img.style.cssText = 'width:30vw;';
        const slider = makeProjectSlide(data.imgdata);
        wrap.appendChild(img);
        wrap.appendChild(slider);

        img.addEventListener('mouseenter', () => {
            img.style.display = 'none';
            slider.style.display = 'block';
            // document.querySelector('.container').style.opacity = '0.5';
            // slider.style.opacity = '1';
        });

        slider.addEventListener('mouseleave', () => {
            img.style.display = 'block';
            slider.style.display = 'none';
            // document.querySelector('.container').style.opacity = '1';
        })

        const info = document.createElement('div');
        info.className = 'info';
        info.style.cssText = 'padding:2.5vw; width:25vw; display:flex; flex-direction:column;';

        const pname = document.createElement('div');
        pname.style.cssText = 'font-size:1.5rem; font-weight:500; margin-bottom:2vh;';
        pname.innerText = data.name;
        
        const pdate = document.createElement('div');
        pdate.style.cssText = 'margin-bottom:2vh;';
        pdate.innerText = data.date;
        
        const pskill = document.createElement('div');
        pskill.style.cssText = 'margin-bottom:2vh;';
        pskill.innerText = data.skill;

        const pinfo = document.createElement('div');
        pinfo.style.cssText = 'margin-bottom:2vh;';
        pinfo.innerText = data.info;

        const purl = document.createElement('i');
        purl.style.cssText = "font-size:2rem; cursor:pointer; ";
        purl.className = 'fab fa-github';
        purl.addEventListener('click', () => {
            window.open(data.url);
        })

        info.appendChild(pname);
        info.appendChild(pdate);
        info.appendChild(pskill);
        info.appendChild(pinfo);
        info.appendChild(purl);

        wrap.appendChild(info);

        const width = document.documentElement.clientWidth;
        if(width <= 768){
            wrap.childNodes[0].style.width = "60vw";
            wrap.childNodes[2].style.width = '55vw';
            wrap.childNodes[2].style.display = 'none';
            wrap.childNodes[2].childNodes.forEach(item => {
                item.style.fontSize = '1.2rem';
            })
            wrap.childNodes[2].childNodes[0].style.fontSize = '2rem';
            wrap.childNodes[0].addEventListener('mouseenter', () => {
                wrap.childNodes[0].style.display = 'none';
                wrap.childNodes[1].style.display = 'none';
                wrap.childNodes[2].style.display = 'block';
            })
            wrap.childNodes[2].addEventListener('mouseleave', () => {
                wrap.childNodes[2].style.display = 'none';
                wrap.childNodes[0].style.display = 'block';
            })
        }

        return wrap;
    }

    projectData.forEach(item => {
        projectWrap.appendChild(makeProjectItem(item));
    })

    // projectWrap.addEventListener('mouseenter', () => {
    //     projectWrap.childNodes.forEach(project => {
    //         const img = project.childNodes[0];
    //         const slide = project.childNodes[1];
    //         img.style.display = 'block';
    //         slide.style.display = 'none';
    //     })
    // })

    projectContainer.appendChild(projectWrap);
}

function makeContact(){
    const contact = document.querySelector('.contact-container');
    contact.id = 'Contact';

    const title = document.createElement('a');
    title.style.cssText = 'width:70vw; font-size:3rem; font-weight:500; margin:5vh 0;';
    title.innerHTML = '# Contact';
    contact.appendChild(title);

    const email = document.createElement('div');
    email.innerHTML = 'Email : junho0956@naver.com';
    // const phone = document.createElement('div');
    // phone.innerHTML = 'Phone : 010-9457-4773';
    const git = document.createElement('div');
    git.innerHTML = 'Github ';
    
    git.style.cssText = 'font-size:1.5rem; width:70vw; margin-bottom:3vh;';
    email.style.cssText = 'font-size:1.5rem; width:70vw; margin-bottom:3vh;';
    // phone.style.cssText = 'font-size:1.5rem; width:70vw; margin-bottom:3vh;';

    const github = document.createElement('i');
    github.style.cssText = 'font-size:2rem; cursor:pointer;'
    github.className = 'fab fa-github';
    github.addEventListener('click', () => {
        window.open('https://github.com/junho0956');
    });
    git.append(github);

    contact.appendChild(git);
    contact.appendChild(email);
    // contact.appendChild(phone);
}

function init(){
    makeHeader();
    makeTop();
    makeAboutme();
    makeSkill();
    makeProject();
    makeContact();

    const topintro = document.querySelector('.topintroduce');
    const topcontainer = document.querySelector('.top-container');
    const topImage = document.querySelector('.HomeImage');
    const titleHeader = document.querySelector('.titleHeader');
    const certifiTitle = document.querySelector('.certifiTitle');
    const experTitle = document.querySelector('.experTitle');

    window.addEventListener('resize', () => {
        const width = document.documentElement.clientWidth;
        if(width <= 768){
            topintro.style.left = '50vw';
            topcontainer.style.height = '50vh';
            topImage.style.height = '50vh';
            titleHeader.style.width = 'auto';
            certifiTitle.style.width = 'auto';
            experTitle.style.width = 'auto';
        }
        else{
            topintro.style.left = '60vw';
            topcontainer.style.height = '100vh';
            topImage.style.height = '100vh';
            titleHeader.style.width = '20vw';
            certifiTitle.style.width = '20vw';
            experTitle.style.width = '20vw';
        }
    })
}

init();