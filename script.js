function showProcessCards(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show_process_card");
            }, index * 200)
        }
    })
}

const processCards = document.querySelectorAll(".process_card");
observer = new IntersectionObserver(showProcessCards, { threshold: 0.3 });
processCards.forEach((card) => observer.observe(card));
