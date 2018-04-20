# Описание
  Тестовое задание Junior Frontend Developer

# Установка
  Склонируйте или загрузите репозиторий
  ```Shell
  $ git clone git@github.com:kyv81/bd-test-task.git
  ```
  Установите зависимости командой
  ```shell
    yarn install
  ```
  или
  ```shell
    npm install
  ```

  Запустите `yarn` или `npm` с командой `start` для запуска dev-сервера
  ```Shell
  yarn start
  ```
  или
  ```Shell
  npm run start
  ```
# Сборка
  Запустите `yarn` или `npm` с командой `build` для сборки проекта (выходная директория `./build`)
```Shell
yarn build
```
  или
```Shell
npm run build
```

***


## Задача

> Необходимо сделать 3-страничное SPA на React.

### Страница 1
Home – инпут и под ним текстовый блок "Приветствую, %имя%". При вводе текста в инпут %имя% заменяется на этот текст.


### Страница 2
Counter – две кнопки "Increment" и "Decrement", span с числом 0 и кнопка "Reset".  При нажатии на кнопку значение увеличивается или уменьшается на 1 в зависимости от кнопки. При нажатии на "Reset" значение счетчика сбрасывается в 0.

### Страница 3:
GIF – блок с img и кнопка "Refresh". При нажатии на "Refresh" в img загружается одна из гифок с https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC.

Для навигации слева необходимо сделать navbar.

Кнопки сделать компонентами со стилем на sass или styled-components (вы можете использовать css, если не знаете sass и styled-components)

