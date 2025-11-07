# 🧠 Reflektion – Git & Agilt

## 1️⃣ Egen User Story + Acceptance Criteria + INVEST

### **User Story – US6: Alarm vid pausens slut**
Som användare vill jag höra ett alarm när pausen är slut  
så att jag vet när jag kan fortsätta mitt fokuspass utan att titta på skärmen.

---

### ✅ **Acceptance Criteria (AC)**

- När paus-timern tar slut spelas ett ljud.  
- Alarmet fortsätter tills användaren klickar på **“Fortsätt”** eller **“Återställ”**.  
- Alarmet fungerar både på dator och mobil.  
- Ljudfilen finns i `assets/sounds/`.  
- PR skapad med titel: `feat(us6-break-alarm): play sound when break ends`.

---

### 🧩 **INVEST – Kort motivering**

**Independent:**  
Storyn är oberoende – den påverkar inte tidigare logik för fokus eller paus, utan bygger vidare på befintligt flöde.  

**Negotiable:**  
Implementation av alarmet (typ av ljud, längd, metod) kunde diskuteras och ändras utan att kravet ändrades.  

**Valuable:**  
Ger användaren tydlig feedback när pausen är över, vilket ökar nyttan och användarvänligheten.  

**Estimable:**  
Lätt att uppskatta arbetet (en ny funktion med ljudfil och eventhantering).  

**Small:**  
Tillräckligt liten för att utvecklas och testas under en sprint.  

**Testable:**  
Går att verifiera – alarmet ska spelas och stoppas vid “Fortsätt” eller “Återställ”.

---

## 2️⃣ Sprintmål + Definition of Done (DoD)

### 🎯 **Sprintmål**
Att förbättra användarupplevelsen genom att lägga till ett ljudlarm vid slutet av pausen och se till att timern är visuellt motiverande och fullt fungerande.

---

### ✅ **Definition of Done (DoD)**

- [x] Koden kör utan fel i webbläsaren  
- [x] Alarm ljuder vid pausens slut och stannar korrekt  
- [x] PR granskad och godkänd innan merge  
- [x] README uppdaterad med ljudfunktion  
- [x] Trello-kort länkat och markerat som “Done”  
- [x] Endast en commit i `main` efter squash & merge  

---

## 3️⃣ Retrospektiv – Start / Stop / Continue

**Start:**  
💡 Börja skriva tydligare PR-beskrivningar med *“Varför”* och *“Hur”* samt länka till Trello varje gång.  

**Stop:**  
🛑 Sluta pusha stora PR:er som innehåller flera features – det gör review svårare och ökar risk för konflikter.  

**Continue:**  
✅ Fortsätta med branch-struktur `feat/usX-...` och tydliga commit-meddelanden.  

---

### 🔁 **Konkreta förbättringar nästa sprint**

- Implementera automatisk test för timer-logik i nästa sprint för att upptäcka buggar snabbare.  
- Förbättra UI-feedback genom att visa en visuell signal (blink eller färgskift) tillsammans med ljudet.  

Dessa förbättringar gör timern ännu mer tillgänglig och pålitlig för användaren.

---

## 4️⃣ Hänvisningar (VG)

### 🔗 **Förbättring 1: Stöd i commit**
👉 `feat(Us1-timer-start)`: Lade till fungerande nedräkning och visning av tid i mm:ss-format.  

### 🔗 **Förbättring 2: Stöd i PR**
👉 `PR #2 – feat/Us2-Paus/Återuppta-timern`: Fixade dubbla knappar till en enda “Starta/Pausa/Fortsätt”-knapp för bättre UX.  

---

## 🧩 PR Reviews

**Given reviews:**  
- Granskade kollegans PR för “feat(us1-Återställ-timern)” med fokus på kodstruktur och namnkonventioner.  

**Received reviews:**  
- Fick feedback om att förbättra knapp-logiken och göra den mer intuitiv – implementerat i US4 och US5.

---

## ⚔️ Konflikter

En konflikt uppstod mellan brancherna  
`feat/us5–cirkulär-design-för-timer-och-paus` och `main`  
på grund av parallella ändringar i `index.html`.

### Lösning:
Jag löste konflikten manuellt genom att: inte behålla texten jag skriv båda 


---

✳️ **Sammanfattning:**  
Denna sprint förbättrade både användarupplevelsen och kodstrukturen.  
Jag har arbetat enligt agila principer med små, testbara steg och tydliga PR-processer.  
Varje feature är isolerad, väl beskriven och länkad till sitt Trello-kort.

---
