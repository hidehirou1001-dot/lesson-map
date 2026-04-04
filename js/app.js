/**
 * LessonMap Main App Logic
 * Handles animations, search functionality, and rendering of studio cards
 */

document.documentElement.classList.add('js');

function runSafely(label, callback) {
    try {
        callback();
    } catch (error) {
        console.error(`[LessonMap] ${label} failed`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    runSafely('initAnimations', initAnimations);
    runSafely('initFAQ', initFAQ);
    runSafely('initCarousels', initCarousels);
    runSafely('initResultsPanels', initResultsPanels);
    runSafely('initCompareMemo', initCompareMemo);
    runSafely('initFavorites', initFavorites);
    runSafely('initRecentGuides', initRecentGuides);
    runSafely('initShareTools', initShareTools);

    // Render studios if a container exists (e.g., on index.html)
    const studiosGrid = document.getElementById('studios-grid');
    if (studiosGrid && window.studiosData) {
        runSafely('initHeroStats', () => initHeroStats(window.studiosData));
        runSafely('initCategoryCounts', () => initCategoryCounts(window.studiosData));
        runSafely('renderStudios', () => renderStudios(window.studiosData));
        runSafely('initSearch', initSearch);
        runSafely('initFilters', initFilters);
        runSafely('initModal', initModal);
        runSafely('renderCompareMemo', renderCompareMemo);
        runSafely('renderFavorites', renderFavorites);
        runSafely('applyFilters', applyFilters); // Apply initial filters
    }
});

function initCarousels() {
    const carousels = document.querySelectorAll('[data-carousel]');
    if (!carousels.length) return;

    carousels.forEach((carousel) => {
        const carouselId = carousel.getAttribute('data-carousel');
        const track = carousel.querySelector('[data-carousel-track]');
        if (!track) return;

        const slides = Array.from(track.children);
        const dotsWrap = carousel.querySelector(`[data-carousel-dots="${carouselId}"]`);
        const prevBtn = document.querySelector(`[data-carousel-prev="${carouselId}"]`);
        const nextBtn = document.querySelector(`[data-carousel-next="${carouselId}"]`);

        if (dotsWrap) {
            dotsWrap.innerHTML = slides.map((_, index) => (
                `<button class="carousel-dot ${index === 0 ? 'is-active' : ''}" type="button" aria-label="${index + 1}枚目へ" data-carousel-dot="${carouselId}" data-index="${index}"></button>`
            )).join('');
        }

        const getStepWidth = () => {
            const firstSlide = slides[0];
            if (!firstSlide) return 0;
            const styles = window.getComputedStyle(track);
            const gap = parseFloat(styles.columnGap || styles.gap || 0);
            return firstSlide.getBoundingClientRect().width + gap;
        };

        const updateDots = () => {
            if (!dotsWrap) return;
            const stepWidth = getStepWidth();
            if (!stepWidth) return;
            const activeIndex = Math.round(track.scrollLeft / stepWidth);
            dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                dot.classList.toggle('is-active', index === activeIndex);
            });
        };

        prevBtn?.addEventListener('click', () => {
            track.scrollBy({ left: -getStepWidth(), behavior: 'smooth' });
        });

        nextBtn?.addEventListener('click', () => {
            track.scrollBy({ left: getStepWidth(), behavior: 'smooth' });
        });

        dotsWrap?.addEventListener('click', (event) => {
            const dot = event.target.closest('[data-carousel-dot]');
            if (!dot) return;
            const index = Number(dot.getAttribute('data-index'));
            track.scrollTo({ left: getStepWidth() * index, behavior: 'smooth' });
        });

        track.addEventListener('scroll', () => {
            window.requestAnimationFrame(updateDots);
        }, { passive: true });

        updateDots();
    });
}

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
        if (!question) return;
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
        grid.innerHTML = getNoResultsMarkup();
        const resetBtn = grid.querySelector('[data-empty-reset]');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                const clearFiltersBtn = document.getElementById('clear-filters-btn');
                clearFiltersBtn?.click();
            });
        }
        return;
    }

    let renderedCount = 0;

    data.forEach((studio) => {
        try {
            const pricingSummary = formatPricingSummary(studio.pricing);
            const commuteSummary = getCommuteSummary(studio);
            const cardAccessSummary = getCardAccessSummary(studio.access);
            const categoryLabel = getCategoryLabel(studio.category);
            const compareButtonLabel = isComparedStudio(studio.id) ? '比較中' : '比較する';
            const compareButtonState = isComparedStudio(studio.id) ? 'active' : '';
            const compareButtonDisabled = !isComparedStudio(studio.id) && compareMemoIds.length >= COMPARE_MEMO_LIMIT ? 'disabled' : '';
            const favoriteButtonLabel = isFavoriteStudio(studio.id) ? '保存済み' : '保存する';
            const favoriteButtonState = isFavoriteStudio(studio.id) ? 'active' : '';

            const card = document.createElement('article');
            card.className = 'card';

            card.innerHTML = `
      <div class="card-img-wrap">
        <span class="badge">${studio.city} ${studio.area}</span>
        <img src="${studio.imageUrl}" alt="${studio.name}" class="card-img" loading="lazy">
      </div>
        <div class="card-content">
        <div class="card-heading-block">
          <span class="card-eyebrow">${categoryLabel}</span>
          <h3 class="h3">${studio.name}</h3>
          <p class="card-location">${cardAccessSummary}</p>
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
          <div class="card-stat">
            <span class="card-stat-label">通いやすさ</span>
            <strong>${commuteSummary}</strong>
          </div>
        </div>
        <div class="card-action-row">
          <button class="btn btn-primary detail-btn card-detail-btn">詳細を見る</button>
          <div class="card-support-actions">
            <button class="btn btn-text favorite-toggle-btn ${favoriteButtonState}" type="button" data-favorite-id="${studio.id}">${favoriteButtonLabel}</button>
            <button class="btn btn-text compare-toggle-btn ${compareButtonState}" type="button" data-studio-id="${studio.id}" ${compareButtonDisabled}>${compareButtonLabel}</button>
          </div>
        </div>
      </div>
    `;

            grid.appendChild(card);
            renderedCount += 1;

            // Add event listener to the detail button
            const detailBtn = card.querySelector('.detail-btn');
            if (detailBtn) {
                detailBtn.addEventListener('click', () => openModal(studio.id));
            }

            const compareBtn = card.querySelector('.compare-toggle-btn');
            if (compareBtn) {
                compareBtn.addEventListener('click', () => toggleCompareMemo(studio.id));
            }

            const favoriteBtn = card.querySelector('.favorite-toggle-btn');
            if (favoriteBtn) {
                favoriteBtn.addEventListener('click', () => toggleFavorite(studio.id));
            }
        } catch (error) {
            console.error('[LessonMap] renderStudios item failed', studio?.id, error);
        }
    });

    if (renderedCount === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><strong>教室一覧の表示で問題が発生しました。</strong><p>条件をリセットして再読み込みしてください。改善しない場合は別の条件でもお試しください。</p></div>';
    }
}

function getNoResultsMarkup() {
    const guides = getRecommendedGuides();
    const guideMarkup = guides.length > 0 ? `
        <div class="empty-state-guides">
            ${guides.map(guide => `
                <a class="empty-state-guide-link" href="${guide.href}">
                    <strong>${guide.title}</strong>
                    <span>${guide.description}</span>
                </a>
            `).join('')}
        </div>
    ` : '';

    return `
        <div class="empty-state empty-state-extended" style="grid-column: 1/-1;">
            <strong>条件に一致する教室が見つかりませんでした。</strong>
            <p>カテゴリやエリアを少し広げると見つかりやすくなります。</p>
            <div class="empty-state-actions">
                <button class="btn btn-outline" type="button" data-empty-reset>条件をリセット</button>
                <a class="btn btn-text" href="/recommendations/">特集一覧を見る</a>
            </div>
            ${guideMarkup}
        </div>
    `;
}

function formatPricingSummary(pricing) {
    if (!pricing) return '料金は要確認';
    if (pricing.minPrice > 0) {
        return `${pricing.system} / 最安 ${pricing.minPrice.toLocaleString()}円〜`;
    }
    if (hasVisiblePricing(pricing)) {
        return pricing.note ? `${pricing.system} / ${pricing.note}` : `${pricing.system} / 公式サイトで確認`;
    }
    return pricing.note ? `${pricing.system} / ${pricing.note}` : `${pricing.system} / 料金は要確認`;
}

function hasVisiblePricing(pricing) {
    if (!pricing) return false;
    if (pricing.minPrice > 0) return true;
    const system = pricing.system || '';
    const note = pricing.note || '';
    return system.includes('料金表公開') || note.includes('料金表公開');
}

function getCardFeatureSummary(studio) {
    const chips = [];
    if (studio.features.beginnerFriendly) chips.push(`初心者 ${studio.features.beginnerFriendly}`);
    chips.push(getCommuteSummary(studio));
    chips.push(getPricingVisibility(studio.pricing));
    return chips.map(chip => `<span class="card-meta-chip">${chip}</span>`).join('');
}

function getLocationNoteMarkup(studio, className = 'location-note') {
    if (!studio?.locationSummary) return '';

    const label = studio.chainName ? `${studio.chainName}の掲載方針` : '掲載方針';
    return `
    <p class="${className}">
      <strong>${label}</strong>
      <span>${studio.locationSummary}</span>
    </p>
    `;
}

function getLocalAreaCue(studio) {
    const access = studio?.access || '';
    const area = studio?.area || '';
    const text = `${area} ${access}`;

    if (/フジグラン|エミフル|イオンモール|ジョー・プラ|三越|高島屋/.test(text)) return '買い物ついでに寄りやすいエリア';
    if (/松山市駅|JR松山駅|大街道駅|勝山町駅|本町五丁目駅|土橋駅|鷹子駅|駅から徒歩|徒歩圏内|徒歩\d+分/.test(text)) return '駅や電車沿線から通いやすいエリア';
    if (/銀天街|大街道|二番町|三番町|千舟町|湊町/.test(text)) return '松山中心部から動きやすいエリア';
    if (/朝生田|山越|持田|桑原|衣山|宮西|空港通/.test(text)) return '車移動もしやすい市内エリア';
    if (/今治市|新居浜市|西条市|宇和島市|大洲市|八幡浜市|西予市|愛南町|松前町|砥部町|内子町|鬼北町/.test(text)) return '地域名から探したいときに見やすいエリア';

    return '';
}

function getLocalAreaCueMarkup(studio, className = 'local-area-cue') {
    const cue = getLocalAreaCue(studio);
    if (!cue) return '';
    return `<span class="${className}">${cue}</span>`;
}

function hasTrialInfo(studio) {
    if (!studio) return false;

    const text = [
        studio.description || '',
        studio.pricing?.note || '',
        studio.access || ''
    ].join(' ');

    return /無料体験|体験|見学/.test(text);
}

function getTrialStatus(studio) {
    if (!studio) return '要確認';

    const text = [
        studio.description || '',
        studio.pricing?.note || '',
        studio.access || ''
    ].join(' ');

    if (/無料体験/.test(text)) return '無料体験あり';
    if (/体験|見学/.test(text)) return '体験案内あり';
    return '要確認';
}

function getQuickStatusItems(studio) {
    return [
        {
            key: 'price',
            label: '料金',
            value: studio?.pricing?.minPrice > 0 ? '公開あり' : '要確認',
            tone: studio?.pricing?.minPrice > 0 ? 'good' : 'neutral'
        },
        {
            key: 'trial',
            label: '体験',
            value: hasTrialInfo(studio) ? '案内あり' : '要確認',
            tone: hasTrialInfo(studio) ? 'good' : 'neutral'
        },
        {
            key: 'access',
            label: '通いやすさ',
            value: studio?.features?.parking ? '駐車場あり' : 'アクセス確認',
            tone: studio?.features?.parking ? 'good' : 'neutral'
        }
    ];
}

function getQuickStatusMarkup(studio) {
    const items = getQuickStatusItems(studio);
    return `
    <div class="card-quick-statuses" aria-label="比較しやすいポイント">
      ${items.map(item => `
        <span class="card-quick-status" data-tone="${item.tone}">
          <span class="card-quick-status-label">${item.label}</span>
          <strong>${item.value}</strong>
        </span>
      `).join('')}
    </div>
    `;
}

function getCuratorLabels(studio) {
    const labels = [];
    const pricing = getPricingVisibility(studio?.pricing);
    const trialStatus = getTrialStatus(studio);
    const commute = getCommuteSummary(studio);
    const beginner = studio?.features?.beginnerFriendly;

    if (trialStatus === '無料体験あり' || trialStatus === '体験案内あり') labels.push('体験から入りやすい');
    if (pricing === '料金公開あり' || pricing === '料金表公開あり') labels.push('料金感をつかみやすい');
    if (commute === '車で通いやすい') labels.push('送迎しやすい');
    if (commute === '駅近・徒歩圏') labels.push('駅から通いやすい');
    if (beginner === '◎' || beginner === '〇') labels.push('初心者が入りやすい');
    if (studio?.features?.kidsClass) labels.push('子どもの入口に向く');
    if (studio?.features?.adultClass) labels.push('大人の学び直し向き');

    return [...new Set(labels)].slice(0, 2);
}

function getCuratorLabelMarkup(studio, className = 'curator-label-row') {
    const labels = getCuratorLabels(studio);
    if (labels.length === 0) return '';

    return `
    <div class="${className}" aria-label="LessonMapの見立て">
      ${labels.map(label => `<span class="curator-label-chip">${label}</span>`).join('')}
    </div>
    `;
}

const SITE_REVIEW_DATE = '2026-03-22';
const COMPARE_MEMO_KEY = 'lessonmap_compare_memo';
const COMPARE_MEMO_LIMIT = 3;
const RECENT_GUIDES_KEY = 'lessonmap_recent_guides';
const RECENT_GUIDES_LIMIT = 3;
let compareMemoIds = [];
const FAVORITES_KEY = 'lessonmap_favorites';
let favoriteIds = [];
const cityRegionMap = {
    中予: ['松山市', '松前町', '東温市', '伊予市'],
    東予: ['今治市', '新居浜市', '西条市', '四国中央市'],
    南予: ['宇和島市']
};
const resultsPanelState = {
    guide: false,
    explain: false,
    utility: false,
    guideTouched: false,
    explainTouched: false,
    utilityTouched: false
};

function getPricingCheckStatus(studio) {
    if (studio?.pricing?.minPrice > 0) return '料金公開を確認済み';
    if (hasVisiblePricing(studio?.pricing)) return '料金表公開を確認済み';
    if (studio?.pricing?.note) return '料金メモあり・詳細は要確認';
    return '料金は要確認';
}

function getVerificationItems(studio) {
    return [
        { label: '掲載確認日', value: SITE_REVIEW_DATE },
        { label: '公式情報', value: '公式サイト確認済み' },
        { label: '料金確認', value: getPricingCheckStatus(studio) }
    ];
}

function getVerificationMarkup(studio, extraClass = '') {
    const items = getVerificationItems(studio);
    const className = ['verification-block', extraClass].filter(Boolean).join(' ');
    return `
    <div class="${className}" aria-label="更新日と確認状況">
      ${items.map(item => `
        <div class="verification-item">
          <span class="verification-label">${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `).join('')}
    </div>
    `;
}

function initCompareMemo() {
    compareMemoIds = loadCompareMemo();

    const clearBtn = document.getElementById('compare-clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearCompareMemo);
    }

    renderCompareMemo();
}

function initFavorites() {
    favoriteIds = loadFavorites();

    const clearBtn = document.getElementById('favorite-clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearFavorites);
    }

    renderFavorites();
}

function loadCompareMemo() {
    try {
        const raw = window.localStorage.getItem(COMPARE_MEMO_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.slice(0, COMPARE_MEMO_LIMIT) : [];
    } catch (error) {
        return [];
    }
}

function loadFavorites() {
    try {
        const raw = window.localStorage.getItem(FAVORITES_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveCompareMemo() {
    try {
        window.localStorage.setItem(COMPARE_MEMO_KEY, JSON.stringify(compareMemoIds));
    } catch (error) {
        // localStorage unavailable
    }
}

function saveFavorites() {
    try {
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
    } catch (error) {
        // localStorage unavailable
    }
}

function isComparedStudio(studioId) {
    return compareMemoIds.includes(studioId);
}

function isFavoriteStudio(studioId) {
    return favoriteIds.includes(studioId);
}

function toggleCompareMemo(studioId) {
    if (isComparedStudio(studioId)) {
        compareMemoIds = compareMemoIds.filter(id => id !== studioId);
    } else if (compareMemoIds.length >= COMPARE_MEMO_LIMIT) {
        compareMemoIds = [...compareMemoIds.slice(1), studioId];
    } else {
        compareMemoIds = [...compareMemoIds, studioId];
    }

    saveCompareMemo();
    renderCompareMemo();
    applyFilters();

    const overlay = document.getElementById('studio-modal');
    if (overlay?.classList.contains('active')) {
        openModal(studioId);
    }
}

function clearCompareMemo() {
    compareMemoIds = [];
    saveCompareMemo();
    renderCompareMemo();
    applyFilters();
}

function toggleFavorite(studioId) {
    if (isFavoriteStudio(studioId)) {
        favoriteIds = favoriteIds.filter(id => id !== studioId);
    } else {
        favoriteIds = [studioId, ...favoriteIds.filter(id => id !== studioId)];
    }

    saveFavorites();
    renderFavorites();
    applyFilters();

    const overlay = document.getElementById('studio-modal');
    if (overlay?.classList.contains('active')) {
        openModal(studioId);
    }
}

function clearFavorites() {
    favoriteIds = [];
    saveFavorites();
    renderFavorites();
    applyFilters();
}

function loadRecentGuides() {
    try {
        const raw = window.localStorage.getItem(RECENT_GUIDES_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.slice(0, RECENT_GUIDES_LIMIT) : [];
    } catch (error) {
        return [];
    }
}

function saveRecentGuides(items) {
    try {
        window.localStorage.setItem(RECENT_GUIDES_KEY, JSON.stringify(items.slice(0, RECENT_GUIDES_LIMIT)));
    } catch (error) {
        // localStorage unavailable
    }
}

function trackCurrentGuide() {
    const { pathname } = window.location;
    if (!pathname.startsWith('/recommendations/') || pathname === '/recommendations/') return;

    const heading = document.querySelector('h1');
    const title = heading?.textContent?.trim() || document.title.replace(/\s*\|\s*LessonMap\s*$/, '').trim();
    if (!title) return;

    const recent = loadRecentGuides().filter(item => item?.href && item.href !== pathname);
    recent.unshift({ href: pathname, title });
    saveRecentGuides(recent);
}

function renderRecentGuides() {
    const panel = document.getElementById('recent-guides-panel');
    const grid = document.getElementById('recent-guides-grid');
    if (!panel || !grid) return;

    const currentPath = window.location.pathname;
    const limit = currentPath === '/recommendations/' ? RECENT_GUIDES_LIMIT : 2;
    const recent = loadRecentGuides().filter(item => item?.href && item.href !== currentPath).slice(0, limit);

    if (recent.length === 0) {
        panel.hidden = true;
        grid.innerHTML = '';
        return;
    }

    grid.innerHTML = recent.map(item => `
        <a class="recent-guide-link" href="${item.href}">
            <strong>${item.title}</strong>
        </a>
    `).join('');
    panel.hidden = false;
}

function initRecentGuides() {
    trackCurrentGuide();
    renderRecentGuides();
}

function updateCollectionCounts(compareCount = compareMemoIds.length, favoriteCount = favoriteIds.length) {
    const comparePanelCount = document.getElementById('compare-panel-count');
    const favoritePanelCount = document.getElementById('favorite-panel-count');
    const floatingCompareBar = document.getElementById('floating-compare-bar');
    const floatingCompareCount = document.getElementById('floating-compare-count');
    const compareGuideCounts = document.querySelectorAll('[data-compare-count]');
    const favoriteGuideCounts = document.querySelectorAll('[data-favorite-count]');
    const utilityPanel = document.querySelector('.results-utility-panel');
    const utilityGuideGrid = document.getElementById('results-utility-guide-grid');
    const utilityEmptyCopy = document.getElementById('results-utility-empty-copy');
    const hasSavedItems = compareCount > 0 || favoriteCount > 0;

    compareGuideCounts.forEach(node => {
        node.textContent = `${compareCount}/${COMPARE_MEMO_LIMIT}`;
    });
    if (comparePanelCount) comparePanelCount.textContent = `${compareCount}/${COMPARE_MEMO_LIMIT}`;
    if (floatingCompareCount) floatingCompareCount.textContent = `${compareCount}/${COMPARE_MEMO_LIMIT}`;
    favoriteGuideCounts.forEach(node => {
        node.textContent = `${favoriteCount}件`;
    });
    if (favoritePanelCount) favoritePanelCount.textContent = `${favoriteCount}件`;
    if (floatingCompareBar) {
        floatingCompareBar.hidden = compareCount === 0;
        floatingCompareBar.setAttribute('aria-label', compareCount > 0 ? `比較中の教室 ${compareCount}件を見る` : '比較中の教室を確認する');
    }
    if (utilityPanel) {
        utilityPanel.hidden = !hasSavedItems;
        utilityPanel.classList.toggle('is-empty', !hasSavedItems);
    }
    if (utilityGuideGrid) utilityGuideGrid.hidden = !hasSavedItems;
    if (utilityEmptyCopy) utilityEmptyCopy.hidden = hasSavedItems;

    if (!hasSavedItems) {
        resultsPanelState.utility = false;
    }
}

function initResultsPanels() {
    bindResultsPanelToggle('results-guide-toggle', 'results-guide-body', 'guide');
    bindResultsPanelToggle('results-explain-toggle', 'results-explain-body', 'explain');
    bindResultsPanelToggle('results-utility-toggle', 'results-utility-body', 'utility');
    initFloatingCompareBar();
    syncResultsPanelStates();
}

function initFloatingCompareBar() {
    const button = document.getElementById('floating-compare-bar');
    if (!button) return;

    button.addEventListener('click', () => {
        resultsPanelState.utility = true;
        resultsPanelState.utilityTouched = true;
        syncResultsPanelStates();
        const panel = document.getElementById('results-utility-panel');
        if (panel) {
            panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

function bindResultsPanelToggle(buttonId, bodyId, panelKey) {
    const button = document.getElementById(buttonId);
    const body = document.getElementById(bodyId);
    if (!button || !body) return;

    button.addEventListener('click', () => {
        resultsPanelState[panelKey] = !resultsPanelState[panelKey];
        resultsPanelState[`${panelKey}Touched`] = true;
        applyResultsPanelState(panelKey, body, button);
    });
}

function applyResultsPanelState(panelKey, body, button) {
    const expanded = Boolean(resultsPanelState[panelKey]);
    body.hidden = !expanded;
    button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    button.textContent = expanded ? '閉じる' : '開く';
    if (panelKey === 'utility') {
        const utilityPanel = document.getElementById('results-utility-panel');
        const floatingCompareBar = document.getElementById('floating-compare-bar');
        if (utilityPanel) utilityPanel.classList.toggle('is-open', expanded);
        if (floatingCompareBar) floatingCompareBar.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }
}

function syncResultsPanelStates() {
    const guideBody = document.getElementById('results-guide-body');
    const guideButton = document.getElementById('results-guide-toggle');
    const explainBody = document.getElementById('results-explain-body');
    const explainButton = document.getElementById('results-explain-toggle');
    const utilityBody = document.getElementById('results-utility-body');
    const utilityButton = document.getElementById('results-utility-toggle');

    if (guideBody && guideButton) applyResultsPanelState('guide', guideBody, guideButton);
    if (explainBody && explainButton) applyResultsPanelState('explain', explainBody, explainButton);
    if (utilityBody && utilityButton) applyResultsPanelState('utility', utilityBody, utilityButton);
}

function ensureUtilityPanelVisibleIfNeeded() {
    if (resultsPanelState.utilityTouched) {
        syncResultsPanelStates();
        return;
    }

    resultsPanelState.utility = false;
    syncResultsPanelStates();
}

function renderCompareMemo() {
    const panel = document.getElementById('compare-memo-panel');
    const grid = document.getElementById('compare-memo-grid');
    if (!panel || !grid) return;
    let diffSummary = panel.querySelector('#compare-memo-diff-summary');
    if (!diffSummary) {
        diffSummary = document.createElement('div');
        diffSummary.id = 'compare-memo-diff-summary';
        diffSummary.className = 'compare-diff-summary';
        panel.insertBefore(diffSummary, grid);
    }

    const items = compareMemoIds
        .map(id => window.studiosData?.find(studio => studio.id === id))
        .filter(Boolean);

    if (items.length === 0) {
        panel.hidden = true;
        grid.innerHTML = '';
        diffSummary.hidden = true;
        diffSummary.innerHTML = '';
        updateCollectionCounts(0, favoriteIds.length);
        updateCompareSharePanel([]);
        ensureUtilityPanelVisibleIfNeeded();
        return;
    }

    panel.hidden = false;
    ensureUtilityPanelVisibleIfNeeded();
    updateCollectionCounts(items.length, favoriteIds.length);
    const diffMap = getCompareMemoDiffMap(items);
    const diffKeys = Object.keys(diffMap).filter(key => diffMap[key]);
    if (diffKeys.length > 0) {
        const diffLabels = {
            audience: '対象',
            pricing: '料金',
            commute: '通学',
            status_price: '料金公開',
            status_trial: '体験案内',
            status_access: '通いやすさ'
        };
        diffSummary.hidden = false;
        diffSummary.innerHTML = `
          <span class="compare-diff-label">差分</span>
          <div class="compare-diff-chips">
            ${diffKeys.map(key => `<span class="compare-diff-chip">${diffLabels[key] || key}</span>`).join('')}
          </div>
        `;
    } else {
        diffSummary.hidden = true;
        diffSummary.innerHTML = '';
    }
    updateCompareSharePanel(items);
    grid.innerHTML = items.map((studio, index) => {
        const statuses = getQuickStatusItems(studio);
        const verificationMarkup = getVerificationMarkup(studio, 'compare-memo-verification');
        const trialCheckpoints = getTrialCheckpoints(studio).slice(0, 2);
        const summaryRows = [
            { key: 'audience', label: '対象', value: getAudienceSummary(studio.features) },
            { key: 'pricing', label: '料金', value: formatPricingSummary(studio.pricing) },
            { key: 'commute', label: '通学', value: getCommuteSummary(studio) }
        ].sort((a, b) => Number(diffMap[b.key]) - Number(diffMap[a.key]));
        return `
        <article class="compare-memo-item">
          <div class="compare-memo-item-head">
            <div>
              <span class="compare-memo-rank">候補 ${index + 1}</span>
              <span class="compare-memo-city">${studio.city} ${studio.area}</span>
              <h3 class="compare-memo-title">${studio.name}</h3>
            </div>
            <button class="compare-memo-remove" type="button" data-remove-compare-id="${studio.id}" aria-label="${studio.name}を比較メモから外す">×</button>
          </div>
          <div class="compare-memo-summary">
            ${summaryRows.map(row => `
              <span class="compare-memo-summary-row ${diffMap[row.key] ? 'is-diff' : ''}">
                ${diffMap[row.key] ? '<span class="compare-memo-diff-kicker">差分あり</span>' : ''}
                <strong>${row.label}:</strong> ${row.value}
              </span>
            `).join('')}
          </div>
          <div class="compare-memo-statuses">
            ${statuses.map(item => `<span class="compare-memo-status ${diffMap[`status_${item.key}`] ? 'is-diff' : ''}" data-tone="${item.tone}">${diffMap[`status_${item.key}`] ? '<span class="compare-memo-diff-kicker compare-memo-diff-kicker-inline">差分あり</span>' : ''}<strong>${item.label}</strong>${item.value}</span>`).join('')}
          </div>
          <div class="compare-memo-checklist">
            <span class="compare-memo-checklist-label">体験時の確認</span>
            <div class="compare-memo-checkpoint-chips">
              ${trialCheckpoints.map(point => `<span class="compare-memo-checkpoint-chip">${point}</span>`).join('')}
            </div>
          </div>
          ${verificationMarkup}
          <div class="compare-memo-actions">
            <button class="btn btn-primary compare-memo-detail-btn" type="button" data-open-compare-id="${studio.id}">比較ポイントを見る</button>
            <a class="compare-memo-link" href="${studio.link}" target="_blank" rel="noopener noreferrer">公式サイトで確認する</a>
          </div>
        </article>
        `;
    }).join('');

    grid.querySelectorAll('[data-remove-compare-id]').forEach(button => {
        button.addEventListener('click', () => toggleCompareMemo(button.getAttribute('data-remove-compare-id')));
    });

    grid.querySelectorAll('[data-open-compare-id]').forEach(button => {
        button.addEventListener('click', () => openModal(button.getAttribute('data-open-compare-id')));
    });
}

function getCompareMemoDiffMap(items) {
    if (!items || items.length <= 1) return {};

    const values = {
        audience: items.map(studio => getAudienceSummary(studio.features)),
        pricing: items.map(studio => formatPricingSummary(studio.pricing)),
        commute: items.map(studio => getCommuteSummary(studio)),
        status_price: items.map(studio => getQuickStatusItems(studio)[0]?.value || ''),
        status_trial: items.map(studio => getQuickStatusItems(studio)[1]?.value || ''),
        status_access: items.map(studio => getQuickStatusItems(studio)[2]?.value || '')
    };

    return Object.fromEntries(
        Object.entries(values).map(([key, entries]) => [key, new Set(entries).size > 1])
    );
}

function getTrialCheckpoints(studio) {
    const category = studio?.category || '';
    const points = [];

    if (category === 'English' || category === '英会話') {
        points.push('先生の話すスピードと声かけが合うか');
        points.push('体験後の宿題や通い方が想像できるか');
    } else if (category === 'Dance' || category === 'ダンス') {
        points.push('レベル感が合っていて萎縮しないか');
        points.push('見学時にクラスの雰囲気が合うか');
    } else if (category === 'Piano' || category === 'ピアノ') {
        points.push('先生の教え方が子どもや初心者に合うか');
        points.push('振替や練習ペースを続けられそうか');
    } else if (category === 'Programming' || category === 'プログラミング') {
        points.push('教材の進み方が年齢に合っているか');
        points.push('自分で考える時間とサポートの量が合うか');
    } else if (category === 'Boxing' || category === 'ボクシング') {
        points.push('初心者向けの説明が分かりやすいか');
        points.push('強度やメニューが体力に合っているか');
    } else if (category === 'Swimming' || category === 'スイミング') {
        points.push('水への慣れ方や声かけが安心できるか');
        points.push('更衣室や見学環境が使いやすいか');
    } else if (
        category === 'Fitness' ||
        category === 'Gymnastics' ||
        category === 'スポーツジム' ||
        category === '体操教室'
    ) {
        points.push('通う時間帯の混み方や使いやすさを見ておく');
        points.push('初心者でも入りやすい雰囲気か確かめる');
    } else {
        points.push('通う曜日と時間を続けられそうか');
        points.push('先生や教室の雰囲気が合うか見ておく');
    }

    if (studio?.features?.parking) {
        points.push('駐車場の停めやすさと送迎動線を確認する');
    } else if ((studio?.access || '').includes('徒歩')) {
        points.push('駅や停留所から実際に通いやすいか見る');
    } else {
        points.push('通学ルートと送迎のしやすさを確認する');
    }

    return points.slice(0, 3);
}

function getOfficialActionLabel(studio) {
    const pricing = getPricingVisibility(studio?.pricing);
    const trialStatus = getTrialStatus(studio);

    if (trialStatus === '無料体験あり' || trialStatus === '体験案内あり') {
        return 'まずは体験の有無を見る';
    }
    if (pricing === '料金公開あり' || pricing === '料金表公開あり') {
        return '料金とコースを見る';
    }
    return '公式サイトで教室情報を見る';
}

function renderFavorites() {
    const panel = document.getElementById('favorite-panel');
    const grid = document.getElementById('favorite-grid');
    if (!panel || !grid) return;

    const items = favoriteIds
        .map(id => window.studiosData?.find(studio => studio.id === id))
        .filter(Boolean);

    if (items.length === 0) {
        panel.hidden = true;
        grid.innerHTML = '';
        updateCollectionCounts(compareMemoIds.length, 0);
        ensureUtilityPanelVisibleIfNeeded();
        return;
    }

    panel.hidden = false;
    ensureUtilityPanelVisibleIfNeeded();
    updateCollectionCounts(compareMemoIds.length, items.length);
    grid.innerHTML = items.map(studio => `
      <article class="favorite-item">
        <div class="favorite-item-head">
          <div>
            <span class="favorite-city">${studio.city} ${studio.area}</span>
            <h3 class="favorite-title">${studio.name}</h3>
          </div>
          <button class="favorite-remove" type="button" data-remove-favorite-id="${studio.id}" aria-label="${studio.name}をお気に入りから外す">×</button>
        </div>
        <div class="favorite-meta">
          <span><strong>対象:</strong> ${getAudienceSummary(studio.features)}</span>
          <span><strong>料金:</strong> ${formatPricingSummary(studio.pricing)}</span>
        </div>
        <div class="favorite-actions">
          <button class="btn btn-text favorite-detail-btn" type="button" data-open-favorite-id="${studio.id}">候補を見直す</button>
          <button class="btn btn-outline favorite-compare-btn" type="button" data-favorite-compare-id="${studio.id}">${isComparedStudio(studio.id) ? '比較中' : '比較メモへ移す'}</button>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('[data-remove-favorite-id]').forEach(button => {
        button.addEventListener('click', () => toggleFavorite(button.getAttribute('data-remove-favorite-id')));
    });

    grid.querySelectorAll('[data-open-favorite-id]').forEach(button => {
        button.addEventListener('click', () => openModal(button.getAttribute('data-open-favorite-id')));
    });

    grid.querySelectorAll('[data-favorite-compare-id]').forEach(button => {
        button.addEventListener('click', () => toggleCompareMemo(button.getAttribute('data-favorite-compare-id')));
    });
}

function initShareTools() {
    initArticleSharePanel();
    initCompareSharePanel();
}

function buildXShareUrl(text, url) {
    const params = new URLSearchParams({
        text,
        url
    });
    return `https://twitter.com/intent/tweet?${params.toString()}`;
}

function buildLineShareUrl(text, url) {
    return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
}

function initArticleSharePanel() {
    const articleShell = document.querySelector('.article-shell');
    const articleHeader = document.querySelector('.article-header');
    if (!articleShell || !articleHeader) return;

    const title = document.querySelector('h1')?.textContent?.trim() || document.title;
    const url = window.location.href;
    const shareText = `${title} | LessonMap`;

    const panel = document.createElement('section');
    panel.className = 'share-panel share-panel-article';
    panel.innerHTML = `
      <div class="share-panel-head">
        <span class="results-kicker">SHARE</span>
        <strong>この特集をシェアする</strong>
      </div>
      <div class="share-panel-links">
        <a class="share-link-btn" href="${buildXShareUrl(shareText, url)}" target="_blank" rel="noopener noreferrer">Xで共有</a>
        <a class="share-link-btn" href="${buildLineShareUrl(shareText, url)}" target="_blank" rel="noopener noreferrer">LINEで送る</a>
        <button class="share-link-btn share-copy-btn" type="button" data-share-copy="${url}">URLをコピー</button>
      </div>
    `;

    articleHeader.insertAdjacentElement('afterend', panel);
    bindShareCopyButtons(panel);
}

function initCompareSharePanel() {
    const comparePanel = document.getElementById('compare-memo-panel');
    if (!comparePanel) return;

    const sharePanel = document.createElement('div');
    sharePanel.className = 'share-panel share-panel-compare';
    sharePanel.id = 'compare-share-panel';
    sharePanel.hidden = true;
    comparePanel.insertAdjacentElement('beforeend', sharePanel);
}

function updateCompareSharePanel(items) {
    const sharePanel = document.getElementById('compare-share-panel');
    if (!sharePanel) return;

    if (!items || items.length === 0) {
        sharePanel.hidden = true;
        sharePanel.innerHTML = '';
        return;
    }

    const names = items.map(studio => studio.name).slice(0, 3);
    const summary = `LessonMapで比較中: ${names.join(' / ')}`;
    const url = window.location.href;

    sharePanel.hidden = false;
    sharePanel.innerHTML = `
      <div class="share-panel-head">
        <span class="results-kicker">SHARE</span>
        <strong>この比較メモを共有する</strong>
      </div>
      <p class="share-panel-copy">${summary}</p>
      <div class="share-panel-links">
        <a class="share-link-btn" href="${buildXShareUrl(summary, url)}" target="_blank" rel="noopener noreferrer">Xで共有</a>
        <a class="share-link-btn" href="${buildLineShareUrl(summary, url)}" target="_blank" rel="noopener noreferrer">LINEで送る</a>
        <button class="share-link-btn share-copy-btn" type="button" data-share-copy="${summary} ${url}">比較内容をコピー</button>
      </div>
    `;

    bindShareCopyButtons(sharePanel);
}

function bindShareCopyButtons(scope = document) {
    scope.querySelectorAll('.share-copy-btn').forEach(button => {
        if (button.dataset.boundCopy === 'true') return;
        button.dataset.boundCopy = 'true';
        button.addEventListener('click', async () => {
            const text = button.getAttribute('data-share-copy') || window.location.href;
            try {
                await navigator.clipboard.writeText(text);
                button.textContent = 'コピーしました';
                window.setTimeout(() => {
                    button.textContent = button.closest('.share-panel-compare') ? '比較内容をコピー' : 'URLをコピー';
                }, 1400);
            } catch (error) {
                button.textContent = 'コピーできませんでした';
            }
        });
    });
}

function getCommuteSummary(studio) {
    if (!studio) return '通学情報あり';

    const access = studio.access || '';

    if (studio.features?.parking) return '車で通いやすい';
    if (/徒歩\d+分|駅徒歩|駅から徒歩|徒歩圏内|駅周辺/.test(access)) return '駅近・徒歩圏';
    if (/イオンモール|エミフル|フジグラン|高島屋|商業施設/.test(access)) return '商業施設内';
    if (/周辺|エリア|市内/.test(access)) return 'エリア情報あり';

    return '通学情報あり';
}

function getPricingVisibility(pricing) {
    if (!pricing) return '料金は要確認';
    if (pricing.minPrice > 0) return '料金公開あり';
    if (hasVisiblePricing(pricing)) return '料金表公開あり';
    return '料金は要確認';
}

function getCategoryLabel(category) {
    const labels = {
        Dance: 'ダンス',
        Piano: 'ピアノ',
        Programming: 'プログラミング',
        Gymnastics: '体操',
        Swimming: '水泳',
        Fitness: 'スポーツジム',
        Boxing: 'ボクシング',
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

function getCardAccessSummary(access) {
    if (!access) return 'アクセスは公式サイトで確認';
    if (/詳細は公式サイト/.test(access)) return 'アクセスは公式サイトで確認';

    const compact = access
        .replace(/（[^）]*）/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    if (compact.length <= 24) return compact;

    const split = compact.split(/、|・|\/|\/|　/).map(part => part.trim()).filter(Boolean);
    if (split.length > 0 && split[0].length >= 6) return split[0];

    return `${compact.slice(0, 24).trim()}...`;
}

function getCardDescriptionSummary(description) {
    if (!description) return '';
    if (description.length <= 72) return description;
    return `${description.slice(0, 72).trim()}...`;
}

function getDecisionReason(studio) {
    if (!studio || !studio.features) return '公式サイトと特徴を見ながら比較しやすい教室です。';

    const { features, genres = [] } = studio;
    const commuteSummary = getCommuteSummary(studio);

    if (features.beginnerFriendly === '◎') {
        return `${commuteSummary}で、初心者でも始めやすい条件がそろっています。`;
    }

    if (features.kidsClass && features.adultClass) {
        return '子どもも大人も通いやすく、家族で検討しやすい教室です。';
    }

    if (features.kidsClass) {
        return 'キッズ向けクラスがあり、初めての習い事候補に入れやすい教室です。';
    }

    if (features.parking) {
        return '駐車場があり、車で通いたい人に向いています。';
    }

    if (genres.length >= 2) {
        return `${genres[0]}以外の選択肢もあり、比較しながら選びやすい教室です。`;
    }

    return '公式サイトを見ながら特徴を比較しやすい教室です。';
}

function getExperienceReportMarkup(studio) {
    const report = studio?.experienceReport;
    if (!report) return '';

    const checkpoints = Array.isArray(report.checkpoints)
        ? report.checkpoints.map(point => `<span class="card-meta-chip card-meta-chip-soft">${point}</span>`).join('')
        : '';

    return `
        <section class="modal-experience-section">
            <div class="modal-experience-head">
                <span class="results-kicker">VISIT NOTE</span>
                <strong>${report.label || '体験メモ'}</strong>
            </div>
            <p class="modal-experience-copy">${report.summary || ''}</p>
            ${checkpoints ? `
                <div class="modal-experience-points">
                    <span class="modal-experience-label">体験前に見たいポイント</span>
                    <div class="card-meta-chips">${checkpoints}</div>
                </div>
            ` : ''}
        </section>
    `;
}

function getInlineGuideLinksForStudio(studio) {
    if (!studio) return [];

    const guides = [];
    const seen = new Set();
    const pushGuide = (guide) => {
        if (!guide || seen.has(guide.href)) return;
        seen.add(guide.href);
        guides.push(guide);
    };

    const cityGuideMap = {
        '今治市': { href: '/recommendations/imabari-lessons/', title: '今治の習い事ガイド', description: '地域全体で候補を広げて見られます。' },
        '新居浜市': { href: '/recommendations/niihama-lessons/', title: '新居浜の習い事ガイド', description: '新居浜でまず見たい入口記事です。' },
        '松前町': { href: '/recommendations/masaki-lessons/', title: '松前町の習い事ガイド', description: '松前町で探し始める人向けです。' },
        '東温市': { href: '/recommendations/toon-english/', title: '東温市の地域特集', description: '東温市で年齢や始めやすさを見比べられます。' },
        '伊予市': { href: '/recommendations/iyo-programming/', title: '伊予市の地域特集', description: '伊予市で始めやすい候補を先に見られます。' },
        '四国中央市': { href: '/recommendations/shikokuchuo-english/', title: '四国中央市の地域特集', description: '四国中央市の比較記事へ進めます。' },
        '西条市': { href: '/recommendations/saijo-dance/', title: '西条市の地域特集', description: '西条市で比較を始める入口です。' },
        '宇和島市': { href: '/recommendations/uwajima-swimming/', title: '宇和島市の地域特集', description: '宇和島市の地域比較へ進めます。' }
    };

    const categoryGuideMap = {
        Dance: { href: '/recommendations/matsuyama-dance/', title: 'ダンス特集も見る', description: 'ダンス全体の比較軸を補助的に確認できます。' },
        Piano: { href: '/recommendations/matsuyama-piano/', title: 'ピアノ特集も見る', description: '子ども・大人の違いを補助的に見比べやすいです。' },
        Programming: { href: '/recommendations/matsuyama-programming/', title: 'プログラミング特集も見る', description: '教材や対象年齢の違いを補助的に整理できます。' },
        English: { href: '/recommendations/matsuyama-english/', title: '英会話特集も見る', description: '子ども向けと大人向けを横断で補助的に見られます。' },
        Fitness: { href: '/recommendations/matsuyama-fitness/', title: 'ジム特集も見る', description: '初心者向けの比較を補助的にまとめています。' },
        Boxing: { href: '/recommendations/matsuyama-boxing/', title: 'ボクシング特集も見る', description: '初心者向けと通いやすさの比較に進めます。' },
        Yoga: { href: '/recommendations/matsuyama-yoga-pilates/', title: 'ヨガ・ピラティス特集も見る', description: '初心者向けと通いやすさの比較に進めます。' },
        CramSchool: { href: '/recommendations/matsuyama-cram-school/', title: '学習塾特集も見る', description: '通いやすさと学年感を補助的に比較できます。' },
        Calligraphy: { href: '/recommendations/matsuyama-calligraphy/', title: '書道特集も見る', description: '子ども・大人の両方を補助的に見比べられます。' },
        Soroban: { href: '/recommendations/matsuyama-soroban/', title: 'そろばん特集も見る', description: '通いやすさを含めて補助的に比較できます。' }
    };

    pushGuide(cityGuideMap[studio.city]);

    if (studio.features?.kidsClass) {
        pushGuide({ href: '/recommendations/ehime-age-lessons/', title: '年齢別ガイドも見る', description: '今の年齢に近い入口を補助的に探せます。' });
    }

    if (studio.features?.kidsClass && !studio.features?.adultClass) {
        pushGuide({ href: '/recommendations/ehime-kids-lessons/', title: '子ども向けガイドも見る', description: '幼児・小学生向けの入口を補助的にまとめています。' });
    }

    if (studio.features?.adultClass && !studio.features?.kidsClass) {
        pushGuide({ href: '/recommendations/ehime-adult-lessons/', title: '大人向けガイドも見る', description: '学び直しや趣味の入口を補助的に見られます。' });
    }

    if (['◎', '〇'].includes(studio.features?.beginnerFriendly)) {
        pushGuide({ href: '/recommendations/ehime-beginner-lessons/', title: '初心者向けガイドも見る', description: '初めてでも始めやすい候補を補助的にまとめています。' });
    }

    pushGuide(categoryGuideMap[studio.category]);

    return guides.slice(0, 1);
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
        scrollToResultsZone();
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
    category: 'all',
    subFilter: 'all', // 'all', 'HIPHOP', 'K-POP', 'POP', 'JAZZ', 'LOCK', 'コンテンポラリー', 'Kids', 'parking'
    city: 'all',       // 'all', '松山市', '今治市', '新居浜市'
    searchQuery: '',   // Search query string
    quickFilters: [],
    sort: 'recommended'
};

const filterLabelMap = {
    Dance: 'ダンス',
    Piano: 'ピアノ',
    Programming: 'プログラミング',
    Gymnastics: '体操',
    Swimming: '水泳',
    Fitness: 'スポーツジム',
    Boxing: 'ボクシング',
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
    kids: '子ども向け',
    adult: '大人向け',
    beginner: '初心者向け',
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
    const categoryFilterRow = document.getElementById('category-filter-row');
    const categoryExpandBtn = document.getElementById('category-expand-btn');
    const danceSubfilterExpandBtn = document.getElementById('dance-subfilter-expand-btn');
    const areaCityPanel = document.getElementById('area-city-panel');
    const areaCityPanelHead = document.getElementById('area-city-panel-head');
    const areaCityPanelTitle = document.getElementById('area-city-panel-title');
    const areaCityGroups = document.querySelectorAll('[data-region-cities]');
    const areaStepRegion = document.getElementById('finder-area-step-region');
    const areaStepCity = document.getElementById('finder-area-step-city');
    const areaStatusTitle = document.getElementById('finder-area-status-title');
    const areaStatusCopy = document.getElementById('finder-area-status-copy');
    const areaSection = document.getElementById('finder-area-section');
    const areaNote = document.getElementById('finder-area-note');
    const categoryStatusTitle = document.getElementById('finder-category-status-title');
    const categoryStatusCopy = document.getElementById('finder-category-status-copy');
    const subfilterStatus = document.getElementById('finder-subfilter-status');
    const subfilterStatusTitle = document.getElementById('finder-subfilter-title');
    const subfilterStatusCopy = document.getElementById('finder-subfilter-copy');
    const danceFilters = document.getElementById('sub-filters');
    const progFilters = document.getElementById('sub-filters-prog');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    const finderResultsCta = document.getElementById('finder-results-cta');
    const finderResultsCtaBtn = document.getElementById('finder-results-cta-btn');
    const sortSelect = document.getElementById('sort-select');
    const subFilterGroups = [danceFilters, progFilters, document.getElementById('sub-filters-gym'), document.getElementById('sub-filters-swim')].filter(Boolean);

    function syncCategoryStatus(selectedCategory) {
        if (!categoryStatusTitle || !categoryStatusCopy) return;

        if (selectedCategory === 'all') {
            categoryStatusTitle.textContent = '全体を表示中';
            categoryStatusCopy.textContent = 'まずは気になるジャンルを選ぶと、結果を絞り込めます。';
            return;
        }

        const label = getCategoryLabel(selectedCategory) || selectedCategory;
        const hasSubFilters = ['Dance', 'Programming', 'Gymnastics', 'Swimming'].includes(selectedCategory);
        const hasChosenCategory = selectedCategory !== 'all';

        if (areaSection) {
            areaSection.classList.toggle('is-ready', hasChosenCategory);
        }

        if (areaNote) {
            areaNote.textContent = hasChosenCategory
                ? '次にエリアを選ぶと、近い候補だけに絞れます。'
                : 'まずジャンルを選ぶと、次のエリア選択が分かりやすくなります。';
        }

        categoryStatusTitle.textContent = `${label}で絞り込み中`;
        categoryStatusCopy.textContent = hasSubFilters
            ? '必要なら下の条件も選んで、さらに絞り込めます。'
            : 'このままエリアを選ぶか、検索結果を見ると比較しやすいです。';
    }

    function syncSubfilterStatus(selectedCategory) {
        if (!subfilterStatus || !subfilterStatusTitle || !subfilterStatusCopy) return;

        if (selectedCategory === 'Dance') {
            subfilterStatus.hidden = false;
            subfilterStatusTitle.textContent = '追加で絞る';
            subfilterStatusCopy.textContent = 'ダンスの中で、K-POPやキッズ対応などの条件を足したいときだけ使えます。';
            return;
        }

        if (selectedCategory === 'Programming') {
            subfilterStatus.hidden = false;
            subfilterStatusTitle.textContent = '追加で絞る';
            subfilterStatusCopy.textContent = 'プログラミングの中で、マイクラやロボット系まで絞りたいときだけ使えます。';
            return;
        }

        if (selectedCategory === 'Gymnastics') {
            subfilterStatus.hidden = false;
            subfilterStatusTitle.textContent = '追加で絞る';
            subfilterStatusCopy.textContent = '体操の中で、キッズ専用やアクロバットなどを追加で絞れます。';
            return;
        }

        if (selectedCategory === 'Swimming') {
            subfilterStatus.hidden = false;
            subfilterStatusTitle.textContent = '追加で絞る';
            subfilterStatusCopy.textContent = '水泳の中で、ベビー対応やキッズ対応まで絞りたいときだけ使えます。';
            return;
        }

        subfilterStatus.hidden = true;
    }

    function syncAreaSelection(selectedCity) {
        const activeRegion = cityRegionMap[selectedCity]
            ? selectedCity
            : Object.keys(cityRegionMap).find(region => cityRegionMap[region].includes(selectedCity)) || 'all';

        if (areaCityPanel) {
            areaCityPanel.hidden = activeRegion === 'all';
        }

        if (areaCityPanelHead) {
            areaCityPanelHead.hidden = activeRegion === 'all';
        }

        if (areaCityPanelTitle) {
            areaCityPanelTitle.textContent = activeRegion === 'all'
                ? '市町を選ぶ'
                : `${activeRegion}の市町を選ぶ`;
        }

        areaCityGroups.forEach(group => {
            group.hidden = activeRegion === 'all' || group.getAttribute('data-region-cities') !== activeRegion;
        });

        if (areaStepRegion) {
            areaStepRegion.classList.add('is-active');
        }

        if (areaStepCity) {
            areaStepCity.classList.toggle('is-active', activeRegion !== 'all');
        }

        if (areaStatusTitle && areaStatusCopy) {
            if (selectedCity === 'all') {
                areaStatusTitle.textContent = '愛媛県全域を表示中';
                areaStatusCopy.textContent = '広く見たいときはこのまま、さらに絞るなら広域を選んでください。';
            } else if (cityRegionMap[selectedCity]) {
                areaStatusTitle.textContent = `${selectedCity}を表示中`;
                areaStatusCopy.textContent = `このまま${selectedCity}で比較できます。さらに絞るなら下の市町を選んでください。`;
            } else {
                areaStatusTitle.textContent = `${selectedCity}を表示中`;
                areaStatusCopy.textContent = `${activeRegion}からさらに絞った状態です。近い候補だけを見たいときに向いています。`;
            }
        }

        cityBtns.forEach(button => {
            const buttonCity = button.getAttribute('data-city');
            const isDetailButton = button.classList.contains('city-detail-btn');
            if (isDetailButton) {
                button.classList.toggle('active', buttonCity === selectedCity);
            } else {
                button.classList.toggle('active', buttonCity === selectedCity || (selectedCity !== 'all' && buttonCity === activeRegion));
            }
        });
    }

    if (categoryExpandBtn && categoryFilterRow) {
        categoryExpandBtn.addEventListener('click', () => {
            const expanded = categoryFilterRow.classList.toggle('is-expanded');
            categoryExpandBtn.setAttribute('aria-expanded', String(expanded));
            categoryExpandBtn.textContent = expanded ? '人気ジャンルだけに戻す' : 'ほかのジャンルを見る';
        });
    }

    if (danceSubfilterExpandBtn && danceFilters) {
        danceSubfilterExpandBtn.addEventListener('click', () => {
            const expanded = danceFilters.classList.toggle('is-expanded');
            danceSubfilterExpandBtn.setAttribute('aria-expanded', String(expanded));
            danceSubfilterExpandBtn.textContent = expanded ? '人気条件だけに戻す' : 'ほかの条件も見る';
        });
    }

    if (finderResultsCtaBtn) {
        finderResultsCtaBtn.addEventListener('click', () => {
            scrollToResultsZone();
        });
    }

    // 1. Category Buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.classList.contains('category-btn-extra') && categoryFilterRow && categoryExpandBtn) {
                categoryFilterRow.classList.add('is-expanded');
                categoryExpandBtn.setAttribute('aria-expanded', 'true');
                categoryExpandBtn.textContent = '人気ジャンルだけに戻す';
            }

            const cat = btn.getAttribute('data-category');
            currentFilterState.category = cat;
            syncCategoryStatus(cat);
            syncSubfilterStatus(cat);

            // Hide all sub-filters first
            if (danceFilters) danceFilters.style.display = 'none';
            if (progFilters) progFilters.style.display = 'none';

            const gymFilters = document.getElementById('sub-filters-gym');
            if (gymFilters) gymFilters.style.display = 'none';

            const swimFilters = document.getElementById('sub-filters-swim');
            if (swimFilters) swimFilters.style.display = 'none';

            // Show relevant sub-filters
            if (cat === 'Dance') {
                if (danceFilters) danceFilters.style.display = 'flex';
                if (danceSubfilterExpandBtn) danceSubfilterExpandBtn.hidden = false;
            } else if (cat === 'Programming') {
                if (progFilters) progFilters.style.display = 'flex';
                if (danceSubfilterExpandBtn) danceSubfilterExpandBtn.hidden = true;
            } else if (cat === 'Gymnastics') {
                if (gymFilters) gymFilters.style.display = 'flex';
                if (danceSubfilterExpandBtn) danceSubfilterExpandBtn.hidden = true;
            } else if (cat === 'Swimming') {
                if (swimFilters) swimFilters.style.display = 'flex';
                if (danceSubfilterExpandBtn) danceSubfilterExpandBtn.hidden = true;
            } else if (danceSubfilterExpandBtn) {
                danceSubfilterExpandBtn.hidden = true;
            }

            // Reset sub-filter state
            currentFilterState.subFilter = 'all';
            if (danceFilters) {
                danceFilters.classList.remove('is-expanded');
            }
            if (danceSubfilterExpandBtn) {
                danceSubfilterExpandBtn.setAttribute('aria-expanded', 'false');
                danceSubfilterExpandBtn.textContent = 'ほかの条件も見る';
            }
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
            currentFilterState.city = btn.getAttribute('data-city');
            syncAreaSelection(currentFilterState.city);
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
                category: 'all',
                subFilter: 'all',
                city: 'all',
                searchQuery: '',
                quickFilters: [],
                sort: 'recommended'
            };

            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = 'recommended';

            categoryBtns.forEach(button => {
                button.classList.toggle('active', button.getAttribute('data-category') === 'all');
            });

            cityBtns.forEach(button => {
                button.classList.toggle('active', button.getAttribute('data-city') === 'all');
            });

            subFilterGroups.forEach(group => {
                group.style.display = 'none';
                group.querySelectorAll('.sub-btn').forEach(button => {
                    button.classList.toggle('active', button.getAttribute('data-filter') === 'all');
                });
            });

            syncAreaSelection('all');
            syncCategoryStatus('all');
            syncSubfilterStatus('all');
            applyFilters();
        });
    }

    syncCategoryStatus(currentFilterState.category);
    syncSubfilterStatus(currentFilterState.category);
    syncAreaSelection(currentFilterState.city);
}

function scrollToResultsZone() {
    const resultsGrid = document.getElementById('studios-grid');
    const resultsZone = document.getElementById('results-zone');
    const firstResultCard = resultsGrid ? resultsGrid.querySelector('.card') : null;
    const target = firstResultCard || resultsGrid || resultsZone;
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({
        top: Math.max(top, 0),
        behavior: 'smooth'
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
            const regionLabel = Object.keys(cityRegionMap).find(region => cityRegionMap[region].includes(s.city)) || '';
            const categoryLabel = getCategoryLabel(s.category);
            const genreLabels = s.genres.map(genre => filterLabelMap[genre] || genre).join(' ');
            // Search in visible user-facing fields
            const text = [
                s.name,
                s.description,
                s.city,
                s.area,
                s.access,
                categoryLabel,
                s.category,
                s.genres.join(' '),
                genreLabels,
                regionLabel
            ].join(' ').toLowerCase();
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
        const regionCities = cityRegionMap[currentFilterState.city];
        filtered = filtered.filter(s => regionCities ? regionCities.includes(s.city) : s.city === currentFilterState.city);
    }

    if (currentFilterState.quickFilters.includes('kids')) {
        filtered = filtered.filter(s => s.features?.kidsClass);
    }

    if (currentFilterState.quickFilters.includes('adult')) {
        filtered = filtered.filter(s => s.features?.adultClass);
    }

    if (currentFilterState.quickFilters.includes('beginner')) {
        filtered = filtered.filter(s => ['◎', '〇'].includes(s.features?.beginnerFriendly));
    }

    if (currentFilterState.quickFilters.includes('parking')) {
        filtered = filtered.filter(s => s.features?.parking);
    }

    filtered = sortStudios(filtered, currentFilterState.sort);

    runSafely('renderStudios(applyFilters)', () => renderStudios(filtered));
    runSafely('updateResultsMeta(applyFilters)', () => updateResultsMeta(filtered));
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
    const finderResultsCta = document.getElementById('finder-results-cta');
    const finderResultsCtaBtn = document.getElementById('finder-results-cta-btn');
    const guidePanel = document.getElementById('results-guide-panel');
    const guideTitle = document.getElementById('results-guide-title');
    const guideLinks = document.getElementById('results-guide-links');
    const explainPanel = document.getElementById('results-explain-panel');
    const explainTitle = document.getElementById('results-explain-title');
    const explainCopy = document.getElementById('results-explain-copy');
    const explainChips = document.getElementById('results-explain-chips');
    const activeChips = [];

    if (currentFilterState.category !== 'all') activeChips.push(filterLabelMap[currentFilterState.category] || currentFilterState.category);
    if (currentFilterState.subFilter !== 'all') activeChips.push(filterLabelMap[currentFilterState.subFilter] || currentFilterState.subFilter);
    if (currentFilterState.city !== 'all') activeChips.push(currentFilterState.city);
    currentFilterState.quickFilters.forEach(filterKey => {
        activeChips.push(filterLabelMap[filterKey] || filterKey);
    });
    if (currentFilterState.searchQuery) activeChips.push(`"${currentFilterState.searchQuery}"`);

    if (summary) {
        const categoryText = currentFilterState.category === 'all'
            ? '愛媛県全体'
            : (filterLabelMap[currentFilterState.category] || currentFilterState.category);
        const cityText = currentFilterState.city === 'all' ? '愛媛県全域' : currentFilterState.city;
        const lowCountHint = filtered.length > 0 && filtered.length <= 2
            ? ' 候補が少ないので、近い特集も合わせて見ると比較しやすくなります。'
            : '';
        summary.textContent = `${filtered.length}件を表示中。${categoryText}を${cityText}で比べられます。${lowCountHint}`;
    }

    const sortExplainMap = {
        recommended: {
            title: 'おすすめ順の見方',
            copy: '初心者の始めやすさ、キッズ対応、駐車場あり、料金公開ありをもとに、比較しやすい候補を上にしています。',
            chips: ['初心者の始めやすさ', 'キッズ対応', '駐車場あり', '料金公開あり']
        },
        beginner: {
            title: '初心者向け順の見方',
            copy: '初心者歓迎の強さを優先しつつ、比較しやすい候補が上に来るように並べています。',
            chips: ['初心者歓迎 ◎', '初心者歓迎 ○', 'キッズ対応', '料金公開あり']
        },
        kids: {
            title: 'キッズ対応順の見方',
            copy: '子ども向けクラスがある教室を優先し、その中で始めやすさや通いやすさも見ています。',
            chips: ['キッズクラスあり', '初心者歓迎', '駐車場あり', '料金公開あり']
        },
        price: {
            title: '料金がわかる順の見方',
            copy: '料金公開がある教室を優先し、その中では最安料金が低い順に並べています。',
            chips: ['料金公開あり', '最安料金', '比較しやすさ']
        },
        area: {
            title: 'エリア名順の見方',
            copy: '市町名とエリア名の並びで見やすく整理しています。地域ごとの候補をまとめて見たいときに向いています。',
            chips: ['市町名', 'エリア名']
        }
    };
    const explain = sortExplainMap[currentFilterState.sort] || sortExplainMap.recommended;
    if (explainPanel && explainTitle && explainCopy && explainChips) {
        explainPanel.hidden = false;
        explainTitle.textContent = explain.title;
        explainCopy.textContent = explain.copy;
        explainChips.innerHTML = explain.chips.map(chip => `<span class="results-explain-chip">${chip}</span>`).join('');
        if (!resultsPanelState.explainTouched) {
            resultsPanelState.explain = currentFilterState.sort !== 'recommended';
        }
    }

    if (chipContainer && filterBar) {
        chipContainer.innerHTML = activeChips.map(chip => `<span class="active-filter-chip">${chip}</span>`).join('');
        filterBar.hidden = activeChips.length === 0;
    }

    if (guidePanel && guideTitle && guideLinks) {
        const guides = getRecommendedGuides();
        if (guides.length > 0) {
            const isLowCount = filtered.length > 0 && filtered.length <= 2;
            guideTitle.textContent = isLowCount
                ? '候補が少ないときに広げたい特集'
                : (currentFilterState.city !== 'all'
                    ? `${currentFilterState.city}で合わせて見たい特集`
                    : '合わせて見たい特集');
            guideLinks.innerHTML = guides.map(guide => `
                <a class="results-guide-link" href="${guide.href}">
                    <strong>${guide.title}</strong>
                    <span>${guide.description}</span>
                </a>
            `).join('');
            guidePanel.hidden = false;
            if (!resultsPanelState.guideTouched) {
                resultsPanelState.guide = isLowCount;
            }
        } else {
            guideLinks.innerHTML = '';
            guidePanel.hidden = true;
        }
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.style.display = activeChips.length > 0 ? 'inline-flex' : 'none';
    }

    if (finderResultsCta && finderResultsCtaBtn) {
        const shouldShow = activeChips.length > 0 || currentFilterState.searchQuery.length > 0;
        finderResultsCta.hidden = !shouldShow;
        if (shouldShow) {
            const categoryLabel = currentFilterState.category === 'all'
                ? '候補'
                : (filterLabelMap[currentFilterState.category] || currentFilterState.category);
            finderResultsCtaBtn.textContent = `${categoryLabel}の${filtered.length}件を見る`;
        } else {
            finderResultsCtaBtn.textContent = '検索結果を見る';
        }
    }

    syncResultsPanelStates();
}

function getRecommendedGuides() {
    const cityGuideMap = {
        中予: { href: '/recommendations/ehime-local-lessons/', title: '中予から見たい特集', description: '松山、松前町、東温市、伊予市の入口から探せます。' },
        東予: { href: '/recommendations/ehime-local-lessons/', title: '東予から見たい特集', description: '今治、新居浜、西条市、四国中央市の入口から探せます。' },
        南予: { href: '/recommendations/ehime-local-lessons/', title: '南予から見たい特集', description: '宇和島市を中心に南予側の入口から探せます。' },
        '今治市': { href: '/recommendations/imabari-lessons/', title: '今治の習い事おすすめ3選', description: '今治エリアの入口記事から広く比較できます。' },
        '新居浜市': { href: '/recommendations/niihama-lessons/', title: '新居浜の習い事おすすめ3選', description: '新居浜エリアでまず候補を広く見たい方向けです。' },
        '松前町': { href: '/recommendations/masaki-lessons/', title: '松前町の習い事おすすめ3選', description: '松前町で探し始める人向けの地域特集です。' },
        '東温市': { href: '/recommendations/toon-english/', title: '東温市の英会話教室おすすめ1選', description: '東温市でまず見やすい地域特化記事です。' },
        '伊予市': { href: '/recommendations/iyo-programming/', title: '伊予市のプログラミング教室おすすめ1選', description: '伊予市で始めやすい候補を先に見られます。' },
        '四国中央市': { href: '/recommendations/shikokuchuo-english/', title: '四国中央市の英会話教室おすすめ2選', description: '四国中央市の地域特化記事へ進めます。' },
        '西条市': { href: '/recommendations/saijo-dance/', title: '西条市のダンス教室おすすめ1選', description: '西条市で初心者にも見やすい地域記事です。' },
        '宇和島市': { href: '/recommendations/uwajima-swimming/', title: '宇和島市のスイミングスクールおすすめ1選', description: '宇和島市の地域特化記事へ進めます。' }
    };
    const ageGuide = { href: '/recommendations/ehime-age-lessons/', title: '愛媛の年齢別習い事ガイド', description: '幼児から小学生まで年齢目安で入口を見比べられます。' };

    const quickGuideMap = {
        kids: { href: '/recommendations/ehime-kids-lessons/', title: '愛媛の子ども向け習い事ガイド', description: '幼児・小学生向けの入口をまとめています。' },
        adult: { href: '/recommendations/ehime-adult-lessons/', title: '愛媛の大人向け習い事ガイド', description: '学び直しや趣味から始めたい方向けです。' },
        beginner: { href: '/recommendations/ehime-beginner-lessons/', title: '愛媛の初心者向け習い事ガイド', description: '初めてでも始めやすい記事をまとめています。' },
        parking: { href: '/recommendations/ehime-local-lessons/', title: '愛媛の地域別習い事ガイド', description: '通いやすい地域から比較しやすい入口です。' }
    };
    const trialGuide = { href: '/recommendations/ehime-trial-lessons/', title: '愛媛の体験しやすい習い事ガイド', description: '無料体験や見学から入りやすい記事をまとめています。' };
    const priceGuide = { href: '/recommendations/ehime-price-lessons/', title: '愛媛の料金が見やすい習い事ガイド', description: '月謝や費用感から探しやすい記事をまとめています。' };

    const categoryGuideMap = {
        Dance: { href: '/recommendations/matsuyama-dance/', title: '松山のダンス教室おすすめ5選', description: 'ダンスを詳しく比較したい方向けです。' },
        Piano: { href: '/recommendations/matsuyama-piano/', title: '松山のピアノ教室おすすめ5選', description: 'ピアノを子ども・大人で比較できます。' },
        Programming: { href: '/recommendations/matsuyama-programming/', title: '松山のプログラミング教室おすすめ5選', description: '教材や通いやすさで比較できます。' },
        Fitness: { href: '/recommendations/matsuyama-fitness/', title: '松山のスポーツジムおすすめ3選', description: '初心者向けのジム比較に進めます。' },
        Boxing: { href: '/recommendations/matsuyama-boxing/', title: '松山のボクシングジムおすすめ2選', description: '初心者向けと通いやすさの比較に進めます。' },
        Yoga: { href: '/recommendations/matsuyama-yoga-pilates/', title: '松山のヨガ・ピラティスおすすめ2選', description: '初心者向けと通いやすさの比較に進めます。' },
        English: { href: '/recommendations/matsuyama-english/', title: '松山の英会話教室おすすめ3選', description: '子ども・大人を含めて英会話を比較できます。' },
        CramSchool: { href: '/recommendations/matsuyama-cram-school/', title: '松山の学習塾おすすめ3選', description: '学習塾を通いやすさで比較できます。' },
        Calligraphy: { href: '/recommendations/matsuyama-calligraphy/', title: '松山の書道教室おすすめ3選', description: '書道を子ども・大人で見比べられます。' },
        Soroban: { href: '/recommendations/matsuyama-soroban/', title: '松山のそろばん教室おすすめ3選', description: 'そろばんを通いやすさで比較できます。' }
    };

    const guides = [];
    const seen = new Set();

    const pushGuide = (guide) => {
        if (!guide || seen.has(guide.href)) return;
        seen.add(guide.href);
        guides.push(guide);
    };

    if (currentFilterState.city !== 'all') {
        pushGuide(cityGuideMap[currentFilterState.city]);
    }

    currentFilterState.quickFilters.forEach(filterKey => {
        pushGuide(quickGuideMap[filterKey]);
    });

    if (currentFilterState.quickFilters.includes('kids')) {
        pushGuide(ageGuide);
        pushGuide(trialGuide);
    }

    if (currentFilterState.sort === 'price') {
        pushGuide(priceGuide);
    }

    if (['Swimming', 'Gymnastics', 'Programming', 'English'].includes(currentFilterState.category)) {
        pushGuide(ageGuide);
        pushGuide(trialGuide);
    }

    if (currentFilterState.sort === 'beginner') {
        pushGuide(quickGuideMap.beginner);
    }

    pushGuide(categoryGuideMap[currentFilterState.category]);

    if (guides.length === 0) {
        pushGuide({ href: '/recommendations/ehime-local-lessons/', title: '愛媛の地域別習い事ガイド', description: 'まずは住んでいる地域に近い特集から探せます。' });
        pushGuide(ageGuide);
        pushGuide(trialGuide);
        pushGuide(priceGuide);
        pushGuide({ href: '/recommendations/ehime-kids-lessons/', title: '愛媛の子ども向け習い事ガイド', description: '子ども向けの入口をまとめています。' });
    }

    return guides.slice(0, 2);
}

function getRecommendedGuidesForStudio(studio) {
    if (!studio) return [];

    const guides = [];
    const seen = new Set();
    const ageGuide = { href: '/recommendations/ehime-age-lessons/', title: '愛媛の年齢別習い事ガイド', description: '年齢目安から近い入口を選びたいときに便利です。' };
    const pushGuide = (guide) => {
        if (!guide || seen.has(guide.href)) return;
        seen.add(guide.href);
        guides.push(guide);
    };

    const cityGuideMap = {
        '今治市': { href: '/recommendations/imabari-lessons/', title: '今治の習い事おすすめ3選', description: '今治エリアの入口記事から広く比較できます。' },
        '新居浜市': { href: '/recommendations/niihama-lessons/', title: '新居浜の習い事おすすめ3選', description: '新居浜エリアでまず候補を広く見たい方向けです。' },
        '松前町': { href: '/recommendations/masaki-lessons/', title: '松前町の習い事おすすめ3選', description: '松前町で探し始める人向けの地域特集です。' },
        '東温市': { href: '/recommendations/toon-english/', title: '東温市の英会話教室おすすめ1選', description: '東温市でまず見やすい地域特化記事です。' },
        '伊予市': { href: '/recommendations/iyo-programming/', title: '伊予市のプログラミング教室おすすめ1選', description: '伊予市で始めやすい候補を先に見られます。' },
        '四国中央市': { href: '/recommendations/shikokuchuo-english/', title: '四国中央市の英会話教室おすすめ2選', description: '四国中央市の地域特化記事へ進めます。' },
        '西条市': { href: '/recommendations/saijo-dance/', title: '西条市のダンス教室おすすめ1選', description: '西条市で比較しやすい地域特集です。' },
        '宇和島市': { href: '/recommendations/uwajima-swimming/', title: '宇和島市のスイミングスクールおすすめ1選', description: '宇和島市の地域特化記事へ進めます。' }
    };

    const categoryGuideMap = {
        Dance: { href: '/recommendations/matsuyama-dance/', title: '松山のダンス教室おすすめ5選', description: 'ダンス全体を詳しく比較したい方向けです。' },
        Piano: { href: '/recommendations/matsuyama-piano/', title: '松山のピアノ教室おすすめ5選', description: '子ども・大人を含めてピアノを比較できます。' },
        Programming: { href: '/recommendations/matsuyama-programming/', title: '松山のプログラミング教室おすすめ5選', description: '教材や通いやすさで比較できます。' },
        Fitness: { href: '/recommendations/matsuyama-fitness/', title: '松山のスポーツジムおすすめ3選', description: '初心者向けのジム比較に進めます。' },
        Boxing: { href: '/recommendations/matsuyama-boxing/', title: '松山のボクシングジムおすすめ2選', description: '初心者向けと通いやすさの比較に進めます。' },
        Yoga: { href: '/recommendations/matsuyama-yoga-pilates/', title: '松山のヨガ・ピラティスおすすめ2選', description: '初心者向けと通いやすさの比較に進めます。' },
        English: { href: '/recommendations/matsuyama-english/', title: '松山の英会話教室おすすめ3選', description: '子ども・大人を含めて英会話を比較できます。' },
        CramSchool: { href: '/recommendations/matsuyama-cram-school/', title: '松山の学習塾おすすめ3選', description: '学習塾を通いやすさで比較できます。' },
        Calligraphy: { href: '/recommendations/matsuyama-calligraphy/', title: '松山の書道教室おすすめ3選', description: '書道を子ども・大人で見比べられます。' },
        Soroban: { href: '/recommendations/matsuyama-soroban/', title: '松山のそろばん教室おすすめ3選', description: 'そろばんを通いやすさで比較できます。' },
        Swimming: { href: '/recommendations/ehime-beginner-lessons/', title: '愛媛の初心者向け習い事ガイド', description: '初めてでも始めやすい習い事の入口へ進めます。' },
        Gymnastics: { href: '/recommendations/ehime-kids-lessons/', title: '愛媛の子ども向け習い事ガイド', description: '子ども向けの入口から広く比較できます。' },
        Cooking: { href: '/recommendations/ehime-adult-lessons/', title: '愛媛の大人向け習い事ガイド', description: '大人向けの趣味・学び直し記事をまとめています。' },
        Yoga: { href: '/recommendations/ehime-adult-lessons/', title: '愛媛の大人向け習い事ガイド', description: '大人向けの始めやすい候補をまとめています。' },
        Art: { href: '/recommendations/ehime-kids-lessons/', title: '愛媛の子ども向け習い事ガイド', description: '子ども向けの表現系習い事もまとめています。' }
    };

    pushGuide(cityGuideMap[studio.city]);
    pushGuide(categoryGuideMap[studio.category]);

    if (studio.features?.kidsClass) {
        pushGuide(ageGuide);
        pushGuide({ href: '/recommendations/ehime-trial-lessons/', title: '愛媛の体験しやすい習い事ガイド', description: '子どもの初回比較を補助的に見たいときに向いています。' });
        pushGuide({ href: '/recommendations/ehime-kids-lessons/', title: '愛媛の子ども向け習い事ガイド', description: '子ども向けの入口を補助的に広げられます。' });
    }

    if (studio.features?.adultClass) {
        pushGuide({ href: '/recommendations/ehime-adult-lessons/', title: '愛媛の大人向け習い事ガイド', description: '大人向け・学び直しの入口を補助的に見られます。' });
    }

    if (['◎', '〇'].includes(studio.features?.beginnerFriendly)) {
        pushGuide({ href: '/recommendations/ehime-beginner-lessons/', title: '愛媛の初心者向け習い事ガイド', description: '初めてでも始めやすい候補を補助的にまとめています。' });
        pushGuide({ href: '/recommendations/ehime-trial-lessons/', title: '愛媛の体験しやすい習い事ガイド', description: '無料体験や見学を補助的に見たい方向けです。' });
    }

    if (studio.pricing?.minPrice > 0) {
        pushGuide({ href: '/recommendations/ehime-price-lessons/', title: '愛媛の料金が見やすい習い事ガイド', description: '料金公開や費用感を補助的に比較したい方向けです。' });
    }

    return guides.slice(0, 1);
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
    const trialStatus = getTrialStatus(studio);
    const parkingStatus = studio.features.parking ? '駐車場あり' : '駐車場は要確認';
    const audienceSummary = getAudienceSummary(studio.features);
    const featureSummary = getCardFeatureSummary(studio);
    const commuteSummary = getCommuteSummary(studio);
    const quickStatusMarkup = getQuickStatusMarkup(studio);
    const verificationMarkup = getVerificationMarkup(studio, 'modal-verification-block');
    const locationNoteMarkup = getLocationNoteMarkup(studio, 'location-note location-note-modal');
    const curatorLabelMarkup = getCuratorLabelMarkup(studio, 'curator-label-row curator-label-row-modal');
    const localAreaCueMarkup = getLocalAreaCueMarkup(studio, 'local-area-cue local-area-cue-modal');
    const experienceReportMarkup = getExperienceReportMarkup(studio);
    const relatedGuides = getRecommendedGuidesForStudio(studio);
    const compareButtonLabel = isComparedStudio(studio.id) ? '比較メモから外す' : '比較メモに入れる';
    const compareButtonDisabled = !isComparedStudio(studio.id) && compareMemoIds.length >= COMPARE_MEMO_LIMIT ? 'disabled' : '';
    const favoriteButtonLabel = isFavoriteStudio(studio.id) ? '保存を外す' : 'あとで見返す';
    const relatedGuideMarkup = relatedGuides.length > 0 ? `
            <details class="modal-detail-toggle modal-guide-toggle">
                <summary>近い特集も見る</summary>
                <div class="modal-detail-body">
                    <div class="modal-guide-links">
                        ${relatedGuides.map(guide => `
                            <a class="modal-guide-link" href="${guide.href}">
                                <strong>${guide.title}</strong>
                                <span>${guide.description}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </details>
    ` : '';

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
                ${curatorLabelMarkup}
                ${localAreaCueMarkup}
                <div class="modal-location-badges">
                    <span class="badge modal-location-badge">${studio.city} ${studio.area}</span>
                    <span class="modal-access-text">${studio.access}</span>
                </div>
                ${locationNoteMarkup}
            </div>

            <div class="modal-quickview-head">
                <span class="results-kicker">QUICK VIEW</span>
                <strong>パッと見たい3項目</strong>
            </div>

            <div class="modal-quickview-grid">
                <div class="modal-quickview-item">
                    <span class="modal-summary-label">月謝・費用感</span>
                    <strong>${pricingSummary}</strong>
                </div>
                <div class="modal-quickview-item">
                    <span class="modal-summary-label">駐車場</span>
                    <strong>${parkingStatus}</strong>
                </div>
                <div class="modal-quickview-item">
                    <span class="modal-summary-label">体験</span>
                    <strong>${trialStatus}</strong>
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
                    <strong>${commuteSummary}</strong>
                </div>
            </div>

            <div class="modal-quick-status-wrap">
                ${quickStatusMarkup}
            </div>
            ${verificationMarkup}
            <div class="card-meta-chips modal-feature-chips">${featureSummary}</div>

            <div class="modal-action-row">
                <a href="${studio.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary modal-primary-btn">${getOfficialActionLabel(studio)}</a>
                <div class="modal-secondary-actions">
                    <button class="btn btn-outline modal-favorite-btn" type="button" data-modal-favorite-id="${studio.id}">${favoriteButtonLabel}</button>
                    <button class="btn btn-outline modal-compare-btn" type="button" data-modal-studio-id="${studio.id}" ${compareButtonDisabled}>${compareButtonLabel}</button>
                </div>
            </div>

            <details class="modal-detail-toggle">
                <summary>さらに詳しく見る</summary>
                <div class="modal-detail-body">
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
            </details>
            ${experienceReportMarkup}
            ${relatedGuideMarkup}
        </div>
    `;

    const modalCompareBtn = modalBody.querySelector('.modal-compare-btn');
    if (modalCompareBtn) {
        modalCompareBtn.addEventListener('click', () => toggleCompareMemo(studio.id));
    }

    const modalFavoriteBtn = modalBody.querySelector('.modal-favorite-btn');
    if (modalFavoriteBtn) {
        modalFavoriteBtn.addEventListener('click', () => toggleFavorite(studio.id));
    }

    overlay.classList.add('active');
}
