/* =====================================================
   SEMINAR DATA
===================================================== */

const seminars = {


    seminar1: {

        title:
            "Learning Advocate 2026 Series: Emerging IT Innovations",

        date:
            "August 22, 2026",

        time:
            "7:00 PM – 8:00 PM",

        duration:
            "1 Hour",

        category:
            "Emerging IT Innovations",

        narrative:
            `I participated in the webinar "Learning Advocate 2026 Series: Emerging IT Innovations" on August 22, 2026. The seminar gave me an opportunity to learn about emerging technologies and current developments in Information Technology.`,

        learnings: [

            "Emerging technologies continue to influence the IT industry.",

            "Continuous learning is important for IT students and professionals.",

            "Technology should be applied responsibly and effectively.",

            "Adaptability is important as the IT industry continues to change."

        ],

        tags: [

            "Information Technology",
            "Emerging Technology",
            "Innovation",
            "Continuous Learning"

        ],

        verification:
            "https://upskilltechph.com/verify?id=f8ae4066ac713ecdecf3cd5d56fd2cfe"

    },


    seminar2: {

        title:
            "Cyber Awareness: Digital Identity | Protect Yourself Online",

        date:
            "August 15, 2026",

        time:
            "7:00 PM – 8:00 PM",

        duration:
            "1 Hour",

        category:
            "Cybersecurity and Digital Identity",

        narrative:
            `I attended the webinar "Cyber Awareness: Digital Identity | Protect Yourself Online" on August 15, 2026. The webinar discussed digital identity, digital footprints, account takeovers, identity theft, and personal cybersecurity.`,

        learnings: [

            "Digital identity should be protected carefully.",

            "Strong passwords help improve account security.",

            "Multi-Factor Authentication provides an additional layer of protection.",

            "Users should be careful when sharing information online."

        ],

        tags: [

            "Cybersecurity",
            "Digital Identity",
            "MFA",
            "Online Safety"

        ],

        verification:
            "https://upskilltechph.com/verify?id=3c92e3bae1dd0e345ccbcb4796676b05"

    },


    seminar3: {

        title:
            "Multimedia Automation Using AI",

        date:
            "August 22, 2026",

        time:
            "5:00 PM – 7:00 PM",

        duration:
            "2 Hours",

        category:
            "Multimedia Automation & Artificial Intelligence",

        narrative:
            `This seminar provided an opportunity to learn about the application of Artificial Intelligence in multimedia-related tasks and automation. The discussion helped me understand how AI can support digital content workflows and improve productivity.`,

        learnings: [

            "AI can support multimedia-related tasks.",

            "Automation can improve productivity and workflow efficiency.",

            "AI tools can assist with digital content creation.",

            "Responsible use of AI remains important."

        ],

        tags: [

            "Artificial Intelligence",
            "Multimedia",
            "Automation",
            "Digital Content"

        ],

        verification:
            null

    },


    seminar4: {

        title:
            "Cloud 101: Cloud Computing 101 | Understanding the Basics",

        date:
            "August 14, 2026",

        time:
            "2 Hours",

        duration:
            "2 Hours",

        category:
            "Cloud Computing",

        narrative:
            `I attended the "Cloud 101: Cloud Computing 101 | Understanding the Basics" seminar on August 14, 2026. The seminar introduced the basic concepts of cloud computing and helped me understand the role of cloud technologies in modern IT environments.`,

        learnings: [

            "Cloud computing provides access to computing resources and services.",

            "Cloud technologies are widely used in modern IT environments.",

            "Understanding cloud concepts is useful for IT students.",

            "Cloud services can support organizations and digital solutions."

        ],

        tags: [

            "Cloud Computing",
            "Technology",
            "IT Infrastructure",
            "Digital Services"

        ],

        verification:
            "https://upskilltechph.com/verify?id=5d908449468738559806b5ae8511e358"

    },


    seminar5: {

        title:
            "Multimedia Automation Using AI",

        date:
            "August 22, 2026",

        time:
            "5:00 PM – 7:00 PM",

        duration:
            "Webinar Documentation",

        category:
            "Supporting Webinar Documentation",

        narrative:
            `This item serves as supporting documentation for the Multimedia Automation Using AI webinar. The image provides additional visual documentation of the webinar information.`,

        learnings: [

            "The poster provides supporting information about the webinar.",

            "It documents the seminar topic and schedule.",

            "It complements the seminar documentation presented in this portfolio."

        ],

        tags: [

            "Documentation",
            "AI",
            "Multimedia",
            "Webinar"

        ],

        verification:
            null

    }

};



/* =====================================================
   AUTOMATIC 3-PHOTO ABOUT SLIDER
===================================================== */

let aboutSlideIndex = 0;

let aboutSlideTimer = null;


function initializeAboutSlider() {

    const slides =
        document.querySelectorAll(
            ".about-slide"
        );

    const dots =
        document.querySelectorAll(
            ".photo-dots span"
        );


    if (!slides.length) {

        return;

    }


    /* First photo */

    slides.forEach(
        (slide, index) => {

            slide.classList.toggle(
                "active",
                index === 0
            );

        }
    );


    /* First dot */

    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === 0
            );

        }
    );


    /* Start */

    startAboutSlider();

}



function showNextAboutSlide() {

    const slides =
        document.querySelectorAll(
            ".about-slide"
        );

    const dots =
        document.querySelectorAll(
            ".photo-dots span"
        );


    if (!slides.length) {

        return;

    }


    /* Remove active */

    slides.forEach(
        slide => {

            slide.classList.remove(
                "active"
            );

        }
    );


    dots.forEach(
        dot => {

            dot.classList.remove(
                "active"
            );

        }
    );


    /* Next */

    aboutSlideIndex++;


    /* Back to first */

    if (
        aboutSlideIndex >=
        slides.length
    ) {

        aboutSlideIndex = 0;

    }


    /* Show */

    slides[
        aboutSlideIndex
    ].classList.add(
        "active"
    );


    /* Dot */

    if (
        dots[aboutSlideIndex]
    ) {

        dots[
            aboutSlideIndex
        ].classList.add(
            "active"
        );

    }

}



function startAboutSlider() {

    if (aboutSlideTimer) {

        clearInterval(
            aboutSlideTimer
        );

    }


    aboutSlideTimer =
        setInterval(
            showNextAboutSlide,
            4000
        );

}



/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeAboutSlider();

    }
);



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "active"
            );


            const icon =
                menuToggle.querySelector(
                    "i"
                );


            if (
                navMenu.classList.contains(
                    "active"
                )
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            }

            else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );

}



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document
    .querySelectorAll(
        "#navMenu a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "active"
                    );


                    const icon =
                        menuToggle.querySelector(
                            "i"
                        );


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        }
    );



/* =====================================================
   SEMINAR MODAL
===================================================== */

function openSeminar(id) {

    const seminar =
        seminars[id];


    if (!seminar) {

        return;

    }


    const modal =
        document.getElementById(
            "seminarModal"
        );


    const modalContent =
        document.getElementById(
            "modalContent"
        );


    const learningList =
        seminar.learnings
            .map(
                item =>
                    `<li>${item}</li>`
            )
            .join("");


    const tags =
        seminar.tags
            .map(
                tag =>
                    `<span>${tag}</span>`
            )
            .join("");


    let verificationButton = "";


    if (
        seminar.verification
    ) {

        verificationButton = `

            <a
                class="modal-verify"
                href="${seminar.verification}"
                target="_blank"
                rel="noopener noreferrer"
            >

                <i
                    class="fa-solid fa-circle-check"
                ></i>

                Verify Certificate

                <i
                    class="fa-solid fa-arrow-up-right-from-square"
                ></i>

            </a>

        `;

    }


    modalContent.innerHTML = `

        <div class="modal-category">

            ${seminar.category}

        </div>


        <h2>

            ${seminar.title}

        </h2>


        <div class="modal-date">

            <span>

                <i
                    class="fa-regular fa-calendar"
                ></i>

                ${seminar.date}

            </span>


            <span>

                <i
                    class="fa-regular fa-clock"
                ></i>

                ${seminar.time}

            </span>


            <span>

                ${seminar.duration}

            </span>

        </div>


        <p>

            ${seminar.narrative}

        </p>


        <h3>
            Key Learnings
        </h3>


        <ul>

            ${learningList}

        </ul>


        <h3>
            Topics
        </h3>


        <div class="modal-tags">

            ${tags}

        </div>


        ${verificationButton}

    `;


    modal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}



/* =====================================================
   CLOSE MODAL
===================================================== */

function closeSeminar() {

    const modal =
        document.getElementById(
            "seminarModal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }


    document.body.classList.remove(
        "modal-open"
    );

}



/* =====================================================
   IMAGE VIEWER
===================================================== */

function viewImage(imagePath) {

    const viewer =
        document.getElementById(
            "imageViewer"
        );


    const viewerImage =
        document.getElementById(
            "viewerImage"
        );


    if (
        !viewer ||
        !viewerImage
    ) {

        return;

    }


    viewerImage.src =
        imagePath;


    viewer.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}



/* =====================================================
   CLOSE IMAGE
===================================================== */

function closeImage() {

    const viewer =
        document.getElementById(
            "imageViewer"
        );


    if (viewer) {

        viewer.classList.remove(
            "active"
        );

    }


    document.body.classList.remove(
        "modal-open"
    );

}



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeSeminar();

            closeImage();

        }

    }
);



/* =====================================================
   CLICK OUTSIDE MODAL
===================================================== */

const seminarModal =
    document.getElementById(
        "seminarModal"
    );


if (seminarModal) {

    seminarModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                seminarModal
            ) {

                closeSeminar();

            }

        }
    );

}



const imageViewer =
    document.getElementById(
        "imageViewer"
    );


if (imageViewer) {

    imageViewer.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                imageViewer
            ) {

                closeImage();

            }

        }
    );

}