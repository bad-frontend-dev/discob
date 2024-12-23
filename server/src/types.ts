declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_INTERNAL_PORT: number;
            CLIENT_EXTERNAL_PORT: number;
            SERVER_INTERNAL_PORT: number;
            MONGO_INITDB_ROOT_USERNAME: string;
            MONGO_INITDB_ROOT_PASSWORD: string;
        }
    }
}

export {};
