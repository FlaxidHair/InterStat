<template>
  <div class="add-item">
    <div class="add-item--inner">
      <h2 class="title add-item__title">Новое собеседование</h2>
      <div class="add-item__inputs inputs">
        <input type="text" placeholder="Компания" class="inputs__item inputs--company" />
        <input
          type="text"
          placeholder="Описание вакансии(ссылка)"
          class="inputs__item inputs--desc"
        />
        <input type="text" placeholder="Контакт(имя)" class="inputs__item inputs--contact" />
        <input
          type="text"
          placeholder="Telegram username HR"
          class="inputs__item inputs--contact-telegram"
        />
        <input
          type="text"
          placeholder="Viber телефон Ник HR"
          class="inputs__item inputs--contact-viber"
        />
        <input type="text" placeholder="Телефон HR" class="inputs__item inputs--contact-phone" />

        <button class="inputs__button">Создать собеседование</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../assets/scss/blocks/addItem';
</style>
