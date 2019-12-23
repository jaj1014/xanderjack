<template>
  <main class="wrapper">
    <fieldset @keyup.enter="addSpeciesToShoppingList">
      <legend>Board Cost</legend>

      <div class="form-group">
        <label for="species">Type / Species</label>
        <input v-model="form.species" :ref="speciesInput" type="text" name="species" />
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
        <button @click="addSpeciesToShoppingList" :disabled="missingRequired">Add to list</button>
      </output>
    </fieldset>

    <div class="list-container">
      <p v-if="shoppingList.length === 0" >No items on your list</p>
      <ul v-else>
        <li v-for="(item, index) in shoppingList" :key="item.timestamp">
          <span>{{ getListItemText(index) }}</span>
          <span>
            <span>{{ item.cost }}</span>
            <trash-icon size="1.5x" @click="removeItem(index)"></trash-icon>
          </span>
        </li>
        <li>
          <strong>TOTAL:</strong>
          <span>
            <span>{{ shoppingListTotal }}</span>
            <x-square-icon size="1.5x" @click="clearShoppingList"></x-square-icon>
          </span>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { TrashIcon, XSquareIcon } from "vue-feather-icons";

export default {
  name: "board-foot-calculator",
  components: { TrashIcon, XSquareIcon },
  data () {
    return {
      speciesInput: 'speciesInput',
      form: {
        species: null,
        boardFtCost: null,
        boardLength: null,
        lengthInFt: true,
        boardWidth: null,
        boardThickness: null
      }
    };
  },
  computed: {
    ...mapState(({
      shoppingList: state => state.boardFootCalculator.shoppingList
    })),
    ...mapGetters('boardFootCalculator', [
      'shoppingListTotal'
    ]),
    cost () {
      return (this.boardFootage * this.form.boardFtCost).toFixed(2)
    },
    actualLength () {
      return this.form.lengthInFt ? this.form.boardLength * 12 : this.form.boardLength
    },
    boardFootage () {
      return (this.form.boardWidth * this.actualLength * this.form.boardThickness) / 144
    },
    missingRequired () {
      return !(this.cost > 0 && this.form.species)
    }
  },
  beforeMount () {
    const promptData = window.prompt("Please enter a userid, acocuntid, language, validateGuide", "harry-potter,gryffindor,en-US,success")
    const [user, account, lang, validateGuide] = promptData.replace(' ', '').split(',')

    this.initPendo(user, account, lang, validateGuide)
  },
  mounted () {
    this.focusSpeciesInput();
  },
  methods: {
    ...mapActions('boardFootCalculator', [ 'addItem', 'removeItem', 'clearShoppingList' ]),
    focusSpeciesInput () {
      this.$refs[this.speciesInput].focus();
    },
    addSpeciesToShoppingList () {
      if (this.missingRequired) return

      this.addItem({
        cost: this.cost,
        species: this.form.species,
        timestamp: performance.now()
      })
      this.resetForm()
    },
    resetForm () {
      for (let key in this.form) {
        if (key !== 'lengthInFt') {
          this.$set(this.form, key, null)
        }
      }

      this.focusSpeciesInput();
    },
    getListItemText (index) {
      const item = this.shoppingList[index]
      const itemListNumber = index < 9 ? `0${index + 1}` : `${index + 1}`

      return `${itemListNumber} ${item.species}`
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
}
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
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
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

input[type="number"] {
  text-align: right;
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
  font-family: monospace;
  font-size: 2rem;
  margin-top: 2rem;
  margin-right: 2rem;
  width: 100%;
}

output > span {
  display: block;
  text-align: right;
  width: 100%;
}

output > button {
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 4px 4px black;
  display: block;
  margin-top: 1.5rem;
  margin-bottom: -1.75rem;
  padding: 8px 16px;
  width: 100%;
}

output > button:hover {
  outline: purple;
  box-shadow: 3px 3px black;
}

output > button:focus {
  outline: whitesmoke;
  box-shadow: 3px 3px black;
}

output > button:active {
  box-shadow: none;
}

output > button:disabled {
  background-color: whitesmoke;
}

.list-container > ul {
  list-style: none;
}

.list-container li,
.list-container p {
  border: 2px dashed gainsboro;
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 1rem;
  font-size: 1.5rem;
}

.list-container li span:last-of-type {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.list-container li span span {
  padding: 0 1rem;
}

.list-container li:last-of-type {
  border: none;
  border-top: 3px solid black;
  margin-top: 1.5rem;
  margin-bottom: 0;
}

</style>
