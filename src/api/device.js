import request from '@/utils/request'

export function getdeviceInfo(token) {
    return request({
        url: 'api/tenant/devices',
        method: 'get'
    })
}
