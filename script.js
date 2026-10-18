const articlesData = [
    {
        title: "Breakthrough in Generative AI: Novel Transformer Architecture Reduces Inference Latency by 40%",
        desc: "Researchers release a state-of-the-art sparse attention mechanism that preserves context memory while speeding up real-time multi-modal generation.",
        category: "technology",
        source: "TechPulse Global",
        date: "2 hours ago",
        img: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600"
    },
    {
        title: "Global Central Banks Announce Unified Digital Currency Settlement Standard",
        desc: "Cross-border financial transactions to see instant clearing with cryptographic verification protocols across 32 sovereign central banks.",
        category: "business",
        source: "Financial Insight",
        date: "3 hours ago",
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600"
    },
    {
        title: "James Webb Telescope Discovers Atmospheric Water Vapor on Habitable Exoplanet",
        desc: "Spectroscopic analysis reveals clear evidence of methane and water signatures on K2-18b, marking a historic milestone in astrobiology.",
        category: "science",
        source: "Cosmos Chronicle",
        date: "5 hours ago",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600"
    },
    {
        title: "Clinical Trial Demonstrates 98% Remission in Targeted mRNA Cancer Immunotherapy",
        desc: "Phase 3 clinical oncology trials confirm customized patient neoantigen vaccines effectively prevent tumor recurrence across major carcinomas.",
        category: "health",
        source: "Health Science Review",
        date: "6 hours ago",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
    },
    {
        title: "ICC World Championship: Spectacular Last-Over Finish Stuns Millions in Final",
        desc: "A gripping exhibition of high-stakes bowling and reverse-sweep sixes seals victory in the final over before a capacity crowd of 90,000 spectators.",
        category: "sports",
        source: "Sports Weekly",
        date: "8 hours ago",
        img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600"
    },
    {
        title: "Quantum Computing Hardware Achieves Fault-Tolerant Logical Qubit Benchmark",
        desc: "Physical error correction protocols successfully protect quantum states over 10,000 algorithmic cycles, bringing practical cryptography closer.",
        category: "technology",
        source: "Quantum Computing Today",
        date: "10 hours ago",
        img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600"
    }
];

let currentCat = 'all';

function renderNews(items) {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = '';
    items.forEach(a => {
        const card = document.createElement('article');
        card.className = 'news-card';
        card.innerHTML = `
            <img class="news-img" src="${a.img}" alt="${a.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600'">
            <div class="news-content">
                <span class="news-tag">${a.category}</span>
                <h3 class="news-title">${a.title}</h3>
                <p class="news-desc">${a.desc}</p>
                <div class="news-footer">
                    <span>${a.source}</span>
                    <span>${a.date}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(cat) {
    currentCat = cat;
    document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(cat));
    });
    const filtered = (cat === 'all') ? articlesData : articlesData.filter(a => a.category === cat);
    renderNews(filtered);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = articlesData.filter(a => 
        (currentCat === 'all' || a.category === currentCat) &&
        (a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q))
    );
    renderNews(filtered);
});

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    document.getElementById('themeToggle').innerText = isLight ? '☀️ Light Mode' : '🌙 Dark Mode';
});

renderNews(articlesData);
