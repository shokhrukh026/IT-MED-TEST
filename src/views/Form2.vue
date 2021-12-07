<template>
  <div class="form-content">
    <div class="form-content-body">
    <img class="form-content-body__triangle" :src="require('@/assets/images/triangle-blue.svg')" alt="triangle-blue">
        <h2 class="title form-content-body__title">Шаг 2.</h2>

        <div class="form">
            <div class="form-inputs">

              <div class="subtitle subtitle_border">
                {{person.name ? person.name + ' ' + person.surname.charAt(0) + '.' : 'Пользователь'}}
                </div>

            </div>

            <div class="form-inputs">

              <div class="select_block">
                <span class="subtitle">Имя</span>
                <input type="text" class="classic-input" placeholder="Введите имя" v-model="person.name">
              </div>


              <div class="select_block">
                <span class="subtitle">Фамилия</span>
                <input type="text" class="classic-input" placeholder="Введите фамилию" v-model="person.surname">
              </div>


              <div class="select_block">
                <span class="subtitle">Дата рождения</span>
                <input type="date" v-model="dateBorn" class="classic-input-date">
              </div>


              <div class="select_block">
                <span class="subtitle">Гражданство</span>
                 <select class="classic-input">
                  <option value="volvo" v-for="(item, index) in countries" :key="index">
                    {{item.name}}
                  </option>
                </select>
              </div>

            </div>

          <div class="form-middle">
              <div class="price-block">
                <div class="price-block__top">
                  <div class="price-block__top__first">
                    <span class="mb-1">Виза</span>
                    <span>Страна: Россия</span>
                    <span>Вид визы: Транзитная виза</span>
                  </div>

                  <div class="price-block__top__second">
                    <span></span>
                    <span>Въезд: 11.12.2019</span>
                    <span>Время обработки: 3-4 рабочих дня</span>
                  </div>
                </div>

                <div class="price-block__bottom">
                  <span class="subtitle">Предварительная стоимость:</span>
                  <span>€10.99</span>
                </div>
                
              </div>
          </div>

          <div class="form-bottom">
            <div></div>
            <div class="buttons-block">
              <div class="btn bg-blue mr-5" @click="goToPreviousPage()">
                <img :src="require('@/assets/icons/keyboard_arrow_right.svg')" class="arrow-left">
                <span class="mx-3">Вернуться</span> 
              </div>


              <div class="btn">
                <span class="mr-3">Готово</span> 
                <img :src="require('@/assets/icons/keyboard_arrow_right.svg')">
              </div>
            </div>

          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return{
      countries:[
          {"id": "RU", "name": "Россия"},
          {"id": "DE", "name": "Германия"},
          {"id": "EE", "name": "Эстония"},
      ],
      person:{
        name: '',
        surname: ''
      }
    }
  },
  watch:{
    person: {
      handler(newValue){

      },deep: true
    }
  },
  computed:{

  },
  methods:{
    goToPreviousPage(){
      this.$router.push({name: 'Form'})
    },
    
  }
}
</script>

<style>

</style>