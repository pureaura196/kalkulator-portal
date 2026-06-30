// ===============================
// 100 Kalkulátor - script.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Kereső
    // -------------------------------

    const search = document.getElementById("search");
    const cards = document.querySelectorAll(".card");

    if (search) {

        search.addEventListener("input", function () {

            const value = this.value.toLowerCase().trim();

            cards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(value)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

    // -------------------------------
    // Dark Mode
    // -------------------------------

    const darkButton = document.createElement("button");

    darkButton.innerHTML = "🌙 Sötét mód";
    darkButton.id = "darkModeButton";

    darkButton.style.position = "fixed";
    darkButton.style.right = "20px";
    darkButton.style.bottom = "20px";
    darkButton.style.zIndex = "999";
    darkButton.style.padding = "12px 18px";
    darkButton.style.borderRadius = "50px";

    document.body.appendChild(darkButton);

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        darkButton.innerHTML = "☀️ Világos mód";
    }

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            darkButton.innerHTML = "☀️ Világos mód";

        } else {

            localStorage.setItem("theme", "light");
            darkButton.innerHTML = "🌙 Sötét mód";

        }

    });

    // -------------------------------
    // Kártya animáció
    // -------------------------------

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "0.5s ease";

        observer.observe(card);

    });

    // -------------------------------
    // Aktuális év a láblécben
    // -------------------------------

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} 100 Kalkulátor • GitHub Pages`;

    }

});
