export default class {
    async post() { }
    getCache() { 
        return  JSON.parse( localStorage.getItem( 'CACHE_DEV' ) || '{}' )
    }
    setCache(object) { 
        let data = this.getCache()
        data = { ...data, ...object }
        localStorage.setItem( 'CACHE_DEV', JSON.stringify( data ) )
    }
    set_JWT(token) {
        localStorage.setItem('ACCESS_TOKEN', token)
    }
    get_JWT() {
        return localStorage.getItem('ACCESS_TOKEN')
    }
    clear_JWT() {
        localStorage.removeItem('ACCESS_TOKEN')
    }
    is_logged() {
        return this.get_JWT() !== null
    }
    logout() {
        this.clear_JWT()
    }
    async get_curruent_user() {
        return this.getCache().user
    }
    async login(username, password) {
        if (username == 'digital' && password == '123') {
            this.set_JWT('000001.TOdG9rZW5ERVZseXNBbGVydA==')
            this.setCache( {
                user: {
                    id: '00000000000000001',
                    email: 'josealmeita1987@gamail.com',
                    first_name: 'Jose',
                    last_name: 'Almeida',
                    username: 'digital',
                    credencial: 'user',
                }
            } )
            return {
                next: true,
                message: "Logado com sucesso"
            }
        } else { 
            return {
                next: false,
                message: "nome de usuário ou senha está errado"
            }
        }
    }
    async update(email, username, password) { 
        return {
            next: true,
            message: "Dados atualizados com sucesso"
        }
    }
}