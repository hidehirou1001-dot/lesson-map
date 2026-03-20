/**
 * LessonMap Main App Logic
 * Handles animations, search functionality, and rendering of studio cards
 */

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initFAQ();

    // Render studios if a container exists (e.g., on index.html)
    const studiosGrid = document.getElementById('studios-grid');
    if (studiosGrid && window.studiosData) {
        initHeroStats(window.studiosData);
        initCategoryCounts(window.studiosData);
        renderStudios(window.studiosData);
        initSearch();
        initFilters();
        initModal();
        applyFilters(); // Apply initial filters
    }
});

/**
 * Scroll Reveal Animations (Intersection Observer)
 */
function initAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target); // Optional: stop observing once revealed
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

/**
 * FAQ Accordion Logic
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Toggle active class
            const isActive = item.classList.contains('active');

            // Close all other items (optional)
            faqItems.forEach(i => i.classList.remove('active'));

            // If wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Render Studio Cards
 * @param {Array} data - Array of studio objects
 */
function renderStudios(data) {
    const grid = document.getElementById('studios-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear existing

    if (data.length === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><strong>条件に一致する教室が見つかりませんでした。</strong><p>カテゴリやエリアを広げるか、キーワードを短くして再検索してください。</p></div>';
        return;
    }

    data.forEach((studio, index) => {
        const pricingSummary = formatPricingSummary(studio.pricing);
        const featureSummary = getCardFeatureSummary(studio);
        const categoryLabel = getCategoryLabel(studio.category);
        const descriptionSummary = getCardDescriptionSummary(studio.description);

        // Add staggered delay for rendering
        const delay = index * 100;

        const card = document.createElement('article');
        card.className = 'card reveal';
        card.style.transitionDelay = `${delay}ms`;

        // Generate genre tags
        const genreTags = studio.genres.map(g => `<span class="tag">${g}</span>`).join('');

        card.innerHTML = `
      <div class="card-img-wrap">
        <span class="badge">${studio.city} ${studio.area}</span>
        <img src="${studio.imageUrl}" alt="${studio.name}" class="card-img" loading="lazy">
        <div style="position: absolute; bottom: 0; right: 0; background: rgba(0,0,0,0.5); color: #fff; font-size: 0.6rem; padding: 2px 6px;">
          画像引用元: ${studio.imageSource || 'フリー素材(Unsplash)'}
        </div>
      </div>
        <div class="card-content">
        <div class="card-heading-block">
          <span class="card-eyebrow">${categoryLabel}</span>
          <h3 class="h3">${studio.name}</h3>
          <p class="card-location">${studio.access}</p>
        </div>
        <div class="card-stat-grid">
          <div class="card-stat card-stat-primary">
            <span class="card-stat-label">対象</span>
            <strong>${getAudienceSummary(studio.features)}</strong>
          </div>
          <div class="card-stat">
            <span class="card-stat-label">料金</span>
            <strong>${pricingSummary}</strong>
          </div>
        </div>
        <div class="card-meta-chips">${featureSummary}</div>
        <div class="tags">${genreTags}</div>
        <p class="card-description">${descriptionSummary}</p>
        <button class="btn btn-outline detail-btn card-detail-btn">詳細を見る</button>
      </div>
    `;

        grid.appendChild(card);

        // Add event listener to the detail button
        const detailBtn = card.querySelector('.detail-btn');
        if (detailBtn) {
            detailBtn.addEventListener('click', () => openModal(studio.id));
        }

        // Staggered Animation Logic
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';

        // Timeout based on index to create stagger effect
        setTimeout(() => {
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, 50 * index);
    });

    // Re-trigger animation observer for any other elements
    setTimeout(initAnimations, 50);
}

function formatPricingSummary(pricing) {
    if (!pricing) return '料金は要確認';
    if (pricing.minPrice > 0) {
        return `${pricing.system} / 最安 ${pricing.minPrice.toLocaleString()}円〜`;
    }
    return pricing.note ? `${pricing.system} / ${pricing.note}` : `${pricing.system} / 料金は要確認`;
}

function getCardFeatureSummary(studio) {
    const chips = [];
    if (studio.features.beginnerFriendly) chips.push(`初心者 ${studio.features.beginnerFriendly}`);
    if (studio.features.kidsClass) chips.push('キッズ対応');
    if (studio.features.parking) chips.push('駐車場あり');
    return chips.map(chip => `<span class="card-meta-chip">${chip}</span>`).join('');
}

function getCategoryLabel(category) {
    const labels = {
        Dance: 'ダンス',
        Piano: 'ピアノ',
        Programming: 'プログラミング',
        Gymnastics: '体操',
        Swimming: '水泳',
        Fitness: 'スポーツジム',
        Yoga: 'ヨガ・ピラティス',
        Cooking: '料理教室',
        English: '英会話',
        CramSchool: '学習塾',
        Calligraphy: '書道',
        Soroban: 'そろばん',
        Art: 'アート・絵画'
    };
    return labels[category] || category;
}

function getAudienceSummary(features) {
    if (!features) return '要確認';
    if (features.kidsClass && features.adultClass) return '子ども・大人';
    if (features.kidsClass) return '子ども中心';
    if (features.adultClass) return '大人中心';
    return '要確認';
}

function getCardDescriptionSummary(description) {
    if (!description) return '';
    if (description.length <= 72) return description;
    return `${description.slice(0, 72).trim()}...`;
}

/**
 * Search Functionality
 */
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (!searchInput || !searchBtn) return;

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        currentFilterState.searchQuery = query;
        applyFilters();
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // voice search using Web Speech API
    const voiceBtn = document.getElementById('voice-btn');
    if (voiceBtn && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognizer = new SpeechRecognition();
        recognizer.lang = 'ja-JP';
        recognizer.interimResults = false;
        recognizer.maxAlternatives = 1;

        voiceBtn.addEventListener('click', () => {
            recognizer.start();
            voiceBtn.textContent = '🎙️';
        });

        recognizer.addEventListener('result', (event) => {
            const transcript = event.results[0][0].transcript.trim();
            searchInput.value = transcript;
            performSearch();
        });

        recognizer.addEventListener('end', () => {
            voiceBtn.textContent = '🎤';
        });
    } else if (document.getElementById('voice-btn')) {
        // hide button if API unavailable
        document.getElementById('voice-btn').style.display = 'none';
    }
}

/**
 * Filter State and Logic
 */
let currentFilterState = {
    category: 'Dance',  // 'Dance', 'Piano', etc. (Removed 'all')
    subFilter: 'all', // 'all', 'HIPHOP', 'K-POP', 'POP', 'JAZZ', 'LOCK', 'コンテンポラリー', 'Kids', 'parking'
    city: 'all',       // 'all', '松山市', '今治市', '新居浜市'
    searchQuery: '',   // Search query string
    sort: 'recommended'
};

const filterLabelMap = {
    Dance: 'ダンス',
    Piano: 'ピアノ',
    Programming: 'プログラミング',
    Gymnastics: '体操',
    Swimming: '水泳',
    Fitness: 'スポーツジム',
    Yoga: 'ヨガ・ピラティス',
    Cooking: '料理教室',
    English: '英会話',
    CramSchool: '学習塾',
    Calligraphy: '書道',
    Soroban: 'そろばん',
    Art: 'アート・絵画',
    Kids: 'キッズ対応',
    parking: '駐車場あり',
    Minecraft: 'マイクラ',
    Robot: 'ロボット・工作',
    Acrobat: 'アクロバット',
    Baby: 'ベビー対応',
    HIPHOP: 'HIPHOP',
    'K-POP': 'K-POP',
    POP: 'POP',
    JAZZ: 'JAZZ',
    LOCK: 'LOCK',
    コンテンポラリー: 'コンテンポラリー',
    all: 'すべて'
};

function initHeroStats(data) {
    const totalCount = document.getElementById('hero-total-count');
    const categoryCount = document.getElementById('hero-category-count');
    const cityCount = document.getElementById('hero-city-count');

    if (totalCount) totalCount.textContent = `${data.length}件`;
    if (categoryCount) categoryCount.textContent = `${new Set(data.map(studio => studio.category)).size}カテゴリ`;
    if (cityCount) cityCount.textContent = `${new Set(data.map(studio => studio.city)).size}エリア`;
}

function initCategoryCounts(data) {
    const counts = data.reduce((acc, studio) => {
        acc[studio.category] = (acc[studio.category] || 0) + 1;
        return acc;
    }, {});

    document.querySelectorAll('.category-btn').forEach(button => {
        const category = button.getAttribute('data-category');
        const count = counts[category] || 0;
        const label = button.textContent.trim();
        button.innerHTML = `${label}<span class="filter-count">${count}</span>`;
    });
}

function initFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const subBtns = document.querySelectorAll('.sub-btn');
    const cityBtns = document.querySelectorAll('.city-btn');
    const danceFilters = document.getElementById('sub-filters');
    const progFilters = document.getElementById('sub-filters-prog');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    const sortSelect = document.getElementById('sort-select');
    const subFilterGroups = [danceFilters, progFilters, document.getElementById('sub-filters-gym'), document.getElementById('sub-filters-swim')].filter(Boolean);

    // 1. Category Buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.getAttribute('data-category');
            currentFilterState.category = cat;

            // Hide all sub-filters first
            if (danceFilters) danceFilters.style.display = 'none';
            if (progFilters) progFilters.style.display = 'none';

            const gymFilters = document.getElementById('sub-filters-gym');
            if (gymFilters) gymFilters.style.display = 'none';

            const swimFilters = document.getElementById('sub-filters-swim');
            if (swimFilters) swimFilters.style.display = 'none';

            // Show relevant sub-filters
            if (cat === 'Dance' || cat === 'all') {
                if (danceFilters) danceFilters.style.display = 'flex';
            } else if (cat === 'Programming') {
                if (progFilters) progFilters.style.display = 'flex';
            } else if (cat === 'Gymnastics') {
                if (gymFilters) gymFilters.style.display = 'flex';
            } else if (cat === 'Swimming') {
                if (swimFilters) swimFilters.style.display = 'flex';
            }

            // Reset sub-filter state
            currentFilterState.subFilter = 'all';
            subFilterGroups.forEach(group => {
                group.querySelectorAll('.sub-btn').forEach(button => {
                    button.classList.remove('active');
                    if (button.getAttribute('data-filter') === 'all') {
                        button.classList.add('active');
                    }
                });
            });

            applyFilters();
        });
    });

    // 2. Sub-category Buttons (HIPHOP, Kids, Parking)
    subBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.filters');
            if (parent) {
                parent.querySelectorAll('.sub-btn').forEach(button => button.classList.remove('active'));
            }
            btn.classList.add('active');

            currentFilterState.subFilter = btn.getAttribute('data-filter');
            applyFilters();
        });
    });

    // 3. City Buttons
    cityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentFilterState.city = btn.getAttribute('data-city');
            applyFilters();
        });
    });

    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentFilterState.sort = sortSelect.value;
            applyFilters();
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            currentFilterState = {
                category: 'Dance',
                subFilter: 'all',
                city: 'all',
                searchQuery: '',
                sort: 'recommended'
            };

            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = 'recommended';

            categoryBtns.forEach(button => {
                button.classList.toggle('active', button.getAttribute('data-category') === 'Dance');
            });

            cityBtns.forEach(button => {
                button.classList.toggle('active', button.getAttribute('data-city') === 'all');
            });

            subFilterGroups.forEach(group => {
                group.style.display = group.id === 'sub-filters' ? 'flex' : 'none';
                group.querySelectorAll('.sub-btn').forEach(button => {
                    button.classList.toggle('active', button.getAttribute('data-filter') === 'all');
                });
            });

            applyFilters();
        });
    }
}

/**
 * Applies the current filter state to the studios data
 */
function applyFilters() {
    let filtered = window.studiosData;

    // Apply Search Filter
    if (currentFilterState.searchQuery) {
        const query = currentFilterState.searchQuery;
        filtered = filtered.filter(s => {
            // Search in name, description, area, and genres
            const text = `${s.name} ${s.description} ${s.area} ${s.genres.join(' ')}`.toLowerCase();
            return text.includes(query);
        });
    }

    // Apply Category Filter
    if (currentFilterState.category !== 'all') {
        filtered = filtered.filter(s => s.category === currentFilterState.category);
    }

    // Apply Sub-filter (Features or Genres)
    if (currentFilterState.subFilter !== 'all') {
        const sf = currentFilterState.subFilter;
        if (sf === 'parking') {
            filtered = filtered.filter(s => s.features.parking);
        } else if (sf === 'Kids') {
            filtered = filtered.filter(s => s.features.kidsClass);
        } else {
            filtered = filtered.filter(s => s.genres.includes(sf));
        }
    }

    // Apply City Filter
    if (currentFilterState.city !== 'all') {
        filtered = filtered.filter(s => s.city === currentFilterState.city);
    }

    filtered = sortStudios(filtered, currentFilterState.sort);

    renderStudios(filtered);
    updateResultsMeta(filtered);
}

function sortStudios(data, sortKey) {
    const sorted = [...data];

    const beginnerRank = { '◎': 3, '〇': 2, '△': 1 };
    const recommendedScore = (studio) => {
        let score = 0;
        score += beginnerRank[studio.features?.beginnerFriendly] || 0;
        if (studio.features?.kidsClass) score += 2;
        if (studio.features?.parking) score += 1;
        if (studio.pricing?.minPrice > 0) score += 1;
        return score;
    };

    switch (sortKey) {
        case 'beginner':
            return sorted.sort((a, b) => {
                const diff = (beginnerRank[b.features?.beginnerFriendly] || 0) - (beginnerRank[a.features?.beginnerFriendly] || 0);
                return diff || recommendedScore(b) - recommendedScore(a);
            });
        case 'kids':
            return sorted.sort((a, b) => {
                const diff = Number(Boolean(b.features?.kidsClass)) - Number(Boolean(a.features?.kidsClass));
                return diff || recommendedScore(b) - recommendedScore(a);
            });
        case 'price':
            return sorted.sort((a, b) => {
                const aKnown = a.pricing?.minPrice > 0;
                const bKnown = b.pricing?.minPrice > 0;
                if (aKnown !== bKnown) return Number(bKnown) - Number(aKnown);
                if (aKnown && bKnown) return a.pricing.minPrice - b.pricing.minPrice;
                return recommendedScore(b) - recommendedScore(a);
            });
        case 'area':
            return sorted.sort((a, b) => {
                const cityDiff = (a.city || '').localeCompare(b.city || '', 'ja');
                if (cityDiff !== 0) return cityDiff;
                return (a.area || '').localeCompare(b.area || '', 'ja');
            });
        case 'recommended':
        default:
            return sorted.sort((a, b) => recommendedScore(b) - recommendedScore(a));
    }
}

function updateResultsMeta(filtered) {
    const summary = document.getElementById('results-summary');
    const chipContainer = document.getElementById('active-filter-chips');
    const filterBar = document.getElementById('active-filter-bar');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    const activeChips = [];

    if (currentFilterState.category !== 'all') activeChips.push(filterLabelMap[currentFilterState.category] || currentFilterState.category);
    if (currentFilterState.subFilter !== 'all') activeChips.push(filterLabelMap[currentFilterState.subFilter] || currentFilterState.subFilter);
    if (currentFilterState.city !== 'all') activeChips.push(currentFilterState.city);
    if (currentFilterState.searchQuery) activeChips.push(`"${currentFilterState.searchQuery}"`);

    if (summary) {
        summary.textContent = `${filtered.length}件の教室を表示中。${currentFilterState.city === 'all' ? '愛媛県全域' : currentFilterState.city}の候補を比較できます。`;
    }

    if (chipContainer && filterBar) {
        chipContainer.innerHTML = activeChips.map(chip => `<span class="active-filter-chip">${chip}</span>`).join('');
        filterBar.hidden = activeChips.length === 0;
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.style.display = activeChips.length > 1 || currentFilterState.searchQuery ? 'inline-flex' : 'none';
    }
}

/**
 * Modal Logic for Studio Details
 */
function initModal() {
    if (!document.getElementById('studio-modal')) {
        const modalHtml = `
            <div id="studio-modal" class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close" id="modal-close-btn">&times;</button>
                    <div id="modal-body-content"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const overlay = document.getElementById('studio-modal');
        const closeBtn = document.getElementById('modal-close-btn');

        const closeModal = () => overlay.classList.remove('active');

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }
}

function openModal(studioId) {
    const studio = window.studiosData.find(s => s.id === studioId);
    if (!studio) return;

    const modalBody = document.getElementById('modal-body-content');
    const overlay = document.getElementById('studio-modal');

    const genreTags = studio.genres.map(g => `<span class="tag">${g}</span>`).join('');

    // Feature formatting
    const features = [];
    if (studio.features.parking) features.push('🚗 駐車場あり');
    if (studio.features.kidsClass) features.push('👶 キッズ対応');
    if (studio.features.adultClass) features.push('🧑 大人対応');
    if (studio.features.beginnerFriendly) features.push(`🔰 初心者歓迎: ${studio.features.beginnerFriendly}`);

    const pricingSummary = formatPricingSummary(studio.pricing);
    const audienceSummary = getAudienceSummary(studio.features);
    const featureSummary = getCardFeatureSummary(studio);

    modalBody.innerHTML = `
        <div style="position: relative;">
          <img src="${studio.imageUrl}" alt="${studio.name}" class="modal-img">
          <div style="position: absolute; bottom: 0; right: 0; background: rgba(0,0,0,0.5); color: #fff; font-size: 0.7rem; padding: 2px 8px;">
            画像引用元: ${studio.imageSource || 'フリー素材(Unsplash)'}
          </div>
        </div>
        <div class="modal-body">
            <div class="modal-head">
                <div class="tags modal-genre-tags">${genreTags}</div>
                <h2 class="modal-title">${studio.name}</h2>
                <div class="modal-location-badges">
                    <span class="badge modal-location-badge">${studio.city} ${studio.area}</span>
                    <span class="modal-access-text">${studio.access}</span>
                </div>
            </div>

            <div class="modal-summary-grid">
                <div class="modal-summary-card modal-summary-card-primary">
                    <span class="modal-summary-label">対象</span>
                    <strong>${audienceSummary}</strong>
                </div>
                <div class="modal-summary-card">
                    <span class="modal-summary-label">料金</span>
                    <strong>${pricingSummary}</strong>
                </div>
                <div class="modal-summary-card">
                    <span class="modal-summary-label">通学</span>
                    <strong>${studio.access}</strong>
                </div>
            </div>

            <div class="card-meta-chips modal-feature-chips">${featureSummary}</div>

            <a href="${studio.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary modal-primary-btn">公式サイト・SNSを見る</a>

            <p class="modal-desc">${studio.description}</p>
            
            <ul class="modal-info-list">
                <li class="modal-info-item">
                    <span class="modal-info-label">料金</span>
                    <span>${studio.pricing.system} ${studio.pricing.minPrice > 0 ? `/ 最安 ${studio.pricing.minPrice.toLocaleString()}円〜` : '(料金詳細は公式サイトにて)'} <br><small style="color:var(--clr-text-muted);">${studio.pricing.note}</small></span>
                </li>
                <li class="modal-info-item">
                    <span class="modal-info-label">アクセス</span>
                    <span>${studio.access}</span>
                </li>
                <li class="modal-info-item">
                    <span class="modal-info-label">特徴</span>
                    <span>${features.join(' / ')}</span>
                </li>
            </ul>
        </div>
    `;

    overlay.classList.add('active');
}
