<template>
    <span class="bold" :style="typingTextStyle">{{ text }}</span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'typing-text',
    data() {
        return {
            text: ''
        }
    },
    props: {
        phrases: Array
    },
    computed: {
        ...mapGetters({
            subText: "theme/heroSubText"
        }),
        typingTextStyle () {
            return {
                color: this.subText.color
            }
        }
    }
}
</script>
