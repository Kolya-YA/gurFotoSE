---
title: "Глубина резкости: диафрагма и фокусное расстояние"
description: "Управляйте глубиной резкости: выбирайте диафрагму и фокусное расстояние для выразительных портретов и объёмных пейзажей."
date: 2025-05-27
---
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 1.jpg" alt="Изображение, иллюстрирующее изменение зоны резкости по глубине кадра. Автор Ю.Гуревич" >}}
*Изображение автора*

## Введение

Глубина резкости *(***Г***лубина ***Р***езко ***И***зображаемого ***П***ространства, ***ГРИП***)* — один из инструментов, позволяющих изменять характер изображения.

В статье мы подробно разберём, как именно три главных параметра, определяющих ГРИП — *диафрагма*, *фокусное расстояние* и *дистанция фокусировки* — влияют на зону резкости, и обсудим, как применять эти знания на практике.

### Что такое глубина резкости и зачем она нужна

Глубина резкости — зона в изображении, в пределах которой, объекты воспринимаются резкими. Она определяется размером "**круга нерезкости**" (*circle of confusion*): если размытие точки остаётся меньше порога восприятия глазом, деталь выглядит резкой.

{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 2.jpg" alt="Макрофотография фрагмента коррпуса фотокамеры. Автор Ю.Гуревич" >}}
*Изображение автора*

Глядя на фотографию, вы, не задумываясь, определите, какие части изображения выглядят резкими, а какие ─ нет... вопрос в другом: как формализовать эту оценку? Одной задач статьи, должен стать ответ на этот вопрос.

- В портретной съёмке малая глубина резкости позволяет выгодно отделить модель от фона, акцентируя внимание именно на лице и создавая приятное «боке», если объектив в состоянии создать эстетичный "рисунок нерезкости".

- В пейзажной и архитектурной фотографии наоборот, важна большая ГРИП, чтобы максимально чётко передать все планы — от переднего до далёкого горизонта.

### Краткий обзор трёх факторов, влияющих на ГРИП

1. **Диафрагма** (*Aperture*).
Относительное отверстие объектива, выраженное в f-числе (например, f/1.4, f/8, f/16), является одним из инструментов управления ГРИП. При широкой диафрагме (*малое f-число*) зона резкости становится очень узкой, а при узком отверстии (*большое f-число*) — ГРИП значительно расширяется.

2. **Фокусное расстояние** (*Focal Length*).
Объективы с коротким фокусным расстоянием (широкоугольные) создают более глубокую зону резкости, а длиннофокусные телеобъективы — наоборот, сужают её при прочих равных настройках.

3. **Дистанция до объекта** (*Subject Distance*).
Чем ближе находится объект, на который вы фокусируетесь, тем *уже* становится ГРИП: при макросъёмке зона резкости может составлять только пару миллиметров. Увеличение дистанции фокусировки расширяет зону резкости, порой очень значительно.

## Теоретические основы

Сейчас мы обсудим строгое определение глубины резкости (*ГРИП*), разберём ключевое понятие "**круг нерезкости**" и выведем формулу для расчёта границ зоны ГРИП.

### Определение глубины резкости

Как уже упоминалось раньше, *ГРИП* — это диапазон расстояний ***перед*** и ***за*** точкой фокусировки, в пределах которого, объекты воспринимаются как *достаточно резкие*.

ГРИП занимает всю зону расстояний от ближней до дальней границы резкости. Между этими границами размер *круга нерезкости* не превышает допустимого значения, при котором человеческий глаз не замечает его размытости.

ГРИП зависит от трёх основных параметров: **диафрагмы**, **фокусного расстояния** и **дистанции до объекта**.

### Круг нерезкости

**Круг нерезкости** (*Circle of Confusion или CoC*) — это изображение точки источника света, сфокусированной не совсем точно на матрице (или плёнке).

Идеальная «точка» превращается в небольшой кружок, размер которого зависит от отклонения от идеальной плоскости фокуса.
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 3.jpg" alt="Схема изменение резкости вокруг точки фокусировки. Автор Ю.Гуревич" >}}
*Изображение автора*

Схема вверху иллюстрирует "фантастическую" ситуацию: такое можно увидеть, если бы возможно было посмотреть сверху на картину изменения резкости при удалении от точки фокусировки... Вы можете наблюдать, как некое тело теряет четкость контуров при удалении от точки фокусировки в любую сторону от камеры.

И если ближайшие позиции тела к точке фокусировки можно считать "условно резкими", то тело, в следующих за ними позициях, явно имеет размытые контуры. Вот это допущение: что можно считать резким изображением, а что нет, определяет границы ГРИП, в расчетах которой важное значение имеет *круг нерезкости* или как его сокращенно называют "**CoC**".

Допустимый *CoC* определяется размером сенсора и типичным расстоянием просмотра (печать или экран): если диаметр круга меньше этого порога, глаз воспринимает объект как резкий.

Именно величина допустимого круга нерезкости закладывается в формулы расчёта ГРИП.

### Формула глубины резкости

**Для начала введем понятие "*тонкой оптики*"**

**Тонкая оптика** (*тонкая линза*) — это упрощённая модель оптической системы, в которой толщина линзы считается пренебрежимо малой по сравнению с её радиусами кривизны и другими характерными размерами.

**Простая аналогия:** представьте, что у вас есть очень узкий кусочек стекла, настолько тонкий, что его края почти не влияют на путь лучей — вся «магия» преломления происходит в одной плоскости. Именно такую упрощённую картину мы и называем **тонкой оптикой**.

Как модель **тонкая линза** может быть использована для упрощенного представления такой сложной системы как фотообъектив, если нас волнуют только те его свойства, которые касаются геометрической оптики.

Для "**тонкой оптики**" глубину резкости можно вычислить по следующей классической формуле:

$$
\mathrm{DoF}\;\approx\;
\frac{2\,N\,c\,s^2\,f}{\,f^2 - N\,c\,s\,},
$$
где:

f — фокусное расстояние объектива;

N — относительное отверстие (диафрагменное число);

c — допустимый диаметр круга нечеткости;

s — расстояние от камеры до объекта.

Из неё часто выводят более развернутый вариант с формулировкой ближней (Dₙ) и дальней \(D_{f}\) границ:

$$
D_{n} \;=\; \frac{H\,s}{\,H + \bigl(s - f\bigr)\,}
$$

$$
D_{f} \;=\; \frac{H\,s}{\,H - \bigl(s - f\bigr)\,}
$$

При этом H — гиперфокальное расстояние, рассчитываемое как

H = (f²) / (N c) + f

### Как пользоваться формулой

- Задайте f, N, c и s (например, 50 мм, f/2, 0,03 мм, 2 м).

- Рассчитайте H и подставьте в формулы для Dₙ и \(D_{f}\).

- Разница (\(D_{f}\) – Dₙ) даст численное значение глубины резкости в метрах (или миллиметрах).

Этот фундамент позволит нам в следующих разделах наглядно видеть, как изменение каждого из трёх параметров — диафрагмы, фокусного расстояния и дистанции до объекта — расширяет или сужает зону резкости.

***ХОРОШАЯ НОВОСТЬ:*** **Вам никогда не придется пользоваться этими формулами в практической работе... но знать, как можно аналитически определить границы зоны резкости, полезно.**

## Диафрагма и её влияние на глубину резкости

### Что такое диафрагма и f-число

**Диафрагма** — это регулируемое отверстие в объективе, которое контролирует количество света, попадающего на матрицу камеры. Размер этого отверстия обозначается *f-числом* или *диафрагменным числом*, например, f/1.4, f/8, f/16 ─ подробней читайте [здесь](http://localhost:1313/blog/exposure-triangle/).

***f-число*** определяется как отношение фокусного расстояния объектива к диаметру отверстия диафрагмы:

$$
f\text{-число} = \frac{f}{D},
$$
где:

𝑓 — фокусное расстояние объектива,

𝐷 — диаметр отверстия диафрагмы.

Таким образом, при одинаковом фокусном расстоянии, чем меньше *f-число*, тем шире открыта диафрагма и больше света проходит через объектив, например, *f/1.4* означает большую апертуру, чем *f/16*.

### Влияние диафрагмы на глубину резкости

Диафрагма играет ключевую роль в управлении глубиной резкости:

- **Широко открытая диафрагма (малое f-число, например, f/1.4):** создает малую глубину резкости. Это означает, что только узкий диапазон расстояний будет в фокусе, а остальная часть изображения будет размыта. Такой эффект часто используется в портретной фотографии для отделения объекта от фона.  
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 4.jpg" alt="Джазовые музыканты на Карловом мосту. Автор Ю.Гуревич" >}}
*Изображение автора*

- **Закрытая диафрагма (большое f-число, например, f/16):** увеличивает глубину резкости. Более широкий диапазон расстояний будет в фокусе, что полезно в пейзажной фотографии, где важно, чтобы как передний, так и задний планы были резкими.  
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 5.jpg" alt="Вид на Дунай с правого берега. Автор Ю.Гуревич" >}}

### Примеры: эффекты f/1.4, f/8, f/16

- **f/1.4:** При такой широкой диафрагме глубина резкости очень мала. Это позволяет изолировать объект от фона, создавая эффект размытия (боке). Однако требуется точная фокусировка, особенно при съёмке с близкого расстояния.

- **f/8:** Среднее значение диафрагмы, обеспечивающее баланс между глубиной резкости и количеством света. Подходит для большинства ситуаций, включая уличную и репортажную съёмку.

- **f/16:** Закрытая диафрагма, обеспечивающая большую глубину резкости. Идеально для пейзажной фотографии, где важно, чтобы весь кадр был в фокусе. Однако при таких значениях может возникать дифракция, снижающая резкость изображения.

Понимание влияния диафрагмы на глубину резкости позволяет контролировать резкость изображения и использовать размытие для выделения объектов или создания определённого настроения в кадре.

## Фокусное расстояние и его влияние на глубину резкости

**Фокусное расстояние объектива** — параметр, определяющий угол обзора и масштаб изображения. Оно измеряется в миллиметрах и влияет на перспективу, глубину резкости и характер изображения.

### Влияние фокусного расстояния на глубину резкости

Глубина резкости (ГРИП) зависит от нескольких факторов, включая диафрагму, расстояние до объекта и фокусное расстояние объектива. При прочих равных условиях:

- **Короткое фокусное расстояние** (*например, 35 мм*) обеспечивает большую глубину резкости, что делает его подходящим для пейзажной и архитектурной фотографии.  
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 6.jpg" alt="Трамвайные пути на набережной Дуная. Автор Ю.Гуревич" >}}

- **Длинное фокусное расстояние** (*например, 85 мм*) приводит к меньшей глубине резкости, позволяя изолировать объект от фона, что особенно полезно в портретной съёмке.  
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 7.jpg" alt="Портрет молой женщины на морском фоне. Автор Ю.Гуревич" >}}

### Различие между широкоугольными и телеобъективами

**Широкоугольные объективы** (*фокусное расстояние менее 40 мм*):

- Обеспечивают широкий угол обзора.

- Имеют большую глубину резкости, даже при открытой диафрагме.

- Подходят для съёмки пейзажей, архитектуры и интерьеров.

**Телеобъективы** (*фокусное расстояние более 60 мм*):

- Обеспечивают узкий угол обзора.

- Имеют меньшую глубину резкости, что позволяет выделить объект на фоне.

- Идеальны для портретной и спортивной съемки, а также для фотографирования дикой природы.

Таким образом, выбор между широкоугольным и телеобъективом зависит от жанра съёмки и желаемого визуального эффекта.

**Важно:** В рамках статьи мы не рассматриваем "нормальную" оптику, так как она менее наглядна для обсуждения данной темы. Нужно знать, что "нормальной" оптикой называются объективы, фокусное расстояние которых приблизительно равно длине диагонали кадра ─ диагональ "полного кадра" составляет 42 мм. Поэтому к "нормальной оптике", для кадра 36х24 мм, считаеются объективы с фокусным расстоянием от 45 до 55 мм.
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 8.jpg" alt="Девушки идут по улице мимо вечерних витрин. Автор Ю.Гуревич" >}}
*Фото автора, 50/1.4, f/1.6*

### Практические примеры: 35 мм и 85 мм

**35 мм объектив:**

- Обеспечивает широкий угол обзора.

- Подходит для уличной, документальной и пейзажной фотографии.

- При диафрагме f/8 обеспечивает значительную глубину резкости, позволяя сохранять резкость как на переднем, так и на заднем плане.

{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 9.jpg" alt="Портрет мужчины с дочерью-подростком. Автор Ю.Гуревич" >}}
*Фото автора*

**85 мм объектив:**

- Обеспечивает узкий угол обзора, сжатую перспективу и мягкое размытие фона.

- Идеален для портретной съёмки, позволяя изолировать объект от фона.

- Создаёт малую глубину резкости, подчёркивая объект съёмки.

{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 10.jpg" alt="Портрет молой женщины на морском фоне. Автор Ю.Гуревич" >}}
*Фото автора*

Понимание влияния фокусного расстояния на глубину резкости позволяет фотографу выбирать объективы, соответствующие его творческим задачам и жанру съёмки.

## Дистанция фокусировки и её влияние на глубину резкости

**Дистанция фокусировки** — это расстояние от камеры до объекта съёмки. Оно оказывает значительное влияние на глубину резкости, определяя, какая часть изображения будет выглядеть резкой.

### Влияние дистанции фокусировки на глубину резкости

При прочих равных условиях, чем ближе объект съёмки к камере, тем меньше глубина резкости. Это означает, что при съёмке с близкого расстояния зона резкости будет узкой, и малейшее смещение фокуса может привести к ошибке.

Например, при макросъёмке, где объект находится очень близко к объективу, глубина резкости может составлять всего несколько миллиметров.

С другой стороны, при увеличении дистанции фокусировки глубина резкости увеличивается. Это особенно заметно при съёмке пейзажей или архитектуры, где объекты находятся на значительном расстоянии от камеры. В таких случаях большая часть сцены может быть в фокусе, даже при относительно широкой диафрагме.

Важно знать, что глубина резкости изменяется пропорционально квадрату дистанции фокусировки. Это означает, например, что при увеличении расстояния до объекта в два раза глубина резкости увеличивается в четыре раза.

### Гиперфокальное расстояние

**Гиперфокальное расстояние** — это минимальное расстояние фокусировки, при котором глубина резкости простирается от половины этого расстояния до бесконечности. Фокусировка на гиперфокальное расстояние позволяет максимально увеличить зону резкости, что особенно полезно в пейзажной фотографии.

Например, если гиперфокальное расстояние для определённой комбинации фокусного расстояния и диафрагмы составляет 5 метров, то при фокусировке на эту точку всё от дистанции 2,5 метров до бесконечности будет в фокусе.

Расчёт гиперфокального расстояния зависит от фокусного расстояния объектива, значения диафрагмы и допустимого круга нерезкости. Существуют специальные таблицы и калькуляторы, которые помогают определить гиперфокальное расстояние для различных условий съёмки.

Использование гиперфокального расстояния позволяет фотографу добиться максимальной резкости в кадре без необходимости постоянно менять фокусировку, что особенно полезно при съёмке статичных сцен с большим количеством деталей.

Понимание влияния дистанции фокусировки на глубину резкости, а также использование концепции гиперфокального расстояния, важно для достижения желаемой резкости и художественного эффекта в фотографии.
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 11.jpg" alt="Сцена из городской жизни. Раннее утро. Автор Ю.Гуревич" >}}
*Фото автора*

Фокусное расстояние 24 мм, f/4.5, 1/100 сек. Вся сцена от переднего плана до фона входит в зону резкости ─ типичный случай использования гиперфокального расстояния.

## Комбинированный эффект

Взаимодействие трёх ключевых параметров — *диафрагмы*, *фокусного расстояния* и *дистанции фокусировки* — определяет итоговую глубину резкости. При одновременной настройке этих параметров важно понимать, как изменение одного влияет на остальные, а также как их сочетание отражается на зоне резкости.

### Практические советы

- **Используйте DoF-таблицы или калькуляторы** (*например, PhotoPills DoF Table*) для быстрой оценки зоны резкости по заданным параметрам.

- **Комбинируйте параметры:** если меняется диафрагма с f/2.8 на f/8, можно одновременно увеличить фокусное расстояние или приблизиться к объекту для сохранения желаемого художественного размывания.

- **Проверяйте результат на месте:** в полевых условиях ориентируйтесь не только на расчёты, но и на визуальный контроль через видоискатель или экран, особенно при съёмке макро и портретов.

- **Учитывайте дифракцию:** при очень узких диафрагмах (f/16 и выше) оптика может начать терять резкость из-за дифракции, что снизит общую чёткость, несмотря на расширенную ГРИП.

Управление глубиной резкости — это всегда компромисс между тремя взаимосвязанными параметрами. Правильная комбинация диафрагмы, фокусного расстояния и дистанции фокусировки позволяет достичь желаемого эффекта, сохраняя при этом техническую чёткость кадра.

## Практические примеры

### Портретная съёмка

При портретной съёмке часто используют широко открытую диафрагму (малое f-число), чтобы максимально отделить модель от фона и создать мягкое «боке».
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 12.jpg" alt="Портрет девушки-йога. Автор Ю.Гуревич" >}}
*Фото автора*

- **Настройки камеры:** фокусное расстояние 120 мм, диафрагма f/4.5, ISO 200, выдержка 1/800 с.

- **Эффект:** глубина резкости ограничена несколькими сантиметрами перед и за плоскостью фокуса, лицо модели остаётся кристально чётким, а фон сглаживается до мягких световых пятен.

- **Совет по композиции:** фокусируйтесь на глазу модели, поскольку при малой ГРИП даже минимальное смещение точки фокуса приводит к потере резкости.

- **Освещение:** используйте боковое или диагональное мягкое освещение, чтобы подчеркнуть рельеф лица и обеспечить плавный переход светотени в фоне.

- **Рекомендация по объективу:** портретные объективы с фокусным расстоянием 85 мм и светосилой f/1.4–f/2.0 дают наиболее «бархатистое» размытие фона и приятное боке, но можно использовать и телезумы, как в данном случае: 70-200/2.8

### Пейзажная съёмка при f/13

Для пейзажной фотографии характерна большая глубина резкости, когда важно сохранить резкие детали от переднего плана до горизонта.
{{< imgr src="depth-of-field-the-effect-of-aperture-and-distance/depth-of-field-the-effect-of-aperture-and-distance 13.jpg" alt="Вид на реку Маныч. Автор Ю.Гуревич" >}}
*Фото автора*

- **Настройки камеры:** широкоугольный объектив 14 мм, диафрагма f/13, ISO 200, выдержка 1/80 с (использован штатив).

- **Эффект:** зона резкости простирается на всю глубину сцены.

- **Совет по фокусировке:** при установке диафрагмы на f/13 сфокусируйтесь на гиперфокальном расстоянии (H), чтобы обеспечить резкость от половины H до бесконечности.

- **Проверка дифракции:** будьте внимательны: при значениях f/11–f/16 на некоторых объективах может появляться слегка сниженная резкость из-за дифракции, поэтому протестируйте оптимальное значение f/числа для вашего объектива.

Эти кейсы демонстрируют, как осознанный выбор диафрагмы и фокусного расстояния вместе с учётом дистанции до объекта позволяет добиваться желаемого художественного эффекта — от выразительного портретного боке до объёмных, детализированных пейзажей.

## Расчёты и инструменты

**Дальше следует мнформация об инструментах, позволяющих определять границы ГРИП... возможно, в каких-то случаях технической съемки это используется, но уверенно могу сказать, что подавляющее число фотографов определяют гранизы резкости исходя из опыта и тестовых снимков.**

### Мобильное приложение Photographer’s Friend

**Photographer’s Friend** — одно из самых популярных приложений для iOS и Android, позволяющее за секунды получить значения ближней и дальней границы зоны резкости и гиперфокального расстояния.

Для расчёта необходимо выбрать формат сенсора (например, full-frame или APS-C), указать f-число, фокусное расстояние и расстояние до объекта — приложение тут же отобразит ГРИП и H в метрах или футах.

При тапе на метку «*Hyperfocal Distance*» ползунок фокусного расстояния автоматически устанавливается на гиперфокальное значение, что позволяет быстро перейти к съёмке с максимальной зоной резкости.

Приложение поддерживает графическое отображение ГРИП и позволяет сохранять настройки для разных камер и объективов, что удобно при серии съёмок.

### Онлайн-калькулятор Cambridge in Colour

**Cambridge in Colour** предлагает гибкий веб-инструмент, который учитывает не только f-число, фокусное расстояние и дистанцию, но и размер конечного изображения и расстояние просмотра.

Выпадающие меню позволяют задать формат сенсора, выбрать предполагаемый размер отпечатка или экранного кадра, а также указать расстояние, с которого будет рассматриваться фотография — всё это влияет на допустимый размер круга нечеткости и итоговую ГРИП.

Калькулятор снабжён графиком и полями для ввода продвинутых параметров (планируемый размер экспозиции, расстояние просмотра), что делает его полезным как для любителей, так и для профессионалов.

Результаты расчёта можно экспортировать или распечатать — это особенно удобно при выездных съёмках и работе в студии.

### Другие полезные инструменты

**PhotoPills** — универсальный калькулятор для фотографов, включающий DoF-модуль с наглядными диаграммами и возможностью сохранения сценариев съёмки.

**Omni Calculator** предлагает веб-версию DoF-калькулятора с простым интерфейсом и минимальным набором полей для быстрого расчёта.

Для пользователей Android доступно приложение **Photo Friend exposure & meter**, которое помимо экспозиции включает ГРИП-калькулятор с графическим отображением зоны резкости.

При работе со сложными форматами (MFT, средний формат) можно воспользоваться онлайн-сервисом **DoFMaster** или специализированными форумными гайдами, например, на **Photo.StackExchange**, где рассматриваются нюансы расчёта ГРИП на различных сенсорах.

Использование этих инструментов позволяет точно планировать съёмку и гарантировать нужную зону резкости, будь то портрет с выразительным боке или широкий пейзаж с детализированным передним и задним планом, но думаю, что в своей практической деятельности, вы будете руковоствоваться опытом, который вскоре появится.

## Заключение

Вместе рассмотренные параметры — **диафрагма и фокусное расстояние** — являются краеугольными камнями управления глубиной резкости в фотографии. Открытая диафрагма (малое f-число) создаёт эффект размытого фона, позволяя изолировать объект съёмки, тогда как большая диафрагма расширяет зону резкости, делая чётким как передний, так и задний планы.

Фокусное расстояние, в свою очередь, напрямую влияет на масштаб сцены и ГРИП: широкоугольные объективы дают большую глубину резкости, а длиннофокусные объективы — наоборот, сужают её.

Важно помнить, что эти два параметра всегда действуют совместно: при изменении одного из них выходят на первый план дополнительные факторы, такие как дистанция до объекта и допустимый размер круга нечеткости.

Практические советы по применению знаний о диафрагме и фокусном расстоянии:

Используйте малое f-число для портретов
Чтобы создать выразительное «боке» и акцентировать внимание на объекте, выбирайте диафрагмы в диапазоне f/1.4–f/2.8, особенно с объективами 85–135 мм.

**Применяйте средние значения диафрагмы для универсальных ситуаций**
Диапазон f/5.6–f/8 обеспечивает баланс между резкостью объекта и небольшим размытием фона, что удобно для уличной и репортажной съёмки.

**Закрывайте диафрагму для пейзажей**
При фокусном расстоянии 24–35 мм используйте диафрагмы f/11–f/16, чтобы обеспечить максимальную DoF от переднего плана до горизонта.

**Фокусное расстояние подбирайте под жанр**
Для пейзажей выбирайте широкоугольные объективы (16–35 мм), для портретов — средне-теле (85–135 мм), а для детализации на дальних дистанциях — телеобъективы (200 мм и выше).

**Контролируйте дистанцию до объекта**
Чем ближе объект к камере, тем уже становится зона резкости; для съёмки макро применяйте штатив и фокус-рэки, чтобы точно контролировать каждый миллиметр ГРИП.

**Учитывайте влияние дифракции**
При значениях диафрагмы f/16 и выше резкость может снижаться из-за дифракции, поэтому тестируйте оптимальный диапазон f-чисел для вашего объектива.
