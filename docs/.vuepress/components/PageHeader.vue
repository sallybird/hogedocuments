<template>
    <div class="page-header-details">
        <p>
            <strong>Updated:</strong> {{ created }}<br />
            <strong>Created:</strong> {{ updated }}<br />
            <strong>Last Updated By:</strong> {{ author }}<br />
            
        </p>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
        // Full list of API: //vuepress.github.io/en/plugins/git-log/#api
        author() { return this.$page.git.author; },
        commits() { return this.$page.git.commits; },
        contributors() { return this.$page.git.contributors; },
        created() { return this.$page.git.created; },
        updated() { return this.$page.git.updated; }
}
</script>
