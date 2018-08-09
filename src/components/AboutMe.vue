<template>
  <div>
    <v-app>
      <h1 class="display-2 mx-auto mb-4" center>
        Добро пожаловать на мой сайт
      </h1>

      <div class="subheading">
          <span class="mb-2">
            Добро пожаловать на мой сайт.Я увлекаюсь математикой,информатикой и программированием. <br>
            Хочу создавать цифровой контент.Сейчас я студент первого курса по программе "прикладная математика" в университете МИРЭА. <br>
            В последние несколько лет я работал над многими независимыми проектами наряду с моим формальным образованием. <br>
            Моей целью является стать сильным разработчиком,чтобы в дальнейшем менять мир к лучшему,создавать иннованции. <br>
            У меня есть знания в JavaScript, Python, html,css.
            Есть опыт создания пользовательских веб-приложений с использованием JavaScript,html,css,firebase,vue.js (как,например,этот сайт) <br>
          </span>

        <v-divider class="mt-2 mb-2"></v-divider>
      </div>

      <h1 class="display-2 mx-auto mt-4" center>
        Доп. Образование
      </h1>

      <div class="subheading mt-4">
          <span>Получал дополнительное образование в <a href="https://foxford.ru/" target="_blank"> foxford </a> (2015-2018): <br>
            <ul>
              <li>Курсы по математике</li>
              <li>Курсы по по информатике</li>
              <li>Курсы по программированию</li>
              <li>Курсы по английскому яз.</li>
            </ul>
          Учился в онлайн-университете <a href="https://netology.ru/" target="_blank">Netology</a> :
            <ul>
              <li>Курс JavaScript в браузере: создаем интерактивные веб-страницы (Диплом защитил)</li>
              <li>Курс Python: программирование на каждый день и сверхбыстрое прототипирование</li>
            </ul>
          <br></span>
        <v-divider class="mt-2 mb-2"></v-divider>

      </div>

      <h1 class="display-2 mx-auto mt-4" center>
        Проекты
      </h1>

      <div class="subheading mt-4">

        <span class="title">Мои проекты:</span> <br>
        <a class="ml-2" href="http://mcards.tk" target="_blank">Карточки для запоминания</a> <br/>
        <a class="ml-2" href="http://fastcot.tk/Menu" target="_blank">Тренажер устного счета</a> <br>
        <a class="ml-2" href="http://onlinemath.tk" target="_blank">Онлайн-тренажер устного счета</a> <br>
        <a class="ml-2" href="http://netology.tk" target="_blank">Стена с карточками</a> <br>

        <v-divider class="mt-2 mb-2"></v-divider>

      </div>


      <h1 class="display-2 mx-auto mt-4" center>
        Контакты
      </h1>

      <div class="subheading mt-4">
        <a href="https://github.com/Nwke" target="_blank">Github</a> <br>
        <a href="https://vk.com/heyhodeonis" target="_blank">Vkontakte</a>
      </div>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "about-me"
  }
</script>

<style scoped>

  .under {
    text-decoration: underline;
  }
</style>
