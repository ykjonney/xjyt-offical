import axios from 'axios'

const url='https://www.ipcn.xyz/api/v1';

/*
val={
    method:'get',

}
*/
function ajax(val){

    // 如果请求需要携带token，在这里写

    return axios({
        method:val.method || 'get',
        data:val.method=='post'?val.data:{params:val.data},
        url
    }).then(function(res){
        console.log(res);
        
    }).catch(err){
        console.log(err)
    }
}
function getCompany(){
	
}