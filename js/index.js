function startTypeIt() {
    new TypeIt("#code", {
        speed: 10,
        lifeLike: true,
        startDelay: 500,
    })
    .type("<span style='color: #dcdcaa;'># Programa para gerar desenvolvedores</span><br><br>")
    .pause(300)
    .type("class Dev:<br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 20px;'>    </span>def __init__(self, name, age, exp, skills):<br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 40px;'>    </span>if not isinstance(skills, list):<br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 60px;'>    </span>raise TypeError('skills deve ser uma lista!')<br><br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 40px;'>    </span>self.name = name<br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 40px;'>    </span>self.age = age<br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 40px;'>    </span>self.exp = exp<br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 40px;'>    </span>self.skills = skills<br><br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 20px;'>    </span>def learn_tecnology(self, techs):<br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 40px;'>    </span>if not isinstance(techs, list):<br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 60px;'>    </span>raise TypeError('techs deve ser uma lista!')<br><br>")
    .pause(300)
    .type("<span style='display:inline-block; width: 40px;'>    </span>for tech in techs:<br>")
    .pause(400)
    .type("<span style='display:inline-block; width: 60px;'>    </span>self.skills.append(tech)<br><br>")
    .pause(400)
    .type("name = 'Douglas Lelis'<br>")
    .pause(300)
    .type("age = 31<br>")
    .pause(300)
    .type("exp = 'Programador desde 2017'<br>")
    .pause(300)
    .type("skills = ['PHP', 'Python', 'Node.js', 'Angular']<br>")
    .pause(300)
    .type("dev = Dev(name, age, exp, skills)<br>")
    .pause(300)
    .type("dev.learn_tecnology(['Vue.js', 'React.js'])<br>")
    .pause(300)
    .type('print(f"Skills de {dev.name}: {dev.skills}")<br>')
    .go();
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === "carouselProjetos") {
                startCarousel();
                observer.unobserve(entry.target);
            } else if (entry.target.id === "code") {
                startTypeIt();
                observer.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.01 });

observer.observe(document.querySelector("#carouselProjetos"));
observer.observe(document.querySelector("#code"));

function startCarousel() {
    const intervalTime = 4000;
    let currentIndex = 0;
    const indicators = document.querySelectorAll('.carousel-indicators .thumb');
    const carousel = document.querySelector('#carouselProjetos');
    let progressBar;
    let isPaused = false;

    function startProgressBar() {
        let progress = 0;

        indicators.forEach((div) => {
            div.querySelector('.overlay').style.background = 'transparent';
        });

        const progressStep = 100 / (intervalTime / 100);

        progressBar = setInterval(() => {
            if (!isPaused) {
                progress += progressStep;
                if (progress >= 100) {
                    clearInterval(progressBar);
                    $('#carouselProjetos').carousel('next');
                }

                indicators[currentIndex].querySelector('.overlay').style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.7) ${progress}%, transparent 0)`;
            }
        }, 100);
    }

    function pauseProgressBar() {
        isPaused = true;
    }

    function resumeProgressBar() {
        isPaused = false;
    }

    carousel.addEventListener('mouseenter', pauseProgressBar);
    carousel.addEventListener('mouseleave', resumeProgressBar);

    indicators.forEach((thumb) => {
        thumb.addEventListener('mouseenter', pauseProgressBar);
        thumb.addEventListener('mouseleave', resumeProgressBar);
    });

    carousel.addEventListener('slide.bs.carousel', (event) => {
        clearInterval(progressBar);
        const activeElement = document.querySelector('#carouselProjetos .active');
        currentIndex = Array.from(activeElement.parentElement.children).indexOf(event.relatedTarget);
        startProgressBar();
    });

    startProgressBar();
}

const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Funcionalidade para abrir/fechar as actions
const actionsBtn = document.getElementById('actionsBtn');
const actionsContainer = document.getElementById('actionsContainer');
actionsBtn.addEventListener('click', function() {
    if (actionsContainer.style.display === 'flex') {
        actionsContainer.style.display = 'none';
        actionsContainer.classList.remove('show');
    } else {
        actionsContainer.style.display = 'flex';
        setTimeout(() => actionsContainer.classList.add('show'), 10);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true // Fecha o menu
            });
        });
    });
});