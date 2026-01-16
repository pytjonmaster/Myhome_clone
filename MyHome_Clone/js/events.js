function setupHeartButtons() {
    let heartBtns = document.querySelectorAll(".heart-btn")
    
    for (let i = 0; i < heartBtns.length; i++) {
        heartBtns[i].addEventListener("click", function(e) {
            e.stopPropagation()
            
            if (this.classList.contains("active")) {
                this.classList.remove("active")
                this.innerText = "♡"
            } else {
                this.classList.add("active")
                this.innerText = "♥"
            }
        })
    }
}

function setupImageSliders() {
    let arrowBtns = document.querySelectorAll(".arrow-btn")
    
    for (let i = 0; i < arrowBtns.length; i++) {
        arrowBtns[i].addEventListener("click", function(e) {
            e.stopPropagation()
            
            let imageContainer = this.parentElement
            let card = imageContainer.parentElement
            let images = JSON.parse(card.dataset.images)
            let currentIndex = parseInt(imageContainer.dataset.currentImage)
            let newIndex
            
            if (this.classList.contains("arrow-left")) {
                newIndex = currentIndex - 1
                if (newIndex < 0) {
                    newIndex = images.length - 1
                }
            } else {
                newIndex = currentIndex + 1
                if (newIndex >= images.length) {
                    newIndex = 0
                }
            }
            
            let img = imageContainer.querySelector("img")
            img.src = images[newIndex]
            imageContainer.dataset.currentImage = newIndex
            updateDots(imageContainer, newIndex)
        })
    }
    
    let dots = document.querySelectorAll(".dot")
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function(e) {
            e.stopPropagation()
            
            let dotsContainer = this.parentElement
            let imageContainer = dotsContainer.parentElement
            let card = imageContainer.parentElement
            let images = JSON.parse(card.dataset.images)
            
            let allDots = dotsContainer.querySelectorAll(".dot")
            let dotIndex = 0
            for (let j = 0; j < allDots.length; j++) {
                if (allDots[j] === this) {
                    dotIndex = j
                    break
                }
            }
            
            let img = imageContainer.querySelector("img")
            img.src = images[dotIndex]
            imageContainer.dataset.currentImage = dotIndex
            updateDots(imageContainer, dotIndex)
        })
    }
}

function updateDots(imageContainer, activeIndex) {
    let dots = imageContainer.querySelectorAll(".dot")
    
    for (let i = 0; i < dots.length; i++) {
        if (i === activeIndex) {
            dots[i].classList.add("active")
        } else {
            dots[i].classList.remove("active")
        }
    }
}

function setupTabs() {
    let tabs = document.querySelectorAll(".tab")
    
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function() {
            let page = this.dataset.page
            
            if (page && page !== "") {
                window.location.href = page
            } else {
                for (let j = 0; j < tabs.length; j++) {
                    tabs[j].classList.remove("active")
                }
                this.classList.add("active")
            }
        })
    }
}

function setupSearch() {
    let searchBtn = document.querySelector(".btn-search")
    
    searchBtn.addEventListener("click", function() {
        let searchInput = document.querySelector(".search-input input")
        let searchValue = searchInput.value
        
        if (searchValue) {
            alert("ძებნა: " + searchValue)
        } else {
            alert("გთხოვთ შეიყვანოთ საძებნი სიტყვა")
        }
    })
}

function setupQuickCategories() {
    let quickBtns = document.querySelectorAll(".quick-btn")
    
    for (let i = 0; i < quickBtns.length; i++) {
        quickBtns[i].addEventListener("click", function() {
            let categoryName = this.querySelector("span:last-child").innerText
            alert("არჩეული კატეგორია: " + categoryName)
        })
    }
}

function setupHeaderButtons() {
    let addBtn = document.querySelector(".btn-add")
    addBtn.addEventListener("click", function() {
        alert("განცხადების დამატების გვერდი მალე!")
    })
    
    let loginBtn = document.querySelector(".btn-login")
    loginBtn.addEventListener("click", function() {
        alert("შესვლის გვერდი მალე!")
    })
}

function setupFilterPanel() {
    let filterBtn = document.getElementById("filter-btn")
    let filterPanel = document.getElementById("filter-panel")
    let filterClose = document.getElementById("filter-close")
    let filterReset = document.getElementById("filter-reset")
    let filterApply = document.getElementById("filter-apply")
    
    filterBtn.addEventListener("click", function() {
        filterPanel.classList.toggle("active")
    })
    
    filterClose.addEventListener("click", function() {
        filterPanel.classList.remove("active")
    })
    
    filterReset.addEventListener("click", function() {
        let checkboxes = filterPanel.querySelectorAll("input[type='checkbox']")
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false
        }
    })
    
    filterApply.addEventListener("click", function() {
        let selectedFilters = []
        let checkboxes = filterPanel.querySelectorAll("input[type='checkbox']:checked")
        
        for (let i = 0; i < checkboxes.length; i++) {
            selectedFilters.push(checkboxes[i].value)
        }
        
        if (selectedFilters.length > 0) {
            alert("არჩეული ფილტრები: " + selectedFilters.join(", "))
        } else {
            alert("ფილტრები არ არის არჩეული")
        }
        
        filterPanel.classList.remove("active")
    })
}

function setupSectionArrows() {
    let sectionArrows = document.querySelectorAll(".section-arrow")
    
    for (let i = 0; i < sectionArrows.length; i++) {
        sectionArrows[i].addEventListener("click", function() {
            let sectionId = this.dataset.section
            let grid = document.getElementById(sectionId)
            let cards = grid.querySelectorAll(".property-card")
            let cardWidth = 300
            
            if (this.classList.contains("section-arrow-left")) {
                grid.scrollLeft -= cardWidth
            } else {
                grid.scrollLeft += cardWidth
            }
        })
    }
}

function initializeAllEvents() {
    setupHeartButtons()
    setupImageSliders()
    setupTabs()
    setupSearch()
    setupQuickCategories()
    setupHeaderButtons()
    setupFilterPanel()
    setupSectionArrows()
}

initializeAllEvents()
