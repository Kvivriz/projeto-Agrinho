document.addEventListener('DOMContentLoaded', function() {
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const backBtn = document.getElementById('backBtn');

    if (moreInfoBtn) {
        moreInfoBtn.addEventListener('click', function() {
            window.location.href = 'mais_sobre_solos.html';
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
