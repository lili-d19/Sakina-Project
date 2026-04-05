let lang = 'ar';
const ui = {
    ar: {
        l_name: "سكينة", n1: "إشراقة", n2: "مرفأ الأمان", n3: "عزف السكون", n4: "غيمة البوح",
        h_title: "رسائل تفيض حباً لقلبك ✨", s_title: "مرفأ الأمان والدعم", r_title: "عزف السكون والطبيعة",
        b_main_title: "مكتبة السكينة المقترحة 📚", t_student: "ركن الطالب والدكتور 🎓", buy: "تصفح في جرير",
        b_ready: "استعدي لنفس عميق..", b_start: "ابدأ التمرين", b_stop: "توقف الآن",
        c_title: "غيمة البوح ☁️", c_ph: "صبي كل ما يثقل كاهلك هنا.. وسيتولى الغيم رفعه..", c_btn: "أرسليها للغيوم",
        inh: "شهيق..", exh: "زفير..", q_title: "سكينة الآيات", q_choice: "-- اختر سورتك --",
        thought_msgs: [
            "أفكارك مجرد غيوم عابرة، وليست السماء نفسها. دعيها تمر بسلام..",
            "بمجرد أن أفرغتِ عقلك، فسحتِ مكاناً لجمال جديد ليدخل قلبك..",
            "تبخرت الكلمات، وبقي السلام. أنتِ الآن أنقى وأخف وزناً.."
        ]
    },
    en: {
        l_name: "Sakina", n1: "Glow", n2: "Safe Haven", n3: "Serenity", n4: "Vent Cloud",
        h_title: "Love Messages for You ✨", s_title: "Safety Haven", r_title: "Nature Sounds",
        b_main_title: "Suggested Library 📚", t_student: "Student & Professor Hub 🎓", buy: "View on Jarir",
        b_ready: "Take a deep breath..", b_start: "Start", b_stop: "Stop",
        c_title: "Vent Cloud ☁️", c_ph: "Pour your burdens here.. the clouds will carry them..", c_btn: "Send to Sky",
        inh: "Inhale..", exh: "Exhale..", q_title: "Quran Peace", q_choice: "-- Select Surah --",
        thought_msgs: [
            "Your thoughts are just clouds, not the sky. Let them pass..",
            "Now that you've emptied your mind, you've made room for beauty..",
            "The words evaporated, and peace remained. You are lighter now.."
        ]
    }
};

const quotes = [
    {ar: "أنتِ كافية بجمالكِ، بعثراتكِ، وبمحاولاتكِ المستمرة.", en: "You are enough as you are.", i: "fa-heart", type: "normal"},
    {ar: "رسالة لقلبك: لا تستعجل قطف الثمار، فكل ما تزرعه اليوم سينبت غداً.", en: "What you plant today will bloom tomorrow.", i: "fa-seedling", type: "wide"},
    {ar: "درجتك الدراسية لا تحدد قيمتك كإنسان عظيم.", en: "Your grades don't define you.", i: "fa-graduation-cap", type: "normal"},
    {ar: "ابتسامتك هي النور الذي يفتقده العالم.", en: "Your smile is the world's light.", i: "fa-sun", type: "tall"},
    {ar: "أنتِ قوية لدرجة أنكِ لا تلاحظين ذلك أحياناً.", en: "You are stronger than you think.", i: "fa-shield-heart", type: "wide"},
    {ar: "كل غيمة سوداء في حياتك ستمطر فرجاً قريباً.", en: "Every dark cloud brings relief.", i: "fa-cloud-showers-heavy", type: "normal"},
    {ar: "خذي استراحة.. المحاربون أيضاً يحتاجون للهدوء.", en: "Even warriors need rest.", i: "fa-mug-hot", type: "tall"},
    {ar: "بداية جديدة متاحة لكِ في كل ثانية.", en: "New start every second.", i: "fa-clock", type: "normal"},
    {ar: "الله لا يكلف نفساً إلا وسعها، وأنتِ قدرها.", en: "God burdens no soul beyond its capacity.", i: "fa-mosque", type: "normal"},
    {ar: "أنتِ تبذلين جهداً عظيماً، نحن فخورون بكِ.", en: "We are so proud of you.", i: "fa-award", type: "normal"},
    {ar: "الهدوء هو السكينة داخل قلبكِ.", en: "Peace is within your heart.", i: "fa-leaf", type: "wide"},
    {ar: "جمالكِ ينبع من الداخل، كوني فخورة بنفسك.", en: "Your beauty is internal.", i: "fa-gem", type: "normal"},
    {ar: "تنفسي.. العالم سينتظر قليلاً.", en: "Breathe.. the world can wait.", i: "fa-wind", type: "normal"},
];

const tips = [
    {ar: "للطالب: لا تقارن بدايتك بموسم حصاد الآخرين.", en: "Student: Don't compare your start to others."},
    {ar: "للدكتور: كلمة تشجيع منك قد تصنع عالماً مبدعاً.", en: "Professor: Your encouragement creates a genius."},
    {ar: "للطالب: النوم الكافي هو وقود عقلك المبدع.", en: "Student: Sleep is fuel for your mind."},
    {ar: "للدكتور: رفقك بالطلاب هو الدرس الأبقى.", en: "Professor: Your kindness is the eternal lesson."},
    {ar: "للطالب: تعثرك خطوة لا يعني نهاية الطريق.", en: "Student: Stumbling is not the end."},
    {ar: "للدكتور: شكراً لكونك المنارة لطلابك.", en: "Professor: Thank you for being the light."},
    {ar: "للطالب: توتر الامتحان لحظة عابرة.", en: "Student: Exam stress is temporary."},
    {ar: "للدكتور: التعليم رسالة, وأنت قدوتها.", en: "Professor: Teaching is a mission, and you are its role model."},
    {ar: "سواء تعمل أو تدرس أنت تبني مستقبلك بكل خطوة.", en: "Whether you work or study... you are building your future with every step."},
];

const books = [
    {ar: "لأنك الله", en: "Because You are Allah", url: "https://www.jarir.com/arabic-books-597975.html"},
    {ar: "نظرية الفستق", en: "The Pistachio Theory", url: "https://www.jarir.com/arabic-books-464184.html"},
    {ar: "عادات ذرية", en: "Atomic Habits", url: "https://www.jarir.com/random-house-uk-english-books-517619.html"},
    {ar: "The Boy", en: "The Boy", url: "https://www.jarir.com/penguin-english-books-670775.html"}, 
];

const natureSounds = [
    {ar: "دفء النار", en: "Campfire", icon: "fa-fire", url: "https://files.catbox.moe/jy4098.mp3"},
    {ar: "همس المطر", en: "Rainfall", icon: "fa-cloud-showers-heavy", url: "https://files.catbox.moe/sdo4g1.mp3"},
    {ar: "أمواج البحر", en: "Ocean Waves", icon: "fa-water", url: "https://files.catbox.moe/k9zoy4.mp3"},
    {ar: "هدوء الغابة", en: "Forest", icon: "fa-wind", url: "https://files.catbox.moe/xey80e.mp3"},
    {ar: "تغريد العصافير", en: "Birds", icon: "fa-dove", url: "https://files.catbox.moe/g27867.mp3"},
    {ar: "خرير الماء", en: "River Stream", icon: "fa-tint", url: "https://files.catbox.moe/sc26bv.mp3"},
];

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    const linkMap = {home:'n-home', support:'n-support', relax:'n-relax', exercises:'n-ex'};
    document.getElementById(linkMap[id]).classList.add('active');
}

function render() {
    document.getElementById('quotes-grid').innerHTML = quotes.map(q => `<div class="cloud-card ${q.type}"><i class="fas ${q.i}"></i><p style="font-weight:800;">${lang==='ar'?q.ar:q.en}</p></div>`).join('');
    document.getElementById('tips-grid').innerHTML = tips.map(t => `<div class="cloud-card" style="background:var(--rose-color);"><p>${lang==='ar'?t.ar:t.en}</p></div>`).join('');
    document.getElementById('books-grid').innerHTML = books.map(b => `<div class="cloud-card book-card"><h4>${lang==='ar'?b.ar:b.en}</h4><button class="btn-buy" onclick="window.open('${b.url}')">${ui[lang].buy}</button></div>`).join('');
    document.getElementById('sounds-list').innerHTML = natureSounds.map(s => `
        <div class="sound-box">
            <i class="fas ${s.icon}"></i>
            <b>${lang==='ar'?s.ar:s.en}</b>
            <audio src="${s.url}" controls></audio>
        </div>
    `).join('');
}

function toggleLang() {
    lang = lang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-btn').innerText = lang === 'ar' ? 'English' : 'عربي';
    document.querySelectorAll('[data-k]').forEach(el => el.innerText = ui[lang][el.getAttribute('data-k')]);
    document.querySelectorAll('[data-k-ph]').forEach(el => el.placeholder = ui[lang][el.getAttribute('data-k-ph')]);
    render();
}

function toSky() {
    const input = document.getElementById('v-input');
    const msgArea = document.getElementById('v-msg-area');
    const container = document.querySelector('.real-cloud-shape');
    if(!input.value.trim()) return;
    const icons = ['🌸', '✨', '💧', '☁️', '🌸'];
    for(let i=0; i<15; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        p.innerText = icons[Math.floor(Math.random()*icons.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        container.appendChild(p);
        setTimeout(() => p.remove(), 2500);
    }
    input.classList.add('fade-out');
    setTimeout(() => {
        const msgs = ui[lang].thought_msgs;
        input.style.display = "none";
        msgArea.innerHTML = `<p class="fade-in-msg">${msgs[Math.floor(Math.random()*msgs.length)]}</p>`;
        setTimeout(() => {
            msgArea.innerHTML = "";
            input.value = "";
            input.style.display = "block";
            input.classList.remove('fade-out');
        }, 10000); 
    }, 1500);
}

let bActive = false; let bInterval;
function runBreath() {
    const circ = document.getElementById('breath-circle'); const txt = document.getElementById('b-txt'); const btn = document.getElementById('b-btn');
    const sweetWords = { ar: ["أنتِ رائعة", "بهدوء..", "الحياة بخير", "قلبك يستحق"], en: ["You're amazing", "Gently..", "Life is good", "Your heart deserves"] };
    bActive = !bActive;
    if(bActive) {
        btn.innerText = ui[lang].b_stop;
        const step = () => { if(!bActive) return; circ.classList.toggle('expanding');
            if(circ.classList.contains('expanding')) { txt.innerText = ui[lang].inh; circ.innerText = "🌸"; }
            else { txt.innerText = ui[lang].exh; circ.innerText = sweetWords[lang][Math.floor(Math.random()*sweetWords[lang].length)]; }
        };
        step(); bInterval = setInterval(step, 4500);
    } else {
        clearInterval(bInterval); circ.classList.remove('expanding'); btn.innerText = ui[lang].b_start; txt.innerText = ui[lang].b_ready; circ.innerText = "🌸";
    }
}

render();