// Mobile menu toggle
const toggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('main-nav');
if (toggle) {
    toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
}

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 960) {
            nav.classList.remove('open');
        }
    });
});

// Back to Top Button functionality
const backToTopBtn = document.getElementById('backToTopBtn');
let hasPulsed = false;

function checkScrollPosition() {
    if (!backToTopBtn) return;
    if (window.scrollY > 300) {
        if (!backToTopBtn.classList.contains('show')) {
            backToTopBtn.classList.add('show');
            if (!hasPulsed) {
                backToTopBtn.classList.add('pulse');
                setTimeout(() => {
                    backToTopBtn.classList.remove('pulse');
                }, 500);
                hasPulsed = true;
            }
        }
    } else {
        if (backToTopBtn.classList.contains('show')) {
            backToTopBtn.classList.remove('show');
            backToTopBtn.classList.remove('pulse');
            hasPulsed = false;
        }
    }
}

function scrollToTop() {
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        const introPosition = introSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: introPosition - 20,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    if (backToTopBtn) {
        backToTopBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            if (backToTopBtn) backToTopBtn.style.transform = '';
        }, 150);
    }
}

let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(function() {
            checkScrollPosition();
            ticking = false;
        });
        ticking = true;
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
    checkScrollPosition();
}

// Profile data
const profiles = [
    {
        name: "Mei Yi Foo",
        location: "United Kingdom",
        description: "Mei Yi Foo is a pianist and festival curator, creating inspiring music and arts experiences. The Nine Arts Festival organised in 2025 spearheaded by her was supported by MyHeart as part of our collaboration.",
        image: "https://myheart.my/wp-content/uploads/2025/08/2014_L1-e1755587864627.jpg",
        socialUrl: "https://www.linkedin.com/in/mei-yi-foo-22114741/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Dr. Daniel Mahadzir",
        location: "Singapore",
        description: "Dr. Daniel Mahadzir is a Malaysian clinical nutritionist specialising in healthy ageing, longevity and metabolic research.",
        image: "https://myheart.my/wp-content/uploads/2025/12/Dr.-Danial-Mahadzir.jpg",
        socialUrl: "https://www.linkedin.com/in/dvnielmd/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Hannah Maran",
        location: "Thailand",
        description: "Hannah Maran is a Malaysian philanthropy strategist and community connector, specialising in partnerships, fundraising and impact.",
        image: "https://myheart.my/wp-content/uploads/2025/12/Hannah-Maran.jpg",
        socialUrl: "https://www.linkedin.com/in/hannahmaran/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Dr. Amy Poh",
        location: "Japan",
        description: "Dr. Amy Poh is a researcher and MJVC 2024 Chairperson, specialising in security challenges in digital technologies.",
        image: "https://myheart.my/wp-content/uploads/2024/06/Dr.-Amy.jpg",
        socialUrl: "https://www.linkedin.com/in/amy-poh-ai-ling-phd-14554086/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Samantha Chong",
        location: "China",
        description: "Samantha is a classical opera singer and has performed lead roles in productions all around the world. She has graced stages at the Royal Opera House, La Scala, and the Metropolitan Opera, captivating audiences with her powerful mezzo-soprano voice. Her repertoire includes iconic roles such as Carmen, Rosina in The Barber of Seville, and Cenerentola. Beyond performing, Samantha is passionate about mentoring young opera talents and has conducted masterclasses across Asia and Europe.",
        image: "https://myheart.my/wp-content/uploads/2023/03/Samantha-Chong.jpg",
        socialUrl: "https://www.linkedin.com/in/samantha-chong-8172ab20/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Dr. Aid Fawzal",
        location: "United Kingdom",
        description: "Dr. Aid is an engineer with expertise in EV cooling system. He invented the Fawzal Number used in supercar design. His research focuses on thermal management in electric vehicles and has been published in leading engineering journals.",
        image: "https://myheart.my/wp-content/uploads/2023/03/1524242424806.jpeg",
        socialUrl: "https://www.linkedin.com/in/ahmad-syahid-a-fawzal-b229716a/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Dr. Catheryn Lim",
        location: "United Kingdom",
        description: "Dr. Catheryn is a researcher who developed genetic and gene therapies for neuromuscular diseases.",
        image: "https://myheart.my/wp-content/uploads/2023/03/A0BKkOVq_400x400.jpg",
        socialUrl: "https://www.linkedin.com/in/catheryn-lim-310b40164/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "KC Cheah",
        location: "UAE",
        description: "Cheah has more than three decades of experience as a deal maker in foreign direct investment.",
        image: "https://myheart.my/wp-content/uploads/2023/03/1679595130597.jpeg",
        socialUrl: "https://www.linkedin.com/in/cheah-kian-choong/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Dr. Raja Yasmin",
        location: "Australia",
        description: "Dr. Raja Yasmin devotes herself to coaching and conducting workshops for female entrepreneurs, imparting her valuable knowledge to those striving for success.",
        image: "https://myheart.my/wp-content/uploads/2023/04/Dr.-Yasmin-Aussie.jpg",
        socialUrl: "https://www.linkedin.com/in/dr-yasmin-raja-abdul/kala",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Henry Lee",
        location: "Canada",
        description: "Henry has been focusing on building strong business relationships between Canada and Southeast Asia that support new trade and investments.",
        image: "https://myheart.my/wp-content/uploads/2023/04/Untitled-design-4.png",
        socialUrl: "https://www.linkedin.com/in/henry-leong-bee-lee-07720618/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Professor Kanes",
        location: "United Kingdom",
        description: "Professor Kanes is an entrepreneur and eclectic senior professional Malaysian.",
        image: "https://myheart.my/wp-content/uploads/2023/04/Prof-Kanes-UK.jpg",
        socialUrl: "https://www.linkedin.com/in/kanesrajah/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Jo Ann Lim",
        location: "United Kingdom",
        description: "Jo Ann is an Enterprise Client Partner at Meta, with over 10 years of experience working in India, Malaysia and South Korea.",
        image: "https://myheart.my/wp-content/uploads/2024/02/PHOTO-JO-ANN-2-1426x1536-1-e1707199360177-1024x1024.jpg",
        socialUrl: "https://www.linkedin.com/in/limjoann/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Lam Ka Jhun",
        location: "Australia",
        description: "Ka Jhun guides companies in developing climate strategies by implementing recycling and carbon reduction initiatives.",
        image: "https://myheart.my/wp-content/uploads/2023/10/KA-JHUN-With-kangaroo-2015-e1718253307471.jpg",
        socialUrl: "https://www.linkedin.com/in/kjlam/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Mi Mi Hou",
        location: "Singapore",
        description: "Mi Mi plays a crucial role in supporting organisations in driving talent strategies for 30,000 employees worldwide.",
        image: "https://myheart.my/wp-content/uploads/2024/02/Mi-Mi_Singapore.jpg",
        socialUrl: "https://www.linkedin.com/in/mi-mi-hou/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Hidayah Iwani",
        location: "United Kingdom",
        description: "Hidayah is a Legal Technology Solutions Product Specialist at a City Law firm based in London. When not working, she posts food reviews on @hidayahcooks.",
        image: "https://myheart.my/wp-content/uploads/2024/06/Hidayah_1-1024x1009.jpg",
        socialUrl: "https://www.linkedin.com/in/firdauskamaruddin/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Mohd Firdaus",
        location: "United Kingdom",
        description: "Firdaus is a financial leader in the renewable energy sector in Central Europe.",
        image: "https://myheart.my/wp-content/uploads/2023/10/FIRDAUS-3-e1718253458906.jpeg",
        socialUrl: "https://www.linkedin.com/in/catheryn-lim-310b40164/",
        socialIcon: "fab fa-linkedin-in",
        category: "professional"
    },
    {
        name: "Warwick Malaysian Students Association (WMSA)",
        location: "United Kingdom",
        description: "The association fosters a supportive community through cultural, social and professional activities while promoting Malaysian culture at the university.",
        image: "https://myheart.my/wp-content/uploads/2026/03/WMSA-Header-Logo.jpeg",
        socialUrl: "https://www.instagram.com/warwickmsa/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Malaysian Students Association in France (MASAF)",
        location: "France",
        description: "The association supports student engagement, promotes Malaysian culture and strengthens the Malaysian student in France.",
        image: "https://myheart.my/wp-content/uploads/2024/03/MASAF.png",
        socialUrl: "https://www.instagram.com/masafrance/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Malaysian Student Council of Australia Nsw State Chapter",
        location: "Australia",
        description: "An association that represents Malaysian students studying across New South Wales. The council supports student welfare, organises cultural and networking events and strengthens connections within the Malaysian student community in Australia.",
        image: "https://myheart.my/wp-content/uploads/2024/04/MASCA-NSW.png",
        socialUrl: "https://www.instagram.com/masca_nsw/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Sydney University Association of Malaysian Students",
        location: "Australia",
        description: "A student organisation that brings together Malaysian students at the University of Sydney. It promotes cultural exchange, community engagement and social activities.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Sydney-university-1.jpg",
        socialUrl: "https://www.instagram.com/usydsuams/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Malaysian Students' Council of Australia Victoria Chapter",
        location: "Australia",
        description: "A council that represents Malaysian student associations across Victoria. It works to strengthen collaboration while organising programmes that celebrate Malaysian culture and support student wellbeing.",
        image: "https://myheart.my/wp-content/uploads/2024/04/MASCA-VIC.png",
        socialUrl: "https://www.instagram.com/masca_victoria/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Malaysia Student Association in Shanghai",
        location: "China",
        description: "An association for Malaysian students studying in Shanghai to connect, collaborate and support one another. The association also promotes Malaysian culture and fosters engagement within the wider Malaysian community.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Shanghai.png",
        socialUrl: "https://www.instagram.com/msashanghai/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Majlis Perundingan Mahasiswa Malaysia Mesir",
        location: "Egypt",
        description: "An association that represents Malaysian students pursuing their studies in Egypt. It plays a key role in safeguarding student welfare, coordinating academic and cultural programmes.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Majlis-mesir.jpeg",
        socialUrl: "https://www.instagram.com/official_mp3m/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Malaysisch-Aachener Klub E.V",
        location: "Germany",
        description: "A club that connects Malaysian students and the Malaysian community in Aachen. It promotes cultural exchange, community engagement and networking opportunities between Malaysians and the local community.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Aachener-Klub-E.V.jpeg",
        socialUrl: "https://www.instagram.com/malaysia.aachen/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Malaysian German Students' Society",
        location: "Germany",
        description: "A student society that encourages collaboration, knowledge sharing and community building among Malaysian students in the Germany.",
        image: "https://myheart.my/wp-content/uploads/2024/04/MGSS.png",
        socialUrl: "https://www.instagram.com/mgssofficial/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Malaysian Students' Association Japan",
        location: "Japan",
        description: "This student association aims to support student welfare, organise cultural activities and strengthen relationships among Malaysians studying in different regions of the country.",
        image: "https://myheart.my/wp-content/uploads/2024/04/Logo_MSAJ.png",
        socialUrl: "https://www.instagram.com/official_msaj/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Persatuan Pelajar Malaysia Korea",
        location: "Korea",
        description: "An association for Malaysian students studying in South Korea. It promotes unity among Malaysian students while organising programmes that highlight Malaysian culture and support student engagement and wellbeing.",
        image: "https://myheart.my/wp-content/uploads/2024/04/Logo_PPMK.png",
        socialUrl: "https://www.instagram.com/ppmkofficial/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "International Council of Malaysian Scholars and Associates",
        location: "Malaysia",
        description: "A professional network that connects Malaysian scholars, researchers and professionals globally. It promotes knowledge exchange, collaboration and initiatives that contribute to Malaysia's development.",
        image: "https://myheart.my/wp-content/uploads/2024/06/ICMS.jpg",
        socialUrl: "https://www.instagram.com/icmscholars/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "National University of Singapore Malaysian Students League",
        location: "Singapore",
        description: "The organisation fosters community engagement, cultural exchange and provides support to Malaysian students throughout their university life in Singapore.",
        image: "https://myheart.my/wp-content/uploads/2026/03/National-University-of-Singapore-Malaysian-Students-1.jpeg",
        socialUrl: "https://www.instagram.com/nus.msl/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Sheffield Malaysian Students Association",
        location: "United Kingdom",
        description: "An association for Malaysian students studying in Sheffield. The association organises social, cultural and professional activities while creating a supportive community for Malaysians living in the city.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Logo-SMSA.png",
        socialUrl: "https://www.instagram.com/smsasheffield/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Malaysian Student Society of Manchester",
        location: "United Kingdom",
        description: "An organisation for Malaysian students studying across universities in Manchester. It promotes cultural awareness, community engagement and provides a platform for Malaysians to connect and support one another during their studies.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Logo-MSSM.png",
        socialUrl: "https://www.instagram.com/instamssm/?hl=en",
        socialIcon: "fab fa-instagram",
        category: "association"
    },
    {
        name: "Hiu Jack Yuan",
        location: "United Kingdom",
        description: "Hiu Jack Yuan leads United Kingdom and Eire Council for Malaysian Students (UKEC) initiatives and CEKU's editorial platform to connect and inspire Malaysian students abroad.",
        image: "https://myheart.my/wp-content/uploads/2025/12/hiu-jack-yuan-myheart-stories-cover-photo.jpg",
        socialUrl: "https://www.linkedin.com/in/hiu-jack-yuan-b99a3816b/",
        socialIcon: "fab fa-linkedin-in",
        category: "student"
    },
    {
        name: "Ermi Farihin Mohd Fahmi",
        location: "Ireland",
        description: "A Data Science student at University College Dublin (UCD), Ireland and served as a student leader in UCD Malaysian Society, supporting initiatives and leading efforts to serve the Malaysian community abroad.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Ermi-Farihin.jpeg",
        socialUrl: "https://www.linkedin.com/in/nur-ermi-farihin-mohd-fahmi-165513371/",
        socialIcon: "fab fa-linkedin-in",
        category: "student"
    },
    {
        name: "Rania Mohd Razif",
        location: "Germany",
        description: "Rania is a final year bachelor's student at Aachen University of Applied Sciences studying Global Business & Economics. She is also the Head of Finance for Malaysisch Aachener Klub e.V and works as a student assistant at her university.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Rania-Razif.jpeg",
        socialUrl: "https://www.linkedin.com/in/rania-razif/",
        socialIcon: "fab fa-linkedin-in",
        category: "student"
    },
    {
        name: "Amirul Haikal Yazid",
        location: "United Kingdom",
        description: "Amirul is the Co-Founder & Chief Investment Officer of Kancil Capital and Executive Councillor at UKEC. As a third-year BA in Economics & Data Analytics student at University of Manchester, he leads outreach and industry engagement for Johor Student Organisation United Kingdom (JSOUK), building talent pipelines and practical market exposure for Malaysian students in the UK and Ireland.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Amirul-Haikal.jpeg",
        socialUrl: "https://www.linkedin.com/in/amhaikal/",
        socialIcon: "fab fa-linkedin-in",
        category: "student"
    },
    {
        name: "Tey Yee Siang",
        location: "Singapore",
        description: "Yee Siang is a Computer Science student at NUS with a passion for software engineering and AI. Aside his academics role, Yee Siang is also the President of National University of Singapore Malaysian Students' League.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Tey-Yee-Siang.jpeg",
        socialUrl: "https://www.linkedin.com/in/yee-siang-tey/",
        socialIcon: "fab fa-linkedin-in",
        category: "student"
    },
    {
        name: "Dasmiita Yuki Kumar",
        location: "Korea",
        description: "An ocean science advocate committed to combatting climate change in marine ecosystems and empowering youth globally through ocean literacy and awareness while also taking on a leadership role at Persatuan Pelajar Malaysia Korea (PPMK) under the Academic and Career bureau.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Dasmitta-Yuki.jpeg",
        socialUrl: "https://www.linkedin.com/in/dasmiita-yuki-kumar-70147a331/",
        socialIcon: "fab fa-linkedin-in",
        category: "student"
    },
    {
        name: "Shaqeel Hazmi Razifuddin",
        location: "Canada",
        description: "Shaqeel is a Computer Science student at the University of Toronto who seeks to strengthen the Malaysian community in North America through the International Council of Malaysian Scholars.",
        image: "https://myheart.my/wp-content/uploads/2026/03/Shaqeel.jpeg",
        socialUrl: "https://www.linkedin.com/in/shaqeel-hazmi/",
        socialIcon: "fab fa-linkedin-in",
        category: "student"
    },
    {
        name: "Leong Hoy Kit",
        location: "United Kingdom",
        description: "Hoy Kit is dedicated to bridging the gap between employers and students through strategic engagement initiatives under International Council of Malaysian Scholars (ICMS).",
        image: "https://myheart.my/wp-content/uploads/2026/03/Leong-Hoy-Kit.jpeg",
        socialUrl: "https://www.linkedin.com/in/leonghoykit/",
        socialIcon: "fab fa-linkedin-in",
        category: "student"
    }
];

// State
let currentFilter = 'all';
let currentSearchQuery = '';
let visibleCount = 8;
let filteredProfiles = profiles;
let expandedCards = new Set();
let isLoading = false;
let hasMoreData = true;
let observer = null;

const profileGrid = document.getElementById('profileGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const profileCounter = document.getElementById('profileCounter');
const tabButtons = document.querySelectorAll('.tab-btn');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');

function filterProfiles(category, searchQuery) {
    let filtered = profiles;
    
    if (category !== 'all') {
        filtered = filtered.filter(profile => profile.category === category);
    }
    
    if (searchQuery && searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(profile => {
            return profile.name.toLowerCase().includes(query) ||
                   profile.location.toLowerCase().includes(query) ||
                   profile.description.toLowerCase().includes(query);
        });
    }
    
    return filtered;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function toggleDescription(cardId, button) {
    const desc = document.getElementById(`desc-${cardId}`);
    if (!desc) return;
    
    if (desc.classList.contains('expanded')) {
        desc.classList.remove('expanded');
        desc.style.webkitLineClamp = '3';
        button.innerHTML = '<i class="fas fa-chevron-down"></i> Read more';
        expandedCards.delete(cardId);
    } else {
        desc.classList.add('expanded');
        desc.style.webkitLineClamp = 'unset';
        button.innerHTML = '<i class="fas fa-chevron-up"></i> Show less';
        expandedCards.add(cardId);
    }
}

// Special CTA Card HTML
const specialCardHtml = `
<div class="modern-profile-card special-cta-card">
    <div class="card-image-wrapper special-cta" style="display: none;"></div>
    <div class="card-content">
        <div class="card-header">
            <h3>Login to connect with <span class="highlight-number">20,000</span><br>MyHeart members</h3>
        </div>
        <div class="card-footer">
            <a href="https://myheart.my/my-account/" class="connect-btn" target="_blank">
                <svg class="login-svg-icon" width="18" height="18" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="23" cy="18" r="9" fill="currentColor"/>
                    <path d="M9 49C9 38.5 15.3 31 23 31C30.7 31 37 38.5 37 49C37 51.2 35.2 53 33 53H13C10.8 53 9 51.2 9 49Z" fill="currentColor"/>
                    <path d="M36 32H54" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                    <path d="M47 23L56 32L47 41" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47 13H56C58.2 13 60 14.8 60 17V47C60 49.2 58.2 51 56 51H47" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Log In to Connect <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
</div>`;

function renderProfiles(resetCards = true) {
    const profilesToShow = filteredProfiles.slice(0, visibleCount);
    
    if (resetCards) {
        expandedCards.clear();
    }
    
    if (profilesToShow.length === 0 && resetCards) {
        if (profileGrid) {
            profileGrid.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><p>No profiles found matching "${escapeHtml(currentSearchQuery)}"</p><p class="suggestion">Try searching by name, country, or job role</p></div>`;
        }
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        if (profileCounter) profileCounter.textContent = 'Showing 0 profiles';
        hasMoreData = false;
        if (observer) { observer.disconnect(); observer = null; }
        return;
    }

    // Generate special CTA card HTML (akan ditambah hanya bila semua profiles habis)
    const specialCardHtml = `
    <div class="modern-profile-card special-cta-card">
        <div class="card-image-wrapper special-cta" style="display: none;"></div>
        <div class="card-content">
            <div class="card-header">
                <h3>Login to connect with <span class="highlight-number">20,000</span><br>MyHeart members</h3>
            </div>
            <div class="card-footer">
                <a href="https://myheart.my/my-account/" class="connect-btn" target="_blank">
                    <svg class="login-svg-icon" width="18" height="18" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="23" cy="18" r="9" fill="currentColor"/>
                        <path d="M9 49C9 38.5 15.3 31 23 31C30.7 31 37 38.5 37 49C37 51.2 35.2 53 33 53H13C10.8 53 9 51.2 9 49Z" fill="currentColor"/>
                        <path d="M36 32H54" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                        <path d="M47 23L56 32L47 41" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M47 13H56C58.2 13 60 14.8 60 17V47C60 49.2 58.2 51 56 51H47" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Log In here <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>`;

    if (!resetCards) {
        // Append mode - load more profiles
        const existingSpecialCard = document.querySelector('.special-cta-card');
        const existingCards = document.querySelectorAll('.modern-profile-card:not(.special-cta-card)').length;
        const newProfiles = profilesToShow.slice(existingCards);
        
        if (newProfiles.length === 0) {
            hasMoreData = false;
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            if (observer) { observer.disconnect(); observer = null; }
            
            // Jika semua profiles sudah habis dan special card belum ada, tambah special card
            if (!existingSpecialCard && filteredProfiles.length > 0) {
                profileGrid.insertAdjacentHTML('beforeend', specialCardHtml);
            }
            return;
        }
        
        // Remove special card temporarily if exists
        if (existingSpecialCard) {
            existingSpecialCard.remove();
        }
        
        const newCardsHtml = newProfiles.map((profile, idx) => {
            const globalIndex = existingCards + idx;
            const cardId = `card-${globalIndex}-${Date.now()}`;
            const isExpanded = expandedCards.has(cardId);
            const descStyle = isExpanded ? '' : 'display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;';
            
            return `
            <div class="modern-profile-card" data-category="${profile.category}" style="animation-delay: ${idx * 0.05}s">
                <div class="card-image-wrapper">
                    <img src="${profile.image}" alt="${escapeHtml(profile.name)}" loading="lazy" onerror="this.src='https://placehold.co/400x400?text=Profile'">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${escapeHtml(profile.name)}</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${escapeHtml(profile.location)}</span>
                    </div>
                    <div class="description-container">
                        <div id="desc-${cardId}" class="description" style="${descStyle}">
                            ${escapeHtml(profile.description)}
                        </div>
                        <button class="read-more-btn" onclick="toggleDescription('${cardId}', this)">
                            <i class="fas fa-chevron-down"></i> Read more
                        </button>
                    </div>
                    <div class="card-footer">
                        <div class="social-links">
                            <a href="${profile.socialUrl}" class="social-link" target="_blank"><i class="${profile.socialIcon}"></i></a>
                        </div>
                        <a href="${profile.socialUrl}" class="connect-btn" target="_blank">Connect <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>`;
        }).join('');
        
        // Append new profiles
        profileGrid.insertAdjacentHTML('beforeend', newCardsHtml);
        
        // Check if this was the last batch
        const newTotalVisible = document.querySelectorAll('.modern-profile-card:not(.special-cta-card)').length;
        if (newTotalVisible >= filteredProfiles.length) {
            hasMoreData = false;
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            if (observer) { observer.disconnect(); observer = null; }
            // Add special card at the end after all profiles are loaded
            profileGrid.insertAdjacentHTML('beforeend', specialCardHtml);
        } else if (existingSpecialCard) {
            // If not last batch, add special card back if it existed
            profileGrid.insertAdjacentHTML('beforeend', specialCardHtml);
        }
        
    } else {
        // Reset mode - render profiles WITHOUT special card first
        const profilesHtml = profilesToShow.map((profile, index) => {
            const cardId = `card-${index}-${Date.now()}`;
            const isExpanded = expandedCards.has(cardId);
            const descStyle = isExpanded ? '' : 'display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;';
            
            return `
            <div class="modern-profile-card" data-category="${profile.category}" style="animation-delay: ${index * 0.05}s">
                <div class="card-image-wrapper">
                    <img src="${profile.image}" alt="${escapeHtml(profile.name)}" loading="lazy" onerror="this.src='https://placehold.co/400x400?text=Profile'">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${escapeHtml(profile.name)}</h3>
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${escapeHtml(profile.location)}</span>
                    </div>
                    <div class="description-container">
                        <div id="desc-${cardId}" class="description" style="${descStyle}">
                            ${escapeHtml(profile.description)}
                        </div>
                        <button class="read-more-btn" onclick="toggleDescription('${cardId}', this)">
                            <i class="fas fa-chevron-down"></i> Read more
                        </button>
                    </div>
                    <div class="card-footer">
                        <div class="social-links">
                            <a href="${profile.socialUrl}" class="social-link" target="_blank"><i class="${profile.socialIcon}"></i></a>
                        </div>
                        <a href="${profile.socialUrl}" class="connect-btn" target="_blank">Connect <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>`;
        }).join('');
        
        // Only profiles first, NO special card yet
        profileGrid.innerHTML = profilesHtml;
        
        // Check if all profiles are already visible (no more to load)
        if (visibleCount >= filteredProfiles.length) {
            hasMoreData = false;
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            if (observer) { observer.disconnect(); observer = null; }
            // Add special card at the end
            profileGrid.insertAdjacentHTML('beforeend', specialCardHtml);
        }
    }

    // Update counter (exclude special card from count)
    const currentVisible = document.querySelectorAll('.modern-profile-card:not(.special-cta-card)').length;
    if (profileCounter) profileCounter.textContent = `Showing ${currentVisible} of ${filteredProfiles.length} profiles`;

    hasMoreData = currentVisible < filteredProfiles.length;
    if (loadMoreBtn) {
        if (hasMoreData) {
            loadMoreBtn.style.display = 'inline-flex';
            const btnText = loadMoreBtn.querySelector('.btn-text');
            if (btnText) btnText.textContent = 'Load More Profiles';
            setupObserver();
        } else {
            loadMoreBtn.style.display = 'none';
            if (observer) { observer.disconnect(); observer = null; }
        }
    }
}

function loadMore() {
    if (isLoading || !hasMoreData) return;
    isLoading = true;
    if (loadMoreBtn) loadMoreBtn.classList.add('loading');
    
    setTimeout(() => {
        const totalFiltered = filteredProfiles.length;
        const currentVisible = document.querySelectorAll('.modern-profile-card:not(.special-cta-card)').length;
        const remaining = totalFiltered - currentVisible;
        
        if (remaining > 0) {
            const loadAmount = Math.min(4, remaining);
            visibleCount = currentVisible + loadAmount;
            renderProfiles(false);
        }
        
        isLoading = false;
        if (loadMoreBtn) loadMoreBtn.classList.remove('loading');
    }, 300);
}

function setupObserver() {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
    if (!loadMoreBtn) return;
    
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isLoading && hasMoreData) {
                loadMore();
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px 50px 0px' });
    
    observer.observe(loadMoreBtn);
}

function updateResults() {
    filteredProfiles = filterProfiles(currentFilter, currentSearchQuery);
    visibleCount = 8;
    hasMoreData = true;
    renderProfiles(true);
    
    tabButtons.forEach(btn => {
        if (btn.dataset.filter === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function handleSearch() {
    currentSearchQuery = searchInput ? searchInput.value : '';
    updateResults();
}

function clearSearch() {
    if (searchInput) {
        searchInput.value = '';
        currentSearchQuery = '';
        updateResults();
        searchInput.focus();
    }
}

// Event listeners
if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(handleSearch, 300);
    });
}
if (clearSearchBtn) clearSearchBtn.addEventListener('click', clearSearch);
if (tabButtons) {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            if (searchInput) searchInput.value = '';
            currentSearchQuery = '';
            updateResults();
        });
    });
}
if (loadMoreBtn) loadMoreBtn.addEventListener('click', loadMore);

// Make functions global for onclick handlers
window.toggleDescription = toggleDescription;
window.clearSearch = clearSearch;

// Initialize
updateResults();

// Newsletter form demo
const newsletterForm = document.querySelector('.newsletter-bar form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing! (Demo)');
    });
}
