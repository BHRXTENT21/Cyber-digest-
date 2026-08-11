const cyberCases = [
    {
        id: "case1",
        title: "AePS Biometric Cloning Fraud",
        incidentType: "Identity Theft & Financial Fraud",
        summary: "Cybercriminals cloned biometric fingerprints of citizens from public land registry websites, mapped them to Aadhaar numbers, and illegally withdrew money from their bank accounts using Aadhaar-enabled Payment System (AePS) micro-ATMs without requiring OTP verification.",
        victimProfile: "Property owners, rural/semi-urban citizens, elderly individuals.",
        modusOperandi: [
            "Scammers scrape public land registration portals to download documents containing land buyers/sellers' fingerprint impressions and Aadhaar details.",
            "Using high-quality scanner images of the fingerprints, they print the impressions onto polymer/silicone sheets.",
            "They use chemicals and adhesives to create high-precision rubber fingerprints.",
            "Using retail micro-ATMs or AePS point-of-sale (PoS) devices with the cloned fingerprints and Aadhaar numbers, they withdraw money directly from the victim's linked bank account.",
            "Since AePS relies purely on biometrics, no SMS OTP or physical card is sent to the victim, delaying detection."
        ],
        ethicalIssues: [
            {
                title: "Violation of Bodily Digital Privacy",
                description: "Biometrics are immutable characteristics. Cloning them represents the ultimate violation of a user's digital identity and physical privacy."
            },
            {
                title: "Absence of Consent",
                description: "Biometric data was processed, cloned, and executed for financial transactions completely bypassing the consent and knowledge of the owner."
            },
            {
                title: "Systemic Trust Exploitation",
                description: "Exploiting a government-backed financial inclusion system (AePS) designed to help underprivileged communities, thereby damaging trust in digital governance."
            }
        ],
        legalMapping: [
            {
                act: "Information Technology Act, 2000",
                sections: [
                    {
                        section: "Section 43",
                        detail: "Penalty for damage to computer, computer system, etc. (Accessing data without permission)."
                    },
                    {
                        section: "Section 66",
                        detail: "Computer-related offences (Dishonest or fraudulent actions)."
                    },
                    {
                        section: "Section 66C",
                        detail: "Punishment for identity theft (using another person's unique identification feature)."
                    },
                    {
                        section: "Section 66D",
                        detail: "Punishment for cheating by personation using computer resource."
                    }
                ]
            },
            {
                act: "Bharatiya Nyaya Sanhita, 2023 (BNS) / IPC",
                sections: [
                    {
                        section: "Section 318 (BNS)",
                        detail: "Cheating (formerly Section 420 IPC) - Dishonestly inducing delivery of property."
                    },
                    {
                        section: "Section 336/340 (BNS)",
                        detail: "Forgery of valuable security/document (formerly Section 467/471 IPC)."
                    }
                ]
            },
            {
                act: "Digital Personal Data Protection (DPDP) Act, 2023",
                sections: [
                    {
                        section: "Section 4 & 6",
                        detail: "Unlawful processing of personal data without explicit, specific, and unambiguous consent."
                    },
                    {
                        section: "Section 8",
                        detail: "Obligations of Data Fiduciary (failure to protect registry documents containing biometrics)."
                    }
                ]
            }
        ],
        prevention: [
            "Use the 'Lock Aadhaar Biometrics' feature through the mAadhaar app or UIDAI portal, unlocking it only when performing a transaction.",
            "Financial institutions should implement dual-factor authentication (such as a bank-specific PIN along with biometrics) for high-value AePS withdrawals.",
            "Government land registry portals must mask biometrics and Aadhaar numbers in publicly downloadable documents.",
            "Enable instant SMS and email alerts for all bank transactions, including AePS micro-ATM withdrawals."
        ]
    },
    {
        id: "case2",
        title: "Digital Arrest & Extortion Scam",
        incidentType: "Cyber Extortion & Personation",
        summary: "Fraudsters contact victims over Skype or WhatsApp calls, claiming to be police, customs, or CBI officers. They falsely assert that a parcel containing contraband (like drugs or illegal passports) was sent in the victim's name, place them under a fake 'digital arrest' via video, and extort massive funds under the pretext of an official investigation.",
        victimProfile: "Educated working professionals, retired government servants, senior citizens.",
        modusOperandi: [
            "Victim receives an automated call or SMS claiming a parcel from DHL/FedEx addressed to them was intercepted containing narcotics or fake passports.",
            "The call is transferred to a fake 'investigating officer' who wears police uniforms, operates from a backdrop resembling a police station, and displays forged ID cards.",
            "The fraudster threatens immediate physical arrest and instructs the victim to join a Skype/video call immediately.",
            "Under 'digital arrest', the victim is forced to keep the camera on 24/7, prohibited from contacting family, and subjected to severe psychological coercion.",
            "The scammers demand the victim transfer all their bank balances to a 'government verification account', promising it will be returned within 30 minutes, which is then laundered via mule accounts."
        ],
        ethicalIssues: [
            {
                title: "Severe Psychological Coercion",
                description: "Using intense fear, isolation, and mental harassment to break down the victim's critical thinking and force compliance."
            },
            {
                title: "Dignity and Liberty Violation",
                description: "Confining victims 'digitally' and forcing them to show their private living spaces under constant surveillance is a gross violation of human dignity."
            },
            {
                title: "Erosion of Institutional Integrity",
                description: "Impersonating law enforcement (CBI, Police, MHA) degrades public trust in legitimate judicial and security institutions."
            }
        ],
        legalMapping: [
            {
                act: "Information Technology Act, 2000",
                sections: [
                    {
                        section: "Section 66D",
                        detail: "Punishment for cheating by personation using a computer resource."
                    }
                ]
            },
            {
                act: "Bharatiya Nyaya Sanhita, 2023 (BNS) / IPC",
                sections: [
                    {
                        section: "Section 204 (BNS)",
                        detail: "Impersonating a public servant (formerly Section 170 IPC)."
                    },
                    {
                        section: "Section 308 (BNS)",
                        detail: "Extortion - Putting a person in fear of injury to extort property (formerly Section 384 IPC)."
                    },
                    {
                        section: "Section 318 (BNS)",
                        detail: "Cheating and dishonestly inducing delivery of property (formerly Section 420 IPC)."
                    },
                    {
                        section: "Section 351 (BNS)",
                        detail: "Criminal intimidation (formerly Section 506 IPC)."
                    }
                ]
            }
        ],
        prevention: [
            "Be aware that no Indian law enforcement agency (CBI, ED, Police, Customs) conducts investigations or places people under arrest via video call.",
            "Never transfer money to any bank account for 'verification' or 'safety checks' requested over the phone.",
            "If threatened, immediately disconnect the call, block the sender, and report the details to the National Cyber Crime Portal (cybercrime.gov.in) or call 1930.",
            "Verify claims independently by checking official customer service numbers of the courier agency or police station."
        ]
    },
    {
        id: "case3",
        title: "Telegram Task & Part-Time Job Scam",
        incidentType: "Financial Social Engineering Fraud",
        summary: "Scammers lure victims with low-effort, high-paying work-from-home offers (such as liking YouTube videos, rating Google Maps locations, or reviewing hotels). After paying small initial commissions to establish credibility, the scammers transition the victims to private Telegram groups where they are coerced into making large 'investment deposits' to unlock higher tasks, only for the funds to be stolen.",
        victimProfile: "College students, homemakers, unemployed youth seeking secondary income.",
        modusOperandi: [
            "Victims receive unsolicited WhatsApp/Telegram messages offering lucrative part-time jobs requiring minimal effort.",
            "They are given simple tasks, like subscribing to a YouTube channel or rating a resort, and receive a small payout (e.g., Rs. 150-500) via UPI to establish trust.",
            "Once hooked, the victim is migrated to a Telegram channel and introduced to 'Prepaid Investment Tasks' or 'Crypto Welfare Tasks'.",
            "The victim is asked to deposit a small sum (e.g., Rs. 1,000) and gets paid Rs. 1,300 back. This is repeated with higher amounts.",
            "When the victim deposits a massive sum (e.g., Rs. 2 Lakhs), the system 'locks' the funds, claiming the victim made a mistake, and demands more deposits to release the money. Once the victim stops paying, the scammers block them."
        ],
        ethicalIssues: [
            {
                title: "Exploitation of Economic Vulnerability",
                description: "Targeting individuals in financial need (students, homemakers) by offering easy income, only to trap them in a manufactured debt cycle."
            },
            {
                title: "Cognitive Manipulation (Grooming)",
                description: "Using behavioral priming (micro-rewards) to groom the victim's psychological trust before executing the financial strike."
            },
            {
                title: "Societal Trust Corrosion",
                description: "Ruining the legitimacy of remote-work opportunities and digital gig-economies, making people distrustful of online employment."
            }
        ],
        legalMapping: [
            {
                act: "Information Technology Act, 2000",
                sections: [
                    {
                        section: "Section 66D",
                        detail: "Cheating by personation using a computer resource (acting as legitimate hiring agents)."
                    }
                ]
            },
            {
                act: "Bharatiya Nyaya Sanhita, 2023 (BNS) / IPC",
                sections: [
                    {
                        section: "Section 318 (BNS)",
                        detail: "Cheating and dishonestly inducing delivery of property (formerly Section 420 IPC)."
                    },
                    {
                        section: "Section 61 (BNS)",
                        detail: "Criminal Conspiracy (scammers operating in structured syndicates) (formerly Section 120B IPC)."
                    }
                ]
            }
        ],
        prevention: [
            "Never pay money to get a job or task. Legitimate companies never charge security deposits or request investment to release salaries.",
            "Be skeptical of unsolicited job offers on WhatsApp or Telegram, especially those promising high returns for simple clicks.",
            "Verify the company offering the job by checking their official website and contacting their HR department independently.",
            "Do not fall for peer pressure in Telegram channels where other members post screenshots of massive 'winnings' (these are usually fellow scammers or bots)."
        ]
    },
    {
        id: "case4",
        title: "SEBI-Impersonating Trading Scam",
        incidentType: "Regulatory Impersonation & Investment Fraud",
        summary: "Fraudsters set up fake stock trading platforms and WhatsApp groups posing as SEBI-registered educational mentors. They convince victims to download unverified trading apps (`.apk` links) that show simulated, sky-high profits, and lock the victim's capital under the guise of trading fees, taxes, or regulatory blocks.",
        victimProfile: "Middle-aged individuals, retail investors, stock market enthusiasts.",
        modusOperandi: [
            "Scammers run targeted ads on Facebook/Instagram offering free stock market classes from renowned gurus.",
            "Victims are added to WhatsApp/Telegram groups where admins share forged SEBI registration documents and fake profit screenshots.",
            "Admins direct victims to register on a custom-built, fake trading portal or download an app via a direct link (outside Google Play/App Store).",
            "The app simulates stock purchases and shows exponential profits on the dashboard, encouraging the victim to transfer more funds via bank transfers/UPI to 'institutional accounts' (actually mule accounts).",
            "When the victim tries to withdraw their capital, the system blocks it, citing 'tax regulations' or 'insider trading violations', demanding an additional 20-30% fee to unlock it. The scammers eventually delete the groups."
        ],
        ethicalIssues: [
            {
                title: "Abuse of Regulatory Credibility",
                description: "Using forged government certificates (SEBI, RBI) to fabricate legitimacy and exploit the victim's respect for the rule of law."
            },
            {
                title: "Deceptive UI Design (Dark Patterns)",
                description: "Designing dashboards that display fake numbers, simulated graphs, and falsified balances to deceive and manipulate financial decisions."
            },
            {
                title: "Financial Exploitation",
                description: "Completely draining a victim's life savings through organized fraud, leading to extreme financial ruins and mental distress."
            }
        ],
        legalMapping: [
            {
                act: "Information Technology Act, 2000",
                sections: [
                    {
                        section: "Section 66C",
                        detail: "Punishment for identity theft (using SEBI logo, name, and registered mentor identities)."
                    },
                    {
                        section: "Section 66D",
                        detail: "Punishment for cheating by personation using a computer resource."
                    }
                ]
            },
            {
                act: "Bharatiya Nyaya Sanhita, 2023 (BNS) / IPC",
                sections: [
                    {
                        section: "Section 318 (BNS)",
                        detail: "Cheating (formerly Section 420 IPC)."
                    },
                    {
                        section: "Section 336/340 (BNS)",
                        detail: "Forgery of valuable security/document (SEBI letters, institutional license) (formerly Section 467/471 IPC)."
                    }
                ]
            },
            {
                act: "Securities and Exchange Board of India (SEBI) Act, 1992",
                sections: [
                    {
                        section: "Section 12",
                        detail: "Prohibits any person from acting as an investment advisor or stock broker without SEBI registration."
                    }
                ]
            }
        ],
        prevention: [
            "Always verify SEBI registration numbers directly on the official SEBI website (sebi.gov.in) before investing.",
            "Never download trading apps from external links or APK files. Only use apps available on official app stores.",
            "Remember that legitimate brokerages do not conduct operations through WhatsApp/Telegram groups or demand transfers to personal/private corporate bank accounts.",
            "Report any suspicious SEBI-impersonating group to the SEBI SCORES portal and cybercrime.gov.in."
        ]
    },
    {
        id: "case5",
        title: "Electricity Bill Update & KYC Scam",
        incidentType: "Utility Fraud & Remote Access Hijacking",
        summary: "Scammers send urgent SMS alerts claiming the victim's electricity connection will be disconnected within hours due to a pending update or bill. Posing as power board officials, they instruct the victim to download a remote access tool (AnyDesk/TeamViewer) to pay a tiny transaction fee, which they use to capture banking credentials and drain the victim's account.",
        victimProfile: "Elderly homeowners, homemakers, less tech-savvy individuals.",
        modusOperandi: [
            "Victim receives an SMS: 'Dear Customer, your electricity power will be disconnected at 9:30 PM tonight from electricity office because your last month bill update is pending. Call officer at 98XXXXXXXX.'",
            "Panicked, the victim calls the number. The fraudster pretends to be a state electricity board (e.g., BESCOM, MSEB, UPPCL) official.",
            "The official says the update requires a nominal Rs. 10 payment to update the KYC or database.",
            "They ask the victim to download a support app like 'AnyDesk', 'QuickSupport', or 'RustDesk' from the Play Store.",
            "Once the app is installed, the fraudster asks for the 9-digit remote access code, gaining full view of the screen.",
            "They guide the victim to open their net banking app or enter credit card details. The fraudster captures the credentials, sees the incoming OTP on the screen, and executes unauthorized transfers."
        ],
        ethicalIssues: [
            {
                title: "Exploitation of Basic Utility Needs",
                description: "Threatening the cutoff of essential services (electricity/water) to induce immediate panic and bypass critical analysis."
            },
            {
                title: "Predatory Targeting of Vulnerable Demographics",
                description: "Deliberately targeting elderly, non-digitally literate populations who are unfamiliar with remote access screen sharing tools."
            },
            {
                title: "Violation of Device Integrity",
                description: "Invading and hijacking the victim's personal mobile environment, violating security boundaries and personal digital space."
            }
        ],
        legalMapping: [
            {
                act: "Information Technology Act, 2000",
                sections: [
                    {
                        section: "Section 43",
                        detail: "Unauthorised access to a computer system (downloading/introducing remote control tools)."
                    },
                    {
                        section: "Section 66",
                        detail: "Dishonest or fraudulent computer-related acts."
                    },
                    {
                        section: "Section 66C",
                        detail: "Identity theft (theft of bank credentials, credit card details)."
                    },
                    {
                        section: "Section 66D",
                        detail: "Cheating by personation using a computer resource (posing as utility officers)."
                    }
                ]
            },
            {
                act: "Bharatiya Nyaya Sanhita, 2023 (BNS) / IPC",
                sections: [
                    {
                        section: "Section 318 (BNS)",
                        detail: "Cheating and dishonestly inducing delivery of property (formerly Section 420 IPC)."
                    }
                ]
            }
        ],
        prevention: [
            "State electricity boards never send disconnection notices via personal mobile numbers (10-digit numbers). Official communications always carry sender IDs (e.g., MD-UPPCL).",
            "Never download screen-sharing or remote control apps (AnyDesk, TeamViewer, QuickSupport) at the instruction of an unknown caller.",
            "Electricity boards never request online payments of Rs. 10 or KYC updates over phone calls.",
            "If you receive such an SMS, contact your local electricity sub-station or check your official utility app directly."
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cyberCases;
}
