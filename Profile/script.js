const profileData = {
    username: "PORKCHOP MEMBER",
    playerId: "PC" + Math.floor(Math.random() * 10000),
    email: "member@porkchop.com",
    birthday: "January 1, 1990",
    gender: "Not specified",
    joinDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    stats: {
        pokemonCaught: 0,
        gymsDefended: 0,
        itemsPurchased: 0,
        totalSpent: 0
    },
    purchases: []
};


const usernameEl = document.getElementById('username');
const playerIdEl = document.getElementById('profilePlayerId');
const emailEl = document.getElementById('profileEmail');
const birthdayEl = document.getElementById('profileBirthday');
const genderEl = document.getElementById('profileGender');
const joinDateEl = document.getElementById('joinDate');
const pokemonCaughtEl = document.getElementById('pokemonCaught');
const gymsDefendedEl = document.getElementById('gymsDefended');
const itemsPurchasedEl = document.getElementById('itemsPurchased');
const totalSpentEl = document.getElementById('totalSpent');
const purchasesListEl = document.getElementById('purchasesList');
const editAvatarBtn = document.getElementById('editAvatarBtn');
const logoutBtn = document.getElementById('logoutBtn');


function initProfile() {
    
    const savedProfile = localStorage.getItem('porkchopProfile');
    if (savedProfile) {
        Object.assign(profileData, JSON.parse(savedProfile));
    }

    
    usernameEl.textContent = profileData.username;
    playerIdEl.textContent = "ID: " + profileData.playerId;
    emailEl.textContent = profileData.email;
    birthdayEl.textContent = profileData.birthday;
    genderEl.textContent = profileData.gender;
    joinDateEl.textContent = profileData.joinDate;
    pokemonCaughtEl.textContent = profileData.stats.pokemonCaught;
    gymsDefendedEl.textContent = profileData.stats.gymsDefended;
    itemsPurchasedEl.textContent = profileData.stats.itemsPurchased;
    totalSpentEl.textContent = profileData.stats.totalSpent;

    
    loadRecentPurchases();
}


function loadRecentPurchases() {
    if (profileData.purchases.length === 0) {
        purchasesListEl.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <p>No purchases yet</p>
            </div>
        `;
        return;
    }

    
    const sortedPurchases = [...profileData.purchases].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    
    const recentPurchases = sortedPurchases.slice(0, 3);
    
    
    purchasesListEl.innerHTML = '';
    
    
    recentPurchases.forEach(purchase => {
        const purchaseDate = new Date(purchase.date);
        const formattedDate = purchaseDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
        
        const purchaseItem = document.createElement('div');
        purchaseItem.className = 'purchase-item';
        
        purchaseItem.innerHTML = `
            <div class="purchase-info">
                <div class="purchase-icon">
                    <i class="fas ${getPurchaseIcon(purchase.type)}"></i>
                </div>
                <div class="purchase-details">
                    <h3>${purchase.name}</h3>
                    <p class="purchase-date">${formattedDate}</p>
                </div>
            </div>
            <div class="purchase-price">
                $${purchase.price.toFixed(2)}
            </div>
        `;
        
        purchasesListEl.appendChild(purchaseItem);
    });
}


function getPurchaseIcon(type) {
    const icons = {
        'pokecoins': 'fa-coins',
        'incubator': 'fa-egg',
        'raid-pass': 'fa-shield-alt',
        'remote-pass': 'fa-satellite-dish',
        'lure': 'fa-magnet',
        'incense': 'fa-fire',
        'storage': 'fa-box-open',
        'box': 'fa-gift',
        'other': 'fa-pokeball'
    };
    
    return icons[type] || 'fa-shopping-bag';
}


editAvatarBtn.addEventListener('click', () => {
    alert("Avatar editing feature coming soon!");
});

logoutBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to log out?")) {
        
        alert("Logged out successfully!");
    }
});


document.addEventListener('DOMContentLoaded', initProfile);