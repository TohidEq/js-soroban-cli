# js-soroban-cli

Terminal base Soroban with [INK (React JS in terminal)](https://www.npmjs.com/package/ink)

## Screenshot

![js-soroban-cli](./assets/imgs/ss-1.png)

---

## Installation

### 1. Clone project

```bash
git clone https://github.com/TohidEq/js-soroban-cli.git
cd js-soroban-cli
```

### 2. Install Packages

```bash
npm i
```

### 3. Build, Install and Use

```bash
npm run build
chmod +x ./dist/cli.js
sudo npm install --global .
```

And run

```bash
js-soroban-cli
```

Or

```bash
./dist/cli.js
```

---

## Uninstallation

```bash
sudo npm uninstall --global js-soroban-cli
```

# Keys

## General Keys
| Key   | Action                     |
|-------|----------------------------|
| `>>`  | Exit                       |
| `=`   | Calculate Result           |
| `TAB` | Top Beads Select (Fives)   |

---

## Base Keys (Columns, Right → Left)
| Column | Keys         |
|--------|-------------|
| 1st    | `0 - p - ; - /` |
| 2nd    | `9 - o - l - .` |
| ...    | ...         |
| Last   | `1 - q - a - z` |

---

## Top Beads (+5 / -5)
| Key   | Action                   |
|-------|--------------------------|
| `TAB` + Number (`1-0`) | Toggle Top Beads Value (Fives) |

---

## Bottom Beads (±1,2,3,4)
### Add Values
| Keys (Row)        | Action    |
|-------------------|-----------|
| `1-2-3-4-5-6-7-8-9-0` | +1        |
| `q-w-e-r-t-y-u-i-o-p` | +2        |
| `a-s-d-f-g-h-j-k-l-;` | +3        |
| `z-x-c-v-b-n-m-,-.-/` | +4        |

### Subtract Values (with **Shift**)
| Keys (Row)        | Action    |
|-------------------|-----------|
| `Shift + 1-2-3-4-5-6-7-8-9-0` | -4 |
| `Shift + q-w-e-r-t-y-u-i-o-p` | -3 |
| `Shift + a-s-d-f-g-h-j-k-l-;` | -2 |
| `Shift + z-x-c-v-b-n-m-,-.-/` | -1 |
