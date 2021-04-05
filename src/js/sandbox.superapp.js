const cache = {
    name: 'CACHE_DEV',
    get: () => JSON.parse(localStorage.getItem(cache.name) || '{}'),
    set: object => localStorage.setItem(cache.name, JSON.stringify({ ...cache.get(), ...object }))
}

const auth = {
    login: async (username, password) => {
        if (username == 'josealmeita1987@gamail.com' && password == '123') {
            let playload = {
                id: '00000000000000001',
                email: 'josealmeita1987@gamail.com',
                first_name: 'Jose',
                last_name: 'Almeida',
                permissao: 'user,dash,board',
                gravatar: '//www.gravatar.com/avatar/465abef9f404fd8b9dacef4c1d549ac2'
            }
            auth.set(`000001.${btoa( JSON.stringify(playload) )}`)
            cache.set({
                corruente_user: playload
            })
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
    }, 
    logged: async () => auth.jwt() !== null,
    logout: async () => localStorage.removeItem('ACCESS_TOKEN'),
    set: async token =>  localStorage.setItem('ACCESS_TOKEN', token),
    jwt: () => localStorage.getItem('ACCESS_TOKEN'), 
    get: async () => cache.corruente_user[0] || {},
    put: async () => ({ next: true, message: null, playload: null })
}

const crud = {
    get: name => cache.get()[name] || [],
    post: (name, data) => {
        let storage = cache.get()
        data = { id: Date.now() , ...data }
        storage[name] = [...(storage[name] || []), data]
        cache.set(storage)
    },
    me: (name, id) => (cache.get()[name] || []).find(data => data.id == id),
    del: (name, id) => {
        let storage = cache.get()
        storage[name] = (storage[name] || []).filter(post => post.id != id)
        cache.set(storage)
    },
    put: (name, data) => {
        let storage = cache.get()
        storage[name] = (storage[name] || []).map(post => {
            if (post.id == dataid)
                post = { ...post, ...data }
            return post
        })
    }
}

const permissao = {
    get: async () => ({ playload: crud.get('permissao'), next: true, message: null }),
    post: async (name, previlegio) =>  ({ next: true, message: null, playload: crud.post( 'permissao', {name, previlegio} ) }),
    info: async id => ({next: true, message: null, playload: crud.me( 'permissao', id ) }),
    del: async id => ({ next: true, message: null, playload: crud.me( 'permissao', id ) })
}

const sass = {
    get: async () => ({ playload: crud.get('sass'), next: true, message: null }),
    post: async (nome,dominio_personalizado,sub_dominio,usar_dominio_personalizado,admin) =>  ({ next: true, message: null, playload: crud.post( 'sass', {nome,dominio_personalizado,sub_dominio,usar_dominio_personalizado,admin} ) }),
    info: async id => ({next: true, message: null, playload: crud.me( 'sass', id ) }),
    del: async id => ({ next: true, message: null, playload: crud.me( 'sass', id ) })
}

const admin = {
    get: async () => ({ playload: crud.get('admin'), next: true, message: null }),
    post: async (nome,email,senha,telefone,credencial) =>  ({ next: true, message: null, playload: crud.post( 'admin', {nome,email,senha,telefone,credencial} ) }),
    info: async id => ({next: true, message: null, playload: crud.me( 'admin', id ) }),
    del: async id => ({ next: true, message: null, playload: crud.me( 'admin', id ) })
}

export { sass, permissao, admin, auth }