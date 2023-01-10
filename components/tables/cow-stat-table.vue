<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    { 'id': 1, 'earTagColor': 'Red', 'location': 'Paddock A', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'earTagColor': 'Blue', 'location': 'Paddock B', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'earTagColor': 'Green', 'location': 'Paddock A', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'earTagColor': 'Red', 'location': 'Paddock C', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'earTagColor': 'Yellow', 'location': 'Paddock B', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'earTagColor',
                        label: 'Ear Tag Color',
                    },
                    {
                        field: 'location',
                        label: 'Location',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
        }
    }
</script>