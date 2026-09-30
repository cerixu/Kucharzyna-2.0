# Kucharzyna

Prywatna, offline-first PWA dla kucharza. Projekt nie wymaga backendu ani płatnych API.

## Uruchomienie
Możesz otworzyć projekt przez prosty serwer statyczny albo GitHub Pages. Service Worker działa w bezpiecznym kontekście HTTPS (GitHub Pages spełnia ten warunek).

## GitHub Pages
1. Utwórz publiczne repozytorium, np. `kucharzyna`.
2. Wgraj zawartość tego katalogu do głównej gałęzi.
3. GitHub → Settings → Pages → Deploy from a branch → wybierz `main` i `/ (root)`.
4. Po publikacji otwórz adres Pages na iPhonie w Safari.

## Instalacja na iPhone
Safari → otwórz adres GitHub Pages → Udostępnij → Dodaj do ekranu początkowego → Dodaj.
Po uruchomieniu ikony Kucharzyna działa jako standalone PWA.

## Dane
Receptury, składniki, kategorie, zakupy, ustawienia, historia i stan „Gotuję” są przechowywane lokalnie w IndexedDB przeglądarki. Zdjęcia są kompresowane i również przechowywane lokalnie. Nic nie jest wysyłane do serwera.

## Backup
Ustawienia → Eksportuj JSON. Plik zawiera dane aplikacji i stan pracy. Import backupu umożliwia zastąpienie danych albo połączenie ich z istniejącymi.

## Offline i aktualizacje
Service Worker przechowuje zasoby aplikacji i usuwa stary cache po aktywacji nowej wersji. Przy wykryciu nowego service workera aplikacja pokazuje komunikat o aktualizacji.

## Ważne
GitHub Pages hostuje wyłącznie pliki aplikacji. Dane użytkownika pozostają na urządzeniu i nie trafiają do GitHuba.

## Wersja 1.1
Dopracowany iPhone UI, ekran receptury, tryb GOTUJĘ, większe akcje dotykowe i lepsza hierarchia informacji.


## v1.2
- poprawiona nawigacja z trybu GOTUJĘ do receptury;
- możliwość zmiany kolejności sekcji receptury ↑/↓;
- ilość pozycji na liście zakupów można edytować bezpośrednio;
- zachowanie ID składników/kroków przy edycji, co stabilizuje postęp GOTUJĘ;
- przygotowane pole ceny jednostkowej składnika w edytorze;
- bezpieczniejsze scalanie backupów na podstawie `updatedAt`;
- drobne poprawki iOS/touch UX.

- **v1.2.1 hotfix:** `db.js` jest jawnie ładowany przed `app.js`, dzięki czemu IndexedDB i cała interakcja aplikacji uruchamiają się poprawnie na GitHub Pages.


## v1.3
- Kalkulator pizzy ma tryb **Mam mąkę** oraz **Kulki / masa**.
- Można zapisywać własne profile kalkulatora pizzy w IndexedDB.
- Dodano osobną zakładkę **Tradycyjne** z lokalną bazą klasycznych dań różnych kuchni świata i wyszukiwaniem w aplikacji.
- Usunięto przejście do Google.
- Tryb **Amator** ma odrębny, kolorowy interfejs konsumencki i ukrywa Food Cost.
- Rozbudowano kolorystykę i karty potraw.
- Zdjęcia receptur pozostają lokalne; można je dodawać w edytorze i są przechowywane w IndexedDB.
