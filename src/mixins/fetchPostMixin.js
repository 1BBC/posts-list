import axios from "axios";

export default {
    data() {
        return {
            isPostLoading: {
                type: Boolean,
                default: true
            },
            post: {},
            postId: this.$route.params.id,
        }
    },
    mounted() {
        this.fetchPost();
    },
    methods: {
        async fetchPost() {
            try {
                this.isPostLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.postId);
                this.post = response.data;
            } catch (e) {
                alert('Error');
            } finally {
                this.isPostLoading = false;
            }
        }
    },
}