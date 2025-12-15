Додана JS-функціональність:
Маніпуляція елементами DOM
Обробка подій
Клієнтська валідація форм
Робота з LocalStorage

Маніпуляція елементами DOM：
const productElements = document.querySelectorAll('.product'); - пошук всіх елементів за селектором
const newParagraph = document.createElement('p'); - створення нового елемента

 Обробка подій
 document.addEventListener('keydown', function(event) {}; - Обробка клавіатури
 button.addEventListener('click', function() {}; Обробка кліку

Клієнтська валідація форм
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; - валідація пошти 
            if (!emailRegex.test(emailField.value)) {
                markFieldAsInvalid(emailField, 'Введіть коректний email адрес (наприклад: example@domain.com)');
                isValid = false;
            }
const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/; - валідація телефону
const cleanedPhone = phoneField.value.replace(/[\s\-\(\)]/g, '');

