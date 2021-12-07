<template>
  <div class="form-content">
    <div class="form-content-body">
    <img class="form-content-body__triangle" :src="require('@/assets/images/triangle-blue.svg')" alt="triangle-blue">
        <h2 class="title form-content-body__title">Шаг 1.</h2>

        <div class="form">
            <div class="form-inputs">

              <div class="select_block">
                <span class="subtitle">Выберите страну</span>
                <select class="classic-input" v-model="countrySelected">
                  <option :value="item.id" v-for="(item, index) in countries" :key="index"> 
                    {{item.name}}
                  </option>
                </select>
              </div>

              <div class="select_block">
                <span class="subtitle">Тип визы</span>
                <select class="classic-input" v-model="countrySelected">
                  <option value="volvo" v-for="(item2, index2) in types" :key="index2">
                    {{item2.name}}
                  </option>
                </select>
              </div>

            </div>

            <div class="form-inputs">

              <div class="select_block">
                <span class="subtitle">Въезд</span>
                <input type="date" v-model="arrive" class="classic-input-date">
              </div>


              <div class="select_block">
                <span class="subtitle">Выезд</span>
                <input type="date" v-model="leave" class="classic-input-date">
              </div>


              <div class="select_block">
                <span class="subtitle">Количество заездов</span>
                <select class="classic-input" v-model="tryAmountSelected">
                  <option :value="item3.id" v-for="(item3, index3) in tryGo" :key="index3">
                    {{item3.name}}
                  </option>
                </select>
              </div>


              <div class="select_block">
                <span class="subtitle">Время обработки</span>
                <select class="classic-input" v-model="timeSpendSelected">
                  <option :value="item4.id" v-for="(item4, index4) in timespent" :key="index4">
                    {{item4.name}}
                  </option>
                </select>
              </div>

            </div>



          <div class="form-bottom">
            <div class="price-block">
              <span class="subtitle">Предварительная стоимость:</span>
              <span>{{cost}}</span>
            </div>

            <div class="btn" @click="goToNextPage()">
              <span class="mr-3">Продолжить</span> 
              <img :src="require('@/assets/icons/keyboard_arrow_right.svg')" alt="">
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
      arrive: '',
      leave: '',
      countrySelected: 'RU',
      tryAmountSelected: 'single',
      timeSpendSelected: 'fast',
      countries:[
          {"id": "RU", "name": "Россия"},
          {"id": "DE", "name": "Германия"},
          {"id": "EE", "name": "Эстония"},
      ],
      types: [
        {"id": "bis", "name": "Деловая виза", "price": "20,80"},
        {"id": "tur", "name": "Туристическая виза", "price": "10,30"},
        {"id": "trz", "name": "Транзитная виза", "price": "50,50"},
      ],
      tryGo: [
          {"id": "single", "name": "Одиночный заезд", "relative": "RU", "price": "2"},
          {"id": "multi", "name": "Многоразовый заезд", "relative": "RU", "price": "5"},
          {"id": "permanent", "name": "Постоянный заезд", "relative": "RU", "price": "2,5"},
      ],
      timespent: [
          {"id": "fast", "name": "3 рабочих дня", "relative": "RU", "price": "5"},
          {"id": "middle", "name": "10 рабочих дней", "relative": "RU", "price": "10,80"},
          {"id": "slow", "name": "15-30 рабочих дней", "relative": "RU", "price": "15,70"},
      ],
      cost: '€0.0',

    }
  },
  watch:{
    countrySelected: {
      handler(newValue){
        if(newValue == 'RU'){
          this.tryGo = [
            {"id": "single", "name": "Одиночный заезд", "relative": "RU", "price": "2"},
            {"id": "multi", "name": "Многоразовый заезд", "relative": "RU", "price": "5"},
            {"id": "permanent", "name": "Постоянный заезд", "relative": "RU", "price": "2,5"},
          ]

          this.timespent = [
            {"id": "fast", "name": "3 рабочих дня", "relative": "RU", "price": "5"},
            {"id": "middle", "name": "10 рабочих дней", "relative": "RU", "price": "10,80"},
            {"id": "slow", "name": "15-30 рабочих дней", "relative": "RU", "price": "15,70"},
          ]
        }else if(newValue == 'DE'){
          this.tryGo = [
            {"id": "single", "name": "Одиночный заезд", "relative": "DE", "price": "3,5"},
            {"id": "multi", "name": "Многоразовый заезд", "relative": "DE", "price": "4"},
            {"id": "permanent", "name": "Постоянный заезд", "relative": "DE", "price": "1"},
          ]

          this.timespent = [
            {"id": "fast", "name": "3 рабочих дня", "relative": "DE", "price": "7"},
            {"id": "middle", "name": "10 рабочих дней", "relative": "DE", "price": "15"},
            {"id": "slow", "name": "15-30 рабочих дней", "relative": "DE", "price": "25"},
          ]
        }else if(newValue == 'EE'){
          this.tryGo = [
            {"id": "single", "name": "Одиночный заезд", "relative": "EE", "price": "4"},
            {"id": "multi", "name": "Многоразовый заезд", "relative": "EE", "price": "3"},
            {"id": "permanent", "name": "Постоянный заезд", "relative": "EE", "price": "5"},
          ]

          this.timespent = [
            {"id": "fast", "name": "3 рабочих дня", "relative": "EE", "price": "9"},
            {"id": "middle", "name": "10 рабочих дней", "relative": "EE", "price": "20"},
            {"id": "slow", "name": "15-30 рабочих дней", "relative": "EE", "price": "35"},
          ]
        }
      },deep: true
    },

    tryAmountSelected(newValue, oldValue) {
      if(newValue){
        let tryPrice = this.tryGo.filter((elem) => {
          return elem.id == newValue
        })

        let timeSpendPrice = this.timespent.filter((elem) => {
          return elem.id == this.timeSpendSelected
        })
        this.cost = parseFloat(tryPrice[0].price) + parseFloat(timeSpendPrice[0].price)
      }
    },


    timeSpendSelected(newValue, oldValue) {
      if(newValue){
        let tryPrice = this.tryGo.filter((elem) => {
          return elem.id == this.tryAmountSelected
        })

        let timeSpendPrice = this.timespent.filter((elem) => {
          return elem.id == newValue
        })
        this.cost = parseFloat(tryPrice[0].price) + parseFloat(timeSpendPrice[0].price)
      }
    },

    
  },
  computed:{

  },
  methods:{
    goToNextPage(){
      this.$router.push({name: 'Form2'})
    }
  }
}
</script>

<style>

</style>