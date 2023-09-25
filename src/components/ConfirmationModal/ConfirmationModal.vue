<template>
    <v-dialog v-model="dialog" max-width="400">
        <v-card>
            <v-card-title class="headline">Confirmation</v-card-title>
            <v-card-text>
                Are you sure you want to perform this action?
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="confirm">Confirm</v-btn>
                <v-btn color="grey" @click="cancel">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'ConfirmationModal',
    components: {
    },
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        open() {
            this.dialog = true;
        },
        confirm() {
            // Add your confirmation logic here
            // For example, emit an event or call a method to perform the action
            this.$emit('confirmed');
            this.dialog = false;
        },
        cancel() {
            this.dialog = false;
        },
    },
});
</script>
  