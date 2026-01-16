function createPropertyCard(property, cardIndex) {
    let card = document.createElement("div")
    card.classList.add("property-card")
    
    let priceTypeHTML = ""
    if (property.priceType) {
        priceTypeHTML = `<span class="price-type">${property.priceType}</span>`
    }
    
    let badgeIcon = property.badge === "S-VIP" ? '<img src="MyHome_Clone/images/svg/rocket-svgrepo-com.svg" alt="" class="badge-rocket-svg">' : ""
    
    let dotsHTML = ""
    for (let i = 0; i < property.images.length; i++) {
        if (i === 0) {
            dotsHTML += `<span class="dot active"></span>`
        } else {
            dotsHTML += `<span class="dot"></span>`
        }
    }
    
    card.innerHTML = `
        <div class="property-image" data-card-index="${cardIndex}" data-current-image="0">
            <img src="${property.images[0]}" alt="ბინა">
            <span class="s-vip-badge">${badgeIcon} ${property.badge}</span>
            <button class="heart-btn">♡</button>
            <button class="arrow-btn arrow-left">❮</button>
            <button class="arrow-btn arrow-right">❯</button>
            <div class="image-dots">
                ${dotsHTML}
            </div>
        </div>
        <div class="property-info">
            <div class="price">${property.price} ${priceTypeHTML}</div>
            <p class="description">${property.description}</p>
            <p class="location"><img src="MyHome_Clone/images/svg/location-svgrepo-com.svg" alt="" class="location-svg"> ${property.location}</p>
            <div class="property-details">
                <span>🛏 ${property.rooms}</span>
                <span>📐 ${property.floors}</span>
                <span>🪑 ${property.furniture}</span>
                <span>📏 ${property.area} მ²</span>
            </div>
            <div class="property-footer">
                <span class="district">${property.district}</span>
                <span class="time">🕐 15 იან 17:22</span>
            </div>
        </div>
    `
    
    card.dataset.images = JSON.stringify(property.images)
    
    return card
}

function loadVipProperties() {
    let container = document.getElementById("vip-properties")
    container.innerHTML = ""
    
    for (let i = 0; i < vipProperties.length; i++) {
        let card = createPropertyCard(vipProperties[i], "vip-" + i)
        container.appendChild(card)
    }
}

function loadVipProperties2() {
    let container = document.getElementById("vip-properties-2")
    container.innerHTML = ""
    
    for (let i = 0; i < vipProperties2.length; i++) {
        let card = createPropertyCard(vipProperties2[i], "vip2-" + i)
        container.appendChild(card)
    }
}

function loadNewProjects() {
    let container = document.getElementById("new-projects")
    
    for (let i = 0; i < newProjects.length; i++) {
        let card = createPropertyCard(newProjects[i], "new-" + i)
        container.appendChild(card)
    }
}

loadVipProperties()
loadVipProperties2()
loadNewProjects()
