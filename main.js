// ------------------- Header -------------------
const HeaderLeft = () => {

    // ------------------- #navOpenBtn 클릭 이벤트 -------------------
    const navOpenEvent = () => {
        const nav = document.getElementById("implicit-nav");
        const detailedNav = document.getElementById("explicit-nav");
        const root = document.getElementById("root");

        if (nav.style.display === "block") {
            nav.style.display = "none";
            detailedNav.style.display = "block";
            root.removeChild(Nav());
            root.appendChild(DetailedNav());
        } else if (nav.style.display === 'none') {
            nav.style.display = "block";
            detailedNav.style.display = "none";
            root.removeChild(DetailedNav());
            root.appendChild(Nav()); 
        }
    }

    const headerLeft = document.createElement("div");
    headerLeft.id = "headerLeft";

    const navOpenBtn = document.createElement("button");
    navOpenBtn.id = "navOpenBtn";
    navOpenBtn.addEventListener("click", navOpenEvent);
    navOpenBtn.type = "button";
    headerLeft.appendChild(navOpenBtn);

    const navOpenBtnImg = document.createElement("img");
    navOpenBtnImg.id = "navOpenBtnImg";
    navOpenBtnImg.src = "imgs/bars-solid.svg";
    navOpenBtn.appendChild(navOpenBtnImg);

    const youtubePremiumLogo = document.createElement("img");
    youtubePremiumLogo.id = "youtubePremiumLogo";
    youtubePremiumLogo.src = "imgs/YouTube_Premium_logo.svg";
    youtubePremiumLogo.alt = "Youtube 홈";
    headerLeft.appendChild(youtubePremiumLogo);

    const countryCode = document.createElement("span");
    countryCode.setAttribute("id", "countryCode");
    countryCode.innerHTML = "KR";
    headerLeft.appendChild(countryCode);

    return headerLeft;
}

const HeaderMiddle = () => {

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const hoverDetailsDisplayBlockEvent = (e) => {
        const hoverDetails = e.currentTarget.querySelector(".hoverDetails");
        if (hoverDetails) {
            hoverDetails.style.display = "block";
        }
    }
    const hoverDetailsDisplayNoneEvent = (e) => {
        const hoverDetails = e.currentTarget.querySelector(".hoverDetails");
        if (hoverDetails) {
            hoverDetails.style.display = "none";
        }
    }
    
    const headerMiddle = document.createElement("div");
    headerMiddle.id = "headerMiddle";

    const searchBar = document.createElement("span");
    searchBar.id = "searchBar";
    headerMiddle.appendChild(searchBar);

    const searchText = document.createElement("div");
    searchText.id = "searchText";
    searchBar.appendChild(searchText);

    const searchInput = document.createElement("input");
    searchInput.id = "searchInput";
    searchInput.type = "text";
    searchInput.placeholder = "검색";
    searchText.appendChild(searchInput);

    const searchTypingBtn = document.createElement("button");
    searchTypingBtn.id = "searchTypingBtn";
    searchTypingBtn.type = "button";
    searchText.appendChild(searchTypingBtn);

    const searchKeyboard = document.createElement("img");
    searchKeyboard.id = "searchKeyboard";
    searchKeyboard.src = "https://www.gstatic.com/inputtools/images/tia.png";
    searchTypingBtn.appendChild(searchKeyboard);

    const magnifyingGlassBtn = document.createElement("button");
    magnifyingGlassBtn.id = "magnifyingGlassBtn";
    magnifyingGlassBtn.className = "hoverBtn";
    magnifyingGlassBtn.addEventListener("mouseover", hoverDetailsDisplayBlockEvent);
    magnifyingGlassBtn.addEventListener("mouseout", hoverDetailsDisplayNoneEvent);
    magnifyingGlassBtn.value = "검색버튼"
    magnifyingGlassBtn.name = "검색"
    magnifyingGlassBtn.type = "button";
    searchBar.appendChild(magnifyingGlassBtn);

    const magnifyingGlassBtnImg = document.createElement("img");
    magnifyingGlassBtnImg.className = "magnifyingGlassBtnImg";
    magnifyingGlassBtnImg.src = "imgs/magnifying-glass-solid.svg";
    magnifyingGlassBtn.appendChild(magnifyingGlassBtnImg);

    const magnifyingGlassBtnTag = document.createElement("div");
    magnifyingGlassBtnTag.className = "hoverDetails";
    magnifyingGlassBtnTag.style.display = "none";
    magnifyingGlassBtnTag.innerHTML = "검색"
    magnifyingGlassBtn.appendChild(magnifyingGlassBtnTag);

    const microphoneBtn = document.createElement("button");
    microphoneBtn.id = "microphoneBtn";
    microphoneBtn.className = "hoverBtn";
    microphoneBtn.addEventListener("mouseover", hoverDetailsDisplayBlockEvent);
    microphoneBtn.addEventListener("mouseout", hoverDetailsDisplayNoneEvent);
    microphoneBtn.value = "음성으로검색버튼";
    microphoneBtn.name = "음성으로 검색";
    microphoneBtn.type = "button";
    headerMiddle.appendChild(microphoneBtn);

    const microphone = document.createElement("img");
    microphone.id = "microphone";
    microphone.src = "imgs/microphone-solid.svg";
    microphoneBtn.appendChild(microphone);

    const microphoneTag = document.createElement("div");
    microphoneTag.className = "hoverDetails";
    microphoneTag.style.display = "none";
    microphoneTag.innerHTML = "음성으로 검색";
    microphoneBtn.appendChild(microphoneTag);

    return headerMiddle;
}

const HeaderRight = () => {

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const hoverDetailsDisplayBlockEvent = (e) => {
        const hoverDetails = e.currentTarget.querySelector(".hoverDetails");
        if (hoverDetails) {
            hoverDetails.style.display = "block";
        }
    }
    const hoverDetailsDisplayNoneEvent = (e) => {
        const hoverDetails = e.currentTarget.querySelector(".hoverDetails");
        if (hoverDetails) {
            hoverDetails.style.display = "none";
        }
    }

    const headerRight = document.createElement("div");
    headerRight.id = "headerRight";

    const uploadBtn = document.createElement("button");
    uploadBtn.id = "uploadBtn";
    uploadBtn.className = "headerRightBtns hoverBtn";
    uploadBtn.addEventListener("mouseover", hoverDetailsDisplayBlockEvent);
    uploadBtn.addEventListener("mouseout", hoverDetailsDisplayNoneEvent);
    uploadBtn.value = "업로드버튼";
    uploadBtn.name = "업로드";
    uploadBtn.type = "button";
    headerRight.appendChild(uploadBtn);

    const uploadBtnImg = document.createElement("img");
    uploadBtnImg.className = "headerRightIcons";
    uploadBtnImg.src = "imgs/video-solid.svg";
    uploadBtn.appendChild(uploadBtnImg);

    const uploadBtnTag = document.createElement("div");
    uploadBtnTag.className = "hoverDetails";
    uploadBtnTag.style.display = "none";
    uploadBtnTag.innerHTML = "만들기";
    uploadBtn.appendChild(uploadBtnTag);

    const alarmBtn = document.createElement("button");
    alarmBtn.id = "alarmBtn";
    alarmBtn.className = "headerRightBtns hoverBtn";
    alarmBtn.addEventListener("mouseover", hoverDetailsDisplayBlockEvent);
    alarmBtn.addEventListener("mouseout", hoverDetailsDisplayNoneEvent);
    alarmBtn.value = "알림버튼";
    alarmBtn.name = "알림";
    alarmBtn.type = "button";
    headerRight.appendChild(alarmBtn);

    const alarmBtnImg = document.createElement("img");
    alarmBtnImg.className = "headerRightIcons";
    alarmBtnImg.src = "imgs/bell-regular.svg";
    alarmBtn.appendChild(alarmBtnImg);

    const alarmBadge = document.createElement("div");
    alarmBadge.id = "alarmBadge";
    alarmBadge.innerHTML = "9+";
    alarmBtn.appendChild(alarmBadge);

    const alarmBtnTag = document.createElement("div");
    alarmBtnTag.className = "hoverDetails";
    alarmBtnTag.style.display = "none";
    alarmBtnTag.innerHTML = "알림"
    alarmBtn.appendChild(alarmBtnTag);

    const profileBtn = document.createElement("button");
    profileBtn.id = "profileBtn";
    profileBtn.type = "button";
    headerRight.appendChild(profileBtn);

    const profileImg = document.createElement("img");
    profileImg.id = "profileImg";
    profileImg.className = "headerRightIcons";
    profileImg.src = "https://yt3.ggpht.com/ytc/AOPolaR8cvVX4lWqRCFMDreXwkxAGUSkd8i-gOk2rmgg80Vag4G8-_Ayo5c9L2NduuJn=s88-c-k-c0x00ffffff-no-rj";
    profileBtn.appendChild(profileImg);

    return headerRight;
}

const Header = () => {
    const header = document.createElement("header");
    header.appendChild(HeaderLeft());
    header.appendChild(HeaderMiddle());
    header.appendChild(HeaderRight());

    return header;
}

// ------------------- Nav -------------------
const NavItem = (NavBtnData) => {
    const { value, title, imgSrc, name } = NavBtnData;

    const navBtn = document.createElement("button");
    navBtn.className = "imnav-btn";
    navBtn.value = value;
    navBtn.title = title;
    navBtn.type = "button";

    const navBtnImg = document.createElement("img");
    navBtnImg.className = "imnav-btn-img";
    navBtnImg.src = imgSrc;
    navBtn.appendChild(navBtnImg);

    const navBtnName = document.createElement("div");
    navBtnName.className = "imnav-name";
    navBtnName.innerHTML = name;
    navBtn.appendChild(navBtnName);

    return navBtn;
}

const Nav = () => {

    const NavBtnData = [
        {
            value: "홈",
            title: "홈",
            imgSrc: "imgs/house-solid.svg",
            name: "홈"
        },
        {
            value: "Shorts",
            title: "Shorts",
            imgSrc: "imgs/youtube-shorts-logo.svg",
            name: "Shorts"
            },
        {
            value: "구독",
            title: "구독",
            imgSrc: "imgs/warehouse-solid.svg",
            name: "구독"
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            imgSrc: "imgs/database-solid.svg",
            name: "YouTube Music"
        },
        {
            value: "보관함",
            title: "보관함",
            imgSrc: "imgs/photo-film-solid.svg",
            name: "보관함"
        },
        {
            value: "오프라인 저장 동영상",
            title: "오프라인 저장 동영상",
            imgSrc: "imgs/download-solid.svg",
            name: "오프라인 저장 동영상"
        }
    ];

    const nav = document.createElement("nav");
    nav.id = "implicit-nav";
    nav.style.display = "block";

    NavBtnData.forEach(navBtnData => {
        nav.appendChild(NavItem(navBtnData));
    });

    return nav;
}

// ------------------- Detailed Nav -------------------
const DetailedNavItem = (DetailedNavBtnData) => {
    const { value, title, className, imgSrc, name } = DetailedNavBtnData;

    const detailedNavBtn = document.createElement("button");
    detailedNavBtn.className = "exnav-btn";
    detailedNavBtn.value = value;
    detailedNavBtn.title = title;
    detailedNavBtn.type = "button";

    const detailedNavBtnImg = document.createElement("img");
    detailedNavBtnImg.className = className;
    detailedNavBtnImg.src = imgSrc;
    detailedNavBtn.appendChild(detailedNavBtnImg);

    const detailedNavBtnName = document.createElement("div");
    detailedNavBtnName.className = "exnav-name";
    detailedNavBtnName.innerHTML = name;
    detailedNavBtn.appendChild(detailedNavBtnName);

    return detailedNavBtn;
}

const DetailedNav = () => {

    const DetailedNavBtnHomeData = [
        {
            value: "홈",
            title: "홈",
            className: "exnav-btn-img",
            imgSrc: "imgs/house-solid.svg", 
            name: "홈", 
        },
        {
            value: "Shorts",
            title: "Shorts",
            className: "exnav-btn-img",
            imgSrc: "imgs/youtube-shorts-logo.svg", 
            name: "Shorts", 
        },
        {
            value: "구독",
            title: "구독",
            className: "exnav-btn-img",
            imgSrc: "imgs/warehouse-solid.svg", 
            name: "구독", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "exnav-btn-img",
            imgSrc: "imgs/database-solid.svg", 
            name: "YouTube Music", 
        },
        {
            value: "보관함",
            title: "보관함",
            className: "exnav-btn-img",
            imgSrc: "imgs/photo-film-solid.svg", 
            name: "보관함", 
        },
        {
            value: "시청기록",
            title: "시청기록",
            className: "exnav-btn-img",
            imgSrc: "imgs/clock-rotate-left-solid.svg", 
            name: "시청기록", 
        },
        {
            value: "내 동영상",
            title: "내 동영상",
            className: "exnav-btn-img",
            imgSrc: "imgs/square-caret-right-regular.svg", 
            name: "내 동영상", 
        },
        {
            value: "내 영화",
            title: "내 영화",
            className: "exnav-btn-img",
            imgSrc: "imgs/clapperboard-solid.svg", 
            name: "내 영화", 
        },
        {
            value: "나중에 볼 동영상",
            title: "나중에 볼 동영상",
            className: "exnav-btn-img",
            imgSrc: "imgs/clock-regular.svg", 
            name: "나중에 볼 동영상", 
        },
        {
            value: "오프라인 저장 동영상",
            title: "오프라인 저장 동영상",
            className: "exnav-btn-img",
            imgSrc: "imgs/download-solid.svg", 
            name: "오프라인 저장 동영상", 
        },
        {
            value: "더보기",
            title: "더보기",
            className: "exnav-btn-img",
            imgSrc: "imgs/angle-down-solid.svg", 
            name: "더보기", 
        }
    ]

    const DetailedNavBtnSubscribeData = [
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/bMa6Y7qQ6Q0zCt-5M0gxsmHh6gRdU7m4AnJ6LTN1aNxH7nDMNjnB3vucd4sJ_d6olVEMSh-gMg=s68-c-k-c0x00ffffff-no-rj", 
            name: "Jazz Melody", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj", 
            name: "때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj", 
            name: "반고흐가 되고싶어", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/ytc/AOPolaSBFQ8BAVyWY5yo-CNlnFmJ3LE_7syzZpjG11lntg=s68-c-k-c0x00ffffff-no-rj", 
            name: "재즈기자 Jazz Editor", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/RL_eRSTZjEdc3vAB78wiK6xihSd3wInZ4g1TA3JLzOvxRdJg_2IKqIw8y3CAd03qvgsBb-P5jQ=s68-c-k-c0x00ffffff-no-rj", 
            name: "딩고 뮤직 / dingo music", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/Xo80SrZKXQbOIf3vxV_rbspOArWwdODWrMyQaV_k-xhIKGvCv7h1uPqchD-m8ZDxm59Ix01xxA=s68-c-k-c0x00ffffff-no-rj", 
            name: "재즈오빠 Jazzoppa", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/v-yQ9UVqUgQlxBwlA2qBPI7_QeqbmgrD7uJQiKK4GIvgmrsJeau059F0uFLTRX3XaopNyEm25w=s68-c-k-c0x00ffffff-no-rj", 
            name: "때잉", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/7C7gf_M2SLHMxYY74vn7QPRJuGrc9Ul2ehvf6LXmHDeAVi4-dBiSOGB8bXhMeLz0GYvqzwbk=s68-c-k-c0x00ffffff-no-rj", 
            name: "기분Jazz네 | Mood is Jazz", 
        },
        {
            value: "구독 더보기",
            title: "구독 더보기",
            className: "exnav-btn-img",
            imgSrc: "imgs/angle-down-solid.svg", 
            name: "376개 더보기", 
        }
    ]
    const DetailedNavBtnExploreData = [
        {
            value: "인기 급상승",
            title: "인기 급상승",
            className: "exnav-btn-img",
            imgSrc: "imgs/fire-solid.svg", 
            name: "인기 급상승", 
        },
        {
            value: "쇼핑",
            title: "쇼핑",
            className: "exnav-btn-img",
            imgSrc: "imgs/bag-shopping-solid.svg", 
            name: "쇼핑", 
        },
        {
            value: "음악",
            title: "음악",
            className: "exnav-btn-img",
            imgSrc: "imgs/music-solid.svg", 
            name: "음악", 
        },
        {
            value: "영화",
            title: "영화",
            className: "exnav-btn-img",
            imgSrc: "imgs/clapperboard-solid.svg", 
            name: "영화", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "exnav-btn-img",
            imgSrc: "imgs/wifi-solid.svg", 
            name: "실시간", 
        },
        {
            value: "게임",
            title: "게임",
            className: "exnav-btn-img",
            imgSrc: "imgs/gamepad-solid.svg", 
            name: "게임", 
        },
        {
            value: "스포츠",
            title: "스포츠",
            className: "exnav-btn-img",
            imgSrc: "imgs/medal-solid.svg", 
            name: "스포츠", 
        },
        {
            value: "학습",
            title: "학습",
            className: "exnav-btn-img",
            imgSrc: "imgs/lightbulb-regular.svg", 
            name: "학습", 
        }
    ]
    const DetailedNavBtnExtraData = [
        {
            value: "YouTube Studio",
            title: "YouTube Studio",
            className: "exnav-btn-img",
            imgSrc: "imgs/youtube-studio.webp", 
            name: "YouTube 스튜디오", 
        },
        {
            value: "YouTube Music",
            title: "YouTube Music",
            className: "exnav-btn-img",
            imgSrc: "imgs/youtube-music_icon.png", 
            name: "YouTube Music", 
        },
        {
            value: "YouTube Kids",
            title: "YouTube Kids",
            className: "exnav-btn-img",
            imgSrc: "imgs/youtube-kids.png", 
            name: "YouTube Kids", 
        }
    ]
    const DetailedNavBtnSettingData = [
        {
            value: "설정",
            title: "설정",
            className: "exnav-btn-img",
            imgSrc: "imgs/gear-solid.svg", 
            name: "설정", 
        },
        {
            value: "신고 기록",
            title: "신고 기록",
            className: "exnav-btn-img",
            imgSrc: "imgs/flag-regular.svg", 
            name: "신고 기록", 
        },
        {
            value: "고객센터",
            title: "고객센터",
            className: "exnav-btn-img",
            imgSrc: "imgs/circle-question-solid.svg", 
            name: "고객센터", 
        },
        {
            value: "의견 보내기",
            title: "의견 보내기",
            className: "exnav-btn-img",
            imgSrc: "imgs/circle-exclamation-solid.svg", 
            name: "의견 보내기", 
        }
    ];
    
    const detailedNav = document.createElement("nav");
    detailedNav.id = "explicit-nav";
    detailedNav.style.display = "none";

    // section1
    const detailedNavSection = document.createElement("section");
    detailedNavSection.id = "sections";
    detailedNav.appendChild(detailedNavSection)

    const homeGuideSection = document.createElement("div");
    homeGuideSection.className = "guide-section";
    detailedNavSection.appendChild(homeGuideSection);

    DetailedNavBtnHomeData.forEach(homeData => {
        homeGuideSection.appendChild(DetailedNavItem(homeData));
    });

    const subscribeGuideSection = document.createElement("div");
    subscribeGuideSection.className = "guide-section";
    detailedNavSection.appendChild(subscribeGuideSection);

    DetailedNavBtnSubscribeData.forEach(subscribeData => {
        subscribeGuideSection.appendChild(DetailedNavItem(subscribeData));
    });

    const exploreGuideSection = document.createElement("div");
    exploreGuideSection.className = "guide-section";
    detailedNavSection.appendChild(exploreGuideSection);

    DetailedNavBtnExploreData.forEach(exploreData => {
        exploreGuideSection.appendChild(DetailedNavItem(exploreData));
    });

    const extraGuideSection = document.createElement("div");
    extraGuideSection.className = "guide-section";
    detailedNavSection.appendChild(extraGuideSection);

    DetailedNavBtnExtraData.forEach(extraData => {
        extraGuideSection.appendChild(DetailedNavItem(extraData));
    });

    const settingGuideSection = document.createElement("div");
    settingGuideSection.className = "guide-section";
    detailedNavSection.appendChild(settingGuideSection);

    DetailedNavBtnSettingData.forEach(settingData => {
        settingGuideSection.appendChild(DetailedNavItem(settingData));
    });

    // section2
    const footerSection = document.createElement("section");
    footerSection.id = "footer";
    detailedNav.appendChild(footerSection);

    const footerGuide1 = document.createElement("div");
    footerGuide1.className = "footer-guide";
    footerGuide1.innerHTML = "정보 보도자료 저작권 문의하기 크리에이터 광고 개발자";
    footerSection.appendChild(footerGuide1);

    const footerGuide2 = document.createElement("div");
    footerGuide2.className = "footer-guide";
    footerGuide2.innerHTML = "약관 개인정보처리방침 정책 및 안전 YouTube 작동의 원리 새로운 기능 테스트하기";
    footerSection.appendChild(footerGuide2);

    const footerGuide3 = document.createElement("div");
    footerGuide3.className = "footer-guide";
    footerGuide3.innerHTML = "© 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.";
    footerSection.appendChild(footerGuide3);

    return detailedNav;
}


// ------------------- Main -------------------
const Thumbnail = (VideoListData) => {
    
    const { moveToVideoUrl, thumbnailImgSrc, thumbnailVideoSrc, runningTime } = VideoListData;

    const moveToVideo = document.createElement("a");
    moveToVideo.href = moveToVideoUrl;

    const thumbnailBox = document.createElement("div");
    thumbnailBox.className = "thumbnail-box";
    moveToVideo.appendChild(thumbnailBox);

    const thumbnailImg = document.createElement("img");
    thumbnailImg.className = "thumbnail";
    thumbnailImg.src = thumbnailImgSrc;
    thumbnailBox.appendChild(thumbnailImg);

    const thumbnailVideo = document.createElement("iframe");
    thumbnailVideo.className = "thumbnail-video";
    thumbnailVideo.style.display = "none";
    thumbnailVideo.src = thumbnailVideoSrc;
    thumbnailVideo.title = "YouTube video player";
    thumbnailVideo.setAttribute("frameborder", "0");
    thumbnailVideo.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    thumbnailVideo.setAttribute("allowfullscreen", "");
    thumbnailBox.appendChild(thumbnailVideo);

    const runningTimeElement = document.createElement("div");
    runningTimeElement.className = "time-status";
    runningTimeElement.innerHTML = runningTime;
    thumbnailBox.appendChild(runningTimeElement);

    return moveToVideo;
}

const VideoInfo = (VideoListData) => {

    // ------------------- .contents-details 호버 이벤트 -------------------
    const detailBtnDisplayBlockEvent = (e) => {
        const detailBtn = e.currentTarget.querySelector(".detail-btn");
        if (detailBtn) {
            detailBtn.style.display = "block";
        }
    }
    const detailBtnDisplayNoneEvent = (e) => {
        const detailBtn = e.currentTarget.querySelector(".detail-btn");
        if (detailBtn) {
            detailBtn.style.display = "none";
        }
    }
    
    const { channelProfileUrl, channelProfileImgSrc, videoTitle, channelName, view, upload } = VideoListData;

    const details = document.createElement("div");
    details.className = "contents-details";
    details.addEventListener("mouseover", detailBtnDisplayBlockEvent);
    details.addEventListener("mouseout", detailBtnDisplayNoneEvent);

    const moveToChannel = document.createElement("a");
    moveToChannel.href = channelProfileUrl;
    details.appendChild(moveToChannel);

    const profileImg = document.createElement("img");
    profileImg.className = "avatar"
    profileImg.src = channelProfileImgSrc;
    moveToChannel.appendChild(profileImg);

    const videoInfo = document.createElement("div");
    videoInfo.className = "meta";
    details.appendChild(videoInfo);

    const title = document.createElement("h3");
    title.className = "title";
    title.innerHTML = videoTitle;
    videoInfo.appendChild(title);

    const etcInfosContainer = document.createElement("div");
    videoInfo.appendChild(etcInfosContainer);

    const channelProfile = document.createElement("a");
    channelProfile.href = channelProfileUrl;
    etcInfosContainer.appendChild(channelProfile);

    const channelNameInfo = document.createElement("div");
    channelNameInfo.className = "metadatas";
    channelNameInfo.innerHTML = channelName;
    channelProfile.appendChild(channelNameInfo);

    const etcInfo = document.createElement("div");
    etcInfo.className = "metadatas";
    etcInfo.innerHTML = `조회수 ${view} ∙ ${upload}`;
    etcInfosContainer.appendChild(etcInfo);

    const detailBtn = document.createElement("button");
    detailBtn.className = "detail-btn a-detail";
    detailBtn.value = "세부사항 설정";
    detailBtn.style.display = "none";
    detailBtn.type = "button";
    details.appendChild(detailBtn);

    const detailBtnImg = document.createElement("img");
    detailBtnImg.className = "details";
    detailBtnImg.src = "imgs/ellipsis-vertical-solid.svg"
    detailBtn.appendChild(detailBtnImg);

    return details;
}

const Video = (videoData) => {

    // ------------------- .contents-row-item 호버 이벤트 -------------------
    const thumbnailDisplayNoneEvent = (e) => {
        const thumbnail = e.currentTarget.querySelector(".thumbnail");
        if (thumbnail) {
            thumbnail.style.opacity = "1"; 
            thumbnail.style.display = "none";

            setTimeout(() => {
                thumbnail.style.opacity = "0"; 
            }, 80); 
        }

        const thumbnailVideo = e.currentTarget.querySelector(".thumbnail-video");
        if (thumbnailVideo) {
            thumbnailVideo.style.opacity = "0"; 
            thumbnailVideo.style.display = "block";

            setTimeout(() => {
                thumbnailVideo.style.opacity = "1"; 
            }, 80);
        }
    }

    const thumbnailDisplayBlockEvent = (e) => {
        const thumbnail = e.currentTarget.querySelector(".thumbnail");
        if (thumbnail) {
            thumbnail.style.opacity = "0"; 
            thumbnail.style.display = "block";

            setTimeout(() => {
                thumbnail.style.opacity = "1"; 
            }, 80); 
        }
        const thumbnailVideo = e.currentTarget.querySelector(".thumbnail-video");
        if (thumbnailVideo) {
            thumbnailVideo.style.opacity = "1";
            thumbnailVideo.style.display = "none";

            setTimeout(() => {
                thumbnailVideo.style.opacity = "0"; 
            }, 80); 
        }
    }

    const video = document.createElement("section");
    video.className = "contents-row-item";
    video.addEventListener("mouseover", thumbnailDisplayNoneEvent);
    video.addEventListener("mouseout", thumbnailDisplayBlockEvent);

    video.appendChild(Thumbnail(videoData));
    video.appendChild(VideoInfo(videoData));

    return video;
}

const Main = () => {

    const VideoListData = [
        {
            moveToVideoUrl: "https://www.youtube.com/watch?v=VW-Caeb_0OU&t=2s",
            thumbnailImgSrc: "https://i.ytimg.com/vi/LqME1y6Mlyg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCxoHJSZG5Jv57PIVNCyxcJ2JfMAg",
            thumbnailVideoSrc: "https://www.youtube.com/embed/VW-Caeb_0OU?si=tLR35RQstitiN9bM",
            runningTime: "7:59:59",
            channelProfileUrl: "https://www.youtube.com/@bossa3047",
            channelProfileImgSrc: "https://yt3.ggpht.com/bMa6Y7qQ6Q0zCt-5M0gxsmHh6gRdU7m4AnJ6LTN1aNxH7nDMNjnB3vucd4sJ_d6olVEMSh-gMg=s68-c-k-c0x00ffffff-no-rj",
            videoTitle: "[𝐖𝐎𝐑𝐊&𝐉𝐀𝐙𝐙] 사무실에서 일하다가 몰래 리듬타기 좋은 펑키한 재즈비지엠😎💖 l Relaxing Jazz Piano Music for Office, Work, Study",
            channelName: "Jazz Melody",
            view: "507회",
            upload: "1일 전"
        },
        {
            moveToVideoUrl: "https://www.youtube.com/watch?v=x6i3_LfeTjY",
            thumbnailImgSrc: "https://i.ytimg.com/vi/x6i3_LfeTjY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAqeEw2oAWSEkbU9yzkeWa-Kg21SQ",
            thumbnailVideoSrc: "https://www.youtube.com/embed/x6i3_LfeTjY?si=eSo1PnaI96cQ6tQT",
            runningTime: "4:00:00",
            channelProfileUrl: "https://www.youtube.com/@takealook.",
            channelProfileImgSrc: "https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj",
            videoTitle: "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 질리도록 듣는 히트곡엔 그 이유가 있다𝐅𝐞𝐚𝐭. 𝐋𝐚𝐮𝐯, 𝐋𝐚𝐧𝐲, 𝐇𝐨𝐧𝐧𝐞, 𝐤𝐞𝐬𝐡𝐢, 𝐏𝐞𝐝𝐞𝐫 𝐄𝐥𝐢𝐚𝐬, 𝐓𝐫𝐨𝐲𝐞 𝐒𝐢𝐯𝐚𝐧, 𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐏𝐮𝐭𝐡",
            channelName: "때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ",
            view: "621만회",
            upload: "3개월"
        },
        {
            moveToVideoUrl: "https://www.youtube.com/watch?v=180ysvIh6kU&t=1s",
            thumbnailImgSrc: "https://i.ytimg.com/vi/180ysvIh6kU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAwC7NmQpn52EmQ9cd1bA9yVW6Kw",
            thumbnailVideoSrc: "https://www.youtube.com/embed/180ysvIh6kU?si=GdndZ4LjT5TKgvCA",
            runningTime: "59:45",
            channelProfileUrl: "https://www.youtube.com/@Want_To_Be_VanGogh",
            channelProfileImgSrc: "https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj",
            videoTitle: "[Playlist] 비오는 뉴욕 대학교 감성",
            channelName: "반고흐가 되고싶어 Playlist",
            view: "195만회",
            upload: "4개월"
        },
        {
            moveToVideoUrl: "https://www.youtube.com/watch?v=F64UhWehLOE",
            thumbnailImgSrc: "https://i.ytimg.com/vi/F64UhWehLOE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvw5VnIhey2cCQAul0A10tt3PmAw",
            thumbnailVideoSrc: "https://www.youtube.com/embed/F64UhWehLOE?si=qwPIK3C6HUTYXThS",
            runningTime: "50:25",
            channelProfileUrl: "https://www.youtube.com/@jazzeditor",
            channelProfileImgSrc: "https://yt3.ggpht.com/ytc/AOPolaSBFQ8BAVyWY5yo-CNlnFmJ3LE_7syzZpjG11lntg=s68-c-k-c0x00ffffff-no-rj",
            videoTitle: "[Playlist] 뉴욕의 가을",
            channelName: "재즈기자 Jazz Editor",
            view: "1.7만회",
            upload: "3일 전"
        },
        {
            moveToVideoUrl: "https://www.youtube.com/watch?v=81yQY3TseKQ",
            thumbnailImgSrc: "https://i.ytimg.com/vi/81yQY3TseKQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFPswKeZfkzz2eIs7SdwqlYqFt_g",
            thumbnailVideoSrc: "https://www.youtube.com/embed/81yQY3TseKQ?si=rN3HhloLihAQSlk4",
            runningTime: "21:05",
            channelProfileUrl: "https://www.youtube.com/@DingoMusic",
            channelProfileImgSrc: "https://yt3.ggpht.com/RL_eRSTZjEdc3vAB78wiK6xihSd3wInZ4g1TA3JLzOvxRdJg_2IKqIw8y3CAd03qvgsBb-P5jQ=s68-c-k-c0x00ffffff-no-rj",
            videoTitle: "혼네의 킬링보이스를 라이브로! - free love, Location Unknown, BACK ON TOP, by my side, Warm On A Cold Night, Day 1",
            channelName: "딩고 뮤직 / dingo music",
            view: "223만회",
            upload: "1년 전"
        },
        { 
            moveToVideoUrl: "https://www.youtube.com/watch?v=ezzDBTX7Z3w",
            thumbnailImgSrc: "https://i.ytimg.com/vi/ezzDBTX7Z3w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeowqyOLwCfXVMR4RhNaamOIMn1A",
            thumbnailVideoSrc: "https://www.youtube.com/embed/ezzDBTX7Z3w?si=670s8l40UbIdCITs",
            runningTime: "8:14:31",
            channelProfileUrl: "https://www.youtube.com/@jazzoppa",
            channelProfileImgSrc: "https://yt3.ggpht.com/Xo80SrZKXQbOIf3vxV_rbspOArWwdODWrMyQaV_k-xhIKGvCv7h1uPqchD-m8ZDxm59Ix01xxA=s68-c-k-c0x00ffffff-no-rj",
            videoTitle: "'재진스 pt.III' | 뉴진스 재즈 플리 pt.III [playlist]",
            channelName: "재즈오빠 Jazzoppa",
            view: "27만회",
            upload: "1개월"
        },
        {
            moveToVideoUrl: "https://www.youtube.com/watch?v=59qUq5NRMhE&t=26s",
            thumbnailImgSrc: "https://i.ytimg.com/vi/59qUq5NRMhE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd2puQudZfxhJWV1wAu1AIYCKgLQ",
            thumbnailVideoSrc: "https://www.youtube.com/embed/59qUq5NRMhE?si=qm8miqkROfYD9YvE",
            runningTime: "1:07:38",
            channelProfileUrl: "https://www.youtube.com/@sttaying",
            channelProfileImgSrc: "https://yt3.ggpht.com/v-yQ9UVqUgQlxBwlA2qBPI7_QeqbmgrD7uJQiKK4GIvgmrsJeau059F0uFLTRX3XaopNyEm25w=s68-c-k-c0x00ffffff-no-rj",
            videoTitle: "베이스 매력 모르는 사람 불쌍해",
            channelName: "때잉",
            view: "622만회",
            upload: "1년 전"
        },
        {
            moveToVideoUrl: "https://www.youtube.com/watch?v=BshkGKR5iL8",
            thumbnailImgSrc: "https://i.ytimg.com/vi/BshkGKR5iL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrF7trszfVd--AeD22kDbqfHrcKg",
            thumbnailVideoSrc: "https://www.youtube.com/embed/BshkGKR5iL8?si=Pm2no4ApTQqpyQfM",
            runningTime: "10:09:57",
            channelProfileUrl: "https://www.youtube.com/@moodisjazz",
            channelProfileImgSrc: "https://yt3.ggpht.com/7C7gf_M2SLHMxYY74vn7QPRJuGrc9Ul2ehvf6LXmHDeAVi4-dBiSOGB8bXhMeLz0GYvqzwbk=s68-c-k-c0x00ffffff-no-rj",
            videoTitle: "Playlist | 시원한, 보사노바 재즈",
            channelName: "기분Jazz네 | Mood is Jazz",
            view: "192만회",
            upload: "1년 전"
        }
    ];

    const main = document.createElement("article");

    VideoListData.forEach(videoData => {
        main.appendChild(Video(videoData));
    });

    return main;
} 

const root = () => {
    const root = document.getElementById("root");
    
    root.appendChild(Header());
    root.appendChild(Nav());
    root.appendChild(DetailedNav());
    root.appendChild(Main());
    
    //return root;
}

root();
