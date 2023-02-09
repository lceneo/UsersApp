# UsersApp
Приложение представляет собой сервис, отображающий карточки покемонов и предоставляющий детальную информацию о них.
## Содержание

1. <a href = "#start">Как запустить проект?</a>
2. <a href = "#stack">Stack-технологий</a>
3. <a href = "#main_page">Страница со списком компаний и фильтрацией<a>
4. <a href = "#info_page">Страница детальной информации</a>
5. <a href = "#additional">Дополнительный проект</a>

<a name = start></a>
## Как запустить проект?
1-ый способ:
  1. Перейти по ссылке http://cn87263.tw1.ru/ (сайт выложен на хостинг)

2-ой способ:
  1. Установить Angular 
  2. Открыть терминал и прописать npm install -g @angular/cli
  3. Скачать проект, открыть его и прописать в терминале npm install
  4. Прописать в терминале npm install
  
## Stack-технологий
- Приложение написано на Angular
- При написании кода использовались GraphQL-API(TCGdex, docs: https://github.com/tcgdex/cards-database)
- При вёрстке использовались принципы БЭМ

<a name = main_page></a>
## Страница со списком компаний и фильтрацией

### Список компаний
На данной странице выводятся полученные с GraphQL-API карточки покемонов. Реализована пагинация.
<br><br>
![image](https://user-images.githubusercontent.com/94864786/217897054-be967cb9-6262-4d35-9bc7-11430a711c81.png)
<br><br>


### Фильтрация
Присутствуют 3 фильтра(по имени покемона, длине имени, наличию изображения(стоит уточнить, что отсутствие изображений у некоторых покемонов не является моей ошибкой, в базе данных API некоторые карточки имеют изображения, а некоторые - нет)).
Фильтры могут быть включены в любом их сочетании. 
<br><br>
![image](https://user-images.githubusercontent.com/94864786/217897592-041e2931-817a-4ad4-93c5-a2ca56de2517.png)
<br><br>

<a name = info_page></a>
## Страница детальной информации

При щелчке по любой карточке из списка(стрелочка справа от имени покемона) происходит редирект на данную страницу.
На ней указана детальная информация по покемону. Щёлкнув по кнопке "Вернуться" происходит редирект на страницу со списком всех карточек. За счёт сохранения состояния списка и фильтров, Вы вернётесь на ту же страницу, на которой были и все фильтры сохранятся
<br><br>
![image](https://user-images.githubusercontent.com/94864786/217897918-dbcbabc2-03c8-4ced-a34b-d9364b94c3ba.png)
<br><br>
<a name = additional></a>
## Дополнительный проект
1.Также в рамках 1 семестра этого года я принимал участие в проекте создания Агрегатора репетиторов(аналог Profi.ru) от компании 66bit.
Ссылка на репозиторий: https://github.com/lceneo/tutor-aggregator-main
<br>
2.Недавно делал pet-project на чистом ts. Проект представляет собой генератор случайных компаний с ленивой подзагрузкой данных с возможностью создавать собственные компании. Реализована авторизация, имеется инеграция с API-Яндекс карт и Random Data API.
Ссылка на репозиторий: https://github.com/lceneo/CompaniesApp
