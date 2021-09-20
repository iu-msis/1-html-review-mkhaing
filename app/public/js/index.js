const Users = {
    data() {
        return {
        "person":{},   
        "results": {
           "name":'kkkk',
            "email":'kkkk@yahoo.com',
            "country":'Canada',
            "birthdate":'May 6',
            "age":'39',
            "userImg":'',
            "userImgThumbnail":''
        },
    }
},


    computed:{
        birthdate(){
            return dayjs(this.person.dob.date).format('D MMM YYYY')
        }
    },

/*formatting date exercise from class
    methods:{
        fetchUserData(){

        }
    },
*/

    created() {
        //Method 1:
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((parsedJson) => {
            console.log(parsedJson);
            this.person = parsedJson.results[0]

        })
        .catch(err=>{
            console.error(err)
        })

        /*
            .then(response => response.json())
        Is the same as
            .then(function(response) {return response.json()})
        */


        //Method 2:
        // const response = await fetch("https://randomuser.me/api/");
        // const responseJson = await response.json();

        // console.log("Two:", responseJson);
        // this.message = responseJson.results[0].name;
        // this.result = responseJson.results[0];
        
    }

}
Vue.createApp(Users).mount('#userApp')