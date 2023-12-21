interface ILocalStorage{
    user:   string,
    accessToken: string,
    cart: string,
}

export const LocalStorage:ILocalStorage = {
    user: 'user',
    accessToken: 'accessToken',
    cart: 'cart'
  }
  export default LocalStorage
  