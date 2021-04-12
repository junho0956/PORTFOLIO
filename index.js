
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
    imgs.style.cssText = 'width:100vw; height:100vh;';
    imgs.src = './img/halgatewood-com-Pr578ZCufII-unsplash.jpg';
    top.appendChild(imgs);

    const top_introduce = document.createElement('div');
    top_introduce.style.cssText = 'position:absolute; bottom:10vh; left:70vw; display:flex; align-items:flex-end;';

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
    const aboutme = document.querySelector('.aboutme-container');
    aboutme.id = 'AboutMe';
    const aboutmeTitle = document.createElement('div');
    aboutmeTitle.style.cssText = 'width:70vw; display:flex; margin:5vh 0;';
    const titleHeader = document.createElement('div');
    const titleMain = document.createElement('div');
    titleHeader.style.cssText = 'font-size:3rem; font-weight:500; width:20vw;';
    titleMain.style.cssText = 'display:flex; flex-direction:column; font-size:1.2rem;';
    titleHeader.innerHTML = '# ABOUT ME';
    const main1 = document.createElement('p'); main1.style.margin = '0';
    const main2 = document.createElement('p'); main2.style.margin = '0';
    const main3 = document.createElement('p'); main3.style.margin = '0';
    main1.innerHTML = '안녕하세요🖐 프론트엔드 개발자를 꿈꾸는 김준호입니다.'
    main2.innerHTML = '새로운 지식을 얻는 재미를 통해 매일 즐겁게 코딩하고 있습니다.';
    main3.innerHTML = '꾸준한 성장으로 더욱 실력있는 개발자가 되기 위해 노력하겠습니다.';
    titleMain.appendChild(main1);
    titleMain.appendChild(main2);
    titleMain.appendChild(main3);
    aboutmeTitle.appendChild(titleHeader);
    aboutmeTitle.appendChild(titleMain);
    aboutme.appendChild(aboutmeTitle);

    const certificate = document.createElement('div');
    certificate.style.cssText = 'width:70vw; display:flex; margin:2vh 0;';
    const certifiTitle = document.createElement('div');
    certifiTitle.innerHTML = '# Certificate';
    certifiTitle.style.cssText = 'font-size:2rem; font-weight:500; width:20vw;';
    certificate.appendChild(certifiTitle);

    const experience = document.createElement('div');
    experience.style.cssText = 'width:70vw; display:flex; margin:2vh 0;';
    const experTitle = document.createElement('div');
    experTitle.innerHTML = '# Experience';
    experTitle.style.cssText = 'font-size:2rem; font-weight:500; width:20vw;';
    experience.appendChild(experTitle);

    const experMain = document.createElement('div');
    const certifiMain = document.createElement('div');
    experMain.style.cssText = 'display:flex; flex-direction:column;';
    certifiMain.style.cssText = 'display:flex; flex-direction:column;';

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
    experInfo.push(makeInfo('2019.09 ~ 2019.12', '디지털사이니지 스타트업 ELGO에서 근무'));
    experInfo.push(makeInfo('2019.11','ACM-ICPC Seoul Regional 참가'));
    experInfo.push(makeInfo('2019.12','2019 SoftWave 참가'));
    experInfo.push(makeInfo('2020.12','교내 프로그래밍 경진대회 우수상'));
    experInfo.push(makeInfo('2021.02 ~ 2021.03', '부산 프로그래밍 동아리 DnD 4기'));

    certifiInfo.forEach(item => {
        joinInfo(certifiMain, item);
    })
    experInfo.forEach(item => {
        joinInfo(experMain, item);
    })

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

    let myskill = ['./img/html.png','./img/css.png','./img/js.png','./img/ts.png','./img/react.png','./img/redux.png','./img/styled.png','./img/node.png'];

    function makeItem(item){
        const res = document.createElement('img');
        res.src = item;
        res.style.cssText = 'width:12vh; height:12vh; border-radius:10px; box-shadow: 2px 2px 2px grey;';
        return res;
    }

    const skills = document.createElement('div');
    skills.style.cssText = 'width:70vw; display:flex; flex-wrap:wrap; justify-content:space-around;';
    myskill.forEach(item => {
        skills.appendChild(makeItem(item));
    })

    skillContainer.appendChild(skills);
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
            skill: 'React, Redux, styled-component',
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
            img: './img/project/clava.png',
            name: 'Clava',
            date: '2020.11 ~ 2020.11',
            skill: 'React',
            info: '동아리를 주제로 다루는 커뮤니티를 만들어 보았습니다.',
            url: 'https://github.com/junho0956/Graduate-project',
            imgdata:[
                './img/project/clava.png',
                './img/project/clavaImg1.png',
                './img/project/clavaImg2.png',
            ],
        },
        {
            img: './img/project/duggy.PNG',
            name: 'Duggy-Music',
            date: '2020.08 ~ 2020.08',
            skill: 'React, firebase',
            info: '지인의 유튜브 음원을 이용해서 쇼핑몰을 만들어 보았습니다.',
            url: 'https://github.com/junho0956/duggy',
            imgdata:[
                './img/project/duggy.PNG',
                './img/project/duggy1.PNG',
                './img/project/duggy3.PNG',
                './img/project/duggy4.PNG',
            ],
        }
    ]

    function makeProjectSlide(data){
        const slideContainer = document.createElement('div');
        slideContainer.style.cssText = 'position:relative; display:none; width:30vw; height:40vh;';

        const slideUlContainer = document.createElement('div');
        slideUlContainer.style.cssText = 'overflow:hidden;';

        const slideUl = document.createElement('ul');
        slideUl.style.cssText = `display:flex; transition:0.5s; list-style:none; padding:0; margin:0;`;
        slideUl.style.width = `${data.length * 100}%`;

        function makeLi(image){
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = image;
            li.appendChild(img);
            return li;
        }

        data.forEach(item => {
            slideUl.appendChild(makeLi(item));
        })

        slideUl.childNodes.forEach(res => {
            res.children[0].style.cssText = 'width:30vw; height:40vh;';
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
        wrap.style.cssText = 'display:flex; width:60vw; height:40vh; background-color: white; box-shadow:3px 3px 3px grey; margin:5vh;';

        const img = document.createElement('img');
        img.src = data.img;
        img.style.cssText = 'width:30vw; height:40vh;';
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
    const phone = document.createElement('div');
    phone.innerHTML = 'Phone : 010-9457-4773';
    const git = document.createElement('div');
    git.innerHTML = 'Github ';
    
    git.style.cssText = 'font-size:1.5rem; width:70vw; margin-bottom:3vh;';
    email.style.cssText = 'font-size:1.5rem; width:70vw; margin-bottom:3vh;';
    phone.style.cssText = 'font-size:1.5rem; width:70vw; margin-bottom:3vh;';

    const github = document.createElement('i');
    github.style.cssText = 'font-size:2rem; cursor:pointer;'
    github.className = 'fab fa-github';
    github.addEventListener('click', () => {
        window.open('https://github.com/junho0956');
    });
    git.append(github);

    contact.appendChild(git);
    contact.appendChild(email);
    contact.appendChild(phone);
}

function init(){
    makeHeader();
    makeTop();
    makeAboutme();
    makeSkill();
    makeProject();
    makeContact();
}

init();