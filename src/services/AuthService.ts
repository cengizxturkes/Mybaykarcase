import service from "./Base";

export const AuthService = {
    login: async (username: string, password: string) => {
        const response = await service.post("/login", {
            username,
            password,
        });
        return response.data;
    },
    getUser: async () => {
        const response = await service.get("/user");
        return response.data;
    }
}