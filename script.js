/* ==========================================================================
   EmmaHarmonie - Bilan Charge Mentale
   script.js
   ==========================================================================
*/

const questions = [

    {
    id: "stress",
    text: "Au cours d'une journée classique, vous sentez-vous souvent sous pression ?",
    profile: "stress",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Presque toujours", value: 3 }
    ]
},

    {
    id: "rumination",
    text: "Une fois votre journée terminée, continuez-vous à penser à tout ce qu'il vous reste à faire ?",
    profile: "rumination",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Très souvent", value: 3 }
    ]
},

    {
    id: "hyperactivite",
    text: "Avez-vous l'impression que votre esprit passe constamment d'une pensée à une autre ?",
    profile: "hyperactivite",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "En permanence", value: 3 }
    ]
},

    {
    id: "fatigue",
    text: "Vous arrive-t-il de vous sentir mentalement fatigué(e), même après une nuit de sommeil ?",
    profile: "fatigue",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Rarement", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Quasiment tous les jours", value: 3 }
    ]
},

    {
    id: "burnout",
    text: "Avez-vous parfois l'impression d'être dépassé(e) par toutes vos responsabilités ?",
    profile: "burnout",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Très souvent", value: 3 }
    ]
},

    {
    id: "habitudes",
    text: "Prenez-vous régulièrement de véritables pauses dans votre journée ?",
    profile: "habitudes",
    answers: [
        { text: "Oui, toujours", value: 0 },
        { text: "Souvent", value: 1 },
        { text: "Rarement", value: 2 },
        { text: "Jamais", value: 3 }
    ]
},

    {
    id: "ecrans",
    text: "Vous est-il difficile de vous éloigner de votre téléphone ou de vos écrans, même pour vous détendre ?",
    profile: "ecrans",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Très difficile", value: 3 }
    ]
},

    {
    id: "emotion",
    text: "Vous sentez-vous émotionnellement vidé(e) après certaines journées ?",
    profile: "emotion",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Très souvent", value: 3 }
    ]
},

    {
    id: "stress2",
    text: "Avez-vous du mal à vous détendre, même lorsque vous avez enfin un moment pour vous ?",
    profile: "stress",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Toujours", value: 3 }
    ]
},

    {
    id: "hyperactivite2",
    text: "Avez-vous l'impression de devoir penser à tout et d'anticiper en permanence ?",
    profile: "hyperactivite",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "En permanence", value: 3 }
    ]
},

    {
    id: "fatigue2",
    text: "Même après une pause ou une nuit de sommeil, vous sentez-vous encore mentalement fatigué(e) ?",
    profile: "fatigue",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Toujours", value: 3 }
    ]
},

    {
    id: "burnout2",
    text: "Avez-vous parfois envie de tout mettre en pause simplement pour souffler ?",
    profile: "burnout",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "Très souvent", value: 3 }
    ]
},

    {
    id: "equilibre",
    text: "Parvenez-vous à préserver du temps uniquement pour vous chaque semaine ?",
    profile: "habitudes",
    answers: [
        { text: "Oui, facilement", value: 0 },
        { text: "La plupart du temps", value: 1 },
        { text: "Rarement", value: 2 },
        { text: "Jamais", value: 3 }
    ]
},

    {
    id: "emotion2",
    text: "Avez-vous parfois le sentiment que votre esprit ne s'arrête jamais vraiment ?",
    profile: "emotion",
    answers: [
        { text: "Jamais", value: 0 },
        { text: "Parfois", value: 1 },
        { text: "Souvent", value: 2 },
        { text: "En permanence", value: 3 }
    ]
},

    {
    id: "serenite",
    text: "Souhaitez-vous retrouver davantage de sérénité et d'équilibre dans votre quotidien ?",
    profile: "emotion",
    answers: [
        { text: "Pas particulièrement", value: 0 },
        { text: "Pourquoi pas", value: 1 },
        { text: "Oui", value: 2 },
        { text: "Absolument", value: 3 }
    ]
}

];

const profileLabels = {
    stress: "Stress quotidien",
    rumination: "Pensées envahissantes",
    hyperactivite: "Surcharge mentale",
    fatigue: "Fatigue mentale",
    burnout: "Risque d'épuisement",
    habitudes: "Organisation du quotidien",
    ecrans: "Sollicitations numériques",
    emotion: "Charge émotionnelle"
};

const profileIcons = {
    stress: "😰",
    rumination: "🧠",
    hyperactivite: "⚡",
    fatigue: "😴",
    burnout: "🔥",
    habitudes: "📅",
    ecrans: "📱",
    emotion: "❤️"
};

let currentQuestion = 0;
let userAnswers = [];

let finalScore = 0;
let finalProfile = "";
let finalLevel = "";

let finalScore = 0;
let mainProfile = "";

const profileScores = {
    stress: 0,
    rumination: 0,
    hyperactivite: 0,
    fatigue: 0,
    burnout: 0,
    habitudes: 0,
    ecrans: 0,
    emotion: 0
};

const profileDescriptions = {
    stress:
        "Votre niveau de stress quotidien semble actuellement élevé. Lorsque les sollicitations s'accumulent, il devient plus difficile de récupérer et de conserver une sensation de calme.",

    rumination:
        "Vous semblez avoir tendance à continuer de réfléchir longtemps après les événements de la journée. Ces pensées peuvent occuper une grande place dans votre esprit et limiter les moments de détente.",

    hyperactivite:
        "Votre esprit paraît très sollicité. Vous gérez probablement plusieurs tâches ou préoccupations en même temps, ce qui peut donner la sensation de ne jamais vraiment décrocher.",

    fatigue:
        "Vos réponses suggèrent une fatigue mentale installée. Cette sensation peut apparaître lorsque les périodes de récupération deviennent insuffisantes face aux exigences du quotidien.",

    burnout:
        "Votre niveau de charge mentale semble important. Ce résultat n'est pas un diagnostic, mais il indique qu'il pourrait être bénéfique de ralentir le rythme et de prendre davantage soin de votre équilibre.",

    habitudes:
        "Certaines habitudes de vie peuvent actuellement entretenir votre charge mentale. Quelques ajustements dans votre organisation quotidienne pourraient vous aider à retrouver davantage de sérénité.",

    ecrans:
        "Les nombreuses sollicitations numériques peuvent rendre plus difficile le fait de se détendre pleinement. Préserver de véritables moments de déconnexion peut être bénéfique.",

    emotion:
        "Votre charge émotionnelle semble actuellement importante. Les émotions accumulées au fil des journées peuvent contribuer à une sensation de saturation mentale."
};

const globalAnalysis = {

    excellent: {
        title: "🌿 Équilibre global très satisfaisant",
        text:
        "Vos réponses montrent que votre charge mentale semble actuellement bien maîtrisée. Vous disposez de ressources qui vous permettent de récupérer et de préserver votre équilibre. Continuer à prendre soin de vous reste néanmoins essentiel afin de prévenir une surcharge future."
    },

    bon: {
        title: "😊 Charge mentale modérée",
        text:
        "Votre quotidien comporte plusieurs sources de sollicitations, mais vous semblez encore disposer d'une capacité d'adaptation satisfaisante. Quelques ajustements dans votre organisation ou vos habitudes pourraient rapidement améliorer votre bien-être."
    },

    moyen: {
        title: "⚠️ Charge mentale importante",
        text:
        "Votre bilan met en évidence plusieurs facteurs susceptibles d'entretenir une fatigue mentale. Votre cerveau semble rester fortement sollicité, même pendant les périodes de repos. Il peut être utile d'agir avant que cette surcharge ne s'installe durablement."
    },

    eleve: {
        title: "🚨 Charge mentale très élevée",
        text:
        "Vos réponses montrent une surcharge mentale importante. Vous semblez gérer simultanément de nombreuses préoccupations, ce qui peut entraîner une fatigue émotionnelle, des difficultés de récupération et une sensation permanente de pression. Un accompagnement personnalisé peut vous aider à retrouver progressivement un meilleur équilibre."
    }

};

const tips = {

    stress:
        "Accordez-vous quelques minutes de pause dans la journée : respiration, marche ou relaxation peuvent aider à diminuer la pression.",

    rumination:
        "Si certaines pensées reviennent sans cesse, essayez de les noter sur papier avant de passer à une autre activité.",

    hyperactivite:
        "Évitez d'enchaîner les tâches sans interruption. Quelques pauses régulières favorisent souvent une meilleure concentration.",

    fatigue:
        "Essayez de préserver de vrais moments de récupération, même courts, afin de permettre à votre esprit de souffler.",

    burnout:
        "Lorsque la charge devient trop importante, n'hésitez pas à demander du soutien à votre entourage ou à un professionnel si vous en ressentez le besoin.",

    habitudes:
        "Une organisation plus simple et des priorités réalistes peuvent contribuer à alléger la charge mentale au quotidien.",

    ecrans:
        "Prévoyez des moments sans téléphone ni ordinateur afin d'offrir à votre cerveau un temps de déconnexion.",

    emotion:
        "Prenez quelques instants chaque jour pour accueillir vos émotions et pratiquer une activité qui vous apaise."

};

const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");

const startBtn = document.getElementById("startBtn");

const questionTitle = document.getElementById("questionTitle");
const answersContainer = document.getElementById("answersContainer");

const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");

const questionNumber = document.getElementById("questionNumber");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const profileCards = document.getElementById("profileCards");
const analysisText = document.getElementById("analysisText");
const tipsText = document.getElementById("tipsText");

const globalTitle = document.getElementById("globalTitle");
const globalText = document.getElementById("globalText");

const scoreValue = document.getElementById("scoreValue");
const scoreCircle = document.getElementById("scoreCircle");

const emailInput = document.getElementById("userEmail");
const consent = document.getElementById("rgpd");
const sendEmail = document.getElementById("emailBtn");

const CIRCLE_LENGTH = 565;

function startQuiz() {

    document.querySelector(".hero").style.display = "none";

    quizSection.classList.remove("hidden");

    window.scrollTo(0, 0);

    displayQuestion();

    setTimeout(() => {

        window.scrollTo(0, 0);

    }, 100);

}
function displayQuestion() {

    const question = questions[currentQuestion];

    questionTitle.textContent = question.text;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressPercent.textContent =
        `${Math.round(progress)} %`;

    progressFill.style.width =
        `${progress}%`;

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const div = document.createElement("div");

        div.className = "answer";

        if (userAnswers[currentQuestion] === index) {

            div.classList.add("selected");

        }

        div.innerHTML = `
            <strong>${answer.text}</strong>
        `;

        div.addEventListener("click", () => {

            userAnswers[currentQuestion] = index;

            document
                .querySelectorAll(".answer")
                .forEach(a => a.classList.remove("selected"));

            div.classList.add("selected");

        });

        answersContainer.appendChild(div);

    });

    previousBtn.style.visibility =
        currentQuestion === 0 ? "hidden" : "visible";

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Voir mon bilan"
            : "Suivant →";
setTimeout(() => {

    questionTitle.scrollIntoView({
        behavior: "auto",
        block: "start"
    });

}, 10);

}

function nextQuestion() {

    if (userAnswers[currentQuestion] === undefined) {

        alert("Veuillez sélectionner une réponse.");

        return;

    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        displayQuestion();

    } else {

        calculateResults();

    }

}

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();

    }

}

function calculateResults() {

    Object.keys(profileScores).forEach(profile => {
        profileScores[profile] = 0;
    });

    let total = 0;
    const maximum = questions.length * 3;

    questions.forEach((question, index) => {

        const answerIndex = userAnswers[index];
        const value = question.answers[answerIndex].value;

        total += value;

        // Profil principal
        profileScores[question.profile] += value;

        // Pondérations complémentaires
        switch (question.id) {

            case "stress":
            case "stress2":
                profileScores.emotion += value * 0.5;
                profileScores.hyperactivite += value * 0.5;
                break;

            case "rumination":
                profileScores.stress += value * 0.7;
                profileScores.hyperactivite += value * 0.8;
                break;

            case "hyperactivite":
            case "hyperactivite2":
                profileScores.rumination += value * 0.8;
                profileScores.stress += value * 0.5;
                break;

            case "fatigue":
            case "fatigue2":
                profileScores.burnout += value * 0.7;
                break;

            case "ecrans":
                profileScores.habitudes += value * 0.8;
                break;

            
            case "burnout":
            case "burnout2":
                profileScores.stress += value * 0.8;
                profileScores.emotion += value * 0.6;
                break;

            case "emotion":
            case "emotion2":
            case "serenite":
                profileScores.stress += value * 0.4;
                profileScores.rumination += value * 0.5;
                break;

            case "habitudes":
            case "equilibre":
                profileScores.stress += value * 0.3;
                profileScores.fatigue += value * 0.4;
                break;

        }

    });

    const wellbeingScore = Math.min(
100,
Math.max(
0,
Math.round(100 - ((total / maximum) * 100))
)
);
finalScore = wellbeingScore;

if (finalScore >= 80) {
    finalLevel = "Équilibre global très satisfaisant";
} else if (finalScore >= 60) {
    finalLevel = "Charge mentale modérée";
} else if (finalScore >= 40) {
    finalLevel = "Charge mentale importante";
} else {
    finalLevel = "Charge mentale très élevée";
}
   
showResults(wellbeingScore);

    
}
function showResults(score) {

    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    scoreValue.textContent = `${score}%`;

    const offset =
        CIRCLE_LENGTH - (score / 100) * CIRCLE_LENGTH;

    scoreCircle.style.strokeDashoffset = offset;

    /*
     * =========================================================
     * ANALYSE GLOBALE DU SCORE
     * =========================================================
     */

    let diagnostic;

    if (score >= 80) {

        diagnostic = globalAnalysis.excellent;
        scoreCircle.style.stroke = "#48B87A";

    } else if (score >= 60) {

        diagnostic = globalAnalysis.bon;
        scoreCircle.style.stroke = "#82C6A8";

    } else if (score >= 40) {

        diagnostic = globalAnalysis.moyen;
        scoreCircle.style.stroke = "#E4B363";

    } else {

        diagnostic = globalAnalysis.eleve;
        scoreCircle.style.stroke = "#D9534F";
    }

    globalTitle.textContent = diagnostic.title;
    globalText.textContent = diagnostic.text;

    progressFill.style.width = "100%";


    /*
     * =========================================================
     * CLASSEMENT DES PROFILS
     * =========================================================
     */

    const sortedProfiles =
        Object.entries(profileScores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);

    mainProfile = sortedProfiles[0][0];
    finalScore = score;
    finalProfile = mainProfile;

    /*
     * =========================================================
     * MESSAGES PERSONNALISÉS
     * =========================================================
     */

    const profileMessages = {

        stress: {
            title: "Le stress semble occuper une place importante",
            text: "Vos réponses montrent que la pression du quotidien semble actuellement avoir un impact sur votre équilibre. Lorsque le cerveau reste régulièrement en vigilance, il devient plus difficile de réellement récupérer.",
            advice: "Votre première piste pourrait être de recréer régulièrement de véritables moments de pause et de relâchement."
        },

        rumination: {
            title: "Votre esprit semble avoir du mal à décrocher",
            text: "Vos réponses suggèrent que certaines pensées ou préoccupations continuent probablement à vous accompagner même lorsque votre journée est terminée. Cette activité mentale peut rendre les moments de repos moins récupérateurs.",
            advice: "Apprendre progressivement à prendre du recul sur les pensées qui reviennent peut vous aider à retrouver davantage de calme."
        },

        hyperactivite: {
            title: "Votre cerveau semble particulièrement sollicité",
            text: "Vous semblez avoir tendance à penser à plusieurs choses à la fois, à anticiper et à enchaîner les tâches. Ce fonctionnement peut donner la sensation de devoir rester constamment en mouvement.",
            advice: "Introduire de courtes pauses entre les différentes activités peut aider votre esprit à ralentir progressivement."
        },

        fatigue: {
            title: "La fatigue mentale mérite votre attention",
            text: "Vos réponses font apparaître une fatigue mentale qui semble prendre une place importante dans votre quotidien. Lorsque les périodes de récupération ne compensent plus suffisamment les sollicitations, la sensation de fatigue peut s'installer.",
            advice: "Votre priorité peut être de préserver davantage de véritables temps de récupération, même lorsqu'ils sont courts."
        },

        burnout: {
            title: "Votre niveau de sollicitation mérite une attention particulière",
            text: "Votre bilan montre que vous semblez actuellement porter beaucoup de responsabilités ou de sollicitations. Ce résultat ne constitue pas un diagnostic, mais il peut être utile de prendre cette sensation de surcharge au sérieux.",
            advice: "Avant que l'épuisement ne s'installe davantage, il peut être important de retrouver progressivement un meilleur équilibre entre ce que vous devez faire et vos besoins de récupération."
        },

        habitudes: {
            title: "Votre organisation quotidienne peut jouer un rôle",
            text: "Certaines de vos réponses suggèrent que votre rythme de vie ou vos habitudes quotidiennes peuvent contribuer à maintenir une partie de votre charge mentale.",
            advice: "Quelques ajustements simples dans votre organisation et dans la place accordée aux pauses peuvent déjà apporter davantage de légèreté."
        },

        ecrans: {
            title: "Les sollicitations numériques semblent avoir un impact",
            text: "Votre rapport aux écrans semble faire partie des éléments qui peuvent entretenir votre charge mentale. Même lorsque l'on pense se détendre devant un écran, le cerveau peut continuer à recevoir de nombreuses sollicitations.",
            advice: "Créer quelques moments réellement déconnectés dans la journée peut favoriser une récupération mentale plus profonde."
        },

        emotion: {
            title: "Votre charge émotionnelle semble importante",
            text: "Vos réponses montrent que les émotions peuvent actuellement vous demander beaucoup d'énergie. Lorsque les émotions s'accumulent sans véritable temps de récupération, elles peuvent contribuer à une sensation de saturation.",
            advice: "Prendre régulièrement un moment pour vous recentrer et accueillir ce que vous ressentez peut progressivement alléger cette charge."
        }

    };


    const personalMessage =
        profileMessages[mainProfile];


    /*
     * =========================================================
     * AFFICHAGE DU MESSAGE PERSONNALISÉ
     * =========================================================
     */

    const personalMessageElement =
        document.getElementById("personalMessage");

    if (personalMessageElement) {

        personalMessageElement.innerHTML = `

            <div class="personal-result">

                <h2>
                    🧠 ${personalMessage.title}
                </h2>

                <p>
                    ${personalMessage.text}
                </p>

                <p>
                    ${personalMessage.advice}
                </p>

            </div>

        `;
    }


    /*
     * =========================================================
     * RÉINITIALISATION DES ZONES DE RÉSULTAT
     * =========================================================
     */

    analysisText.innerHTML = "";
    tipsText.innerHTML = "";
    profileCards.innerHTML = "";


    /*
     * =========================================================
     * ANALYSE DU BILAN
     * =========================================================
     */

    analysisText.innerHTML = `

        <h3>
            ${diagnostic.title}
        </h3>

        <p>
            ${diagnostic.text}
        </p>

        <hr style="margin:30px 0;border:none;border-top:1px solid #e5e5e5;">

        <h3>
            🧠 Les principaux facteurs identifiés
        </h3>

        <p>
            Votre questionnaire permet d'identifier les domaines qui
            semblent actuellement avoir le plus d'impact sur votre équilibre.
        </p>

    `;


    /*
     * =========================================================
     * AFFICHAGE DES 3 PROFILS PRINCIPAUX
     * =========================================================
     */

    sortedProfiles.forEach(([profile, value]) => {

        const percent =
            Math.min(
                100,
                Math.round((value / 12) * 100)
            );

        profileCards.innerHTML += `

            <div class="profile-card">

                <h4>
                    ${profileIcons[profile]}
                    ${profileLabels[profile]}
                </h4>

                <p>
                    ${profileDescriptions[profile]}
                </p>

                <div class="profile-percent">
                    ${percent} %
                </div>

                <div class="progress-profile">

                    <div
                        class="progress-profile-fill"
                        style="width:${percent}%">
                    </div>

                </div>

            </div>

        `;


        analysisText.innerHTML += `

            <p>

                <strong>
                    ${profileLabels[profile]}
                </strong>

                : ${profileDescriptions[profile]}

            </p>

        `;


        tipsText.innerHTML += `

            <p>
                🌿 ${tips[profile]}
            </p>

        `;

    });


    /*
     * =========================================================
     * DONNÉES DISPONIBLES POUR L'ENVOI DU MAIL
     * =========================================================
     */

    window.bilanResult = {

        score: score,

        globalTitle: diagnostic.title,

        globalText: diagnostic.text,

        mainProfile: mainProfile,

        mainProfileLabel:
            profileLabels[mainProfile],

        personalTitle:
            personalMessage.title,

        personalText:
            personalMessage.text,

        personalAdvice:
            personalMessage.advice,

        profiles:
            sortedProfiles.map(([profile, value]) => ({
                profile: profile,
                label: profileLabels[profile],
                score: Math.min(
                    100,
                    Math.round((value / 12) * 100)
                )
            }))

    };


    /*
     * =========================================================
     * RETOUR EN HAUT DU RÉSULTAT
     * =========================================================
     */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
/* =========================================================
   INITIALISATION
========================================================= */

console.log(sendEmail);

sendEmail.addEventListener("click", async () => {

    const email = emailInput.value.trim();

    const prenom = document.getElementById("userName").value.trim();

    if (!email) {

        alert("Merci de renseigner votre adresse e-mail.");

        emailInput.focus();

        return;
    }

    if (!consent.checked) {

        alert("Merci d'accepter le traitement de votre adresse e-mail.");

        return;
    }

    try {

        const response = await fetch(
            "https://bilan-bien-etre-emmaharmonie.cold-scene-540a.workers.dev/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    prenom: prenom,
                    email: email,
                    score: finalScore,
                    profil: mainProfile
})
            }
        );

        const result = await response.json();

        if (result.success) {

            alert("Votre bilan va vous être envoyé par e-mail.");

            console.log(result);

        } else {

            alert(result.message);

        }

    } catch (error) {

        console.error(error);

        alert("Impossible de contacter le serveur.");

    }

});


startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

previousBtn.addEventListener("click", previousQuestion);


/* =========================================================
   FIN DU SCRIPT
========================================================= */
