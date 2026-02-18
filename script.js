// Utility: Show section and update nav active
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    document.querySelector(`nav a[onclick="showSection('${id}')"]`)?.classList.add('active');

    if (id === 'dashboard') updateDashboard();
    if (id === 'analytics') updateAnalytics();
}

// Load / Save data
let logs = JSON.parse(localStorage.getItem('wasteLogs')) || [];
let profile = JSON.parse(localStorage.getItem('restaurantProfile')) || {};

function saveLogs() {
    localStorage.setItem('wasteLogs', JSON.stringify(logs));
}

function saveProfile() {
    localStorage.setItem('restaurantProfile', JSON.stringify(profile));
}

// Update Dashboard (same logic as before)
function updateDashboard() {
    // ... paste the entire updateDashboard function from previous response here ...
}

// Update Analytics (same)
function updateAnalytics() {
    // ... paste the entire updateAnalytics function here ...
}

// Form submission handler
document.getElementById('wasteForm')?.addEventListener('submit', e => {
    // ... paste the entire submit handler here ...
});

// Settings form
document.getElementById('settingsForm')?.addEventListener('submit', e => {
    // ... paste the settings handler here ...
});

// Init
if (Object.keys(profile).length > 0) {
    document.getElementById('restName').value = profile.name || '';
    document.getElementById('sqft').value = profile.sqft || '';
    document.getElementById('email').value = profile.email || '';
}
updateDashboard();
updateAnalytics();
