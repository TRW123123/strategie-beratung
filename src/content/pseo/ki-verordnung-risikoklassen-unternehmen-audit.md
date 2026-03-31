---
title: "KI-Verordnung Risikoklassen: So klassifizieren Unternehmen ihre KI-Systeme richtig"
keyword: "ki verordnung risikoklassen unternehmen"
intent: "Unternehmen verstehen die Risikoklassen der EU KI-Verordnung und können ihre eigenen KI-Systeme korrekt einordnen."
cluster: "compliance"
description: "KI-Verordnung Risikoklassen: Wie Unternehmen ihre KI-Systeme nach EU AI Act klassifizieren — mit konkreten Beispielen aus dem Mittelstand."
content_format: "checklist"
roi_data:
  metric: "Zeitaufwand für strukturierte KI-Klassifizierung im Mittelstand"
  value: "1–3 Tage mit externem Berater vs. 4–8 Wochen intern"
  source: "Projekterfahrung ST Strategieberatung UG"
approach_steps:
  - title: "KI-System-Inventar anlegen"
    text: "Systematische Erfassung aller eingesetzten KI-Systeme — inkl. eingebetteter KI in Standardsoftware wie ERP, CRM, HR-Tools."
  - title: "Annex-III-Prüfung durchführen"
    text: "Abgleich jedes Systems gegen die Hochrisiko-Kategorien in Anhang III der KI-Verordnung. Kein Bauchgefühl — die Annex-Kriterien sind verbindlich."
  - title: "Maßnahmen je Risikoklasse ableiten"
    text: "Für Hochrisiko: Technische Dokumentation, Konformitätsbewertung, EU-Datenbankregistrierung. Für begrenztes Risiko: Transparenzpflichten. Für minimales Risiko: keine gesonderten Maßnahmen."
faq:
  - question: "Was sind die vier Risikoklassen der EU KI-Verordnung?"
    answer: "Die EU KI-Verordnung kennt vier Stufen: (1) Inakzeptables Risiko — verboten, z.B. Social Scoring durch Behörden. (2) Hochrisiko — umfangreiche Pflichten, z.B. KI in Personalentscheidungen. (3) Begrenztes Risiko — Transparenzpflichten, z.B. Chatbots. (4) Minimales Risiko — keine gesonderten Pflichten, z.B. KI-Spamfilter."
  - question: "Wie erkenne ich, ob meine Software als Hochrisiko-KI gilt?"
    answer: "Hochrisiko gilt, wenn das System in einem der Bereiche aus Anhang III der Verordnung eingesetzt wird: biometrische Identifizierung, Personalentscheidungen, Kreditvergabe, Bildung, kritische Infrastruktur, Strafverfolgung, Migration. Entscheidend ist der konkrete Einsatzzweck, nicht die Technologie selbst."
  - question: "Ich kaufe KI-Software ein — muss ich sie trotzdem klassifizieren?"
    answer: "Ja. Als Betreiber tragen Sie eigene Pflichten, unabhängig vom Anbieter. Sie müssen sicherstellen, dass das System bestimmungsgemäß eingesetzt wird, Mitarbeiter entsprechend schulen und Vorfälle melden. Die Klassifizierung ist Ihre Verantwortung — auch wenn der Anbieter sie bereits vorgenommen hat."
  - question: "Was ist der Unterschied zwischen Anbieter und Betreiber im AI Act?"
    answer: "Anbieter sind Unternehmen, die KI-Systeme entwickeln und in Verkehr bringen. Betreiber sind Unternehmen, die KI-Systeme im eigenen Betrieb einsetzen. Die meisten Mittelständler sind Betreiber — sie kaufen und nutzen KI, entwickeln sie nicht selbst. Betreiberpflichten sind geringer als Anbieterpflichten, aber keineswegs trivial."
  - question: "Brauche ich für jede KI-Anwendung eine eigene Dokumentation?"
    answer: "Nur für Hochrisiko-KI ist eine vollständige technische Dokumentation und Konformitätsbewertung verpflichtend. Für begrenztes Risiko reicht eine Transparenzmaßnahme (z.B. Hinweis auf KI-Nutzung). Für minimales Risiko keine Dokumentationspflicht. Eine Übersichtstabelle aller eingesetzten Systeme mit Risikoklassen ist aber für alle Unternehmen empfehlenswert."
sources:
  - name: "EU AI Act – Anhang III (Hochrisiko-KI-Systeme)"
    url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689"
  - name: "EU AI Office – Leitlinien für KMU"
    url: "https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence"
---

## Das Klassifizierungsproblem: Viele Unternehmen wissen nicht, was sie nutzen

Bevor ein Unternehmen seine KI-Systeme klassifizieren kann, muss es wissen, welche Systeme es überhaupt einsetzt. Das klingt trivial — ist es aber nicht. Moderne Unternehmenssoftware enthält KI-Komponenten, die weder im Kaufvertrag noch im Marketingmaterial explizit als solche ausgewiesen sind. Ein CRM-System mit automatischem Lead-Scoring, eine HR-Plattform mit Bewerberranking, ein ERP-Modul mit Demand-Forecasting — all das fällt unter die KI-Verordnung.

Der erste Schritt ist immer das KI-Inventar: eine vollständige Liste aller Systeme, die automatisierte Entscheidungen treffen oder Menschen bei Entscheidungen unterstützen.

## Die Hochrisiko-Kategorien konkret für den Mittelstand

Anhang III der Verordnung listet die Hochrisiko-Kategorien abschließend auf. Für den Mittelstand sind besonders relevant:

**Personalmanagement und Zugang zu Beschäftigung:** KI-Systeme, die bei der Einstellung, Beförderung, Kündigung oder Leistungsbewertung eingesetzt werden. Wer Software nutzt, die Bewerbungen automatisch filtert oder Mitarbeiterleistungen bewertet, ist in dieser Kategorie.

**Kreditvergabe und Bonitätsbewertung:** Automatisierte Kreditentscheidungen oder Scoring-Systeme. Betrifft Banken direkt — aber auch FinTech-Integrationen in B2B-Plattformen.

**Bildung und Berufsausbildung:** KI-gestützte Lernplattformen, die Lernergebnisse bewerten oder Lernwege empfehlen.

**Sicherheitskomponenten kritischer Infrastruktur:** Energie, Wasser, Verkehr. Für die meisten Mittelständler nicht relevant — Ausnahme: Zulieferer kritischer Infrastruktur.

## Typische Klassifizierungsfehler im Mittelstand

**Fehler 1 — Unterschätzung von HR-Tools:** „Unsere HR-Software ist nur ein Verwaltungssystem." Stimmt nicht, wenn das System Bewerbungen filtert, Kandidaten rankt oder Leistungsbewertungen automatisiert. Das ist Hochrisiko.

**Fehler 2 — Anbietervertrauen ohne Prüfung:** „Der Softwareanbieter hat uns gesagt, es ist kein Hochrisiko." Die Einschätzung des Anbieters ist nicht bindend. Als Betreiber tragen Sie die Verantwortung für Ihre Klassifizierung.

**Fehler 3 — Nur explizit als KI vermarktete Tools erfassen:** Maschinelles Lernen steckt in vielen Tools, ohne dass „KI" auf der Verpackung steht. Die Technologie, nicht das Marketing, entscheidet über die Klassifizierung.

## Was ein strukturierter Compliance-Check kostet

Ein professionell durchgeführter AI-Act-Compliance-Check für einen Mittelstandsbetrieb mit 10–50 KI-Systemen dauert erfahrungsgemäß 1 bis 3 Beratertage. Das Ergebnis ist eine Klassifizierungsmatrix mit konkreten Handlungsempfehlungen je System — kein akademisches Gutachten, sondern ein Arbeitsdokument.

Über die BAFA-Beratungsförderung ist dieser Check zu 50% förderbar. ST Strategieberatung führt diese Assessments regelmäßig durch — mit einem strukturierten Fragebogen, der die Annex-III-Kriterien systematisch abbildet.
