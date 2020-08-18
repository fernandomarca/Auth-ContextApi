interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'lalajdfoewjenwppmew98we13w6w8e',
                user: {
                    name: 'Fernando',
                    email: 'fernandomarca@hotmail.com'
                }
            })
        }, 2000);
    })
}