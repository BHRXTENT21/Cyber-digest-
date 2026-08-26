// STUDENT STATE & INITIAL CONFIGURATION
let studentState = {
    name: "Patel Bhargav",
    enrollment: "2304050400040",
    semester: "7",
    year: "2026-2027",
    course: "Ethical and Legal Frameworks for Digital Systems",
    code: "MDC5011C",
    title: "Cybercrime Case Analysis and Responsible Technology Solutions using I4C Cyber Digest"
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    updateStudentDisplay();
    setupTabNavigation();
    renderDashboardCases();
    renderCaseExplorer();
    renderLawMapper();
    setupSimulator();
    setupChatbot();
}

// UPDATE DOM WITH STUDENT PROFILE
function updateStudentDisplay() {
    const nameEl = document.getElementById("display-student-name");
    const enrollEl = document.getElementById("display-enrollment");
    if (nameEl) nameEl.textContent = studentState.name;
    if (enrollEl) enrollEl.textContent = `Enrollment: ${studentState.enrollment}`;
}

// TAB NAVIGATION
function setupTabNavigation() {
    const navItems = document.querySelectorAll(".sidebar-nav li");
    const tabContents = document.querySelectorAll(".tab-content");
    const headerTitle = document.getElementById("header-title");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetTabId = item.getAttribute("data-tab");
            
            // Toggle active sidebar item
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            // Toggle active tab panel
            tabContents.forEach(tab => tab.classList.remove("active"));
            document.getElementById(targetTabId).classList.add("active");

            // Update header title based on active tab
            switch(targetTabId) {
                case "dashboard-tab":
                    headerTitle.textContent = "Overview Dashboard";
                    break;
                case "cases-tab":
                    headerTitle.textContent = "I4C Incident Case Explorer";
                    break;
                case "laws-tab":
                    headerTitle.textContent = "Interactive Cyber Law Mapper";
                    break;
                case "simulator-tab":
                    headerTitle.textContent = "Cyber Threat Simulator";
                    break;
                case "chatbot-tab":
                    headerTitle.textContent = "AI Cyber Advisor";
                    break;
            }
        });
    });
}

// RENDERS THE CASES LIST ON DASHBOARD
function renderDashboardCases() {
    const listContainer = document.getElementById("dashboard-cases-list");
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    
    cyberCases.forEach((c, index) => {
        const item = document.createElement("div");
        item.className = "quick-case-item";
        item.innerHTML = `
            <div class="quick-case-info">
                <h4>${index + 1}. ${c.title}</h4>
                <span>${c.incidentType}</span>
            </div>
            <div class="quick-case-go">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        `;
        
        item.addEventListener("click", () => {
            // Switch to cases tab and active this case
            document.getElementById("nav-cases").click();
            activeCaseExplorer(c.id);
        });
        
        listContainer.appendChild(item);
    });
}

// RENDERS THE CASES ON CASE EXPLORER TAB
function renderCaseExplorer() {
    const selectorContainer = document.getElementById("case-selector-list");
    if (!selectorContainer) return;

    selectorContainer.innerHTML = "";

    cyberCases.forEach((c, idx) => {
        const btn = document.createElement("button");
        btn.className = `case-tab-btn ${idx === 0 ? 'active' : ''}`;
        btn.id = `btn-case-${c.id}`;
        btn.innerHTML = `
            <h4>${c.title}</h4>
            <span>Case File #${idx + 1}</span>
        `;
        
        btn.addEventListener("click", () => {
            document.querySelectorAll(".case-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            populateCaseDetails(c);
        });

        selectorContainer.appendChild(btn);
    });

    // Populate first case by default
    if (cyberCases.length > 0) {
        populateCaseDetails(cyberCases[0]);
    }
}

function activeCaseExplorer(caseId) {
    const btn = document.getElementById(`btn-case-${caseId}`);
    if (btn) {
        btn.click();
    }
}

function populateCaseDetails(caseObj) {
    const viewContainer = document.getElementById("case-detail-view");
    if (!viewContainer) return;

    // Modus Operandi step list HTML
    let stepsHtml = "";
    caseObj.modusOperandi.forEach((step, idx) => {
        stepsHtml += `
            <div class="modus-step">
                <div class="step-num">${idx + 1}</div>
                <div class="step-content">${step}</div>
            </div>
        `;
    });

    // Ethical Issues card list HTML
    let ethicsHtml = "";
    caseObj.ethicalIssues.forEach(issue => {
        ethicsHtml += `
            <div class="ethics-card">
                <h4><i class="fa-solid fa-circle-exclamation"></i> ${issue.title}</h4>
                <p>${issue.description}</p>
            </div>
        `;
    });

    // Legal mapping accordions
    let lawHtml = "";
    caseObj.legalMapping.forEach((map, idx) => {
        let subitemsHtml = "";
        map.sections.forEach(sec => {
            subitemsHtml += `
                <div class="law-subitem">
                    <strong>${sec.section}</strong>
                    <p>${sec.detail}</p>
                </div>
            `;
        });

        lawHtml += `
            <div class="law-acc-item ${idx === 0 ? 'open' : ''}" id="acc-item-${caseObj.id}-${idx}">
                <div class="law-acc-header" onclick="toggleAccordion('${caseObj.id}-${idx}')">
                    <span>${map.act}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="law-acc-content">
                    ${subitemsHtml}
                </div>
            </div>
        `;
    });

    // Recommendations list
    let recsHtml = "";
    caseObj.prevention.forEach(rec => {
        recsHtml += `<li>${rec}</li>`;
    });

    viewContainer.innerHTML = `
        <div class="case-detail-header">
            <span class="badge">${caseObj.incidentType}</span>
            <h2>${caseObj.title}</h2>
        </div>
        
        <div class="case-section">
            <h3><i class="fa-solid fa-file-invoice"></i> Incident Summary</h3>
            <p>${caseObj.summary}</p>
            <p style="margin-top: 10px; font-style: italic; color: var(--text-muted);">
                <strong>Primary Target Vulnerability:</strong> ${caseObj.victimProfile}
            </p>
        </div>

        <div class="case-section">
            <h3><i class="fa-solid fa-arrows-spin"></i> Modus Operandi (Attack Flow)</h3>
            <div class="modus-steps">
                ${stepsHtml}
            </div>
        </div>

        <div class="case-section">
            <h3><i class="fa-solid fa-scale-unbalanced-flip"></i> Digital Ethics & Moral Framework Analysis</h3>
            <div class="ethics-grid">
                ${ethicsHtml}
            </div>
        </div>

        <div class="case-section">
            <h3><i class="fa-solid fa-gavel"></i> Applicable Legal Framework</h3>
            <div class="law-accordion-container">
                ${lawHtml}
            </div>
        </div>

        <div class="case-section">
            <h3><i class="fa-solid fa-shield-halved"></i> Prevention and Mitigations</h3>
            <ul class="styled-list">
                ${recsHtml}
            </ul>
        </div>
    `;
}

// ACCORDION TOGGLER
window.toggleAccordion = function(itemId) {
    const item = document.getElementById(`acc-item-${itemId}`);
    if (item) {
        item.classList.toggle("open");
    }
};

// RENDERS THE LAW MAPPER CLAUSES
const globalLaws = [
    { section: "Section 43 (IT Act)", title: "Penalty for damage to computer system", detail: "Provides civil penalties up to ₹1 Crore for unauthorized system access, data extraction, or introducing viruses.", act: "it-act" },
    { section: "Section 66 (IT Act)", title: "Computer-related Offences", detail: "Criminalizes acts defined in Section 43 done dishonestly or fraudulently. Penalty: Imprisonment up to 3 years or fine up to ₹5 Lakhs.", act: "it-act" },
    { section: "Section 66C (IT Act)", title: "Identity Theft", detail: "Criminalizes fraudulent use of unique identity features (biometrics, digital signatures, passwords). Penalty: Imprisonment up to 3 years and fine up to ₹1 Lakh.", act: "it-act" },
    { section: "Section 66D (IT Act)", title: "Cheating by Personation", detail: "Punishes cheating by impersonating someone using a computer resource. Penalty: Imprisonment up to 3 years and fine up to ₹1 Lakh.", act: "it-act" },
    { section: "Section 67 (IT Act)", title: "Publishing Obscene Material", detail: "Punishes publishing/transmitting obscene electronic content. Key section mapped to sextortion. Penalty: Up to 3 years imprisonment and ₹5 Lakhs fine.", act: "it-act" },
    { section: "Section 67A (IT Act)", title: "Sexually Explicit Material", detail: "Punishes publishing/transmitting sexually explicit content in electronic form. Mapped to aggressive sextortion blackmail. Penalty: Up to 5 years imprisonment.", act: "it-act" },
    { section: "Section 4 & 6 (DPDP Act)", title: "Consent and Legitimate Use", detail: "Restricts processing of personal data (including biometrics) to lawful purposes for which user consent has been explicitly given.", act: "dpdp-act" },
    { section: "Section 8 (DPDP Act)", title: "Obligations of Data Fiduciary", detail: "Places direct legal liability on data fiduciaries (e.g., land registries, banks) to protect personal data and report breaches.", act: "dpdp-act" },
    { section: "Section 318 (BNS)", title: "Cheating (formerly 420 IPC)", detail: "Punishes cheating and dishonestly inducing delivery of property or money. Key section for all cyber scams.", act: "bns-act" },
    { section: "Section 308 (BNS)", title: "Extortion (formerly 384 IPC)", detail: "Punishes putting a person in fear of injury/humiliation to extort money. Primary charge for digital arrests and sextortion.", act: "bns-act" },
    { section: "Section 204 (BNS)", title: "Impersonating Public Servant", detail: "Punishes impersonation of a government or law enforcement officer (such as Police/CBI in Digital Arrests).", act: "bns-act" },
    { section: "Section 61 (BNS)", title: "Criminal Conspiracy", detail: "Punishes being part of a criminal conspiracy to commit offenses. Applicable to coordinated cybercrime syndicates.", act: "bns-act" }
];

function renderLawMapper() {
    const grid = document.getElementById("laws-display-grid");
    const searchInput = document.getElementById("law-search-input");
    const filterBtns = document.querySelectorAll(".filter-btn");
    
    if (!grid) return;

    let activeFilter = "all";
    let searchQuery = "";

    const drawGrid = () => {
        grid.innerHTML = "";
        
        const filtered = globalLaws.filter(l => {
            const matchesFilter = activeFilter === "all" || l.act === activeFilter;
            const matchesSearch = l.section.toLowerCase().includes(searchQuery) || 
                                  l.title.toLowerCase().includes(searchQuery) || 
                                  l.detail.toLowerCase().includes(searchQuery);
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No sections found matching your search.</div>`;
            return;
        }

        filtered.forEach(l => {
            const card = document.createElement("div");
            card.className = "law-card";
            
            let badgeText = "";
            let badgeClass = "";
            if (l.act === "it-act") { badgeText = "IT Act, 2000"; badgeClass = "tag-it"; }
            else if (l.act === "dpdp-act") { badgeText = "DPDP Act, 2023"; badgeClass = "tag-dpdp"; }
            else if (l.act === "bns-act") { badgeText = "BNS, 2023 (IPC)"; badgeClass = "tag-bns"; }

            card.innerHTML = `
                <div>
                    <div class="law-card-header">
                        <h3>${l.section}</h3>
                        <span class="law-tag ${badgeClass}">${badgeText}</span>
                    </div>
                    <div class="law-card-body">
                        <h4>${l.title}</h4>
                        <p>${l.detail}</p>
                    </div>
                </div>
                <div class="law-card-footer">
                    <i class="fa-solid fa-circle-info"></i> Mapped in Silver Oak MDC5011C Syllabus
                </div>
            `;
            grid.appendChild(card);
        });
    };

    // Events
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        drawGrid();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            drawGrid();
        });
    });

    drawGrid();
}

// THREAT SIMULATOR SYSTEM
const simulatorQuestions = [
    {
        title: "Aadhaar Biometric Verification",
        text: "You visit a local registry agent who claims you need to scan your fingerprint to receive a government pension deposit. He asks you to touch the biometric pad. However, you don't recall initiating any land transfer or verification. What is your response?",
        options: [
            { text: "Go ahead and scan your finger. It's necessary for the pension deposit.", correct: false, explain: "Incorrect. This is how biometric cloning scams occur. Unscrupulous retail operators can capture biometric scans on modified devices and use cloned silicone fingerprints to drain your AePS accounts.", ethics: "Fiduciary Duty Breach: The agent violates professional digital ethics by manipulating you into providing vital biometric access under false pretenses." },
            { text: "Refuse the scan. Check your mAadhaar app, lock your Aadhaar biometrics, and only unlock it when initiating verified transactions.", correct: true, explain: "Correct! Biometric security is critical since fingerprints are immutable. Locking biometrics on mAadhaar blocks all AePS access, preventing silicone fingerprint cloning and unauthorized financial withdrawals.", ethics: "Bodily Privacy & Consent: You assert your right to digital bodily integrity and protect your personal identification ledger." }
        ]
    },
    {
        title: "Video Call Threat ('Digital Arrest')",
        text: "You receive a call from an official who identifies himself as 'IPS Officer Patil' of the Mumbai Police. Over a WhatsApp video call, he shows an ID card, points to a backdrop resembling a police station, and tells you that a FedEx parcel addressed to you was intercepted with 15 grams of MDMA. He orders you to stay on video and keep your camera on continuously, warning you that disconnecting will result in immediate arrest. What do you do?",
        options: [
            { text: "Disconnect immediately, block the number, and file a report on cybercrime.gov.in. No police force conducts investigations or arrests via video call.", correct: true, explain: "Correct! This is a textbook 'Digital Arrest' scam. Law enforcement agencies in India never conduct official questioning, demand security deposits, or place individuals under arrest via video platforms like Skype or WhatsApp.", ethics: "Erosion of Trust: Discarding the scammer's demands protects institutional integrity, while reporting prevents others from falling victim to similar exploitation." },
            { text: "Panicked, you follow his instructions, stay on the video call, and transfer Rs. 2 Lakhs to the 'verification account' he provides to prove your innocence.", correct: false, explain: "Incorrect. Complying leads to severe extortion. Once you transfer the funds to their 'temporary verification account', the scammers immediately wash it through multiple layers of mule accounts, and your money is lost.", ethics: "Violated Liberty: The scammers violate basic human rights by placing you under digital containment through psychological intimidation." }
        ]
    },
    {
        title: "Part-Time Gig Recruitment",
        text: "A WhatsApp recruiter reaches out offering ₹50 per review for Google Maps locations. You perform three tasks, receive ₹150 in your UPI, and are invited to a Telegram channel. The admin says that to unlock the 'VIP Tasks' that pay ₹2,000, you must deposit a 'fully refundable training security fee' of ₹5,000. What is your response?",
        options: [
            { text: "Pay the ₹5,000. You already received ₹150 from them, proving they are a legitimate employer.", correct: false, explain: "Incorrect. This is a Part-time Job Scam. Scammers pay small initial amounts to build trust, then lock your larger deposits in a loop, demanding further fees to unlock your money.", ethics: "Manipulative Priming: The scammer exploits behavioral psychology, using micro-rewards to lower your defense mechanisms before extorting your money." },
            { text: "Refuse the task and exit the channel. Report the UPI ID and Telegram group. Legitimate jobs never ask employees to pay money to receive salaries.", correct: true, explain: "Correct! Real employers never require a security deposit or upfront payments to perform tasks. Payouts for online reviews are typical hooks for grooming scams.", ethics: "Economic Fairness: Rejecting these scams protects the digital economy's integrity and prevents the exploitation of job-seeking students." }
        ]
    },
    {
        title: "VIP Stock Trading Group",
        text: "You are added to a WhatsApp group called 'SEBI Academy Guru tips'. The admin posts fake certificates showing SEBI registration and shares files containing a stock app (an APK file, not on Google Play Store). He promises 300% monthly returns on block stock trades. What do you do?",
        options: [
            { text: "Download the APK file and register using your Aadhaar card details to see if the stock tips work.", correct: false, explain: "Incorrect. Installing third-party APKs compromises your device safety. The app is a rigged simulation showing fake profits to induce you to deposit money into mule accounts.", ethics: "Abuse of Legal Authority: Posing as a regulated SEBI entity represents an abuse of consumer trust and violates financial transparency standards." },
            { text: "Ignore the group, report it to sebi.gov.in, and only download financial apps from verified app stores after verifying the entity directly on the SEBI portal.", correct: true, explain: "Correct! Legitimate brokerages never distribute applications via direct APK files or conduct business through WhatsApp groups. Verifying SEBI registry is your shield.", ethics: "Informed Choice: Operating through verified, legal channels preserves the rule of law and protects personal and institutional capital." }
        ]
    },
    {
        title: "Smart Meter Disconnection Threat",
        text: "You get an SMS: 'Electricity Power will disconnect tonight at 9:30 PM due to smart meter database error. Immediately call Officer at 98XXXXXX.' You call, and they guide you to install 'QuickSupport' app on your phone to resolve the bill update. What is your reaction?",
        options: [
            { text: "Download the app immediately. Staying without electricity is unacceptable, and you want to resolve the database issue.", correct: false, explain: "Incorrect. QuickSupport is a remote screen-sharing tool. By sharing the 9-digit code, you give the hacker full view of your phone, letting them steal netbanking credentials and OTPs.", ethics: "Breach of Device Integrity: The hacker invades your private digital workspace, violating basic safety boundaries." },
            { text: "Ignore the message. Call the official electricity board helpline directly or check your utility portal. Never install remote control software.", correct: true, explain: "Correct! Utility companies never send urgent shutdown warnings via 10-digit mobile numbers or demand the installation of screen-sharing applications like AnyDesk or RustDesk.", ethics: "Responsible Digital Governance: Verifying utility claims through official channels prevents digital security breaches." }
        ]
    }
];

let simCurrentIndex = 0;
let simScore = 0;

function setupSimulator() {
    const startBtn = document.getElementById("start-sim-btn");
    const nextBtn = document.getElementById("next-sim-btn");
    const restartBtn = document.getElementById("restart-sim-btn");
    const reviewBtn = document.getElementById("view-cases-from-sim-btn");

    startBtn.addEventListener("click", () => {
        simCurrentIndex = 0;
        simScore = 0;
        showSimCard("sim-question-card");
        loadSimQuestion();
    });

    nextBtn.addEventListener("click", () => {
        simCurrentIndex++;
        if (simCurrentIndex < simulatorQuestions.length) {
            showSimCard("sim-question-card");
            loadSimQuestion();
        } else {
            showSimCard("sim-score-card");
            displayFinalScore();
        }
    });

    restartBtn.addEventListener("click", () => {
        startBtn.click();
    });

    reviewBtn.addEventListener("click", () => {
        document.getElementById("nav-cases").click();
    });
}

function showSimCard(cardId) {
    document.querySelectorAll(".simulator-card").forEach(c => c.classList.remove("active"));
    document.getElementById(cardId).classList.add("active");
}

function loadSimQuestion() {
    const q = simulatorQuestions[simCurrentIndex];
    document.getElementById("sim-progress").textContent = `Scenario ${simCurrentIndex + 1} of ${simulatorQuestions.length}`;
    document.getElementById("sim-timer-fill").style.width = `${((simCurrentIndex) / simulatorQuestions.length) * 100}%`;
    document.getElementById("sim-question-title").textContent = q.title;
    document.getElementById("sim-question-text").textContent = q.text;

    const optionsContainer = document.getElementById("sim-options-container");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "sim-option-btn";
        btn.innerHTML = `<span style="font-weight:700; color:var(--color-primary); margin-right:8px;">${idx === 0 ? 'A' : 'B'}:</span> ${opt.text}`;
        
        btn.addEventListener("click", () => {
            evaluateSimChoice(opt);
        });

        optionsContainer.appendChild(btn);
    });
}

function evaluateSimChoice(opt) {
    const q = simulatorQuestions[simCurrentIndex];
    const feedbackIcon = document.getElementById("sim-feedback-icon");
    const feedbackTitle = document.getElementById("sim-feedback-title");
    const explanationText = document.getElementById("sim-explanation-text");
    const ethicalImpact = document.getElementById("sim-ethical-impact");

    if (opt.correct) {
        simScore++;
        feedbackIcon.innerHTML = `<i class="fa-solid fa-circle-check feedback-correct"></i>`;
        feedbackTitle.textContent = "Correct Decision!";
        feedbackTitle.className = "feedback-correct";
    } else {
        feedbackIcon.innerHTML = `<i class="fa-solid fa-triangle-exclamation feedback-incorrect"></i>`;
        feedbackTitle.textContent = "Risk Detected!";
        feedbackTitle.className = "feedback-incorrect";
    }

    explanationText.innerHTML = `<strong>Analysis:</strong> ${opt.explain}`;
    ethicalImpact.innerHTML = `
        <strong>Ethical Perspective:</strong>
        <p>${opt.ethics}</p>
    `;

    showSimCard("sim-explanation-card");
}

function displayFinalScore() {
    document.getElementById("sim-score-value").textContent = `${simScore}/${simulatorQuestions.length}`;
    document.getElementById("sim-timer-fill").style.width = "100%";
    
    let feedback = "";
    if (simScore === 5) {
        feedback = "Excellent! You scored a perfect 5/5. You possess a strong understanding of cyber safety guidelines, Indian legal frameworks, and digital ethics.";
    } else if (simScore >= 3) {
        feedback = "Good job! You scored " + simScore + "/5. You are familiar with common digital threats, but you should review some specific modus operandi to build full immunity against social engineering.";
    } else {
        feedback = "Score: " + simScore + "/5. We recommend reviewing the Case Studies tab carefully. Scammers exploit minor lapses in tech understanding, and familiarity with laws and ethics is essential.";
    }
    
    document.getElementById("sim-score-text").textContent = feedback;
}

// CHATBOT SYSTEM
const chatbotBrain = {
    greetings: ["hello", "hi", "hey", "good morning", "good afternoon"],
    rules: [
        {
            keys: ["66d", "cheating by personation", "personation", "impersonate"],
            answer: "<strong>Section 66D of the IT Act, 2000</strong> deals with punishment for cheating by personation using a computer resource. It states that anyone who cheats by pretending to be someone else over any digital platform can face up to 3 years in prison and a fine of up to ₹1 Lakh. This is heavily applied to <strong>Digital Arrest</strong>, <strong>Part-Time Job Scams</strong>, and <strong>KYC frauds</strong>."
        },
        {
            keys: ["biometric", "aeps", "aadhaar", "fingerprint", "cloning", "lock"],
            answer: "In <strong>AePS Biometric Cloning Fraud</strong>, scammers create silicone copies of fingerprints to withdraw money. <br><br><strong>Defense:</strong> You should use the mAadhaar app or visit the UIDAI website to <strong>Lock your Aadhaar Biometrics</strong>. It will block all biometric withdrawals until you choose to unlock it for a verified transaction. Biometrics are also protected under <strong>Section 66C (IT Act)</strong> and the <strong>DPDP Act, 2023</strong>."
        },
        {
            keys: ["1930", "helpline", "reporting", "call", "report"],
            answer: "<strong>Helpline 1930</strong> is India's national citizen helpline for reporting financial cyber fraud. Pushing an alert within the 'Golden Hour' (the first 2 hours after a scam occurs) increases the chances that banks can freeze transactions and block funds in the destination account. Reports should also be submitted formally at the portal <strong>cybercrime.gov.in</strong>."
        },
        {
            keys: ["digital arrest", "police call", "skype call", "customs", "cbi", "arrest"],
            answer: "A <strong>Digital Arrest</strong> is an extortion scam. Fraudsters impersonating Police, CBI, or Customs claim a package containing illegal items (like narcotics) is in your name. They instruct you to stay on video via Skype/WhatsApp to avoid physical arrest. <br><br><strong>Remember:</strong> No government body or police officer has the authority to arrest, detain, or investigate you over video calls. Hang up and report immediately!"
        },
        {
            keys: ["dpdp", "data protection", "privacy act"],
            answer: "The <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> establishes legal frameworks for data fiduciaries in India. Under the act, personal data (including biometric and utility records) cannot be processed without clear, unambiguous consent. If a registry portal allows scraping of fingerprints, they violate <strong>Section 8 (Data Security Obligations)</strong> and are liable for penalties."
        },
        {
            keys: ["it act", "information technology act", "cyber law"],
            answer: "The <strong>Information Technology Act, 2000</strong> is the primary cyber legislation in India. Key sections relevant to modern frauds include:<br>- <strong>Section 43:</strong> Unauthorised access to system.<br>- <strong>Section 66:</strong> Dishonest computer transactions.<br>- <strong>Section 66C:</strong> Identity theft.<br>- <strong>Section 66D:</strong> Impersonation cheating.<br>- <strong>Section 67/67A:</strong> Sexually explicit/obscene publications ( sextortion )."
        },
        {
            keys: ["sextortion", "video blackmail", "blackmail", "nude call"],
            answer: "<strong>Sextortion</strong> involves scammers making video calls, capturing your face alongside compromising/explicit footage, and demanding money under threat of sharing it with your contacts. <br><br><strong>Defense:</strong> Never answer video calls from unknown numbers. If targeted, do not pay (payment leads to further demands). Block the scammer, secure social accounts, and file an immediate complaint at <strong>cybercrime.gov.in</strong>. Mapped under <strong>Section 67/67A (IT Act)</strong> and <strong>Section 308 (BNS - Extortion)</strong>."
        }
    ],
    fallback: "I understand you are asking about cyber threat intelligence or digital ethics. Could you specify if you are asking about the <strong>IT Act</strong>, the <strong>1930 helpline</strong>, <strong>biometric locking</strong>, <strong>Digital Arrests</strong>, or one of the 5 case studies?"
};

function setupChatbot() {
    const input = document.getElementById("chat-user-input");
    const sendBtn = document.getElementById("chat-send-btn");
    const container = document.getElementById("chat-messages-container");

    const sendMessage = () => {
        const text = input.value.trim();
        if (!text) return;

        // Render User Message
        appendMessage("user", text);
        input.value = "";

        // Process Answer
        setTimeout(() => {
            const reply = getChatbotResponse(text);
            appendMessage("bot", reply);
        }, 600);
    };

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });
}

window.suggestChat = function(query) {
    const input = document.getElementById("chat-user-input");
    input.value = query;
    document.getElementById("chat-send-btn").click();
};

function appendMessage(sender, text) {
    const container = document.getElementById("chat-messages-container");
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const title = sender === "bot" ? '<i class="fa-solid fa-robot"></i> Cyber Advisor' : '<i class="fa-solid fa-user"></i> You';

    bubble.innerHTML = `
        <div class="message-sender">${title}</div>
        <div class="message-text">${text}</div>
        <div class="message-time">${time}</div>
    `;

    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
}

function getChatbotResponse(text) {
    const cleanText = text.toLowerCase();
    
    // Check greetings
    if (chatbotBrain.greetings.some(g => cleanText.includes(g))) {
        return "Hello! How can I assist you with cyber threat intelligence, digital laws (IT Act, DPDP Act), or prevention strategies today?";
    }

    // Check matching rules
    for (const rule of chatbotBrain.rules) {
        if (rule.keys.some(k => cleanText.includes(k))) {
            return rule.answer;
        }
    }

    return chatbotBrain.fallback;
}
