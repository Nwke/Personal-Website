<template>
    <div>
      <v-app>
        <h1 class="display-2 mx-auto mb-4" center>
          Приветствую,читатель
        </h1>

        <div class="subheading">
          <span class="mb-2">
            Итак,я обычный парень,который решил вести свой публичный дневник.<br>
            Отднюдь на этом сайте я буду делиться с вами своей жизнью:<br>
            Выкладывать видео,писать,о чем думаю.Инсайды.<br>
            <span class="under">Цель сего сайта</span>: Вы сможете понять,какой я человек.
            Я же хочу здесь отследить свой прогресс за длительное время.<br>
          </span>
          <span class="mb-5">
            <span class="under">Причина возникновения подобного:</span>
            Таким образом я решил заявить о себе.<br>
          </span>

          <v-divider class="mt-2 mb-2"></v-divider>
          <span class="under mb-5">А теперь более конкретно:</span> <br>
          На текущий момент(17.03.18) Мне 17 лет.Учусь в 11 классе.Увлекаюсь математикой и программированием. <br>
          Программированием я начал интересоваться примерно чуть более 1.5 года назад.<br>
          И вот с тех пор пишу какие-то небольшие приложения для себя,ради опыта.<br>
          <v-divider class="mt-2 mb-2"></v-divider>
        </div>

        <h1 class="display-2 mx-auto mt-4" center>
          Достижения
        </h1>

        <div class="subheading mt-4">
          <span>Получал дополнительное образование в <a href="https://foxford.ru/" target="_blank"> foxford </a> (2017-2019) <br>
          Учился в онлайн-университете <a href="https://netology.ru/" target="_blank">Netology.ru</a>
          (13.9.17 по 25.12.17) по направлению программирования (Курс по javascript) и защитил диплом<br></span>
          <span class="title">Мои проекты:</span> <br>
          <a class="ml-2" href="http://mcards.tk" target="_blank">Карточки для запоминания</a> <br/>
          <a class="ml-2" href="http://fastcot.tk/Menu" target="_blank">Тренажер устного счета</a> <br>
          <a class="ml-2" href="http://onlinemath.tk" target="_blank">Онлайн-тренажер устного счета</a> <br>
          <a class="ml-2" href="http://netology.tk" target="_blank">Стена с карточками</a> <br>
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
