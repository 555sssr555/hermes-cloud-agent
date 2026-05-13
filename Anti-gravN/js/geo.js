// geo.js

// Функция для определения города и области
function setGeoData() {
  // Получаем данные с IP или API
  fetch('https://ipinfo.io/json?token=YOUR_API_KEY') // Замените на свой API-ключ
    .then(response => response.json())
    .then(data => {
      // Получаем город и регион
      const city = data.city || 'ваш місто';
      const region = data.region || 'ваша область';
      const location = city + ', ' + region;

      // Подстановка значений в шаблоны
      document.querySelectorAll('.geo-headline').forEach(el => {
        el.innerHTML = el.innerHTML.replace('{{CITY}}', city).replace('{{LOCATION}}', location).replace('{{REGION}}', region);
      });

      document.querySelectorAll('.seo-text').forEach(el => {
        el.innerHTML = el.innerHTML.replace('{{CITY}}', city).replace('{{LOCATION}}', location).replace('{{REGION}}', region);
      });

      document.querySelectorAll('title').forEach(el => {
        el.innerHTML = el.innerHTML.replace('{{CITY}}', city).replace('{{LOCATION}}', location);
      });

      document.querySelectorAll('meta[name="description"]').forEach(el => {
        el.setAttribute('content', el.getAttribute('content').replace('{{CITY}}', city).replace('{{LOCATION}}', location));
      });

      // Другие теги с подстановкой
      document.querySelectorAll('.cta-button').forEach(el => {
        el.innerHTML = el.innerHTML.replace('{{CITY}}', city).replace('{{LOCATION}}', location);
      });
    })
    .catch(error => {
      console.error('Ошибка получения данных о геолокации:', error);
      // Резервные значения, если геоданные не получены
      document.querySelectorAll('.geo-headline').forEach(el => {
        el.innerHTML = el.innerHTML.replace('{{CITY}}', 'ваше місто').replace('{{LOCATION}}', 'ваш район').replace('{{REGION}}', 'ваша область');
      });
    });
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', setGeoData);
