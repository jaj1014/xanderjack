<template>
  <main class="wrapper">
    <fieldset>
      <legend>Board Cost</legend>

      <div class="form-group">
        <label for="species">Type / Species</label>
        <input v-model="form.species" type="text" name="species" />
      </div>

      <div class="form-group">
        <label for="boardFtCost">Cost / Board Foot</label>
        <input v-model="form.boardFtCost" type="number" min="0" name="boardFtCost" />
      </div>

      <div class="form-group length-group">
        <div class="length-input">
          <label for="boardLength">Length</label>
          <input v-model="form.boardLength" type="number" min="0" name="boardLength" />
        </div>
        <div class="checkbox">
          <input v-model="form.lengthInFt" class="toggle-switch" type="checkbox" />
        </div>
      </div>

      <div class="form-group">
        <label for="boardWidth">Width</label>
        <input v-model="form.boardWidth" type="number" min="0" name="boardWidth" />
      </div>

      <div class="form-group">
        <label for="boardThickness">Thickness</label>
        <input v-model="form.boardThickness" type="number" min="0" name="boardThickness" />
      </div>

      <output>
        <span>{{ cost }}</span>
        <button @click="addSpeciesToShoppingList">Add to list</button>
      </output>
    </fieldset>

    <div class="list-container">
      <p v-if="shoppingList.length === 0" >No items on your list</p>
      <ul v-else>
        <li v-for="item in shoppingList" :key="item.timestamp">
          {{ item.species }} || {{ item.cost }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "board-foot-calculator",
  data () {
    return {
      form: {
        species: null,
        boardFtCost: null,
        boardLength: null,
        lengthInFt: true,
        boardWidth: null,
        boardThickness: null
      },
      shoppingList: []
    };
  },
  computed: {
    cost () {
      return (this.boardFootage * this.form.boardFtCost).toFixed(2)
    },
    actualLength () {
      return this.form.lengthInFt ? this.form.boardLength * 12 : this.form.boardLength
    },
    boardFootage () {
      return (this.form.boardWidth * this.actualLength * this.form.boardThickness) / 144
    }
  },
  beforeMount () {
    const promptData = window.prompt("Please enter a userid, acocuntid, language, validateGuide", "harry-potter,gryffindor,en-US,success")
    const [user, account, lang, validateGuide] = promptData.replace(' ', '').split(',')

    this.initPendo(user, account, lang, validateGuide)
  },
  methods: {
    addSpeciesToShoppingList () {
      this.shoppingList.push({
        cost: this.cost,
        species: this.form.species,
        timestamp: performance.now()
      })
      this.resetForm()
    },
    resetForm () {
      for (let key in this.form) {
        this.$set(this.form, key, null)
      }
    },
    initPendo (user, account, lang, validateGuide) {
      window.pendo.initialize({
        visitor: {
          id: user,
          user_language: lang
        },
        account: {
          id: account
        },
        events: {
          validateGuide: hashableGuideString => {
            // eslint-disable-next-line no-console
            console.log(hashableGuideString)
            return validateGuide === 'success'
          }
        }
      })
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrapper {
  background-color: snow;
  color: darkslategrey;
  display: inline-block;
  font-family: monospace;
  height: 100vh;
  width: 100vw;
}


fieldset,
.list-container {
  background-color: white;
  border-radius: 0.3rem;
  margin: 3rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 675px;
  min-width: 400px;
}

legend {
  font-size: 2rem;
}

.form-group {
  margin-top: 1rem;
}

label {
  font-size: 1.45rem;
  display: block;
  padding-bottom: 0.25rem;
}

input[type="text"]:focus,
input[type="number"]:focus {
  outline: 3px solid lightslategrey;
}

input[type="text"],
input[type="number"] {
  font-family: monospace;
  font-size: 2rem;
  padding: 0.75rem;
  width: 100%;
}

.length-group {
  display: flex;
  align-items: flex-end;
}

.length-input {
  flex-grow: 2;
}

.checkbox {
  flex-basis: auto;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  padding-bottom: 0.15rem;
  float: right;
}

input.toggle-switch:focus {
  outline: 3px solid lightslategray;
}

input.toggle-switch {
  position: relative;
  -webkit-appearance: none;
  outline: none;
  width: 100px;
  height: 60px;
  background-color: #fff;
  border: 2px solid darkslategrey;
  box-shadow: inset -40px 0 0 0 darkslategrey;
}

input.toggle-switch:after {
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  content: "in";
  font-family: monospace;
  position: absolute;
  top: 2px;
  left: 2px;
  background: transparent;
  width: 52px;
  height: 52px;
  border-radius: 50%;
}

input.toggle-switch:checked {
  box-shadow: inset 40px 0 0 0 darkslategrey;
  border-color: darkslategrey;
}

input.toggle-switch:checked:after {
  font-size: 1.75rem;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  content: "ft";
  left: 40px;
}

output {
  display: block;
  float: right;
  font-family: monospace;
  font-size: 2rem;
  margin-top: 2rem;
  margin-right: 2rem;
}
</style>
