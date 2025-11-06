🧠 Reflektion – Git & Agilt
1️⃣ Egen User Story + Acceptance Criteria + INVEST
User Story – US6: Alarm vid pausens slut

Som användare vill jag höra ett alarm när pausen är slut
så att jag vet när jag kan fortsätta mitt fokuspass utan att titta på skärmen.

Acceptance Criteria (AC):

✅ När paus-timern tar slut spelas ett ljud.
✅ Alarmet fortsätter tills användaren klickar på “Fortsätt” eller “Återställ”.
✅ Alarmet fungerar både på dator och mobil.
✅ Ljudfilen finns i assets/sounds/.
✅ PR skapad med titel: feat(us6-break-alarm): play sound when break ends.

INVEST – Kort motivering

Independent:
Storyn är oberoende – den påverkar inte tidigare logik för fokus eller paus, utan bygger vidare på befintligt flöde.

Negotiable:
Implementation av alarmet (t.ex. typ av ljud, längd, metod) kunde diskuteras och ändras utan att kravet ändrades.

Valuable:
Ger användaren tydlig feedback när pausen är över, vilket ökar nyttan och användarvänligheten.

Estimable:
Lätt att uppskatta arbetet (en ny funktion med ljudfil och eventhantering).

Small:
Tillräckligt liten för att utvecklas och testas under en sprint.

Testable:
Går att verifiera – alarmet ska spelas och stoppas vid “Fortsätt” eller “Återställ”.

2️⃣ Sprintmål + Definition of Done (DoD)
Sprintmål:

Att förbättra användarupplevelsen genom att lägga till ett ljudlarm vid slutet av pausen och se till att timern är visuellt motiverande och fullt fungerande.

Definition of Done (DoD):

☑️ Koden kör utan fel i webbläsaren.
☑️ Alarm ljuder vid pausens slut och stannar korrekt.
☑️ PR granskad och godkänd innan merge.
☑️ README uppdaterad med ljudfunktion.
☑️ Trello-kort länkat och markerat som “Done”.
☑️ Endast en commit i main efter squash & merge.

3️⃣ Retrospektiv – Start / Stop / Continue

Start:
💡 Börja skriva tydligare PR-beskrivningar med “Varför” och “Hur” samt länka till Trello varje gång.

Stop:
🛑 Sluta pusha stora PR:er som innehåller flera features – det gör review svårare och ökar risk för konflikter.

Continue:
✅ Fortsätta med branch-struktur feat/usX-... och tydliga commitmeddelanden.

Konkreta förbättringar nästa sprint

Jag kommer att:

Implementera automatisk test för timer-logik i nästa sprint för att upptäcka buggar snabbare.

Förbättra UI-feedback genom att visa en visuell signal (blink eller färgskift) tillsammans med ljudet.

Detta ska göra timern ännu mer tillgänglig och pålitlig.

4️⃣ Hänvisningar (VG)

Förbättring 1: Stöd i commit
👉 feat(Us1-timer-start): I’ve left a few small comments about script loading, const, and one unused variable.

Förbättring 2: Stöd i PR
👉 PR #2 – Jag hade två button som man kan göra en, så jag fixade den.