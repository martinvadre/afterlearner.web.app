const questions = [
    {
        question: `ให้ 𝑝(𝑥) = x³ + (𝑘 − 1)x² − k³ เมื่อ 𝑘 เป็นจำนวนจริงลบ ถ้าเศษเหลือจากการหาร 𝑝(𝑥) ด้วย 𝑥 − 3 เท่ากับ 18 
        แล้วเศษเหลือจากการหาร 𝑝(𝑥) ด้วย 2𝑥 + 1 เท่ากับเท่าใด`,
        answers: [
            {text: "3", correct: false},
            {text: "18", correct: false},
            {text: "22", correct: false},
            {text: "207 &frasl; 8", correct: true},
            {text: "209 &frasl; 8", correct: false},
        ]
    },
    {
        question: `ให้ 𝐴 = {𝑥 ∈ ℤ| |2𝑥 + 3| < 2|𝑥− 5|} <br>
                    &nbsp;&nbsp;และ 𝐵 = { 𝑥 ∈ ℝ|0 < 𝑥 < 5 } <br>
                    พิจารณาข้อความต่อไปนี้ <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;ก) สมาชิกของเซต 𝐴 ที่มีค่ามากที่สุด คือ 0 <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;ข) 𝐴 − 𝐵 เป็นเซตอนันต์ <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;ค) ∀𝑥 [𝑥 ∈ 𝐴 → 𝑥 ∈ 𝐵] มีค่าความจริงเป็นเท็จ <br>
                    จากข้อความ ก) ข) และ ค) ข้างต้น ข้อใดถูกต้อง`,
        answers: [
            {text: "ข้อความ ก) ถูกต้องเพียงข้อเดียวเท่านั้น", correct: false},
            {text: "ข้อความ ข) ถูกต้องเพียงข้อเดียวเท่านั้น", correct: false},
            {text: "ข้อความ ก) และ ข) ถูกต้องเท่านั้น", correct: false},
            {text: "ข้อความ ข) และ ค) ถูกต้องเท่านั้น", correct: true},
            {text: "ข้อความ ก) ข) และ ค) ถูกต้อง", correct: false},
        ]
    },
    {
        question: `ให้ 𝑝,𝑞,𝑟 และ 𝑠 เป็นประพจน์ โดยที่ (~𝑝 ∧ 𝑞) → [~𝑟 → (𝑟 ↔ 𝑠)] มีค่าความจริงเป็นเท็จ 
        ประพจน์ในข้อใดมีค่าความจริงเป็นจริง`,
        answers: [
            {text: "~𝑝 → 𝑟", correct: false},
            {text: "𝑝 ∧ 𝑟", correct: false},
            {text: "𝑝 ↔ 𝑠", correct: false},
            {text: "𝑞 ∧ 𝑠", correct: true},
            {text: "𝑞 ↔ 𝑟", correct: false},
        ]
    },
    {
        question: `กำหนด 𝑝 และ 𝑞 เป็นประพจน์ และรูปแบบของประพจน์ 𝑝 ∗ 𝑞 มีค่าความจริง แสดงดังตาราง
        <table>
            <tr>
                <th>𝑝</th>
                <th>𝑞</th>
                <th>𝑝 ∗ 𝑞</th>
            </tr>
            <tr>
                <td>𝑇</td>
                <td>𝑇</td>
                <td>𝐹</td>
            </tr>
            <tr>
                <td>𝑇</td>
                <td>𝐹</td>
                <td>𝑇</td>
            </tr>
            <tr>
                <td>𝐹</td>
                <td>𝑇</td>
                <td>𝐹</td>
            </tr>
            <tr>
                <td>𝐹</td>
                <td>𝐹</td>
                <td>𝑇</td>
            </tr>
        </table> <br>
        พิจารณาข้อความต่อไปนี้ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ก) [(𝑝 ∗ 𝑞) ∧ 𝑝] → 𝑞 เป็นสัจนิรันดร์ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ข) นิเสธของ 𝑝 ∗ 𝑞 คือ 𝑝 ∗ ~𝑞 <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ค) 𝑝 ∗ 𝑞 สมมูลกับ (𝑝 ∧ ~𝑞) ∨ (~𝑝 ∧ ~𝑞) <br>
        จำกข้อความ ก) ข) และ ค) ข้างต้น ข้อใดถูกต้อง`,
        answers: [
            {text: "ข้อความ ก) ถูกต้องเพียงข้อเดียวเท่านั้น", correct: false},
            {text: "ข้อความ ข) ถูกต้องเพียงข้อเดียวเท่านั้น", correct: false},
            {text: "ข้อความ ค) ถูกต้องเพียงข้อเดียวเท่านั้น", correct: false},
            {text: "ข้อความ ก) และ ข) ถูกต้องเท่านั้น", correct: false},
            {text: "ข้อความ ข) และ ค) ถูกต้องเท่านั้น", correct: true},
        ]
    },
    {
        question: `ถ้ำ log<sub>1&frasl;4</sub> 256 + (2log 625 &frasl; log 5) = 3ª เมื่อ 𝑎 เป็นจำนวนจริง 
        แล้วค่าของ 𝑎 เท่ากับเท่าใด`,
        answers: [
            {text: "log<sub>3</sub>2", correct: false},
            {text: "log<sub>3</sub>4", correct: true},
            {text: "log<sub>3</sub>33 &frasl; 4", correct: false},
            {text: "log<sub>3</sub>10", correct: false},
            {text: "log<sub>3</sub>12", correct: false},
        ]
    },
    {
        question: `รูปสี่เหลี่ยม 𝐴𝐵𝐶𝐷 มีมุม 𝐴 ขนาด 60 องศา ด้านประกอบมุม 𝐴 ยาวเท่ากัน มุม 𝐶 เป็นมุมที่อยู่ตรงข้ามกับมุม 𝐴
        มีขนาด 120 องศา และด้านประกอบมุม 𝐶 ยาว 30 และ 50 หน่วย ด้าน 𝐴𝐵 ยาวกี่หน่วย`,
        answers: [
            {text: "80", correct: false},
            {text: "70", correct: true},
            {text: "60", correct: false},
            {text: "50", correct: false},
            {text: "40", correct: false},
        ]
    },
    {
        question: `tan(arccos(5 &frasl; 13) + arcsin(3 &frasl; 5)) มีค่าเท่ากับเท่าใด`,
        answers: [
            {text: "-63 &frasl; 16", correct: true},
            {text: "-7 &frasl; 40", correct: false},
            {text: "9 &frasl; 8", correct: false},
            {text: "32 &frasl; 25", correct: false},
            {text: "63 &frasl; 20", correct: false},
        ]
    },
    {
        question: `ให้ 𝐴 = { −1,0,1,2 } <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;𝐵 เป็นสับเซตของ 𝐴 โดยที่ 𝐵 ≠ 𝜙 และ 2 ∉ 𝐵
        และ 𝑓 เป็นฟังก์ชันจาก 𝐴 ไปทั่วถึง 𝐵 โดยที่ 𝑓(−1) = 1 และ 𝑓(1) = −1 <br>
        พิจารณาข้อความต่อไปนี้ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ก) ถ้ำ 𝑓(2) > 0 แล้ว 𝑓(2) = 1 <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ข) 𝑓 เป็นฟังก์ชันเพิ่ม <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ค) 𝑓 มีฟังก์ชันผกผัน <br>
        จากข้อความ ก) ข) และ ค) ข้างต้น ข้อใดถูกต้อง`,
        answers: [
            {text: "ข้อความ ก) ถูกต้องเพียงข้อเดียวเท่านั้น", correct: true},
            {text: "ข้อความ ข) ถูกต้องเพียงข้อเดียวเท่านั้น", correct: false},
            {text: "ข้อความ ค) ถูกต้องเพียงข้อเดียวเท่านั้น", correct: false},
            {text: "ข้อความ ก) และ ข) ถูกต้องเท่านั้น", correct: false},
            {text: "ข้อความ ข) และ ค) ถูกต้องเท่านั้น", correct: false},
        ]
    },
    {
        question: `ให้ 𝐴 = 
        <math xmlns = "http://www.w3.org/1998/Math/MathML">
            <mrow>
               <mo>[</mo>
                    <mtable>
                        <mtr>
                            <mtd><mn>𝑥</mn></mtd>
                            <mtd><mn>&nbsp;-1</mn></mtd>
                        </mtr>
                  
                        <mtr>
                            <mtd><mn>0</mn></mtd>
                            <mtd><mn>&nbsp;&nbsp;3</mn></mtd>
                        </mtr>
                    </mtable>
                <mo>]</mo>
            </mrow>
        </math> 
        และ 𝐵 = 
        <math xmlns = "http://www.w3.org/1998/Math/MathML">
            <mrow>
               <mo>[</mo>
                    <mtable>
                        <mtr>
                            <mtd><mn>-2</mn></mtd>
                            <mtd><mn>&nbsp;&nbsp;0</mn></mtd>
                        </mtr>
                  
                        <mtr>
                            <mtd><mn>&nbsp;𝑥</mn></mtd>
                            <mtd><mn>&nbsp;&nbsp;1</mn></mtd>
                        </mtr>
                    </mtable>
                <mo>]</mo>
            </mrow>
        </math> 
         เมื่อ 𝑥 เป็นจำนวนจริง <br>
         ถ้า 𝑑𝑒𝑡(𝐵<sup>-1</sup> < 𝐴) = −6 แล้วค่าของ 𝑥 เท่ากับเท่าใด`,
        answers: [
            {text: "-4", correct: false},
            {text: "-1", correct: false},
            {text: "1", correct: false},
            {text: "4", correct: true},
            {text: "9", correct: false},
        ]
    },
    {
        question: `ถ้า 𝑎<sub>1</sub>,𝑎<sub>2</sub>,𝑎<sub>3</sub>,...,𝑎<sub>𝑛</sub>,... เป็นลำดับอนันต์ 
        โดยที่ 𝑎<sub>𝑛</sub> = (1 &frasl; 𝑛) − (1 &frasl; 𝑛+2)
        แล้ว Σ<sup>∞</sup><sub>n=1</sub> 𝑎<sub>𝑛</sub> เท่ากับเท่าใด`,
        answers: [
            {text: "0", correct: false},
            {text: "2 &frasl; 3", correct: false},
            {text: "1", correct: false},
            {text: "3 &frasl; 2", correct: true},
            {text: "หาผลบวกไม่ได้ เพราะอนุกรมนี้เป็นอนุกรมลู่ออก", correct: false},
        ]
    },
    {
        question: `กำหนดแบบรูปของแผนภาพบันไดไม้ขีดไฟดังนี้
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" class="match-box" viewBox="0 0 900.000000 393.000000"  preserveAspectRatio="xMidYMid meet">  
            <g transform="translate(0.000000,393.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> 
                <path d="M8458 3591 c-47 -10 -68 -27 -68 -57 0 -37 52 -64 123 -64 31 0 57 -4 57 -9 0 -5 -7 -22 -15 -37 -8 -16 -12 -38 -10 -49 21 -78 30 -96 51 -101 40 -10 60 11 74 77 15 69 3 123 -31 147 -11 7 -19 19 -19 27 0 8 -10 25 -22 39 -26 28 -81 38 -140 27z"/> 
                <path d="M7656 3581 c-11 -17 44 -21 346 -21 299 0 344 3 332 21 -7 12 -671 12 -678 0z"/> 
                <path d="M7552 3499 c-27 -28 -32 -40 -32 -83 0 -27 8 -67 18 -87 13 -31 23 -39 44 -39 39 0 56 32 63 115 10 116 -31 157 -93 94z"/> 
                <path d="M7736 3491 c-10 -15 82 -21 338 -21 234 0 314 8 254 23 -36 10 -586 8 -592 -2z"/> 
                <path d="M7617 3223 c-9 -50 -9 -557 0 -608 14 -89 22 10 22 310 1 290 -7 392 -22 298z"/> 
                <path d="M8637 3193 c-9 -49 -9 -526 -1 -575 16 -96 24 -2 24 280 0 288 -8 388 -23 295z"/> 
                <path d="M7558 3214 c-11 -10 -10 -576 1 -592 16 -26 21 32 20 273 0 238 -7 334 -21 319z"/> 
                <path d="M8577 3207 c-9 -25 -8 -547 2 -571 16 -41 21 29 20 284 -1 250 -7 326 -22 287z"/> 
                <path d="M4313 2550 c-36 -16 -43 -24 -43 -48 0 -42 19 -53 104 -59 68 -5 74 -7 66 -24 -6 -10 -10 -44 -10 -76 0 -70 19 -103 58 -103 41 0 62 42 62 125 0 61 -2 68 -30 92 -16 13 -30 33 -30 44 0 25 -67 69 -105 69 -16 0 -49 -9 -72 -20z"/> 
                <path d="M8402 2550 c-45 -24 -44 -22 -31 -58 13 -36 32 -44 114 -46 54 -1 60 -3 57 -21 -18 -108 3 -188 47 -183 63 7 95 148 47 205 -14 16 -28 41 -31 56 -16 61 -129 87 -203 47z"/> 
                <path d="M7390 2542 c-28 -14 -35 -23 -35 -47 0 -35 29 -53 103 -64 47 -7 47 -7 44 -44 -2 -20 2 -56 9 -79 7 -29 11 -154 10 -383 -1 -314 4 -398 23 -348 4 10 6 162 5 338 l-1 320 27 0 c23 0 30 7 46 50 10 28 19 61 19 75 0 50 -26 112 -61 143 -65 59 -123 71 -189 39z"/> 
                <path d="M7617 2536 c-8 -20 77 -26 378 -26 263 0 330 5 319 22 -3 5 -146 8 -336 8 -181 -1 -332 1 -336 4 -9 10 -20 7 -25 -8z"/> 
                <path d="M3516 2531 c-10 -15 93 -21 374 -21 274 0 335 4 308 21 -17 11 -675 12 -682 0z"/> 
                <path d="M6606 2531 c-10 -16 69 -21 350 -21 282 0 358 5 332 21 -17 11 -675 11 -682 0z"/> 
                <path d="M3430 2468 c-31 -33 -41 -84 -28 -137 14 -59 24 -71 59 -71 41 0 73 73 66 148 -3 29 -11 60 -18 68 -17 21 -55 17 -79 -8z"/> 
                <path d="M6532 2483 c-20 -8 -62 -80 -62 -105 0 -38 33 -118 51 -123 9 -3 27 -1 40 4 44 16 62 173 26 219 -10 12 -32 15 -55 5z"/> 
                <path d="M3596 2471 c-18 -7 -18 -8 5 -14 37 -10 607 -8 613 2 3 5 -8 11 -25 15 -45 9 -570 6 -593 -3z"/> 
                <path d="M6672 2471 c-28 -17 25 -21 311 -21 273 0 365 8 287 24 -48 9 -583 7 -598 -3z"/> 
                <path d="M7692 2471 c-28 -18 26 -21 333 -21 284 0 367 7 302 24 -34 9 -620 7 -635 -3z"/> 
                <path d="M3417 2196 c-10 -24 -7 -566 2 -590 7 -18 8 -18 14 5 9 33 7 560 -2 583 -7 18 -8 18 -14 2z"/> 
                <path d="M6567 2173 c-9 -48 -9 -551 -1 -580 17 -64 24 17 24 290 0 284 -8 382 -23 290z"/> 
                <path d="M4526 2177 c-8 -30 -8 -562 1 -623 14 -105 22 -1 22 313 1 291 -5 375 -23 310z"/> 
                <path d="M6507 2187 c-9 -25 -8 -567 2 -592 15 -39 21 46 20 304 -1 251 -7 327 -22 288z"/> 
                <path d="M7585 2157 c-9 -58 -2 -573 8 -583 18 -18 22 22 25 234 4 235 -4 392 -18 392 -5 0 -12 -19 -15 -43z"/> 
                <path d="M8547 2186 c-10 -24 -7 -546 2 -570 7 -18 8 -18 14 5 9 33 7 540 -2 563 -7 18 -8 18 -14 2z"/> 
                <path d="M4434 2156 c-9 -38 5 -442 17 -473 14 -38 25 -19 22 39 -1 29 -5 139 -9 243 -7 191 -15 248 -30 191z"/> 
                <path d="M3487 2143 c-7 -6 -3 -164 8 -418 3 -60 10 -114 16 -120 7 -7 9 73 7 257 -3 250 -9 304 -31 281z"/> 
                <path d="M8627 2123 c-6 -32 2 -522 9 -543 4 -13 6 -13 15 0 10 17 11 200 2 423 -6 139 -14 180 -26 120z"/> 
                <path d="M8410 1529 c-54 -16 -55 -17 -55 -55 0 -35 3 -39 35 -48 19 -5 59 -10 87 -11 29 0 55 -4 59 -8 4 -3 -1 -23 -11 -44 -18 -37 -18 -39 2 -93 19 -53 21 -55 54 -52 39 3 43 7 58 78 14 63 2 117 -30 135 -13 6 -18 17 -15 27 5 16 -35 72 -52 72 -4 0 -23 4 -42 8 -24 6 -52 3 -90 -9z"/> 
                <path d="M4345 1535 c-5 -2 -29 -9 -52 -15 -41 -10 -43 -13 -43 -48 0 -34 3 -38 38 -51 20 -8 58 -15 84 -15 26 -1 50 -5 54 -9 4 -3 -1 -22 -10 -41 -15 -33 -15 -38 2 -88 15 -45 22 -53 46 -56 38 -5 51 9 66 73 15 61 2 131 -26 142 -8 3 -14 15 -14 27 0 25 -34 61 -65 69 -41 11 -70 15 -80 12z"/> 
                <path d="M1234 1523 c-42 -6 -68 -35 -60 -67 8 -34 39 -49 111 -56 47 -4 59 -8 56 -20 -35 -145 41 -245 99 -130 31 60 27 121 -10 160 -16 18 -30 40 -30 49 -1 44 -82 76 -166 64z"/> 
                <path d="M3263 1519 c-30 -9 -33 -13 -33 -48 0 -37 2 -39 43 -50 23 -6 58 -12 77 -13 l35 -3 -3 -65 c-3 -54 0 -73 18 -103 19 -31 25 -35 41 -26 11 5 24 7 29 4 14 -9 28 26 35 90 9 81 -4 137 -35 152 -13 6 -30 23 -37 36 -18 36 -96 47 -170 26z"/> 
                <path d="M6355 1523 c-32 -8 -45 -24 -45 -55 0 -24 6 -32 38 -45 20 -9 56 -16 79 -15 l43 2 -2 -70 c-1 -76 16 -130 41 -130 61 1 81 36 81 143 0 60 -2 68 -25 83 -14 9 -31 28 -38 42 -6 15 -23 32 -37 39 -25 12 -96 15 -135 6z"/> 
                <path d="M7405 1522 c-16 -2 -40 -11 -53 -20 -18 -14 -21 -23 -16 -49 7 -38 20 -45 99 -52 l60 -6 -3 -58 c-3 -39 2 -71 15 -102 17 -42 20 -45 48 -39 17 3 34 9 38 13 18 17 28 135 17 204 -6 38 -8 72 -5 75 3 3 157 5 343 4 309 -1 404 5 362 22 -8 3 -173 5 -365 4 -341 -3 -350 -4 -353 -23 -7 -38 -21 -40 -50 -8 -28 32 -69 43 -137 35z"/> 
                <path d="M436 1511 c-11 -17 44 -21 344 -21 302 0 365 4 338 21 -18 12 -675 11 -682 0z"/> 
                <path d="M2490 1511 c0 -18 51 -21 345 -21 296 0 350 4 339 21 -7 12 -684 12 -684 0z"/> 
                <path d="M3506 1511 c-10 -16 70 -21 369 -21 296 0 350 4 339 21 -7 12 -701 12 -708 0z"/> 
                <path d="M5570 1511 c0 -18 51 -21 345 -21 298 0 360 4 333 21 -18 12 -678 11 -678 0z"/> 
                <path d="M6621 1511 c-31 -20 50 -26 329 -25 287 1 377 7 349 25 -18 12 -660 11 -678 0z"/> 
                <path d="M5501 1463 c-51 -20 -78 -92 -61 -164 21 -88 76 -99 110 -22 25 56 25 107 2 152 -18 36 -28 43 -51 34z"/> 
                <path d="M339 1442 c-24 -25 -49 -78 -49 -102 0 -12 10 -44 21 -71 18 -42 26 -49 49 -49 33 0 43 11 58 66 15 52 15 86 0 135 -9 33 -15 39 -37 38 -14 0 -33 -8 -42 -17z"/> 
                <path d="M2380 1435 c-20 -21 -23 -35 -22 -92 1 -108 48 -147 99 -85 19 22 23 39 23 99 0 39 -3 78 -6 87 -10 26 -67 20 -94 -9z"/> 
                <path d="M2605 1450 c-121 -10 -18 -20 247 -22 235 -3 293 1 277 16 -6 7 -457 12 -524 6z"/> 
                <path d="M3585 1451 c-20 -9 -20 -9 0 -17 25 -10 580 -12 591 -1 4 4 4 10 0 15 -11 10 -567 13 -591 3z"/> 
                <path d="M5685 1450 c-127 -11 -16 -20 242 -21 241 0 285 2 272 15 -7 7 -445 12 -514 6z"/> 
                <path d="M7676 1451 c-43 -17 24 -21 330 -21 284 0 358 6 292 24 -33 8 -599 6 -622 -3z"/> 
                <path d="M526 1421 c-9 -15 91 -21 339 -21 224 0 302 8 243 23 -36 10 -576 8 -582 -2z"/> 
                <path d="M6652 1421 c-28 -18 26 -21 336 -21 293 0 383 7 320 23 -35 10 -641 8 -656 -2z"/> 
                <path d="M6566 1178 c-3 -13 -6 -179 -6 -370 0 -277 -3 -348 -13 -348 -7 0 -30 9 -52 20 -48 24 -133 27 -175 5 -22 -12 -30 -23 -30 -43 1 -44 38 -63 124 -64 71 -1 75 0 107 33 l33 34 325 -4 c317 -3 387 1 375 21 -3 5 -137 8 -332 7 l-327 -1 -5 360 c-3 198 -8 363 -11 367 -4 3 -9 -5 -13 -17z"/> 
                <path d="M2456 1168 c-3 -13 -6 -172 -6 -355 0 -199 -4 -334 -9 -338 -27 -16 -30 22 -46 480 -3 94 -9 181 -11 195 -5 23 -6 23 -16 6 -8 -13 -8 -84 -3 -225 14 -357 21 -432 43 -483 19 -44 34 -48 50 -13 6 14 15 25 19 25 11 0 4 713 -6 723 -5 5 -11 -2 -15 -15z"/> 
                <path d="M3476 1165 c-4 -14 -6 -176 -6 -358 1 -183 0 -339 -2 -347 -2 -8 4 -15 12 -15 13 0 15 48 18 364 2 333 -4 429 -22 356z"/> 
                <path d="M7586 1159 c-10 -51 -7 -719 3 -719 6 0 13 5 16 11 10 15 6 722 -4 732 -5 5 -11 -6 -15 -24z"/> 
                <path d="M388 1179 c-1 -2 -4 -161 -7 -353 -5 -267 -9 -350 -18 -354 -10 -3 -13 66 -13 325 0 180 -3 338 -6 350 -18 66 -24 -22 -24 -333 0 -268 3 -344 13 -344 14 -1 41 -36 51 -67 l7 -23 352 0 c194 0 358 4 365 9 26 16 -62 21 -381 21 -288 0 -318 2 -315 16 3 15 35 16 308 15 283 -1 398 6 360 23 -8 3 -161 7 -340 8 l-325 3 -5 347 c-4 291 -10 383 -22 357z"/> <path d="M5456 1160 c-4 -14 -5 -171 -4 -349 2 -249 6 -325 16 -329 9 -3 12 67 11 330 0 314 -7 411 -23 348z"/> 
                <path d="M6475 1168 c-4 -9 -5 -135 -3 -280 2 -220 6 -268 19 -292 l17 -30 7 32 c4 18 4 54 1 80 -3 26 -8 144 -12 262 -6 205 -14 268 -29 228z"/> 
                <path d="M8606 1140 c-8 -43 -8 -527 1 -615 7 -67 7 -68 14 -30 11 56 11 647 0 663 -6 10 -10 4 -15 -18z"/> 
                <path d="M1347 1147 c-9 -23 -9 -543 0 -575 16 -61 23 23 22 273 -1 264 -7 342 -22 302z"/> 
                <path d="M3410 856 c0 -299 4 -352 21 -324 10 15 12 550 3 597 -17 84 -24 4 -24 -273z"/> 
                <path d="M4437 1147 c-9 -25 -8 -557 2 -581 16 -41 21 30 20 289 -1 255 -7 331 -22 292z"/> 
                <path d="M4496 1130 c-8 -42 -8 -504 0 -603 13 -154 21 -60 23 270 1 312 -6 417 -23 333z"/> 
                <path d="M8547 1154 c-9 -10 -8 -563 2 -588 16 -41 21 30 20 289 -1 250 -6 315 -22 299z"/> 
                <path d="M7526 1141 c-10 -15 -9 -571 1 -609 15 -63 23 24 22 273 0 273 -6 363 -23 336z"/> 
                <path d="M5521 903 c2 -257 8 -334 25 -340 8 -3 10 31 6 114 -2 65 -4 127 -3 138 4 50 1 225 -5 267 -3 27 -10 51 -15 54 -6 4 -9 -84 -8 -233z"/> 
                <path d="M1416 1085 c-3 -9 -4 -53 -1 -98 3 -45 7 -163 9 -261 3 -117 9 -183 17 -190 15 -15 8 539 -8 555 -7 7 -12 5 -17 -6z"/> 
                <path d="M5530 495 c-7 -8 -19 -15 -26 -15 -22 0 -16 -30 12 -67 l25 -33 347 0 c322 0 423 7 342 24 -18 3 -181 6 -362 6 l-330 0 7 27 c8 35 9 35 37 35 305 -3 612 0 630 7 21 8 21 8 -8 15 -16 5 -165 6 -331 4 -166 -1 -305 0 -309 5 -11 11 -20 9 -34 -8z"/> 
                <path d="M8410 501 c-50 -10 -60 -18 -60 -51 0 -45 43 -70 122 -70 51 0 69 4 86 20 63 59 -33 125 -148 101z"/> 
                <path d="M1183 478 c-28 -17 -32 -24 -26 -46 9 -37 29 -50 90 -58 71 -9 114 1 137 32 l18 26 -37 34 c-34 31 -43 34 -94 33 -37 0 -67 -7 -88 -21z"/> 
                <path d="M2557 493 c-26 -3 -45 -8 -42 -14 4 -5 129 -9 308 -9 278 0 357 6 312 23 -16 7 -491 6 -578 0z"/> 
                <path d="M3238 484 c-18 -9 -28 -23 -28 -37 0 -48 36 -67 125 -69 56 -1 69 2 91 23 33 31 28 60 -16 81 -43 22 -134 23 -172 2z"/> 
                <path d="M3607 492 c-26 -2 -45 -7 -42 -13 4 -5 124 -9 293 -9 266 0 342 6 297 24 -17 6 -455 5 -548 -2z"/> 
                <path d="M4263 483 c-51 -35 -11 -102 61 -105 71 -3 110 3 129 19 26 24 21 59 -12 82 -37 26 -143 29 -178 4z"/> 
                <path d="M7352 477 c-38 -19 -42 -25 -37 -47 10 -39 21 -46 84 -60 67 -14 115 -4 147 31 23 25 12 44 -42 76 -49 28 -97 28 -152 0z"/> 
                <path d="M7646 491 c-12 -18 32 -21 314 -21 288 0 374 5 335 21 -28 11 -643 11 -649 0z"/> 
                <path d="M7768 412 c-54 -1 -98 -6 -98 -11 0 -13 130 -20 379 -20 133 -1 232 3 241 9 8 5 13 11 10 12 -12 4 -445 13 -532 10z"/>
                <path d="M2450 395 c0 -13 46 -15 353 -15 324 0 419 6 355 23 -12 4 -177 7 -365 7 -298 0 -343 -2 -343 -15z"/> <path d="M3512 403 c-12 -2 -20 -9 -17 -14 8 -12 692 -12 699 0 3 5 -4 11 -17 15 -25 6 -629 6 -665 -1z"/> <path d="M6607 403 c-20 -2 -35 -8 -32 -14 8 -11 675 -12 693 0 9 5 1 10 -25 14 -40 7 -571 6 -636 0z"/> 
            </g> 
        </svg> <br>
        โดยที่ 
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" class="match-stick" viewBox="0 0 300.000000 57.000000"  preserveAspectRatio="xMidYMid meet">  
            <g transform="translate(0.000000,57.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> 
            <path d="M4944 919 c-62 -11 -137 -42 -179 -74 -89 -68 52 -64 -2532 -70 l-1938 -5 -67 -78 c-84 -97 -90 -184 -20 -266 60 -69 -114 -65 2506 -66 l1944 -1 166 -62 c324 -120 840 -84 902 62 12 28 44 69 70 91 l47 41 -55 109 c-139 273 -449 390 -844 319z m-344 -172 c0 -5 -14 -30 -32 -57 -46 -70 -21 -206 49 -267 l53 -46 -2200 10 -2199 10 -46 53 c-61 71 -57 135 17 219 l62 70 663 6 c1132 9 3633 10 3633 2z"/> 
            </g> 
        </svg>  
        แทน ไม้ขีดไฟ 1 ก้าน <br><br>
        ถ้ามะลิมีไม้ขีดไฟจำนวน 990 ก้าน เพื่อต่อเป็นรูปบันได 1 รูป แล้วมะลิจะสามารถสร้างบันไดไม้ขีดไฟ
        ได้จำนวนขั้นบันไดมากที่สุดกี่ขั้น`,
        answers: [
            {text: "25", correct: false},
            {text: "29", correct: false},
            {text: "30", correct: true},
            {text: "31", correct: false},
            {text: "33", correct: false},
        ]
    },
    {
        question: `โต้งกู้เงินจำกวินเพื่อการลงทุนจำนวน 200,000 บาท โดยโต้งทำสัญญากับวินว่าจะชำระเงินกู้พร้อมดอกเบี้ย
        ทั้งหมดในอีก 2 ปีข้างหน้า และวินกำหนดอัตราดอกเบี้ย 2% ต่อปี โดยคิดดอกเบี้ยแบบทบต้นทุกปี
        เมื่อครบ 2 ปีตามสัญญา โต้งขอเลื่อนเวลาชำระเงินออกไปอีก 1 ปี
        โต้งและวินจึงได้ทำสัญญาฉบับใหม่ โดยกำหนดให้เงินกู้พร้อมดอกเบี้ยทั้งหมดจำก 2 ปีที่ผ่านมา เป็นยอดเงินกู้
        ในสัญญาฉบับใหม่นี้ และปรับอัตราดอกเบี้ยใหม่เป็น 3% ต่อปี โดยคิดแบบทบต้นทุก 6 เดือน
        เมื่อครบกำหนด 1 ปีตามสัญญาฉบับใหม่ โต้งจะต้องชำระเงินกู้พร้อมดอกเบี้ยทั้งหมดกี่บาท`,
        answers: [
            {text: "200,000(1.02)<sup>2</sup>(1.015)<sup>2</sup>", correct: true},
            {text: "200,000(1.02)<sup>2</sup>(1.03)", correct: false},
            {text: "200,000(1.02)<sup>2</sup>(1.03)<sup>2</sup>", correct: false},
            {text: "200,000[(1.02)<sup>2</sup> + (1.015)<sup>2</sup>]", correct: false},
            {text: "200,000[(1.02)<sup>2</sup> + (1.03)<sup>2</sup>]", correct: false},
        ]
    },
    {
        question: `ให้จำนวนเชิงซ้อน 𝑢 = 𝑐𝑜𝑠 𝜋 &frasl; 3 + 𝑖𝑠𝑖𝑛 𝜋 &frasl; 3 และ 𝑣 เป็นรากที่ 3 ของจำนวนเชิงซ้อน 
        𝑐𝑜𝑠 𝜋 &frasl; 2 + 𝑖𝑠𝑖𝑛 𝜋 &frasl; 2 ถ้าส่วนจริงของ 𝑢 &frasl; 𝑣 เป็นจำนวนจริงลบ แล้วส่วนจริงของ 𝑣 เท่ากับเท่าใด`,
        answers: [
            {text: "cos 𝜋 &frasl; 6", correct: true},
            {text: "cos 5𝜋 &frasl; 6", correct: false},
            {text: "cos 5𝜋 &frasl; 4", correct: false},
            {text: "cos 4𝜋 &frasl; 3", correct: false},
            {text: "cos 3𝜋 &frasl; 2", correct: false},
        ]
    },
    {
        question: `ให้ 𝐴 แทนเซตของจำนวนเชิงซ้อน 𝑧 ทั้งหมดในระนาบเชิงซ้อนซึ่งสอดคล้องกับอสมการ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|𝑧 − 𝑖|2 + |𝑧 + 𝑖|2 < 4 <br>
        พิจารณาข้อควำมต่อไปนี้ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ก) ถ้ำ 𝑤 ∈ 𝐴 แล้ว 𝑅𝑒(𝑤) ∈ 𝐴 <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ข) ถ้ำ 𝑤 ∈ 𝐴 แล้ว 𝑤 ̅∈ 𝐴 <br>
        &nbsp;&nbsp;&nbsp;&nbsp;ค) ถ้ำ 𝑤 ∈ 𝐴 แล้ว 𝑤<sup>2</sup> ∈ 𝐴 <br>
        จากข้อความ ก) ข) และ ค) ข้างต้น ข้อใดถูกต้อง`,
        answers: [
            {text: "cos 𝜋 &frasl; 6", correct: true},
            {text: "cos 5𝜋 &frasl; 6", correct: false},
            {text: "cos 5𝜋 &frasl; 4", correct: false},
            {text: "cos 4𝜋 &frasl; 3", correct: false},
            {text: "cos 3𝜋 &frasl; 2", correct: false},
        ]
    },
    {
        question: `กำหนดเวกเตอร์ในระบบพิกัดฉากสามมิติ ดังนี้ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;𝑢 ⃑ = 2𝑖 − 𝑗 + 2𝑘 ⃑ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;𝑣 ⃑ = −𝑖 − 2𝑗 + 3𝑘 ⃑ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;𝑤 ⃑ = 4𝑖 + 3𝑗 + 𝑎𝑘 เมื่อ 𝑎 เป็นจำนวนจริง<br>
        ถ้ำ 𝑢 ⃑ × 𝑣 ⃑ ตั้งฉากกับ 𝑤 ⃑ แล้วค่าของ 𝑎 เท่ำกับเท่าใด`,
        answers: [
            {text: "−21 &frasl; 5", correct: true},
            {text: "-4", correct: false},
            {text: "-1 &frasl; 3", correct: false},
            {text: "1 &frasl; 3", correct: false},
            {text: "1", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    gifPlayer.style.display = 'none'
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    gifPlayer.style.display = 'none'
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    const scorePercentage = (score / questions.length) * 100;
    const gifPlayer = document.getElementById("gifPlayer");
    if(scorePercentage >= 80) {
        nextButton.innerHTML = 'Home'
        nextButton.addEventListener('click', function () {
            window.location.href = 'https://afterlearner.web.app/math1';
        });
    }
    else {
        playGif();
        nextButton.innerHTML = 'Try Again'
        nextButton.addEventListener('click', function () {
            window.location.href = 'https://afterlearner.web.app/math1-exam';
        });
    }
    nextButton.style.display = 'block'
}

function playGif() {
    const gifPlayer = document.getElementById("gifPlayer");
    gifPlayer.src = 'https://media4.giphy.com/media/Vuw9m5wXviFIQ/200w.gif?cid=6c09b9523ukw482vexlepx57prpujk0l7nd3g6x5fuydj793&ep=v1_gifs_search&rid=200w.gif&ct=g';
    gifPlayer.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
});

startQuiz();