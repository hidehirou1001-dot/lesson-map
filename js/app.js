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
        grid.innerHTML = '<p class="text-center" style="grid-column: 1/-1;">条件に一致するスタジオが見つかりませんでした。</p>';
        return;
    }

    data.forEach((studio, index) => {
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
      <div class="card-content" style="display: flex; flex-direction: column; flex: 1;">
        <div class="tags">${genreTags}</div>
        <h3 class="h3">${studio.name}</h3>
        <p style="font-size: 0.875rem; margin-bottom: 1rem; flex: 1;">${studio.description}</p>
        
        <div style="font-size: 0.8rem; margin-bottom: 1rem; color: var(--clr-text-main);">
          <div><strong style="color: var(--clr-primary);">💵 料金:</strong> ${studio.pricing.system} / 最安 ${studio.pricing.minPrice.toLocaleString()}円〜</div>
          <div style="margin-top: 4px;"><strong style="color: var(--clr-success);">🚃 アクセス:</strong> ${studio.access}</div>
        </div>
        
        <button class="btn btn-outline detail-btn" style="width: 100%; border-radius: var(--radius-md);">詳細を見る</button>
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

/**
 * Search Functionality
 */
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchLabel = document.querySelector('.search-label');

    if (!searchInput || !searchBtn) return;

    // placeholder is kept empty because we now show an explicit label above
    searchInput.placeholder = '';

    // Function to toggle label visibility
    const toggleLabel = () => {
        if (searchLabel) {
            searchLabel.style.display = searchInput.value.trim() || searchInput === document.activeElement ? 'none' : 'flex';
        }
    };

    // Initial toggle
    toggleLabel();

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        currentFilterState.searchQuery = query;
        applyFilters();
        searchInput.value = ''; // Clear the search input after search
        toggleLabel(); // Show label again after clearing
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Toggle label on focus and blur
    searchInput.addEventListener('focus', toggleLabel);
    searchInput.addEventListener('blur', toggleLabel);

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
    subFilter: 'all', // 'all', 'HIPHOP', 'K-POP', 'Kids', 'parking'
    city: 'all',       // 'all', '松山市', '今治市', '新居浜市'
    searchQuery: ''    // Search query string
};

function initFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const subBtns = document.querySelectorAll('.sub-btn');
    const cityBtns = document.querySelectorAll('.city-btn');
    const danceFilters = document.getElementById('sub-filters');
    const progFilters = document.getElementById('sub-filters-prog');

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
            subBtns.forEach(b => {
                b.classList.remove('active');
                if (b.getAttribute('data-filter') === 'all') {
                    b.classList.add('active');
                }
            });

            applyFilters();
        });
    });

    // 2. Sub-category Buttons (HIPHOP, Kids, Parking)
    subBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            subBtns.forEach(b => b.classList.remove('active'));
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

    renderStudios(filtered);
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

    modalBody.innerHTML = `
        <div style="position: relative;">
          <img src="${studio.imageUrl}" alt="${studio.name}" class="modal-img">
          <div style="position: absolute; bottom: 0; right: 0; background: rgba(0,0,0,0.5); color: #fff; font-size: 0.7rem; padding: 2px 8px;">
            画像引用元: ${studio.imageSource || 'フリー素材(Unsplash)'}
          </div>
        </div>
        <div class="modal-body">
            <div class="tags" style="margin-bottom: 0.5rem;">${genreTags}</div>
            <h2 class="modal-title">${studio.name}</h2>
            <div style="margin-bottom: 1rem;">
                <span class="badge" style="position:static; display:inline-block; margin-right:0.5rem;">${studio.city} ${studio.area}</span>
            </div>
            <p class="modal-desc">${studio.description}</p>
            
            <ul class="modal-info-list">
                <li>
                    <span class="modal-info-label">料金:</span>
                    <span>${studio.pricing.system} ${studio.pricing.minPrice > 0 ? `/ 最安 ${studio.pricing.minPrice.toLocaleString()}円〜` : '(料金詳細は公式サイトにて)'} <br><small style="color:var(--clr-text-muted);">${studio.pricing.note}</small></span>
                </li>
                <li>
                    <span class="modal-info-label">アクセス:</span>
                    <span>${studio.access}</span>
                </li>
                <li>
                    <span class="modal-info-label">特徴:</span>
                    <span>${features.join(' / ')}</span>
                </li>
            </ul>

            <a href="${studio.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; border-radius: var(--radius-md); padding: 1rem; font-size:1.1rem; margin-top: 1rem;">公式サイト・SNSを見る</a>
        </div>
    `;

    overlay.classList.add('active');
}
