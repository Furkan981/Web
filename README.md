# Teilnehmer

Furkan Yilmaz, Arbor Uka, Raphael Bellstedt


# Zusammenfassung und Funktionalität

  Das Campingportal ist eine Webseite, mit der Camper
  die Möglichkeit haben, online Stellplätze auf Camps
  zu reservieren. Gleichzeitig können Betreiber der 
  Camps ihre Stellplätze online verwalten. Beispielsweise
  können Betreiber den Stellplätzen einen Preis und eine 
  geeignete Beschreibung hinzufügen. Mit einer Suche mit
  Parametern wie Preis und dem Filtern nach verfügbaren Plätzen
  können Benutzer sich somit über eine Auswahl von 
  Campingplätzen informieren.
 

# Technische Informationen

* jQuery: Auf der Welcome Page zum client side search, damit Daten nur 
  einmalig, beim betreten der Webseite geladen werden müssen
  
* JSON: Wird verwendet, um die Daten zu übertragen von der Datenbank
 
* validation of input: Beim einloggen werden die Daten auf Vollständigkeit
  und Korrektheit überprüft, damit kein fehlerhaftes Anmelden möglich ist

  
## Implementierung

User Management:
* User: Kann sich auf der Homepage informieren und das Impressum lesen
* Eingeloggter User: Kann ein Stellplatz suchen, filtern und buchen (sowie sein eigenes löschen mit Cascade auf Buchungen)
* Admin: Kann alle Stellplätze löschen/Kann User sehen und löschen (ebenfalls für User -> cascade delete booking)

Session Management:
Beim Buchungsprozess wird der Benutzer über zwei Formulare geleitet, wobei
die Daten in der Session zwischengespeichert werden und erst nach Abschließen
des Prozesses werden die Daten in die Datenbank geschrieben. Zunächst muss der
Nutzer einen Stellplatz auswählen und anschließend die Zahlungsinformationen 
eingeben.


# Styling

Im Rahmen des Stylings der Applikation wurde sowohl klassische css Dateien
verwendet, als auch inline-css und Bootstrap. Bootstrap Standards vereinfachen
grundlegende Designs. CSS wurde eingesetzt, um das Design zu verfeinern und auf
die Gegebenheit des Tools zu spezialisieren. Auch für das responsive Design wurde
Bootstrap eingesetzt. 


# SEO

* Meta-Tag (describtion) Eingebunden
* Social Media Links exemplarisch eingebunden
* Keywords in Überschriften eingebaut
* Kurze und verständliche URLs verwendet
* Responsive Design

