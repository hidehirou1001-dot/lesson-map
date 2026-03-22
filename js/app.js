/**
 * LessonMap Main App Logic
 * Handles animations, search functionality, and rendering of studio cards
 */

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initFAQ();
    initCompareMemo();
    initFavorites();
    initShareTools();

    // Render studios if a container exists (e.g., on index.html)
    const studiosGrid = document.getElementById('studios-grid');
    if (studiosGrid && window.studiosData) {
        initHeroStats(window.studiosData);
        initCategoryCounts(window.studiosData);
        renderStudios(window.studiosData);
        initSearch();
        initFilters();
        initModal();
        renderCompareMemo();
        renderFavorites();
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
        const quickStatusMarkup = getQuickStatusMarkup(studio);
        const verificationMarkup = getVerificationMarkup(studio);
        const categoryLabel = getCategoryLabel(studio.category);
        const descriptionSummary = getCardDescriptionSummary(studio.description);
        const cardGuideLinks = getInlineGuideLinksForStudio(studio);
        const compareButtonLabel = isComparedStudio(studio.id) ? '比較メモ済み' : '比較メモに追加';
        const compareButtonState = isComparedStudio(studio.id) ? 'active' : '';
        const compareButtonDisabled = !isComparedStudio(studio.id) && compareMemoIds.length >= COMPARE_MEMO_LIMIT ? 'disabled' : '';
        const favoriteButtonLabel = isFavoriteStudio(studio.id) ? 'お気に入り済み' : 'あとで見る';
        const favoriteButtonState = isFavoriteStudio(studio.id) ? 'active' : '';
        const cardGuideMarkup = cardGuideLinks.length > 0 ? `
        <div class="card-guide-box">
          <span class="card-guide-label">次に見る特集</span>
          <div class="card-guide-links">
            ${cardGuideLinks.map(guide => `
              <a class="card-guide-link" href="${guide.href}">
                <strong>${guide.title}</strong>
                <span>${guide.description}</span>
              </a>
            `).join('')}
          </div>
        </div>
        ` : '';

        // Add staggered delay for rendering
        const delay = index * 100;

        const card = document.createElement('article');
        card.className = 'card reveal';
        card.style.transitionDelay = `${delay}ms`;

        // Generate genre tags
        const genreTags = studio.genres.map(g => `<span class="tag">${g}</span>`).join('');
        const locationNoteMarkup = getLocationNoteMarkup(studio);

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
          ${locationNoteMarkup}
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
        ${quickStatusMarkup}
        ${verificationMarkup}
        <div class="card-reason">
          <span class="card-reason-label">おすすめ理由</span>
          <p>${getDecisionReason(studio)}</p>
        </div>
        <div class="card-meta-chips">${featureSummary}</div>
        <div class="tags">${genreTags}</div>
        <p class="card-description">${descriptionSummary}</p>
        ${cardGuideMarkup}
        <div class="card-action-row">
          <button class="btn btn-outline detail-btn card-detail-btn">詳細を見る</button>
          <button class="btn btn-text favorite-toggle-btn ${favoriteButtonState}" type="button" data-favorite-id="${studio.id}">${favoriteButtonLabel}</button>
          <button class="btn btn-text compare-toggle-btn ${compareButtonState}" type="button" data-studio-id="${studio.id}" ${compareButtonDisabled}>${compareButtonLabel}</button>
        </div>
      </div>
    `;

        grid.appendChild(card);

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

function hasTrialInfo(studio) {
    if (!studio) return false;

    const text = [
        studio.description || '',
        studio.pricing?.note || '',
        studio.access || ''
    ].join(' ');

    return /無料体験|体験|見学/.test(text);
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

const SITE_REVIEW_DATE = '2026-03-22';
const COMPARE_MEMO_KEY = 'lessonmap_compare_memo';
const COMPARE_MEMO_LIMIT = 3;
let compareMemoIds = [];
const FAVORITES_KEY = 'lessonmap_favorites';
let favoriteIds = [];

function getPricingCheckStatus(studio) {
    if (studio?.pricing?.minPrice > 0) return '料金公開を確認済み';
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
        updateCompareSharePanel([]);
        return;
    }

    panel.hidden = false;
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
          <span class="compare-diff-label">差分が出ている項目</span>
          <div class="compare-diff-chips">
            ${diffKeys.map(key => `<span class="compare-diff-chip">${diffLabels[key] || key}</span>`).join('')}
          </div>
        `;
    } else {
        diffSummary.hidden = true;
        diffSummary.innerHTML = '';
    }
    updateCompareSharePanel(items);
    grid.innerHTML = items.map(studio => {
        const statuses = getQuickStatusItems(studio);
        const verificationMarkup = getVerificationMarkup(studio, 'compare-memo-verification');
        const summaryRows = [
            { key: 'audience', label: '対象', value: getAudienceSummary(studio.features) },
            { key: 'pricing', label: '料金', value: formatPricingSummary(studio.pricing) },
            { key: 'commute', label: '通学', value: getCommuteSummary(studio) }
        ];
        return `
        <article class="compare-memo-item">
          <div class="compare-memo-item-head">
            <div>
              <span class="compare-memo-city">${studio.city} ${studio.area}</span>
              <h3 class="compare-memo-title">${studio.name}</h3>
            </div>
            <button class="compare-memo-remove" type="button" data-remove-compare-id="${studio.id}" aria-label="${studio.name}を比較メモから外す">×</button>
          </div>
          <div class="compare-memo-summary">
            ${summaryRows.map(row => `
              <span class="compare-memo-summary-row ${diffMap[row.key] ? 'is-diff' : ''}">
                <strong>${row.label}:</strong> ${row.value}
              </span>
            `).join('')}
          </div>
          <div class="compare-memo-statuses">
            ${statuses.map(item => `<span class="compare-memo-status ${diffMap[`status_${item.key}`] ? 'is-diff' : ''}" data-tone="${item.tone}"><strong>${item.label}</strong>${item.value}</span>`).join('')}
          </div>
          ${verificationMarkup}
          <div class="compare-memo-actions">
            <button class="btn btn-outline compare-memo-detail-btn" type="button" data-open-compare-id="${studio.id}">詳細を見る</button>
            <a class="compare-memo-link" href="${studio.link}" target="_blank" rel="noopener noreferrer">公式サイトへ</a>
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
        return;
    }

    panel.hidden = false;
    grid.innerHTML = items.map(studio => `
      <article class="favorite-item">
        <div class="favorite-item-head">
          <div>
            <span class="favorite-city">${studio.city} ${studio.area}</span>
            <h3 class="favorite-title">${studio.name}</h3>
          </div>
          <button class="favorite-remove" type="button" data-remove-favorite-id="${studio.id}" aria-label="${studio.name}をお気に入りから外す">×</button>
        </div>
        <p class="favorite-copy">${getCardDescriptionSummary(studio.description)}</p>
        <div class="favorite-meta">
          <span><strong>対象:</strong> ${getAudienceSummary(studio.features)}</span>
          <span><strong>料金:</strong> ${formatPricingSummary(studio.pricing)}</span>
        </div>
        <div class="favorite-actions">
          <button class="btn btn-outline favorite-detail-btn" type="button" data-open-favorite-id="${studio.id}">詳細を見る</button>
          <button class="btn btn-text favorite-compare-btn" type="button" data-favorite-compare-id="${studio.id}">${isComparedStudio(studio.id) ? '比較メモ済み' : '比較メモへ'}</button>
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
        Dance: { href: '/recommendations/matsuyama-dance/', title: 'ダンス特集を見る', description: 'ダンス全体の比較軸を先に見たい方向けです。' },
        Piano: { href: '/recommendations/matsuyama-piano/', title: 'ピアノ特集を見る', description: '子ども・大人の違いを見比べやすいです。' },
        Programming: { href: '/recommendations/matsuyama-programming/', title: 'プログラミング特集を見る', description: '教材や対象年齢の違いを整理できます。' },
        English: { href: '/recommendations/matsuyama-english/', title: '英会話特集を見る', description: '子ども向けと大人向けを横断で見られます。' },
        Fitness: { href: '/recommendations/matsuyama-fitness/', title: 'ジム特集を見る', description: '初心者向けの比較をまとめています。' },
        CramSchool: { href: '/recommendations/matsuyama-cram-school/', title: '学習塾特集を見る', description: '通いやすさと学年感で比較できます。' },
        Calligraphy: { href: '/recommendations/matsuyama-calligraphy/', title: '書道特集を見る', description: '子ども・大人の両方を見比べられます。' },
        Soroban: { href: '/recommendations/matsuyama-soroban/', title: 'そろばん特集を見る', description: '通いやすさを含めて比較できます。' }
    };

    pushGuide(cityGuideMap[studio.city]);

    if (studio.features?.kidsClass) {
        pushGuide({ href: '/recommendations/ehime-age-lessons/', title: '年齢別ガイドを見る', description: '今の年齢に近い入口から探せます。' });
    }

    if (studio.features?.kidsClass && !studio.features?.adultClass) {
        pushGuide({ href: '/recommendations/ehime-kids-lessons/', title: '子ども向けガイドを見る', description: '幼児・小学生向けの入口をまとめています。' });
    }

    if (studio.features?.adultClass && !studio.features?.kidsClass) {
        pushGuide({ href: '/recommendations/ehime-adult-lessons/', title: '大人向けガイドを見る', description: '学び直しや趣味の入口へ進めます。' });
    }

    if (['◎', '〇'].includes(studio.features?.beginnerFriendly)) {
        pushGuide({ href: '/recommendations/ehime-beginner-lessons/', title: '初心者向けガイドを見る', description: '初めてでも始めやすい候補をまとめています。' });
    }

    pushGuide(categoryGuideMap[studio.category]);

    return guides.slice(0, 2);
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
    const quickFilterBtns = document.querySelectorAll('[data-quick-filter]');
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

    quickFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterKey = btn.getAttribute('data-quick-filter');
            const exists = currentFilterState.quickFilters.includes(filterKey);

            if (exists) {
                currentFilterState.quickFilters = currentFilterState.quickFilters.filter(key => key !== filterKey);
            } else {
                currentFilterState.quickFilters = [...currentFilterState.quickFilters, filterKey];
            }

            syncQuickFilterButtons();
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
                quickFilters: [],
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

            syncQuickFilterButtons();
            applyFilters();
        });
    }

    syncQuickFilterButtons();
}

function syncQuickFilterButtons() {
    document.querySelectorAll('[data-quick-filter]').forEach(button => {
        const filterKey = button.getAttribute('data-quick-filter');
        button.classList.toggle('active', currentFilterState.quickFilters.includes(filterKey));
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
        summary.textContent = `${filtered.length}件の教室を表示中。${currentFilterState.city === 'all' ? '愛媛県全域' : currentFilterState.city}の候補を比較できます。`;
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
    }

    if (chipContainer && filterBar) {
        chipContainer.innerHTML = activeChips.map(chip => `<span class="active-filter-chip">${chip}</span>`).join('');
        filterBar.hidden = activeChips.length === 0;
    }

    if (guidePanel && guideTitle && guideLinks) {
        const guides = getRecommendedGuides();
        if (guides.length > 0) {
            guideTitle.textContent = currentFilterState.city !== 'all'
                ? `${currentFilterState.city}で次に見ると比較しやすい特集`
                : '次に見ると比較しやすい特集';
            guideLinks.innerHTML = guides.map(guide => `
                <a class="results-guide-link" href="${guide.href}">
                    <strong>${guide.title}</strong>
                    <span>${guide.description}</span>
                </a>
            `).join('');
            guidePanel.hidden = false;
        } else {
            guideLinks.innerHTML = '';
            guidePanel.hidden = true;
        }
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.style.display = activeChips.length > 1 || currentFilterState.searchQuery || currentFilterState.quickFilters.length ? 'inline-flex' : 'none';
    }
}

function getRecommendedGuides() {
    const cityGuideMap = {
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

    return guides.slice(0, 3);
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
        pushGuide({ href: '/recommendations/ehime-trial-lessons/', title: '愛媛の体験しやすい習い事ガイド', description: '子どもの初回比較に向く記事をまとめています。' });
        pushGuide({ href: '/recommendations/ehime-kids-lessons/', title: '愛媛の子ども向け習い事ガイド', description: '子ども向けの入口から比較を広げられます。' });
    }

    if (studio.features?.adultClass) {
        pushGuide({ href: '/recommendations/ehime-adult-lessons/', title: '愛媛の大人向け習い事ガイド', description: '大人向け・学び直しの入口へ進めます。' });
    }

    if (['◎', '〇'].includes(studio.features?.beginnerFriendly)) {
        pushGuide({ href: '/recommendations/ehime-beginner-lessons/', title: '愛媛の初心者向け習い事ガイド', description: '初めてでも始めやすい候補をまとめています。' });
        pushGuide({ href: '/recommendations/ehime-trial-lessons/', title: '愛媛の体験しやすい習い事ガイド', description: '無料体験や見学から始めたい方向けです。' });
    }

    if (studio.pricing?.minPrice > 0) {
        pushGuide({ href: '/recommendations/ehime-price-lessons/', title: '愛媛の料金が見やすい習い事ガイド', description: '料金公開や費用感から比較したい方向けです。' });
    }

    return guides.slice(0, 3);
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
    const commuteSummary = getCommuteSummary(studio);
    const quickStatusMarkup = getQuickStatusMarkup(studio);
    const verificationMarkup = getVerificationMarkup(studio, 'modal-verification-block');
    const locationNoteMarkup = getLocationNoteMarkup(studio, 'location-note location-note-modal');
    const relatedGuides = getRecommendedGuidesForStudio(studio);
    const compareButtonLabel = isComparedStudio(studio.id) ? '比較メモから外す' : '比較メモに追加';
    const compareButtonDisabled = !isComparedStudio(studio.id) && compareMemoIds.length >= COMPARE_MEMO_LIMIT ? 'disabled' : '';
    const favoriteButtonLabel = isFavoriteStudio(studio.id) ? 'お気に入りから外す' : 'あとで見る';
    const relatedGuideMarkup = relatedGuides.length > 0 ? `
            <section class="modal-guide-section">
                <div class="modal-guide-head">
                    <span class="results-kicker">RELATED GUIDE</span>
                    <strong>この教室に近い特集</strong>
                </div>
                <div class="modal-guide-links">
                    ${relatedGuides.map(guide => `
                        <a class="modal-guide-link" href="${guide.href}">
                            <strong>${guide.title}</strong>
                            <span>${guide.description}</span>
                        </a>
                    `).join('')}
                </div>
            </section>
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
                <div class="modal-location-badges">
                    <span class="badge modal-location-badge">${studio.city} ${studio.area}</span>
                    <span class="modal-access-text">${studio.access}</span>
                </div>
                ${locationNoteMarkup}
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
                <a href="${studio.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary modal-primary-btn">公式サイト・SNSを見る</a>
                <button class="btn btn-outline modal-favorite-btn" type="button" data-modal-favorite-id="${studio.id}">${favoriteButtonLabel}</button>
                <button class="btn btn-outline modal-compare-btn" type="button" data-modal-studio-id="${studio.id}" ${compareButtonDisabled}>${compareButtonLabel}</button>
            </div>

            <p class="modal-desc">${studio.description}</p>
            ${relatedGuideMarkup}
            
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
