# Kucharzyna v3.1 — GitHub Pages ROOT

PWA Kucharzyna przygotowana do publikacji jako statyczna strona na GitHub Pages.

## v3.1 — UX / nawigacja / gotowanie / zdjęcia
- Stały przycisk `←` w lewym górnym rogu na każdym ekranie.
- Inteligentny powrót: gotowanie → receptura → poprzedni ekran.
- Stały przycisk `⚙ Ustawienia` w górnym pasku, również w trybie Amator.
- Ustawienia dostępne także jako szybka akcja na ekranie Start.
- „Ukończ krok” daje natychmiastowy feedback i zapisuje postęp.
- Ostatni ukończony krok kończy tryb GOTUJĘ i pokazuje ekran „Gotowanie zakończone”.
- Można cofnąć ukończenie pojedynczego kroku.
- Można zresetować gotowanie i rozpocząć je ponownie.
- Receptury mają bardziej rozbudowane opisy oraz sekcję „Na co zwrócić uwagę”.
- Zdjęcia mają odporny fallback zamiast pustego miejsca; obrazy zewnętrzne są dodatkowo cache'owane przez Service Workera, gdy przeglądarka je pobierze.
- Brak podkatalogów — wszystkie pliki pozostają w katalogu głównym GitHub Pages.
- Brak Google Search / przekierowania do Google.
- Service Worker podbity do wersji v3.1.

## Pliki
- `index.html`
- `styles.css`
- `app.js`
- `db.js`
- `service-worker.js`
- `manifest.webmanifest`
- `icon-180.png`
- `icon-192.png`
- `icon-512.png`

## Publikacja
1. Rozpakuj ZIP.
2. Wgraj **wszystkie pliki bezpośrednio do głównego katalogu repozytorium GitHub**.
3. GitHub → Settings → Pages → Deploy from branch → wybierz branch i `/ (root)`.
4. Otwórz stronę w Safari na iPhonie.
5. Safari → Udostępnij → Dodaj do ekranu początkowego.

## Ważne przy aktualizacji
Po publikacji nowej wersji Service Worker ma nowy numer cache. Jeśli iPhone pokazuje starą wersję, zamknij PWA, otwórz stronę ponownie i zaakceptuj komunikat o nowej wersji.


## v3.1
- Stały przycisk Powrót jest niezależny od renderowanego ekranu.
- Usunięto zewnętrzne źródła zdjęć; grafiki receptur są lokalnymi plikami PWA.
- Zdjęcia działają offline po instalacji bez API Openverse.
- Uspójniono kontrast topbara i przycisku Powrót także w trybie Amator.
