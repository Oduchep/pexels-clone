import { defineStore } from "pinia"

export const useCountStore = defineStore({
    id: 'Counter',
    state: () => ({
        result: [],
        perPage: 18
    })
})