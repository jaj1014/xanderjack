<template>
    <div class="typing-block">
        <span class="bold" :style="textColor">{{ text }}</span>
        <span class="cursor" :textColor="textColor">|</span>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    name: 'typing-text',
    data() {
        return {
            speed: 200,
            pos: 0,
            turn: 0,
            text: ''
        }
    },
    computed: {
        ...mapState({
            phrases: state => state.page.phrases
        }),
        ...mapGetters({
            subText: "theme/heroSubText"
        }),
        lastPhraseIndex () {
            return this.phrases.length - 1
        },
        textColor () {
            return {
                color: this.subText.color
            }
        }
    },
    mounted () {
        setTimeout(this.typeWriter, this.speed)
    },
    methods: {
        typeWriter () {
            if (this.pos < this.phrases[this.turn].length) {
                this.text += this.phrases[this.turn].charAt(this.pos)
                this.pos++
                setTimeout(this.typeWriter, this.speed)
            } else {
                setTimeout(this.erase, this.speed + 100)
            }
        },
        erase () {
            if (this.pos >= 0) {
                let str = this.phrases[this.turn].toString().substring(0, this.pos)
                this.text = str
                this.pos--
                setTimeout(this.erase, this.speed - 100)
            } else {
                this.turn++
                if(this.turn >= this.phrases.length) {
                    this.turn = 0
                }
                setTimeout(this.typeWriter, this.speed)
            }
        }
    }
}
</script>

<style lang="scss">
.typing-block {
    display: inline-block;

    .cursor {
        animation: blink 500ms infinite;
        opacity: 0;
    }
}

@keyframes blink {
    100% {
        opacity: 1;
    }
}
</style>

