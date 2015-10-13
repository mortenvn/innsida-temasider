# Kom på nett (oppsett av Eduroam og VPN)

## Om repoet
Dette repoet inneholder koden til temasiden http://innsida.ntnu.no/nett. Målet er å erstatte alle guidene for Eduroam- og VPN-oppsett med én kort temaside.

Dette er muliggjøres ved at nettsiden automatisk oppdager hvilket OS du sitter på og finner fram riktig guide for deg.

## Nok prat! La meg teste koden!
For å teste koden lokalt, er man nødt til å sette opp en liten webserver:
1. Åpne en terminal og naviger til rotmappen i prosjektet
2. Kjør `python -m SimpleHTTPServer 8080` (eller tilsvarende)
3. Åpne en nettleser og besøk URL-en `localhost:8080/iframe.html`

## Hvordan legger jeg til en ny guide?
1. I **eduroam.html**, legg inn teksten du har skrevet (i HTML-format)
    - Lag en ny div som ser slik ut: `<div class="instructions DITT-OS">...</div>`. **DITT-OS** kunne f.eks. vært win-11 for Windows 11. 
    - Inni denne nye div-en, skriv guiden din.
2. I **eduroam.html**, legg DITT-OS inn i «Endre operativsystem» select-boksen
    - Finn `<select class="change-os-select form-control">`
    - Legg til `<option value="DITT-OS">Orakel OS</option>`
3. I **main.js**, legg inn OS-detektering
    - Finn «OS detection»-delen av koden. Stort sett bare en svær if-elseif-else
    - Legg til `else if (DITT-OS-BOOLEAN) { instruction_os = 'DITT-OS'; }`. For å finne ut hva DITT-OS-BOOLEAN bør være, se på de andre eksemplene, eller titt på dokumentasjonen til [platform.js](https://github.com/bestiejs/platform.js/)




