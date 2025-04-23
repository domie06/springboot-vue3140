const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanershouwupinjiaoyi/",
            name: "xiaoyuanershouwupinjiaoyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanershouwupinjiaoyi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园二手物品交易平台"
        } 
    }
}
export default base
