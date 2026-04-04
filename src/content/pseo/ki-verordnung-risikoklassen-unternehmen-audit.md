---
title: "KI-Verordnung Risikoklassen: In welche Kategorie fällt Ihre Software?"
keyword: "ki verordnung risikoklassen unternehmen"
intent: "Unternehmen ordnen ihre KI-Systeme korrekt in die vier Risikoklassen des EU AI Act ein — mit Annex-III-Prüfung, Software-Beispielen und Grenzfällen."
cluster: "compliance"
description: "KI-Verordnung Risikoklassen erklärt: Alle 8 Hochrisiko-Bereiche aus Anhang III mit konkreten Software-Beispielen (SAP, Personio, Copilot) und Grenzfällen für den Mittelstand."
content_format: "checklist"
roi_data:
  metric: "Anteil der KI-Systeme in Unternehmen, die als Hochrisiko klassifiziert werden"
  value: "ca. 18% aller eingesetzten KI-Systeme"
  source: "Initiative for Applied AI (Analyse 100+ Unternehmens-KI-Systeme)"
approach_steps:
  - title: "KI-Inventar erstellen"
    text: "Systematische Erfassung aller eingesetzten KI-Systeme — inkl. eingebetteter KI in ERP, CRM und HR-Software. 40–60% der KI-Systeme werden ohne Inventar nicht erkannt."
  - title: "Annex-III-Prüfung pro System"
    text: "Abgleich jedes Systems gegen die 8 Hochrisiko-Bereiche in Anhang III. Entscheidend ist der Einsatzzweck, nicht die Technologie. B2B-Lead-Scoring: kein Hochrisiko. Bewerber-Screening mit demselben Tool: Hochrisiko."
  - title: "Art. 6(3) Ausnahmen prüfen"
    text: "Auch ein Annex-III-gelistetes System kann ausgenommen sein — wenn es nur enge Verfahrensaufgaben erfüllt oder ein zuvor abgeschlossenes menschliches Ergebnis verbessert. Aber: Profiling natürlicher Personen ist IMMER Hochrisiko, ohne Ausnahme."
faq:
  - question: "Was sind die vier Risikoklassen der EU KI-Verordnung?"
    answer: "Stufe 1 — Inakzeptables Risiko (verboten seit 02.02.2025): Social Scoring, unterschwellige Manipulation, biometrische Echtzeit-Fernidentifikation, Emotionserkennung am Arbeitsplatz. Stufe 2 — Hochrisiko: KI in Personalentscheidungen, Kreditvergabe, Bildung, kritischer Infrastruktur und 4 weiteren Anhang-III-Bereichen. Stufe 3 — Begrenztes Risiko: Chatbots und KI-generierte Inhalte (nur Transparenzpflicht). Stufe 4 — Minimales Risiko: Spamfilter, Empfehlungssysteme, Suchalgorithmen (keine gesonderten Pflichten)."
  - question: "Fällt meine HR-Software unter Hochrisiko?"
    answer: "Ja, wenn sie KI-basiert Bewerbungen filtert, Kandidaten rankt oder Mitarbeiterleistung bewertet — das ist Anhang III, Nr. 4. SAP SuccessFactors mit KI-Recruiting, Personio mit KI-Bewerbungsfilterung und Workday AI Recruiting fallen alle unter Hochrisiko. Eine reine Personalverwaltung ohne KI-Entscheidungslogik dagegen nicht."
  - question: "Ist Microsoft Copilot Hochrisiko?"
    answer: "Copilot als allgemeines Produktivitätstool (E-Mails schreiben, Dokumente zusammenfassen) ist kein Hochrisiko — es fällt unter GPAI mit minimalem Risiko. Wird Copilot aber eingesetzt, um Bewerber zu ranken oder Mitarbeiterleistung zu bewerten, wird es durch den Einsatzzweck zu Hochrisiko (Anhang III, Nr. 4). Und: Der Betreiber kann unter Art. 25 zum Anbieter mit vollen Anbieter-Pflichten werden."
  - question: "Ist B2B-Lead-Scoring im CRM Hochrisiko?"
    answer: "Nein. Standard-B2B-Lead-Scoring für Vertriebsprioritäten bewertet keine natürlichen Personen bezüglich wesentlicher Dienste. Es ist typischerweise minimales Risiko. Anders bei Kredit-Scoring von Verbrauchern — das fällt unter Anhang III, Nr. 5(b). Die Grenze liegt beim Verwendungszweck: B2B-Vertrieb vs. Entscheidungen über natürliche Personen."
  - question: "Kann ein Annex-III-System trotzdem NICHT hochriskant sein?"
    answer: "Ja — Art. 6(3) definiert vier Ausnahmen: (a) Das System erfüllt nur eine enge Verfahrensaufgabe, (b) es verbessert ein zuvor abgeschlossenes menschliches Ergebnis, (c) es erkennt Entscheidungsmuster ohne menschliche Bewertung zu ersetzen, (d) es bereitet eine Anhang-III-Bewertung nur vor. Aber: Diese Ausnahmen greifen NIEMALS bei Profiling natürlicher Personen. Profiling ist immer Hochrisiko."
sources:
  - name: "EU AI Act – Anhang III (Hochrisiko-KI-Systeme), Verordnung (EU) 2024/1689"
    url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689"
  - name: "EU AI Office – Leitlinien für KMU"
    url: "https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence"
  - name: "Bitkom KI-Monitor 2025/2026 (n=604 Unternehmen)"
  - name: "Initiative for Applied AI – Analyse Hochrisiko-Anteil"
---

## Das Klassifizierungsproblem: Die meisten Unternehmen wissen nicht, was sie nutzen

Laut Bitkom (März 2026) setzen 41% der deutschen Unternehmen KI ein — mehr als doppelt so viele wie ein Jahr zuvor. Aber nur 23% erwarten eine direkte Betroffenheit als Betreiber unter dem AI Act. Die Realität: Die Initiative for Applied AI schätzt, dass ca. 18% aller eingesetzten KI-Systeme als Hochrisiko einzustufen sind. Bei durchschnittlich 1,5 Hochrisiko-Systemen pro betroffenem Unternehmen ist die Lücke zwischen Wahrnehmung und Betroffenheit erheblich.

Der Grund: Moderne Unternehmenssoftware enthält KI-Komponenten, die im Kaufvertrag nicht als solche ausgewiesen sind. Ein CRM mit Lead-Scoring, eine HR-Plattform mit Bewerberranking, ein ERP-Modul mit Demand-Forecasting — all das fällt unter die KI-Verordnung.

## Die vier Risikoklassen im Überblick

**Stufe 1 — Inakzeptables Risiko (verboten seit 02.02.2025):**
Acht KI-Praktiken sind verboten: unterschwellige Manipulation, Ausnutzung von Vulnerabilitäten, Social Scoring, prädiktive Polizeiarbeit, ungerichtetes Gesichtsbilder-Scraping, Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen, biometrische Kategorisierung nach sensiblen Merkmalen und biometrische Echtzeit-Fernidentifikation. Für die meisten Mittelständler relevant: Emotionserkennung am Arbeitsplatz — keine Software darf die Emotionen Ihrer Mitarbeiter überwachen.

**Stufe 2 — Hochrisiko (8 Bereiche in Anhang III):**
Umfangreiche Pflichten: technische Dokumentation, menschliche Aufsicht, Protokollaufbewahrung (6 Monate), Registrierung in EU-Datenbank. Details siehe unten.

**Stufe 3 — Begrenztes Risiko:**
Chatbots, KI-generierte Inhalte, Deepfakes. Einzige Pflicht: Transparenz — der Nutzer muss wissen, dass er mit einer KI interagiert.

**Stufe 4 — Minimales Risiko:**
Spamfilter, Empfehlungssysteme, KI-Suchalgorithmen. Keine gesonderten Pflichten.

## Die 8 Hochrisiko-Bereiche aus Anhang III — konkret für den Mittelstand

**1. Biometrie:** Gesichtserkennung im öffentlichen Raum, biometrische Kategorisierung. Ausnahme: 1:1-Verifikation (Geräte-Entsperrung) ist NICHT hochriskant.

**2. Kritische Infrastruktur:** KI als Sicherheitskomponente in Energie-, Wasser-, Verkehrsversorgung. Relevant für Zulieferer und Betreiber.

**3. Bildung:** KI-basierte Hochschulzulassung, automatisierte Essay-Bewertung, adaptive Lernsysteme, KI-Proctoring.

**4. Beschäftigung — der relevanteste Bereich für den Mittelstand:**
- (a) Einstellung: Bewerbungsfilterung, Kandidaten-Ranking, KI-Interview-Bewertung
- (b) Arbeitsverhältnis: Beförderung, Kündigung, Aufgabenzuweisung, Leistungsüberwachung

93% der betroffenen Unternehmen erwarten hohen Umsetzungsaufwand in diesem Bereich (Bitkom 2025).

**5. Wesentliche Dienste:** Kreditwürdigkeit/Kredit-Scoring (Ausnahme: reine Betrugserkennung), Sozialleistungsbewilligung, Versicherungs-Risikoprüfung. Wichtig: SCHUFA-ähnliche Systeme fallen hierunter.

**6. Strafverfolgung:** Predictive Policing, KI-Lügendetektoren, Rückfallprognosen. Für die meisten Mittelständler nicht relevant.

**7. Migration/Asyl/Grenze:** Automatisierte Grenzrisikobewertung, KI-Asylentscheidungen. Für die meisten Mittelständler nicht relevant.

**8. Justiz/Demokratie:** KI-Urteilsempfehlungen, KI-Wähler-Targeting. Für die meisten Mittelständler nicht relevant.

## Welche Standard-Software ist Hochrisiko?

Die Klassifizierung hängt nicht von der Software ab, sondern vom Einsatzzweck. Trotzdem gibt es klare Muster:

**SAP SuccessFactors** (KI-Bewerbungsscreening, Performance): Hochrisiko bei HR-KI-Funktionen (Anhang III, Nr. 4). SAP hat ISO/IEC 42001 erlangt und ein AI Ethics Office eingerichtet. Betreiber werden zu Deployern mit Art.-26-Pflichten.

**Microsoft 365 Copilot** (allgemein): Kein Hochrisiko als Produktivitätstool. Wird Copilot aber für Bewerbungsfilterung oder Performance-Bewertung eingesetzt, wird es durch den Zweck zu Hochrisiko.

**Salesforce Einstein** (Standard-CRM): Kein Hochrisiko bei B2B-Lead-Scoring. Hochrisiko bei Kreditwürdigkeitsbewertung natürlicher Personen.

**Personio** (KI-Rekrutierung): Hochrisiko bei KI-basierter Bewerbungsfilterung und Performance-Bewertung.

**Workday** (KI-Recruiting): Hochrisiko. Bereits US-Sammelklage wegen KI-Diskriminierung (Mobley v. Workday, N.D. Cal.).

**DATEV** (Steuer-/Buchführung): Typischerweise kein Hochrisiko — klassische regelbasierte Systeme fallen nicht unter die KI-Definition.

## Grenzfälle: Wann wird es Hochrisiko?

Die häufigsten Grenzfälle im Mittelstand:

- B2B-Lead-Scoring für Vertriebsprioritäten → **Kein Hochrisiko** (kein Einfluss auf Rechte natürlicher Personen)
- KI-Screening von Bewerbungen → **Hochrisiko** (Anhang III, Nr. 4(a))
- Copilot erstellt E-Mails → **Kein Hochrisiko** (minimales Risiko)
- Copilot rankt Bewerber → **Hochrisiko** (Betreiber wird ggf. Anbieter unter Art. 25)
- KI-Kredit-Scoring von Verbrauchern → **Hochrisiko** (Anhang III, Nr. 5(b))
- KI-Betrugserkennung bei Transaktionen → **Kein Hochrisiko** (explizit ausgenommen)
- Chatbot beantwortet HR-FAQ → **Begrenztes Risiko** (nur Transparenzpflicht)
- KI bewertet Mitarbeiterleistung → **Hochrisiko** (Anhang III, Nr. 4(b))
- KI-Vorsortierung mit anschließender Human Review → **Trotzdem Hochrisiko** (wesentlicher Einfluss auf Ergebnis)

**Entscheidend ist der Verwendungszweck**, nicht die technische Fähigkeit des Tools. Nutzt ein Betreiber das System für einen Anhang-III-Zweck, der vom Anbieter nicht vorgesehen war, wird der Betreiber unter Art. 25 selbst zum Anbieter — mit vollen Anbieter-Pflichten.

## Die drei häufigsten Klassifizierungsfehler

**Fehler 1 — HR-Tools unterschätzen:** 60% der geprüften Unternehmen erkennen ihre HR-Software nicht als Hochrisiko. Bewerbungsfilterung, Kandidaten-Ranking und Performance-Monitoring fallen alle unter Anhang III, Nr. 4.

**Fehler 2 — Anbietervertrauen ohne eigene Prüfung:** Die Einschätzung des Softwareanbieters ist nicht bindend. Als Betreiber tragen Sie die Verantwortung für Ihre eigene Klassifizierung.

**Fehler 3 — GPAI-Zweckentfremdung nicht erkennen:** Wer ChatGPT oder Copilot für Anhang-III-Zwecke (Bewerberbewertung, Kreditentscheidungen) einsetzt, schafft unter Art. 25 ein Hochrisiko-System und wird zum Anbieter.

## Nächster Schritt: Vom Inventar zum Compliance-Check

Die Klassifizierung ist der erste Schritt. Was danach kommt — die konkreten Pflichten je Risikoklasse — beschreiben wir im Detail auf unserer Seite zu den [EU KI-Verordnung Pflichten für den Mittelstand](/l/eu-ki-verordnung-mittelstand-pflichten-2026/). Den vollständigen Audit-Prozess in 5 Schritten finden Sie auf unserer Seite zum [AI Act Compliance-Check](/l/ai-act-compliance-check-unternehmen-mittelstand/).

Über die BAFA-Beratungsförderung ist eine professionelle Klassifizierung zu 50% förderbar (max. 1.750 € Eigenanteil). ST Strategieberatung führt strukturierte Risikoklassifizierungen durch — mit Annex-III-Fragebogen und konkreter Software-Zuordnung.
