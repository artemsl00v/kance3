
    function initializePage() {
        console.log('Сайт Kance завантажений. DOM готовий для маніпуляцій.');

        addCurrentDateToFooter();
        
        createSimpleAccordion();
        
        manipulateProductElements();
        
        addDynamicContentToMain();

        createSimpleThemeToggle();
        
        setupNavHoverEffects();
        
        setupKeyboardControls();

        setupFormValidation();
    }

    function addCurrentDateToFooter() {
        const footer = document.querySelector('footer .copyright');
        
        if (footer) {
            const dateElement = document.createElement('div');
            
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
            };
            
            const formattedDate = now.toLocaleDateString('uk-UA', options);
            dateElement.innerHTML = `📅 ${formattedDate}`;
            dateElement.style.marginTop = '10px';
            dateElement.style.fontSize = '0.9em';
            dateElement.style.color = '#dd4abdff';
            dateElement.style.textAlign = 'center';
            dateElement.style.fontFamily = 'Arial, sans-serif';
            
            footer.appendChild(dateElement);
        }
    }

    function createSimpleAccordion() {
        const main = document.querySelector('main');
        if (!main) return;
        
        const button = document.createElement('button');
        button.textContent = 'Показати додаткову інформацію';
        button.id = 'showMoreBtn';

        button.style.cssText = `
            padding: 10px 20px;
            background-color: #025205ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin: 20px 0;
            display: block;
        `;
        
        const hiddenContent = document.createElement('div');
        hiddenContent.id = 'hiddenContent';
        hiddenContent.innerHTML = `
            <h3>Важлива інформація:</h3>
            <p>1. Безкоштовна доставка від 1000 грн</p>
            <p>2. Гарантія 1 рік на всі товари</p>
            <p>3. Повернення протягом 14 днів</p>
            <p>4. Телефон підтримки: +38 (043) 141-41-13-4</p>
        `;
        
        hiddenContent.style.display = 'none';
        hiddenContent.style.padding = '15px';
        hiddenContent.style.backgroundColor = '#688bacff';
        hiddenContent.style.borderRadius = '5px';
        hiddenContent.style.marginTop = '10px';
        hiddenContent.style.border = '1px solid #4e00ccff';
        
        button.addEventListener('click', function() {
            if (hiddenContent.style.display === 'none') {
                hiddenContent.style.display = 'block';
                button.textContent = 'Приховати інформацію';
                button.style.backgroundColor = '#f44336';
            } else {
                hiddenContent.style.display = 'none';
                button.textContent = 'Показати додаткову інформацію';
                button.style.backgroundColor = '#16ac1bff';
            }
        });
        
        main.appendChild(button);
        main.appendChild(hiddenContent);
    }

    function manipulateProductElements() {
        const productElements = document.querySelectorAll('.product');
        
        if (productElements.length > 0) {
            console.log(`Знайдено ${productElements.length} елементів з класом .product`);
            
            productElements.forEach(product => {
                product.style.backgroundColor = '#fff9c4';
                product.style.color = '#1a237e';
                product.style.border = '2px solid #ffd600';
                product.style.padding = '10px';
                product.style.margin = '5px 0';
                product.style.borderRadius = '5px';
                product.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            });
        } else {
            console.log('Елементи з класом .product не знайдені на цій сторінці');
        }
    }

    function addDynamicContentToMain() {
        const mainContainer = document.querySelector('main');
        
        if (!mainContainer) return;
        
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Цей текст було додано динамічно за допомогою JavaScript методів createElement() та append().';
        
        newParagraph.style.cssText = `
            padding: 20px;
            background-color: #e3f2fd;
            color: #1565c0;
            border-radius: 8px;
            margin: 20px 0;
            font-weight: bold;
            border-left: 5px solid #2196f3;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        `;
        
        mainContainer.appendChild(newParagraph);
    }
    function createSimpleThemeToggle() {
        const themeBtn = document.createElement('button');
        themeBtn.textContent = '☀️ Світла тема';
        
        themeBtn.style.position = 'fixed';
        themeBtn.style.top = '20px';
        themeBtn.style.right = '120px';
        themeBtn.style.padding = '12px 24px';
        themeBtn.style.backgroundColor = '#c99b04ff';
        themeBtn.style.color = 'white';
        themeBtn.style.border = 'none';
        themeBtn.style.borderRadius = '8px';
        themeBtn.style.cursor = 'pointer';
        themeBtn.style.zIndex = '1000';
        themeBtn.style.fontWeight = 'bold';
        themeBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        
        let darkMode = localStorage.getItem('theme') === 'dark';
        
        themeBtn.addEventListener('click', function() {
            darkMode = !darkMode;
            
            if (darkMode) {
                document.body.style.backgroundColor = '#ffffffff';
                document.body.style.color = '#000000ff';
                document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, li, td, th').forEach(el => {
                    el.style.color = '#000000ff';
                });
                
                document.querySelectorAll('.container, main, section, article, div').forEach(el => {
                    if (window.getComputedStyle(el).backgroundColor !== 'rgba(0, 0, 0, 0)') {
                        el.style.backgroundColor = '#1e1e1e';
                    }
                });
                
                themeBtn.textContent = '🌙 Темна тема';
                themeBtn.style.backgroundColor = '#000000ff';
                
                console.log('Темна тема увімкнена');
                localStorage.setItem('theme', 'dark')
            } else {
                document.body.style.backgroundColor = '';
                document.body.style.color = '';
                
                document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, li, td, th').forEach(el => {
                    el.style.color = '';
                });
                
                document.querySelectorAll('.container, main, section, article, div').forEach(el => {
                    el.style.backgroundColor = '';
                });
                
                themeBtn.textContent = '☀️ Світла тема';
                themeBtn.style.backgroundColor = '#c99b04ff';
                
                console.log('Світла тема увімкнена');
                localStorage.setItem('theme', 'light');
            }
        });

      themeBtn.addEventListener('click', function() {
});

document.body.appendChild(themeBtn);

if (darkMode) {
    document.body.style.backgroundColor = '#ffffffff';
    document.body.style.color = '#000000ff';
    themeBtn.textContent = '🌙 Темна тема';
    themeBtn.style.backgroundColor = '#000000';
}
    }

    function setupNavHoverEffects() {
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            link.classList.add('nav-link-js');
        
            link.addEventListener('mouseenter', function() {
                this.classList.add('nav-hover');
                
                this.style.backgroundColor = '#2E8B57';
                this.style.color = 'white';
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                this.style.transition = 'all 0.3s ease';
                this.style.padding = '10px 15px';
                this.style.borderRadius = '5px';
            });
            
            link.addEventListener('mouseleave', function() {
                this.classList.remove('nav-hover');
                
                this.style.backgroundColor = '';
                this.style.color = '';
                this.style.transform = '';
                this.style.boxShadow = '';
                this.style.padding = '';
                this.style.borderRadius = '';
            });
        });
        
        console.log(`Додано ефекти наведення для ${navLinks.length} посилань навігації`);
    }

    function setupKeyboardControls() {
        let currentFontSize = 16; 
        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowUp') {
                event.preventDefault(); 
                currentFontSize = Math.min(currentFontSize + 2, 30); 
                changeFontSize(currentFontSize);
                showKeyboardNotification('Розмір шрифту збільшено: ' + currentFontSize + 'px');
            }
            
            if (event.key === 'ArrowDown') {
                event.preventDefault(); 
                currentFontSize = Math.max(currentFontSize - 2, 12); 
                changeFontSize(currentFontSize);
                showKeyboardNotification('Розмір шрифту зменшено: ' + currentFontSize + 'px');
            }
            
            if (event.key === 'Escape') {
                currentFontSize = 16;
                changeFontSize(currentFontSize);
                showKeyboardNotification('Розмір шрифту скинуто до стандартного');
            }
        });
        
        console.log('Клавіатурні контроли активовані (ArrowUp/ArrowDown для зміни розміру шрифту)');
    }

    function changeFontSize(size) {
        document.body.style.fontSize = size + 'px';
        
        localStorage.setItem('fontSize', size);
    }

    function showKeyboardNotification(message) {
        const oldNotification = document.getElementById('keyboard-notification');
        if (oldNotification) {
            oldNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.id = 'keyboard-notification';
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            background-color: #2E8B57;
            color: white;
            border-radius: 6px;
            z-index: 10000;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            font-size: 14px;
            animation: fadeInOut 3s ease;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(20px); }
                10% { opacity: 1; transform: translateY(0); }
                90% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(20px); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        

        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    function setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
                clearFormErrors(form);
                
                const isValid = validateForm(form);
                
                if (isValid) {
                    handleFormSuccess(form);
                } else {
                    showFormErrors(form);
                }
            });
            
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
                
                input.addEventListener('input', function() {
                    clearFieldError(this);
                });
            });
        });
    }

    function validateForm(form) {
        let isValid = true;
        
        const nameField = form.querySelector('input[name*="name"], input[type="text"]:first-of-type');
        const emailField = form.querySelector('input[type="email"]');
        const messageField = form.querySelector('textarea');
        const phoneField = form.querySelector('input[type="tel"]');
        
        if (nameField) {
            if (nameField.value.trim().length < 3) {
                markFieldAsInvalid(nameField, 'Ім\'я повинно містити мінімум 3 символи');
                isValid = false;
            }
        }
        
        if (emailField) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value)) {
                markFieldAsInvalid(emailField, 'Введіть коректний email адрес (наприклад: example@domain.com)');
                isValid = false;
            }
        }
        
        if (messageField) {
            if (messageField.value.trim().length < 10) {
                markFieldAsInvalid(messageField, 'Повідомлення повинно містити мінімум 10 символів');
                isValid = false;
            }
        }
        
        if (phoneField && phoneField.value.trim() !== '') {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
            if (!phoneRegex.test(phoneField.value)) {
                markFieldAsInvalid(phoneField, 'Введіть коректний номер телефону');
                isValid = false;
            }
        }
        
        return isValid;
    }

    function validateField(field) {
        clearFieldError(field);
        
        let isValid = true;
        let errorMessage = '';
        
        if (field.type === 'text' || field.name.includes('name')) {
            if (field.value.trim().length < 3) {
                errorMessage = 'Мінімум 3 символи';
                isValid = false;
            }
        }
        
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                errorMessage = 'Некоректний email';
                isValid = false;
            }
        }
        
        if (field.type === 'tel' && field.value.trim() !== '') {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(field.value.replace(/[\s\-\(\)]/g, ''))) {
                errorMessage = 'Некоректний телефон';
                isValid = false;
            }
        }
        
        if (field.tagName === 'TEXTAREA') {
            if (field.value.trim().length < 10) {
                errorMessage = 'Мінімум 10 символів';
                isValid = false;
            }
        }
        
        if (!isValid) {
            markFieldAsInvalid(field, errorMessage);
        }
        
        return isValid;
    }

    function markFieldAsInvalid(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ff4757;
            font-size: 0.85em;
            margin-top: 5px;
            padding-left: 5px;
        `;
        
        field.parentNode.appendChild(errorElement);
    }

    function clearFieldError(field) {
        field.classList.remove('error');
        
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    function clearFormErrors(form) {
        const errorFields = form.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
        
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(message => {
            message.remove();
        });
    }

    function showFormErrors(form) {
        const firstErrorField = form.querySelector('.error');
        if (firstErrorField) {
            firstErrorField.focus();
        }
        
        showNotification('Будь ласка, виправте помилки у формі', 'error');
    }

    function handleFormSuccess(form) {
        const formData = {};
        const formElements = form.elements;
        
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.name && element.type !== 'submit' && element.type !== 'reset') {
                formData[element.name] = element.value;
            }
        }
        
        console.log('Дані форми:', formData);
        
        showFormData(formData);
        
        form.reset();

        showNotification('✅ Форма успішно надіслана!', 'success');
        
        clearFormErrors(form);
    }

    function showFormData(formData) {
        let dataContainer = document.querySelector('.form-data-container');
        
        if (!dataContainer) {
            dataContainer = document.createElement('div');
            dataContainer.className = 'form-data-container';
            dataContainer.style.cssText = `
                margin: 20px 0;
                padding: 20px;
                border-radius: 10px;
                border-left: 5px solid rgba(0, 0, 0, 1);
            `;
            
            const form = document.querySelector('form');
            if (form) {
                form.parentNode.insertBefore(dataContainer, form.nextSibling);
            }
        }
        

        let html = '<h3>📋 Введені дані:</h3>';
        html += '<ul style="list-style: none; padding: 0;">';
        
        for (const [key, value] of Object.entries(formData)) {
            if (value.trim() !== '') {
                const displayName = getFieldDisplayName(key);
                html += `<li><strong>${displayName}:</strong> ${value}</li>`;
            }
        }
        
        html += '</ul>';
        dataContainer.innerHTML = html;
    }

    function getFieldDisplayName(fieldName) {
        const names = {
            'name': 'Ім\'я',
            'order-name': 'Ім\'я та прізвище',
            'email': 'Email',
            'order-email': 'Email',
            'phone': 'Телефон',
            'order-phone': 'Телефон',
            'message': 'Повідомлення',
            'city': 'Місто',
            'order-city': 'Місто',
            'address': 'Адреса',
            'order-address': 'Адреса'
        };
        
        return names[fieldName] || fieldName;
    }


    document.addEventListener('DOMContentLoaded', initializePage);