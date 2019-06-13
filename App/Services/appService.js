import { Helper } from '../Lib'

export const fetchFake = () => Helper.sleep(2000).then(() => 'success')
