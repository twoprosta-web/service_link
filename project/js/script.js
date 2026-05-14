document.addEventListener('DOMContentLoaded', () => {
    // --- ЭЛЕМЕНТЫ ---
    const statsModal = document.getElementById('statsModal');
    const authModal = document.getElementById('authModal');
    const loginModal = document.getElementById('loginModal');
    const regModal = document.getElementById('regModal');
    const dropBtn = document.getElementById('dropBtn');
    const dropdown = document.getElementById('myDropdown');

    // --- ВЫПАДАЮЩЕЕ МЕНЮ ---
    if (dropBtn && dropdown) {
        dropBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });
        window.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });
    }

    // --- ОТКРЫТИЕ МОДАЛКИ АВТОРИЗАЦИИ (Вход/Регистрация) ---
    function openAuthModal(modalToShow) {
        if (!authModal) return;
        
        if (loginModal) loginModal.classList.add('hidden');
        if (regModal) regModal.classList.add('hidden');
        
        if (modalToShow === 'login' && loginModal) loginModal.classList.remove('hidden');
        if (modalToShow === 'reg' && regModal) regModal.classList.remove('hidden');
        
        authModal.classList.remove('hidden');
        if (dropdown) dropdown.classList.remove('show');
    }

    // --- ОТКРЫТИЕ МОДАЛКИ СТАТИСТИКИ ---
    function openStatsModal() {
        if (statsModal) statsModal.classList.remove('hidden');
        if (dropdown) dropdown.classList.remove('show');
    }

    // --- КНОПКИ ИЗ МЕНЮ ---
    const openLoginBtn = document.getElementById('openLoginBtn');
    const openRegBtn = document.getElementById('openRegBtn');
    const footerStats = document.getElementById('footerStats');
    
    if (openLoginBtn) {
        openLoginBtn.onclick = (e) => { e.preventDefault(); openAuthModal('login'); };
    }
    if (openRegBtn) {
        openRegBtn.onclick = (e) => { e.preventDefault(); openAuthModal('reg'); };
    }
    if (footerStats) {
        footerStats.onclick = (e) => { e.preventDefault(); openStatsModal(); };
    }

    // --- ПЕРЕКЛЮЧЕНИЕ МЕЖДУ ФОРМАМИ ---
    const switchToRegBtn = document.getElementById('switchToRegBtn');
    const switchToLoginBtn = document.getElementById('switchToLoginBtn');
    
    if (switchToRegBtn) {
        switchToRegBtn.onclick = (e) => { e.preventDefault(); openAuthModal('reg'); };
    }
    if (switchToLoginBtn) {
        switchToLoginBtn.onclick = (e) => { e.preventDefault(); openAuthModal('login'); };
    }

    // --- ЗАКРЫТИЕ МОДАЛОК ---
    // Закрытие модалки статистики
    if (statsModal) {
        statsModal.addEventListener('click', (e) => {
            if (e.target === statsModal || e.target.classList.contains('close-stats')) {
                statsModal.classList.add('hidden');
            }
        });
    }
    
    // Закрытие модалки авторизации
    if (authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal || e.target.classList.contains('close-auth')) {
                authModal.classList.add('hidden');
            }
        });
    }

    // --- АККОРДЕОН ---
    const accHeaders = document.querySelectorAll('.acc-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            document.querySelectorAll('.acc-item').forEach(item => {
                if (item !== currentItem) item.classList.remove('acc-active');
            });
            currentItem.classList.toggle('acc-active');
        });
    });
});