<template>
  <div>
    <div>
    <label>주민등록번호</label>
    <input
        type="text"
        placeholder="‘-‘없이 주민등록번호를 입력해주세요."
        v-model="tfIdNumber.all"
        @input="changeIdNumber"
        @keyup="checkEvent"
      />
    </div>
    <div>
      {{this.user.idNumber}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Masking',
  data() {
    return {
      tfIdNumber: {
        all: "",
        num1: "",
        num2: ""
      },
      user: {
        idNumber: ""
      },
      array: []
    };
  },
  methods: {
    checkEvent(event) {
      if (event.key === "Backspace" || event.key === "Delete") {
        console.log(event.key);
      }
    },
    changeIdNumber(event) {
      let target = event.target.value;

      if (target.length < 2 && this.array.length >= 7) {
        this.array = [];
      }

      this.tfIdNumber.num1 = target.substr(0, 6);

      target = target
        .replace(/[^0-9]$/g, "")
        .replace(/^(\d{6})(\d{1,7})$/g, "$1-$2")
        .substr(0, 14);

      const object = target.split("");
      for (const property in object) {
        if (property > 6 && object[property] !== "*") {
          this.array.push(object[property]);
          object[property] = "*";
        }
      }
      console.log(this.array);
      this.tfIdNumber.all = object.join("");
      this.tfIdNumber.num2 = this.array.join("");
      this.user.idNumber = this.tfIdNumber.num1 + this.tfIdNumber.num2;
      console.log("this.user.idNumber", this.user.idNumber);
    },
    resetInput() {
      this.tfIdNumber.all = "";
      this.user.idNumber = "";
    },
  }
}
</script>
