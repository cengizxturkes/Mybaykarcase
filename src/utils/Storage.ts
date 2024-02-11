import AsyncStorage from "@react-native-async-storage/async-storage"

export class Storage {
    static async set(key: string, value: any) {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (error) {
            console.error(error)
        }
    }

    static async get(key: string) {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (error) {
            console.error(error)
        }
    }

    static async remove(key: string) {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            console.error(error)
        }
    }
}