// src/types/next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
    interface User {
        id: string;
        email: string;
        name: string;
        avatar?: string; // Định nghĩa avatar
        picture?: string; // Định nghĩa picture cho Google Provider
    }

    interface Session {
        user: {
            id: string;
            name: string;
            email: string | null;
            avatar?: string;
        };
    }

    interface Profile {
        id: string;
        name: string;
        email: string;
        picture?: string; // Thêm picture cho GoogleProvider
    }
}
