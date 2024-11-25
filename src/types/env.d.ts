/// <reference types="vite/client" />

declare namespace NodeJS {
    interface FirebaseConfig {
        readonly VITE_API_KEY: string;
        readonly VITE_APP_AUTH_DOMAIN: string;
        readonly VITE_DATABASE_URL:string;
        readonly VITE_PROJECT_ID:string;
        readonly VITE_STORAGE_BUCKET:string;
        readonly VITE_MESSAGING_SENDER_ID:string;
        readonly VITE_APP_ID:string
    }
}