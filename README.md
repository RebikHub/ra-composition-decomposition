[![Build status](https://ci.appveyor.com/api/projects/status/6ti883jm3cgx7gj0/branch/master?svg=true)](https://ci.appveyor.com/project/RebikHub/ra-composition-decomposition/branch/master)

[Декомпозиция](https://rebikhub.github.io/ra-composition-decomposition/)

===

Вы работаете в стартапе, который решил тягаться с самим Яндексом в части предоставления контента. Это, конечно же шутка, но задача нешуточная.

Вам принесли дизайн-макет, похожий на этот:

![](./assets/decomposition.png)

Что вам нужно сделать:

1. Разбейте весь интерфейс на компоненты и в файле каждого компонента напишите буквально одну строку комментария, за что данный компонент отвечает (можете использовать формат JSDoc, подсмотреть можно, например, у ребят из Alfa Laboratory: https://github.com/alfa-laboratory/arui-feather/blob/v16.0.0/src/dropdown/dropdown.jsx).
1. Постарайтесь повторящиеся компоненты сделать настраемыми за счёт `props`. Допустим, у каждой новости в списке новостей: иконка, текст и ссылка.

Функциональность и стилизацию реализовывать не нужно, достаточно базового оформления (чтобы видно было все блоки).