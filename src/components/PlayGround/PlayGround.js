export default {
    name: 'PlayGround',
    data() {
      return {
        backgroungClassName: "red-background",
        counter: 0,
        message: 'static message',
        anchorTag: '<a href="https://google.ca">{{ message }}</a>',
        nameInput: 'No named',
      };
    },
    computed: {
      reversedMessage() {
        return this.message.split('').reverse('').join('');
      }
    },
    watch: {
      nameInput(oldValue,newValue) {
        /* eslint-disable no-console */
        console.log('old value: ', oldValue);
        console.log('new value: ', newValue);
      }
    },
    methods: {
      handleClick(value) {
        this.counter++;

        //string interpolation
        this.message = `you are clicking this ${this.counter} times!`

        //ternary operator
        this.backgroungClassName = this.counter % 2 ? 'green-background' : 'red-background';

        this.message = this.nameInput;

        // this.counter++;
        // /* eslint-disable */
        // console.log("value", value);
        // if (this.counter % 2 === 0) {
        //   this.backgroundClassName = 'green-background';
        // } else {
        //   this.backgroundClassName = 'red-background';
        // }
      }
    }
  };