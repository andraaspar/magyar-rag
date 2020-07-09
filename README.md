# magyar-rag

> Magyar ragozó könyvtár JavaScript nyelven

```JS
const { hunVal } = require('magyar-rag')

hunVal('András') // Andrással
hunVal('Béla') // Bélával
hunVal('Cecil') // Cecillel
hunVal('Emese') // Emesével
```

```JS
const { hunT } = require('magyar-rag')

hunT('András') // Andrást
hunT('Béla') // Bélát
hunT('Cecil') // Cecilt
hunT('Emese') // Emesét
```

```JS
const { hunE } = require('magyar-rag')

hunE('András') // Andrásé
hunE('Béla') // Béláé
hunE('Cecil') // Cecilé
hunE('Emese') // Emeséé
```

```JS
const { hunNak } = require('magyar-rag')

hunNak('András') // Andrásnak
hunNak('Béla') // Bélának
hunNak('Cecil') // Cecilnek
hunNak('Emese') // Emesének
```

```JS
const { hunRa } = require('magyar-rag')

hunRa('András') // Andrásra
hunRa('Béla') // Bélára
hunRa('Cecil') // Cecilre
hunRa('Emese') // Emesére
```

```JS
const { hunTol } = require('magyar-rag')

hunTol('András') // Andrástól
hunTol('Béla') // Bélától
hunTol('Cecil') // Ceciltől
hunTol('Emese') // Emesétől
```

```JS
const { hunBa } = require('magyar-rag')

hunBa('András') // Andrásba
hunBa('Béla') // Bélába
hunBa('Cecil') // Cecilbe
hunBa('Emese') // Emesébe
```

```JS
const { hunBol } = require('magyar-rag')

hunBa('András') // Andrásból
hunBa('Béla') // Bélából
hunBa('Cecil') // Cecilből
hunBa('Emese') // Emeséből
```

A könyvtár célja a magyar főnévragozás általános eseteinek helyes kezelése. Többnyire egy-egy szót – főleg tulajdonneveket – akarok ezzel kezelni, hogy ne kelljen olyan csúfságokat elkövetni, mint pl. „András-val/vel”.

Ez egy olyan megoldás, ami az esetek túlnyomó többségében helyesen működik – de nem minden egyes esetben. Akkor használd, ha együtt tudsz élni azzal, hogy alkalmanként hibázik. A részleteket lásd a korlátairól szóló részben.

## Telepítése

```
npm i magyar-rag
```

## Előnyei

* Kicsi, nem függ más könyvtártól
* Egyszerű
* Fölismeri a hangrendet (pl. „Bélával” és „Emesével”)
* Kezeli a hasonulást (pl. „Cecillel”)
* Egyszerűsíti a mássalhangzókat (pl. „puffal”)
* Kivéve a tulajdonnevek esetében (pl. „Széll-lel”)
* Több szóból álló bemenetet is helyesen kezel (pl. „Kovács Elekkel”)

## Korlátai

Nincs benne szótár. Csak algoritmusok segítségével dolgozik. Ennek előnye a kis méret és a memóriahatékonyság, de emiatt mindig lesznek olyan esetek, amikor helytelen eredményt ad.

Nem ismeri föl a kivételeket (pl. „híddel”), a szóösszetételeket (pl. „láncinggal”), vagy az idegen szavakat (pl. „sprayjal”). Ennek ellenére az eredmény olvashatóbb és kellemesebb a szemnek, mint a „híd-val/vel”.

**Figyelem:** A kód azt feltételezi, hogy a megadott szó csak akkor kezdődik nagybetűvel, ha tulajdonnév. (A tulajdonneveknél nem szabad egyszerűsíteni a ragozásnál keletkező három mássalhangzót, hanem kötőjellel kell írni. Pl. „puff” → „puffal”, de „Széll” → „Széll-lel”.) Emiatt köznevek esetén célszerű a kis kezdőbetű nagyra cserélését a ragozás *után* megtenni.
