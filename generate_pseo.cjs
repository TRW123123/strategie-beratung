const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'content', 'pseo');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Format: [slug, intent, h1, cluster]
const data = [
    // Raster 1: loesungen
    ['rechnungsverarbeitung-ki-automatisierung-mittelstand', 'Eingangsrechnungen werden manuell geprüft, abgetippt und freigegeben – dauert Tage statt Minuten. KI-basierte Dunkelverarbeitung kann die Bearbeitungszeit um 50% senken.', 'Rechnungsverarbeitung im Mittelstand: So automatisiert KI Ihren Rechnungseingang in unter 10 Minuten', 'loesungen'],
    ['angebotserstellung-automatisieren-handwerk-ki', 'Handwerksbetriebe verbringen 45–60 Min. pro Angebot mit manuellem Zusammenkopieren aus CRM, Excel und Word.', 'Angebotserstellung im Handwerk automatisieren: KI erstellt Ihr Angebot in 8 statt 50 Minuten', 'loesungen'],
    ['auftragsbearbeitung-automatisieren-erp-mittelstand', 'Aufträge aus Webshop, Telefon und E-Mail werden manuell ins ERP übertragen – Fehler, Verzögerungen, Doppelarbeit.', 'Auftragsbearbeitung automatisieren: Vom Bestelleingang zur Rechnung ohne Medienbruch', 'loesungen'],
    ['buchhaltung-automatisierung-ki-kleine-unternehmen', 'RPA-Bots können Routinetätigkeiten in Buchhaltung und Einkauf übernehmen und Fehler drastisch reduzieren.', 'Buchhaltung automatisieren: Wie KI Ihre Fibu von manueller Dateneingabe befreit', 'loesungen'],
    ['personalakte-digitalisieren-ki-hr-automatisierung', 'HR-Abteilungen ertrinken in Papierakten – vom Arbeitsvertrag bis zur Krankmeldung. KI kann Dokumente automatisch klassifizieren und zuordnen.', 'Digitale Personalakte mit KI: Schluss mit Aktenschränken und Sucherei in der HR', 'loesungen'],
    ['dokumentenextraktion-ki-mittelstand-automatisierung', 'Mitarbeiter tippen Daten aus Lieferscheinen, Verträgen und Formularen manuell ab – 85% schnellere Verarbeitung ist möglich.', 'Dokumentenextraktion mit KI: Daten aus jedem Beleg automatisch ins System', 'loesungen'],
    ['einkauf-dunkelverarbeitung-ki-automatisierung', 'Bestellungen, Auftragsbestätigungen, Lieferscheine und Rechnungen im Einkauf erfordern manuellen Abgleich – KI erledigt den Dreifach-Abgleich automatisch.', 'Dunkelverarbeitung im Einkauf: KI verarbeitet Ihre Belege vollautomatisch', 'loesungen'],
    ['vertrieb-lead-qualifizierung-ki-mittelstand', 'Vertriebsteams mit 3 Mitarbeitern sollen 200+ Leads bearbeiten – ohne Priorisierung gehen die besten Chancen verloren.', 'Lead-Qualifizierung mit KI: Ihr Vertrieb bearbeitet nur noch Leads, die kaufen wollen', 'loesungen'],
    ['produktion-wartung-ki-vorhersage-mittelstand', 'Ungeplante Maschinenstillstände kosten Produktionsbetriebe Tausende pro Stunde. KI-gestützte vorausschauende Wartung kann Ausfallzeiten deutlich reduzieren.', 'Vorausschauende Wartung mit KI: Maschinenausfälle erkennen, bevor sie passieren', 'loesungen'],
    ['kundenservice-chatbot-ki-mittelstand-automatisierung', 'Kundenanfragen per Telefon und Mail stapeln sich – Fachkräftemangel macht schnelle Reaktionszeiten unmöglich. KI-Chatbots skalieren den Service ohne Neueinstellungen.', 'KI-Chatbot im Kundenservice: Anfragen beantworten, ohne Personal aufzustocken', 'loesungen'],

    // Raster 2: probleme
    ['manuelle-dateneingabe-datev-automatisieren', 'Steuerberater und Mandanten übertragen Buchungsdaten manuell zwischen Lexware, DATEV und ERP – zeitfressend und fehleranfällig.', 'Manuelle Dateneingabe in DATEV automatisieren: Schluss mit Abtippen und Doppelerfassung', 'probleme'],
    ['crm-lead-verlust-stoppen-automatisierung', 'Leads verschwinden im CRM, weil Follow-ups vergessen werden. Fehlende Transparenz im Lead-Status kostet Umsatz.', 'Lead-Verlust im CRM stoppen: Automatisierte Follow-ups, die kein Kontakt mehr durchs Raster fällt', 'probleme'],
    ['excel-listen-ersetzen-automatisierung-mittelstand', 'Kritische Geschäftsprozesse laufen über Excel-Tabellen – Versionschaos, keine Echtzeit, keine Skalierung.', 'Excel-Chaos beenden: Wie Automatisierung Ihre Tabellen-Workflows ersetzt', 'probleme'],
    ['outlook-postfach-automatisieren-ki-sortierung', 'Das Postfach quillt über – Rechnungen, Anfragen und Bestellungen landen unsortiert im Eingang. KI kann Dokumente automatisch aus dem E-Mail-Postfach ablegen und verarbeiten.', 'Outlook-Postfach automatisieren: KI sortiert, extrahiert und verteilt Ihre E-Mails', 'probleme'],
    ['papierrechnung-digitalisieren-automatisch-verarbeiten', 'Papierrechnungen werden eingescannt, manuell geprüft und abgetippt. Moderne KI-OCR erkennt Rechnungsnummern, Beträge und Positionen automatisch.', 'Papierrechnungen digitalisieren: Vom Scan zur Buchung ohne Abtippen', 'probleme'],
    ['angebote-schreiben-zu-lange-automatisierung', '30+ Angebote pro Woche, jedes dauert fast eine Stunde. Automatisierte Angebotstools reduzieren die Zeit auf unter 10 Minuten.', 'Angebote schreiben dauert zu lange? So automatisieren Sie den Prozess auf 10 Minuten', 'probleme'],
    ['fachkraeftemangel-kompensieren-ki-automatisierung', '74% der Mittelständler setzen auf Digitalisierung, um Personalmangel auszugleichen. KI macht bestehende Mitarbeiter 30–40% produktiver.', 'Fachkräftemangel kompensieren: KI-Automatisierung als Produktivitäts-Turbo für Ihr Team', 'probleme'],
    ['erp-manuelle-prozesse-automatisieren-mittelstand', 'ERP-Systeme sind eingeführt, aber viele Prozesse laufen trotzdem manuell daneben – von der Auftragsbestätigung bis zur Lagerbuchung.', 'Manuelle ERP-Prozesse automatisieren: Die versteckten Effizienz-Killer in Ihrem System', 'probleme'],
    ['vertrieb-nachfassen-vergessen-follow-up-automatisierung', 'Vertriebsmitarbeiter vergessen Follow-ups, weil die Leadliste zu lang und die Zeit zu knapp ist.', 'Follow-ups vergessen? Automatisiertes Nachfassen, das keinen Lead mehr liegen lässt', 'probleme'],
    ['microsoft-copilot-einrichten-mittelstand-automatisierung', 'Copilot for Business ist seit Dez. 2025 für KMU verfügbar, aber viele wissen nicht, wo anfangen.', 'Microsoft Copilot für den Mittelstand einrichten: KI-Assistent in Ihrer Office-Umgebung aktivieren', 'probleme'],

    // Raster 3: foerderung
    ['bafa-foerderung-ki-beratung-mittelstand-2026', 'BAFA fördert Unternehmensberatungen bis 31.12.2026 mit bis zu 50% bzw. 80% der Kosten, max. 3.500 € Bemessungsgrundlage.', 'BAFA-Förderung für KI-Beratung 2026: Bis zu 80% Zuschuss für Ihre Prozessoptimierung', 'foerderung'],
    ['bafa-foerderung-unternehmensberatung-nrw-antrag', 'Unternehmen in NRW erhalten 50% Zuschuss (max. 1.750 €) pro BAFA-Beratung, bis zu 2 pro Jahr und 5 insgesamt bis 2026.', 'BAFA-Förderung in NRW beantragen: Schritt-für-Schritt zur geförderten KI-Beratung', 'foerderung'],
    ['foerdermittel-digitalisierung-mittelstand-2026', 'KMU suchen nach aktuellen Fördermöglichkeiten für Digitalisierung. Neben BAFA gibt es MID-Digitalisierung in NRW.', 'Fördermittel Digitalisierung 2026: Alle Zuschüsse für den Mittelstand im Überblick', 'foerderung'],
    ['mid-digitalisierung-nrw-foerderung-ki-projekt', 'NRW fördert über MID-Digitalisierung KI-Projekte und digitale Produkte für KMU mit bis zu 15.000 € Zuschuss bei 50% Förderquote.', 'MID-Digitalisierung NRW: Bis zu 15.000 € Zuschuss für Ihr KI-Projekt', 'foerderung'],
    ['bafa-berater-finden-ki-prozessoptimierung', 'Nur beim BAFA registrierte Berater dürfen geförderte Beratungen durchführen – mit Qualitätssicherungssystem und mind. 50% Beratungsumsatz.', 'BAFA-Berater für KI & Prozessoptimierung finden: So kommen Sie an geförderte Beratung', 'foerderung'],
    ['gefoerderte-ki-beratung-handwerk-digitalisierung', 'Handwerksbetriebe können über BAFA und MID digitale Projekte fördern lassen – von Angebots-Automatisierung bis Auftragsmanagement.', 'Geförderte KI-Beratung fürs Handwerk: Digitalisierung mit staatlichem Zuschuss starten', 'foerderung'],
    ['digitalisierung-foerderung-bayern-mittelstand-ki', 'Bayerische Mittelständler suchen nach regionalen Förderprogrammen für KI-Einführung. BAFA gilt bundesweit, daneben existieren Länderprogramme.', 'Digitalisierung-Förderung Bayern: Welche Zuschüsse Mittelständler für KI-Projekte nutzen können', 'foerderung'],
    ['prozessberatung-mittelstand-foerderung-zuschuss', 'GF wollen wissen, ob ihre geplante Prozessoptimierung förderfähig ist. BAFA fördert konzeptionelle Einzelberatungen zu Digitalisierung und Organisation.', 'Prozessberatung mit Zuschuss: So lassen Sie Ihre Automatisierungsstrategie fördern', 'foerderung'],
    ['foerderung-automatisierung-unternehmen-antrag-stellen', 'Unternehmer wollen wissen, wie der Förderantrag konkret abläuft – online beim BAFA, Informationsschreiben abwarten, dann erst beraten lassen.', 'Förderung für Automatisierung beantragen: Der komplette Antrags-Fahrplan für KMU', 'foerderung'],
    ['ki-beratung-kosten-foerderung-mittelstand-rechner', 'GF wollen verstehen, was eine KI-Beratung wirklich kostet und wie viel davon gefördert wird. Max. 3.500 € Bemessungsgrundlage, bis zu 2.800 € Zuschuss möglich.', 'Was kostet KI-Beratung für den Mittelstand? Kosten, Förderung & ROI im Überblick', 'foerderung'],

    // Raster 4: compliance
    ['dsgvo-konforme-ki-einfuehrung-mittelstand', 'Jede KI-Anwendung muss DSGVO-konform sein – Rechtsgrundlage, Datensparsamkeit, Transparenzpflichten und ggf. Datenschutz-Folgenabschätzung sind Pflicht.', 'DSGVO-konforme KI-Einführung im Mittelstand: Rechtssicher automatisieren ohne Datenschutz-Risiko', 'compliance'],
    ['ai-act-compliance-check-unternehmen-mittelstand', 'Der EU AI Act sieht Bußgelder bis 35 Mio. € oder 7% des Jahresumsatzes vor. Hochrisiko-KI-Pflichten gelten voraussichtlich ab Dez. 2027.', 'AI Act Compliance-Check: Ist Ihre KI-Nutzung rechtskonform? Jetzt prüfen lassen', 'compliance'],
    ['ki-richtlinie-unternehmen-erstellen-vorlage', 'Eine interne KI-Leitlinie wird unverzichtbar – sie verbindet AI Act mit DSGVO-Pflichten und schafft Rechtssicherheit.', 'KI-Richtlinie für Ihr Unternehmen erstellen: Vorlage & Anleitung für den Mittelstand', 'compliance'],
    ['ki-risikobewertung-mittelstand-ai-act-pflicht', 'Unternehmen müssen eine Risikobewertung ihrer KI-Systeme vornehmen und dokumentieren, welche Risikoklasse vorliegt.', 'KI-Risikobewertung nach AI Act: Welche Pflichten Ihr Unternehmen jetzt hat', 'compliance'],
    ['dsgvo-folgenabschaetzung-ki-anwendung-pflicht', 'Bei hochriskanten KI-Anwendungen ist eine Datenschutz-Folgenabschätzung (DSFA) nach Art. 35 DSGVO Pflicht – viele Mittelständler unterschätzen den Aufwand.', 'Datenschutz-Folgenabschätzung für KI: Wann sie Pflicht ist und wie Sie sie durchführen', 'compliance'],
    ['chatgpt-unternehmen-datenschutz-richtlinie', 'Mitarbeiter nutzen ChatGPT unkontrolliert – Kundennamen und Vertragsdaten landen in Prompts ohne Rechtsgrundlage.', 'ChatGPT im Unternehmen datenschutzkonform nutzen: Richtlinie für den sicheren KI-Einsatz', 'compliance'],
    ['ki-einsatz-personalwesen-rechtssicher-dsgvo', 'KI im HR-Bereich (Bewerbungsscreening, Personalakte) ist besonders sensibel – Hochrisiko-Einstufung nach AI Act droht bei Personalentscheidungen.', 'KI im Personalwesen rechtssicher einsetzen: DSGVO & AI Act für HR-Verantwortliche', 'compliance'],
    ['microsoft-copilot-datenschutz-unternehmen-sicher', 'IT-Leiter fragen sich, ob Microsoft Copilot wirklich datenschutzkonform ist. Business-Lösungen arbeiten innerhalb der firmeneigenen Microsoft 365-Daten.', 'Microsoft Copilot & Datenschutz: So setzen Sie den KI-Assistenten sicher im Unternehmen ein', 'compliance'],
    ['ki-audit-unternehmen-bestandsaufnahme-checkliste', 'Bevor KI eingeführt wird, braucht es eine Bestandsaufnahme: KI-Inventar erstellen, Risiken bewerten, verbotene Praktiken prüfen.', 'KI-Audit für Ihr Unternehmen: Bestandsaufnahme und Checkliste vor der KI-Einführung', 'compliance'],
    ['ki-transparenzpflicht-unternehmen-mitarbeiter-kunden', 'Mitarbeiter und Kunden müssen nachvollziehen können, wie ihre Daten in KI-Systemen genutzt werden – Transparenz ist DSGVO- und AI-Act-Pflicht.', 'KI-Transparenzpflicht: Was Sie Mitarbeitern und Kunden über Ihren KI-Einsatz mitteilen müssen', 'compliance']
];

for (const [slug, intent, h1, cluster] of data) {
    const keywordRaw = slug.split('-').join(' ');
    const firstWordUpper = keywordRaw.charAt(0).toUpperCase() + keywordRaw.slice(1);

    // Create meta description (up to 160 chars)
    let desc = intent.length > 155 ? intent.slice(0, 150) + "..." : intent;

    const content = `---
title: "${h1.replace(/"/g, '\\"')}"
keyword: "${firstWordUpper}"
intent: "${intent.replace(/"/g, '\\"')}"
cluster: "${cluster}"
description: "${desc.replace(/"/g, '\\"')}"
bafa_badge: ${cluster === 'foerderung'}
---

Stellen Sie sich vor, ${intent} Das kostet nicht nur wertvolle Arbeitszeit, sondern bremst Ihre gesamte Skalierung. Bei ST BERATUNG analysieren wir Ihre Prozesse und implementieren eine maßgeschneiderte, rechtssichere Lösung, die genau dieses Bottleneck dauerhaft eliminiert.
`;

    fs.writeFileSync(path.join(targetDir, slug + '.md'), content, 'utf8');
}
console.log("Created 40 Markdown files successfully.");
