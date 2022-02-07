
const baseURL= 'https://musicapp-1602304-1309518315.ap-shanghai.run.tcloudbase.com'

export const get = (url: string) =>{
    wx.showLoading({
        title:'加载中'
    })

    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseURL+url,
            method:'GET',
            success:(res)=>{
                resolve(res.data)
            },
            fail:reject,
            complete:()=>{
                wx.hideLoading()
            }
        })
    })
}