# WebbIII-Moment-2
Moment 2 i kursen Webbutveckling III

## Automatisering
Syftet med att använda en automatiseringsprocess är delvis att spara tid men också att undvika manuella fel (exempelvis att man glömmer att uppdatera puliceringsfiler och bara uppdaterar källkodsfiler). En automatiseringsprocess kan se till att filer som ändras på ett ställe automatiskt läggs till samt uppdateras på ett annat ställe. Man kan även använda tasks för att ex. automatiskt komprimera bilder och slå hop filer (exempelvis flera JS-filer till en vilket snabbar på hela JS-processen om det bara är en fil som ska köras). Man kan alltså i sin källkod ha en ganska omfattande och detaljrik struktur men med hjälp av automatisering se till att de filer som laddas upp för publicering blir så komprimerade och effektiva som möjligt. För att utföra dessa automatiserade processer kan man använda sig av en task runner, en uppgiftshanterare, som ex. Gulp. Vi talar om för gulp vilka filer vi vill att ska processas samt vad som ska göras med dem och var de färdigprocessade filerna ska hamna. 

Systemet i denna uppgift är byggt med hjälp av Gulp som är baserat på node.js. Node.js är en motor som kan köra JS utan webbläsare. Npms körs tillsammans med node.se (följer med vid installation) och är ett pakethanteringssystem. Med Gulp används också plugins för specifika tasks. 
Denna uppgift består av en webbsida byggd med html, css och javascript med tillhörande bilder. Javascriptet skriver ut meddelande till konsolen. 

En förutsättning för att kunna köra systemet är att node.js och npm finns installerade på din dator. Du behöver därefter installera Gulp globalt och lokalt på datorn om det inte finns sedan tidigare. Du behöver också ha följande plugins installerade för att systemet ska fungera som det är tänkt och det ska kunna utföra de planerade automatiserade uppgifterna (tasks):
* Gulp concat (slår ihop flera filer av samma sort till en main)
* Gulp terser (minimerar kod i JS och tar bort kommentarer)
* Gulp cssnano (minimerar kod i CSS och tar bort kommentarer)
* Gulp imagemin (komprimerar storleken på bilder, använd version 7.1.0 då den senaste ger felmeddelande)
* browsersync (uppdaterar automatiskt browsern i realtid när ändringar sparas)

Du hittar anvisningar om installation på www.gulpjs.com

Du klonar ner repot med: git clone https://github.com/Mauveecat/WebbIII-Moment-2.git

Du startar systemet i terminalen genom att skriva 'gulp' (placera dig i rätt mapp där repo-filerna ligger). Om allt fungerar som det ska så ska ett webbläsarfönster öppnas där webbsidan visas (browsersync). En watch-task håller koll på ändringar som görs i källkoden och initierar de tasks som i så fall behöver utföras som en följd av detta. 
